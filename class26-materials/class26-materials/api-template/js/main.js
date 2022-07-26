//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+choice
  //fetch The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(meals => {
        console.log(meals);
        console.log(meals.meals[0]);
        document.querySelector("h2").textContent = meals.meals[0].strMeal;
        document.querySelector('img').src = meals.meals[0].strMealThumb;
        let stepsArray = meals.meals[0].strInstructions.split('.');
        const parentNode = document.querySelector('ul') 
        for (const element of stepsArray) {
        if (element){
          let node = document.createElement('li');
          parentNode.append(node);
          node.textContent = element
        }  
        
        }
      })
      .catch(err => console.log(`error ${err}`))
}

