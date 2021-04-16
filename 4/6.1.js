// 6.1
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  };

var worker = new Person('Иван', 'Иванов')
console.log(worker.name, worker.surname)