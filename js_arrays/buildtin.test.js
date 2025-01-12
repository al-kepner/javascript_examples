test('splice mutates the original array', () => {
  const arr = [1, 2, 3, 4, 5];
  const removed = arr.splice(2, 2);
  expect(removed).toEqual([3, 4]);
  expect(arr).toEqual([1, 2, 5]);
});

test('splice whole array', () => {
  const arr = [1, 2, 3, 4, 5];
  const removed = arr.splice(0, arr.length);
  expect(removed).toEqual([1, 2, 3, 4, 5]);
  expect(arr).toEqual([]);
});

function sliceACopy(arr) {
  result = arr.slice();
  console.log(`in spliceACopy result: ${result}`);
  console.log(`in spliceACopy arr: ${arr}`);
  return result;
}

test('sliceACopy does not mutate array', () => {
  const arr = [1, 2, 3, 4, 5];
  const arr_ref = arr;
  const copy = sliceACopy(arr);
  expect(copy).toEqual([1, 2, 3, 4, 5]);
  expect(copy).not.toBe(arr);
  expect(arr).toBe(arr_ref);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('toSpliced does not mutate array', () => {
  const arr = [1, 2, 3, 4, 5];
  const remaining = arr.toSpliced( 2, 2);
  expect(remaining).toEqual([1, 2, 5]);
  console.log(`in toSpliced remaining: ${remaining}`);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('shift mutates array', () => {
  const arr = [1, 2, 3, 4, 5];
  const removed = arr.shift();
  expect(removed).toBe(1);
  expect(arr).toEqual([2, 3, 4, 5]);
});

test('unshift mutates array', () => {
  const arr = [1, 2, 3, 4, 5];
  const length = arr.unshift(0);
  expect(length).toBe(6);
  expect(arr).toEqual([0, 1, 2, 3, 4, 5]);
});

function tryToSpliced() {
    try {
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.toSpliced(1, 2, 99, 100);
        console.log('ES14 `toSpliced` is supported');
        console.log('Original Array:', originalArray);
        console.log('New Array:', newArray);
    } catch (error) {
        console.log('ES14 `toSpliced` is not supported in your current Node.js version');
        console.error(error);
        throw error;
    }
}

test('tryToSpliced', () => {                
    tryToSpliced();
});
