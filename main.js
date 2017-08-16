// CREATE FOODITEM "CLASS"
function FoodItem(name,calories,vegan,glutenFree) {
    this.name = name
    this.calories = calories
    this.vegan = vegan
    this.glutenFree = glutenFree
}

// CREATE FOODITEM STRINGIFY METHOD
FoodItem.prototype.stringify = function(){
    if (this.vegan === true && this.glutenFree === true) {
    return `${this.name} has ${this.calories} calories, is vegan, and is gluten free`
    }
    else if (this.vegan === false && this.glutenFree === true) {
    return `${this.name} has ${this.calories} calories, is not vegan, and is gluten free`
    }
    else if (this.vegan === true && this.glutenFree === false) {
    return `${this.name} has ${this.calories} calories, is vegan, and is not gluten free`
    }
    else if (this.vegan === false && this.glutenFree === false) {
    return `${this.name} has ${this.calories} calories, is not vegan, and is not gluten free`
    }
}

// CREATE FOODITEM VARS
// args = name,calories,vegan,glutenFree
// burger plate
// console.log(`=-=-=-=-=-=-=-=-=-=-=-=-`)
// console.log(`burger plate items start`)
// console.log(`=-=-=-=-=-=-=-=-=-=-=-=-`)
var bun = new FoodItem('hamburger bun', 120, true, false).stringify()
// console.log(bun)
var bacon = new FoodItem('bacon', 88, false, true).stringify()
// console.log(bacon)
var ketchup = new FoodItem('kethcup', 20, true, true).stringify()
// console.log(ketchup)
var mustard = new FoodItem('mustard', 5, true, true).stringify()
// console.log(mustard)
var cheese = new FoodItem('cheese', 90, false, true).stringify()
// console.log(cheese)
var patty = new FoodItem('burger patty', 200, false, true).stringify()
// console.log(patty)
var lettuce = new FoodItem('lettuce', 10, true, true).stringify()
// console.log(lettuce)
var tomato = new FoodItem('tomato slice', 4, true, true).stringify()
// console.log(tomato)
var onion = new FoodItem('onion', 6, true, true).stringify()
// console.log(onion)
// console.log(`=-=-=-=-=-=-=-=-=-=-=-`)
// console.log(`burger plate items end`)
// console.log(`=-=-=-=-=-=-=-=-=-=-=-`)

// args = name,calories,vegan,glutenFree
// salad plate
// console.log(`=-=-=-=-=-=-=-=-=-=-=-=`)
// console.log(`salad plate items start`)
// console.log(`=-=-=-=-=-=-=-=-=-=-=-=`)
var lettuce = new FoodItem('lettuce', 10, true, true).stringify()
// console.log(lettuce)
var tomato = new FoodItem('tomato slice', 4, true, true).stringify()
// console.log(tomato)
var broccoli = new FoodItem('broccoli', 15, true, true).stringify()
// console.log(broccoli)
var onion = new FoodItem('onion', 6, true, true).stringify()
// console.log(onion)
var carrots = new FoodItem('carrots', 20, true, true).stringify()
// console.log(carrots)
var cauliflower = new FoodItem('cauliflower', 15, true, true).stringify()
// console.log(cauliflower)
var croutons = new FoodItem('croutons', 50, true, false).stringify()
// console.log(croutons)
var dressing = new FoodItem('ranch salad dressing', 75, false, true).stringify()
// console.log(dressing)
// console.log(`=-=-=-=-=-=-=-=-=-=-=`)
// console.log(`salad plate items end`)
// console.log(`=-=-=-=-=-=-=-=-=-=-=`)

// CREATE PLATE "CLASS"
function Plate(name,description,price,ingredients) {
    this.name = name
    this.description = description
    this.price = price
    this.ingredients = ingredients
}

// ADD PLATE STRINGIFY CODE HERE BEFORE VARIABLES WHICH GET .STRINGIFY ADDED AFTER EACH!
Plate.prototype.stringify = function(){
    return `Our ${this.name}, a ${this.description}, costs ${this.price}, and contains: ${this.ingredients}`
}

// ADD PLATE VARS
// console.log(`=-=-=-=-=-=-`)
// console.log(`Plates start`)
// console.log(`=-=-=-=-=-=-`)
var basicBurger = new Plate('Basic Burger Plate', 'mouth-watering burger', '$9.22', [patty, bun, ketchup, mustard, lettuce, tomato, onion]).stringify()
// console.log(basicBurger)
// console.log(`=-=-=-=-=-=-`)
var deluxeBurger = new Plate('Deluxe Bacon Cheese Burger Plate', 'decadent bacon cheeseburger', '$12.22', [patty, bun, bacon, cheese, ketchup, mustard, lettuce, tomato, onion]).stringify()
// console.log(deluxeBurger)
// console.log(`=-=-=-=-=-=-`)
var basicSalad = new Plate('Basic Salad Plate', 'healthy, fresh salad', '$6.99', [lettuce, tomato, onion, carrots, dressing]).stringify()
// console.log(basicSalad)
// console.log(`=-=-=-=-=-=-`)
var deluxeSalad = new Plate('Deluxe Salad Plate', 'salad bursting with veggies', '$8.99', [lettuce, tomato, broccoli, onion, carrots, cauliflower, croutons, dressing]).stringify()
// console.log(deluxeSalad)
// console.log(`=-=-=-=-=-`)
// console.log(`Plates end`)
// console.log(`=-=-=-=-=-`)

// CREATE MENU "CLASS"
function Menu(name,plates) {
  this.name = name;
  this.plates = plates;  // HOW?
}

// ADD MENU STRINGIFY CODE HERE BEFORE VARIABLES WHICH GET .STRINGIFY ADDED AFTER EACH!
Menu.prototype.stringify = function(){
    return `Our ${this.name} menu combines our ${this.plates}`
}

// ADD MENU VARS
// console.log(`=-=-=-=-=-=`)
// console.log(`Menus start`)
// console.log(`=-=-=-=-=-=`)
var basicMenu = new Menu('Basic Menu', [basicBurger, basicSalad]).stringify()
// console.log(basicMenu)
// console.log(`=-=-=-=-=-=`)
var deluxeMenu = new Menu('Deluxe Menu', [deluxeBurger, deluxeSalad]).stringify()
// console.log(deluxeMenu)
// console.log(basicMenu)
// console.log(`=-=-=-=-=`)
// console.log(`Menus end`)
// console.log(`=-=-=-=-=`)

// CREATE RESTAURANT "CLASS"
function Restaurant(name,description,menu) {
  this.name = name;
  this.description = description;
  this.menu = menu;
}

// ADD RESTAURANT STRINGIFY CODE HERE BEFORE VARIABLES WHICH GET .STRINGIFY ADDED AFTER EACH!
Restaurant.prototype.stringify = function(){
    return `Welcome to ${this.name}, specializing in ${this.description}, proudly serving ${this.menu}`
}

// ADD RESTAURANT VAR & CALL RESTAURANT FUNCTION TO DISPLAY EVERYTHING!
console.log(`=-=-=-=-=-=-=-=-`)
console.log(`Restaurant start`)
console.log(`=-=-=-=-=-=-=-=-`)
var restaurant = new Restaurant(`Pablo's Cocina`, `hep, hepper, heppest eats`, [basicMenu, deluxeMenu]).stringify()
console.log(restaurant)
// console.log(basicMenu)
console.log(`=-=-=-=-=-=-=-`)
console.log(`Restaurant end`)
console.log(`=-=-=-=-=-=-=-`)
