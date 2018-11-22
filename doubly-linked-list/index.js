function DoublyLinkedList(items = []) {
    this._keys = [];
    this._next = [];
    this._prev = [];
    this._head = 0;
    this._tail = 0;

    for (let index = 0; index < items.length; index++) {
        this._keys[index] = items[index];

        if (index === 0) {
            this._prev[index] = null;
        } else {
            this._prev[index] = index - 1;
        }

        if (index === items.length - 1) {
            this._tail = index;
            this._next[index] = null;
        } else {
            this._next[index] = index + 1;
        }
    }
}

DoublyLinkedList.prototype.search = function(query){

};

DoublyLinkedList.prototype.insertAt = function (value, atIndex) {
    
};

DoublyLinkedList.prototype.insertAtStart = function (value) {
    this.insertAt(value, this._head);
};

DoublyLinkedList.prototype.insertAtEnd = function (value) {
    this.insertAt(value, this._tail);
};


DoublyLinkedList.prototype.remove = function (atIndex) {

};

DoublyLinkedList.prototype.print = function () {
    console.log(`Key : [${this._keys.join(', ')}]`);
    console.log(`Next : [${this._next.join(', ')}]`);
    console.log(`Prev : [${this._prev.join(', ')}]`);
};

const list = new DoublyLinkedList();
list.print();
