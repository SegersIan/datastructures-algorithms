const doubleLinkedList = [
    'a', 'b', 'c', 'd', 'e', 'f'
].reduce(createReducer(true), []);

const emptyMemory = '_.'
    .repeat(5)
    .split('.')
    .filter(x => !!x)
    .reduce(createReducer(false));
const memory = [...doubleLinkedList, ...emptyMemory];
let usedNext = 0;
let freeNext = doubleLinkedList.length;

console.log('Start');
printMemory();
allocatedObject('g')
console.log('AFTER ALLOCATE OBJECT');
printMemory();
console.log('AFTER FREE OBJECT');
printMemory();


function allocatedObject(value) {
    freeNext = memory[freeNext]
}




function printMemory() {
    console.log('usedNext : ', usedNext);
    console.log('freeNext : ', freeNext);
    console.log(memory.map((x, index) => `${index}`.padStart(3)).join(''));
    console.log(memory.map((x) => `${x}`.padStart(3)).join(''));
    console.log('--------------------------------------------------------------')
}

function createReducer(isDoublyLinked) {
    return function reducer(linkedList, value, index, array) {
        const offset = isDoublyLinked ? 0 : 17;
        const newValues = [value];

        if (index === array.length - 1) {
            newValues.push('/');
        } else {
            newValues.push(index * 3 + 3 + offset)
        }

        if (index === 0) {
            newValues.push('/');
        } else if (isDoublyLinked) {
            newValues.push(index * 3 - 3 + offset)
        } else{
            newValues.push('/')
        }

        return [...linkedList, ...newValues];
    }
}
