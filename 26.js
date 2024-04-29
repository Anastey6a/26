// Клас Людина
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

// Клас Автомобіль
class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = null;
  }

  assignOwner(person) {
    if (person.age >= 18) {
      this.owner = person;
    } else {
      console.log("Власнику автомобіля має бути не менше 18 років.");
    }
  }

  displayInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік випуску: ${this.year}, Номерний знак: ${this.licensePlate}`);
    if (this.owner) {
      console.log("Інформація про власника:");
      this.owner.displayInfo();
    } else {
      console.log("Власник не присвоєний.");
    }
  }
}


const person1 = new Person("Іван", 25);
const person2 = new Person("Марія", 16);

const car1 = new Car("Toyota", "Camry", 2018, "AA1234BB");
const car2 = new Car("Honda", "Civic", 2020, "CC5678DD");

car1.assignOwner(person1);
car2.assignOwner(person2); 
car1.displayInfo();
console.log("---");
car2.displayInfo();
