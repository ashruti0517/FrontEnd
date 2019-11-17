
// Creational Design Patterns...


// constructor Pattern

class smodel {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.getDetails = function(){
            return `My name is ${this.name} and i am ${this.age} years old.`;
        };
    }
}
const model = new smodel("shruthi",24);
const model1 = new smodel("sravani",25);
const model2 = new smodel("saisri",26);
console.log(model.getDetails());
console.log(model1.getDetails());
console.log(model2.getDetails());


//Factory pattern


class style {
    constructor(name){
        this.name = name;
        this.type = "Model";
    }
}

    class actress {
        constructor(name){
            this.name = name;
            this.type = "Actress";
        }
    }

    class person {
        constructor(){
            this.create = function(name, type){
              switch(type){
                  case 1 : 
                  return new style(name);
                  break;
                  case 2:
                      return new actress(name);
                      break;
              }
        }
    }
}
function role(){
    console.log("My name is " + this.name + " and i am a " + this.type);
}
    const Person = new person();
    const people = [];

    people.push(Person.create("shruthi", 1));
    people.push(Person.create("sravani", 2));

    people.forEach( peo => {
        role.call(peo)
    });


//Singleton pattern

class friends {
    constructor(name){
        if(friends.exist){
            return friends.instance;
        }
        this.name = name;
        friends.instance = this;
        friends.exists = true;
        return this;
    }
    getName(){
        return this.name;
    }
    setName(){
        this.name = name;
    }
}
const fname = new friends("shruthi");
console.log(fname.getName());


//Prototype pattern

const girl = {
    name : "shruthi",
    age : 24,
    act()
    {
        return "actress";
    },
    dance()
    {
        return "dancer";
    },
    sing()
    {
        return "singer";
    },
};

const Women = Object.create( girl );
console.log(Women.name);
console.log(Women.age);
console.log(Women.act());
console.log(Women.dance());
console.log(Women.sing());





