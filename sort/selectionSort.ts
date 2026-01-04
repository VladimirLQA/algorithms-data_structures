export default function selection_sort(arr: number[]): number[] {
    const length = arr.length;

    for (let i = 0; i < length - 1; i += 1) {
        let minIndex = i;

        for (let j = i + 1; j < length; j += 1) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selection_sort([2, 3, 1, 5, 10, 8, 7]));
console.log(selection_sort([1, 23, 17, 6, 15, 13, 10]));
console.log(selection_sort([3, 4, 5]));
