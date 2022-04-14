export function SwapValue(arr: number[], i: number, j: number) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
export default function BubbleSort(arr: number[]) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        SwapValue(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
