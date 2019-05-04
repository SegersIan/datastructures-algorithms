const R = require('ramda');

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

DoublyLinkedList.prototype.search = function (query) {

};

DoublyLinkedList.prototype.insertAtStart = function (value) {
    const atIndex = this._head;
    this._keys.push(value);
    this._next.push(this._head);
    this._prev.push(this._prev[atIndex]); // Should be null

    const pointerToNewValue = this._keys.length - 1;

    this._head = pointerToNewValue;
    this._prev[atIndex] = pointerToNewValue;
};

DoublyLinkedList.prototype.insertAtEnd = function (value) {
    const atIndex = this._tail;
    this._keys.push(value);
    this._prev.push(this._tail);
    this._next.push(this._next[atIndex]); // Should be null

    const pointerToNewValue = this._keys.length - 1;

    this._tail = pointerToNewValue;
    this._next[atIndex] = pointerToNewValue;
};


DoublyLinkedList.prototype.remove = function (atIndex) {

};

DoublyLinkedList.prototype.print = function () {
    const mapper = R.pipe(
        x => x === null ? '/' : `${x}`,
        x => x.padStart(8, ' ')
    );
    console.log(`Head : ${this._head}`);
    console.log(`Tail : ${this._tail}`);
    console.log(`Key  : [ ${this._keys.map(mapper).join(', ')} ]`);
    console.log(`Next : [ ${this._next.map(mapper).join(', ')} ]`);
    console.log(`Prev : [ ${this._prev.map(mapper).join(', ')} ]`);
};

const list = new DoublyLinkedList(['ian', 'ronen', 'maria', 'gerda']);
list.print();
list.insertAtStart('beer');
list.print();
list.insertAtEnd('cola');
list.print();
