// // // class NewCalculator {
// // //     constructor() {
// // //       this.add = function(term1, term2) {
// // //         return term1 + term2;
// // //       };
// // //       this.sub = function(term1, term2) {
// // //         return term1 - term2;
// // //       };
// // //     }
// // //   }
  
// // //   class CalcAdapter {
// // //     constructor() {
// // //       const newCalc = new NewCalculator();
// // //       this.operations = function(term1, term2, operation) {
// // //         switch (operation) {
// // //           case 'add':
// // //             return newCalc.add(term1, term2);
// // //           case 'sub':
// // //             return newCalc.sub(term1, term2);
// // //           default:
// // //             return NaN;
// // //         }
// // //       };
// // //     }
// // //   }
// // //   const newCalc = new NewCalculator();
// // //   console.log(newCalc.add(10, 5)); 
  
// // //   const adaptedCalc = new CalcAdapter();
// // //   console.log(adaptedCalc.operations(10, 5, 'add')); 



// // // const person = {
// // //     first: 'Shruthi',
// // //     last: 'Nallam',
// // //   }
  
// // //   const cPerson = new Proxy(person, {
// // //     get: function (target, prop) {
// // //       if (!(prop in target)) {
// // //         return prop.split('_').map(function (name) {
// // //           return target[name]
// // //         }).join(' ')
// // //       }
// // //       return target[prop]
// // //     }
// // //   })
  
// // //   console.log(cPerson.last_first)
  
// // //   cPerson.last = 'Sunny'
// // //   console.log(cPerson.first_last)





var module = (function() {

  var _private = {
      rate:5,
      get : function() {
          console.log( "current value:" + this.rate);
      },
      set : function( val ) {
          this.rate = val;
      },
      run : function() {
          console.log( "running" );
      },
      jump: function(){
          console.log( "jumping" );
      }
  };

  return {

      facade : function( args ) {
          _private.set(args.val);
          _private.get();
          if ( args.run ) {
              _private.run();
          }
      }
  };
}());
module.facade( {run: true, val:10} );