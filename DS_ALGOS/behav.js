// var iterator = (function() {

// 	var index = 0,
// 		data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// 		length = data.length;

// 	return {
// 		next: function() {
// 			var element;
// 			if (!this.hasNext()) {
// 				return null;
// 			}
// 			element = data[index];
// 			index += 3;
// 			return element;
// 		},
// 		hasNext: function() {
// 			return index < length;
// 		},
// 		rewind: function() {
// 			index = 0;
// 			return data[index];
// 		},
// 		current: function() {
// 			return data[index];
//         }
// }

// }());

// while(iterator.hasNext()) {
// 	console.log(iterator.next());
// }

// iterator.rewind();
// console.log(iterator.current());


// var Greeter = function(strategy) {
//     this.strategy = strategy;  
//   };
   
//   Greeter.prototype.greet = function() {
//     return this.strategy();
//   };
//   var politeGreetingStrategy = function() {
//    console.log("Hello."); 
//   };
   
//   var friendlyGreetingStrategy = function() {
//     console.log("Hey!");
//   };
   
//   var boredGreetingStrategy = function() {
//     console.log("sup.");
//   };
   
 
//   var politeGreeter   = new Greeter(politeGreetingStrategy);
//   var friendlyGreeter = new Greeter(friendlyGreetingStrategy);
//   var boredGreeter    = new Greeter(boredGreetingStrategy);

// politeGreeter.greet();  
// friendlyGreeter.greet(); 
// boredGreeter.greet(); 


class Employee {
    constructor(name, salary) {
      this._name = name;
      this._salary = salary;
    }
  
    work() {
      return `${this._name} handles ${this.responsibilities()}`;
    }
  
    getPaid() {
      return `${this._name} got paid ${this._salary}`;
    }
  }
  class Developer extends Employee {
    constructor(name, salary) {
      super(name, salary);
    }
  
    responsibilities() {
      return 'application development';
    }
  }
  
  class Tester extends Employee {
    constructor(name, salary) {
      super(name, salary);
    }
  
    responsibilities() {
      return 'testing';
    }
}

const dev = new Developer('Nathan', 100000);
console.log(dev.getPaid());
console.log(dev.work()); 
const tester = new Tester('Brian', 90000);
console.log(tester.getPaid()); 
console.log(tester.work()); 