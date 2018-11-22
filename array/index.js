function Array(initialValue = []) {
    this._arr = initialValue;
}

Array.prototype.get = function (index) {
    return this._arr[index];
};

Array.prototype.search = function (searchTerm) {
    for (const value of this._arr) {
        if (value === searchTerm) {
            return value;
        }
    }
    return undefined;
};

Array.prototype.insertAt = function (targetIndex, item) {
    for (let i = this._arr.length - 1; i >= targetIndex; i--) {
        this._arr[i + 1] = this._arr[i];
    }
    this._arr[targetIndex] = item;
};

Array.prototype.remoteAt = function (index) {
    this._arr[index] = null;
    for (let i = this._arr.length; i >= index; i--) {
        this._arr[i + 1] = this._arr[i];
    }
};

Array.prototype.print = function () {
    console.log(this._arr);
};

const arr = new Array([10, 20, 30, 40, 50]);
arr.print();
arr.insertAt(0, 5);
arr.print();
arr.insertAt(6, 500);
arr.print();
arr.insertAt(3, 7);
arr.print();
