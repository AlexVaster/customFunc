import './custom_func'

test("Testing custForEach method", () => {
  const inputArr: number[] = [1, 2, 3];
  const testArr: number[] = [];
  inputArr.custForEach(el => testArr.push(el))
  expect(testArr.length).toBe(3)
});

test("Testing custMap method by pow", () => {
  let inputArr: number[] = [1, 2, 3];
  inputArr = inputArr.custMap(el => el * el)
  expect(inputArr).toEqual([1, 4, 9])
});

test("Testing custFilter method", () => {
  let inputArr: number[] = [1, 2, 3, 4, 5];
  inputArr = inputArr.custFilter(el => el % 2 === 0)
  expect(inputArr).toEqual([2, 4])
});

test("Testing custReduce method", () => {
  let inputArr: number[] = [1, 2, 3, 4, 5];
  inputArr = inputArr.custReduce((acc, val) => acc + val, 0)
  expect(inputArr).toEqual(15)
});