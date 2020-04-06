Ex.1.
function oddOrNot (num) {
  if (num === 0) return true;
 return (num % 2 === 0)? false:oddOrNot((num - (num % 10)) / 10);
}
console.log(oddOrNot(5));


Ex.2.
function findTheMinPosElem (arr) {
  arr.sort((a, b) => a - b);
 if (arr[0] < 0) {
  arr.shift(arr[0]);
   if (arr.length === 0) return -1;
  return findTheMinPosElem(arr);
 }
  return arr[0];
}
 
console.log(findTheMinPosElem([45, -9, 15, 5, -78]));


Ex.3.
function getFibArr (num, result = [1, 1]) {
  if (num === 0) {
        return [];
    } else if (num === 1) {
        return [1];
    }

        if (num === 2) {
            return result;
        } else {
            result.push(result[result.length-1] + result[result.length-2]);
            return getFibArr (num - 1, result);
        }
}
console.log(getFibArr(2));


Ex.4.
function concatArrays(arr) {
  return arr.reduce((result, elem) => {
    return result.concat(Array.isArray(elem) ? concatArrays(elem) : elem);
  }, []);
}
console.log(concatArrays([1, [3, 4, [1, 2]], 10]));


Ex.5.
function getSumOfDigits(num) {
let arr = (num + "").split("");
  let result = arr.reduce((result, elem) => {
    return result + +elem;
  }, 0)
  return (result < 10)? result: getSumOfDigits(result)
}
console.log(getSumOfDigits(14));