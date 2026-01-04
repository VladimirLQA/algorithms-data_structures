export function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - 1 - i; j += 1) {
            const current = arr[j];
            const next = arr[j + 1];

            if (current > next) {
                const temp = current;
                arr[j] = next;
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([33, 2, 20, 10, 11]));
console.log(bubbleSort([1, 23, 17, 6, 15, 13, 10]));
console.log(bubbleSort([1, 2, 4]));
