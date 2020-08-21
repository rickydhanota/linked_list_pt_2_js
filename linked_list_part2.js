//Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    newNode(value){
        var addNode = new Node(value);
        if (this.head){
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = addNode;
        }
        else{
            this.head = addNode;
        }
        return this
    }

    print(){
        if(this.head){
            var runner = this.head;
            while (runner != null){
                console.log(runner.value);
                runner = runner.next;
            }
        }
        return this
    }

    reverseSequence(value){

    }

}