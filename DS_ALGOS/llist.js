class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value : value,
            next : null,
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value : value,
            next : null,
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printInOrder(){
        let array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    insert(index,value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value : value,
            next : null
        };
        const leader = this.traverseToIndex(index-1);
        const holderPoint = leader.next;
        leader.next = newNode;
        newNode.next = holderPoint;
        this.length++;
        return this.printInOrder();
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    delete(index){
        const leader = this.traverseToIndex(index-1);
        const holderPoint = leader.next;
        leader.next = holderPoint.next;
        length--;
        return this.printInOrder();
    }
 }

const llist = new LinkedList(10);
llist.append(5);
llist.append(16);
llist.prepend(1);
 llist.insert(2,18);
 llist.delete(2);
//console.log(llist.printInOrder());
console.log(llist);
