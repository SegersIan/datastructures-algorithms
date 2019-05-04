const instance = [10,];
const permutatedInput = sortAscending(instance);

console.log('Start :', JSON.stringify(instance));
console.log('End   :', JSON.stringify(permutatedInput));

sortAscending([3, 2, 1]);
sortAscending([5, 4, 3, 2, 1]);
sortAscending([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
sortAscending([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

/**
 * Uses insertion sort
 *  - Efficient for a small number of elements
 */
function sortAscending(values) {
    const input = [...values];
    let stepCount = 1;
    for (let index = 1; index < input.length; index++) {
        stepCount++;
        let key = input[index];
        let recursionIndex = index - 1;
        // This copies each key over to the next index.
        while (recursionIndex > -1 && input[recursionIndex] > key) {
            stepCount++;
            input[recursionIndex + 1] = input[recursionIndex];
            recursionIndex = recursionIndex - 1;
        }
        // This copies the key in front now.
        input[recursionIndex + 1] = key;
    }
    console.log(`${stepCount} steps for ${input.length} elements.`)
    return input;
}