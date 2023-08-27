const menu = {
    _meal: '',
    _price: 0,
  
    set mealToCheck(meal) {
      if (typeof meal === 'string'){
        this._meal = meal;
      } else {
        console.log("Invalid input for meal");
      }
    },
  
    set priceToCheck(price) {
      if (typeof price === 'number'){
        this._price = price;
      } else {
        console.log("Invalid input for meal");
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for $${this._price}!`
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  }
  
  menu.mealToCheck = "pizza";
  //console.log(menu._meal);
  
  menu.priceToCheck = 30;
  //console.log(menu._price);
  
  console.log(menu.todaysSpecial)