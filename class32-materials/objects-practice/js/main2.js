// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(userName, userRole){
  this._userName = userName
  this._userRole = userRole
  }
  get userName(){
    return this._userName
  }
  get userRole(){
    return this._userRole
  }
  sayHi(){
    console.log(`Hi, I am on the ${this.userRole} team at #100Devs!`)
  }
}

class Front extends Contractor {
  constructor(userName, userRole, techRole) {
    super(userName, userRole)
    this._techRole = techRole
  }
  get techRole(){
    return this._techRole
  }
  sayHi(){
    console.log(`Hi, I am on the ${this._userRole} team at #100Devs! and I use ${this._techRole}`)
  }
}
  
class Back extends Contractor {
  constructor(userName, userRole){
    super(userName,userRole)
    this._techRole
  }
  get techRole(){
    return this._techRole
  }
  sayHi(){
    console.log(`Hi, I am on the ${this._userRole} team at #100Devs! and I use ${this._techRole}`)
  }
}

let JonB = newContractor('JonB', 'Front-end')
let BeckySue = newFrontEnd('BeckySue', 'Front-end', 'React')
let MikeIke = newBackEnd('MikeIke', 'Back-end', 'Node')

let newAgency = [JonB, BeckySue, MikeIke]

for (person of agency) {
    person.sayHello()
 }



// class Contractor {
//   constructor(name, role) {
//     this._name = name
//     this._role = role
//   }
//   get name() {
//     return this._name
//   }
//   get role() {
//     return this._role
//   }
//   sayHello() {
//     console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//   }
// }
// class Front extends Contractor {
//   constructor(name, role, tech) {
//     super(name, role)
//     this._tech = tech
//   }
//   get tech() {
//     return this._tech
//   }
//   sayHello() {
//     console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//   }
// }
// class Back extends Contractor {
//   constructor(name, role, tech) {
//     super(name, role)
//     this._tech = tech
//   }
//   get tech() {
//     return this._tech
//   }
//   sayHello() {
//     console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//   }
// }
// let bob = new Contractor('Bob', 'Front-end')
// let simba = new Front('Simba', 'Front-end', 'React')
// let machi = new Back('The Machine', 'Back-end', 'Node')

// let agency = [bob, simba, machi]

// for (person of agency) {
//   person.sayHello()
// }
