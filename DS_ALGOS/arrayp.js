// // class myArray {
// //     constructor (){
// //         this.length = 0;
// //         this.data = {};
// //     }

// //     get(index)
// // {
// //     return this.data[index];

// // }

// // push(item){
// //     this.data[this.length] = item;
// //     this.length++;
// //     return this.length;
// // }
// // pop(){
// //     const del = delete this.data[this.length - 1];
// //     this.length--;
// //     return del;
// // }
// // delete(index){
// //     return this.data[index];
// //     this.shiftIndex(index);
// // }
    
// //     shiftIndex(index){
// //         for(let i = index; i < this.length - 1; i++){
// //             this.data[i] = this.data[i+1];
// //         }
// //             delete this.data[this.length-1];
// //             this.length--;
// //         }
   
// // }
// // const array = new myArray();
// // array.push("shruthi");
// // array.push("janu");
// // array.push("Ravi");
// // array.push("fgfhh");
// // array.shiftIndex(0);
// // console.log(array);

// class node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class stack{
//     constructor(){
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     peek(){
//         return this.top;
//     }
//     push(value){
//         const newNode = new node(value);
//         if(this.length === 0){
//             this.top = newNode;
//             this.bottom = newNode;
//         }
//         else {
//             const holderpoint = this.top;
//             this.top = newNode;
//             this.top.next = holderpoint;
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(!this.top){
//             return null;
//         }
//         const holderpoint = this.top;
//         this.top = this.top.next;
//         this.length--;
//         return holderpoint;
//     }
// }

// const stk = new stack();
// stk.push("shruthi");
// stk.push("janu");
// stk.push("ravi");
// stk.push("sunny");
// stk.pop("sunny");
// console.log(stk);

class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new node(value);
        if(this.length === 0){
           this.first = newNode;
           this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        length--;
        return this;
    }
}

const queue = new Queue();
queue.enqueue("shruthi");
queue.enqueue("janu");
queue.enqueue("ravi");
queue.enqueue("abhi");
queue.enqueue("sk");
queue.dequeue();
queue.dequeue();
console.log(queue);



