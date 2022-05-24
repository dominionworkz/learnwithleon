//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies =["fight", "win", "worldwide"]
for(let i = 0; i < movies.length;i++){
  document.querySelector("h2").innerText += movies[i]
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30]

num[0] = nums[0] + 3
nums[1] = nums[1] + 3
nums[2] = nums[2] + 3


nums.forEach((item, i) => {
    nums[i] = item + 3
})


//Find the average of all the numbers from question two
let sum = 0

for(let i = 0; i < nums.length; i++){
  sum = sum + nums[i]
}
console.log(sum / num)


nums.forEach((num) => sum += num)

