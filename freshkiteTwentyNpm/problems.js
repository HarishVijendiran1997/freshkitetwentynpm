export function oddOrEven(n) {
  return n % 2 === 0 ? "even" : "odd";
}

export function swapTwoVariables(n1, n2) {
  n1 = n1 + n2;
  n2 = n1 - n2;
  n1 = n1 - n2;
  return [n1, n2];
}

export function isLeapYear(n) {
  return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0;
}

export function isBinary(n) {
  return /^[01]+$/.test(n);
}

export function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

export function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

export function fibonacciNumber(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export function isPalindromeNumber(n) {
  let str = n.toString();
  return str === str.split("").reverse().join("");
}

export function isPalindromeString(s) {
  let str = s.toString();
  return str === str.split("").reverse().join("");
}

export function isArmstrongNumber(n) {
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }

  return sum === n;
}

export function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export function isPerfectNumber(n) {
  if (n <= 1) return false;

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}

export function countDividingDigits(n) {
  let count = 0;
  let temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    if (digit !== 0 && n % digit === 0) {
      count++;
    }
    temp = Math.floor(temp / 10);
  }

  return count;
}

export function floorSquareRoot(n) {
  return Math.floor(Math.sqrt(n));
}

export function powerOfReverse(n) {
  let rev = parseInt(n.toString().split("").reverse().join(""), 10);
  return Math.pow(n, rev);
}

export function findMinMax(arr) {
  if (arr.length === 0) return null;
  return [Math.min(...arr), Math.max(...arr)];
}

export function findSecondMax(arr) {
  if (arr.length < 2) return -1;

  let first = -Infinity,
    second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? -1 : second;
}

export function countArrayFrequency(arr, n) {
  let freq = new Array(n).fill(0);

  for (let num of arr) {
    if (num >= 1 && num <= n) {
      freq[num - 1]++;
    }
  }

  return freq;
}

export function twoSum(num, target) {
  let map = new Map();

  for (let i = 0; i < num.length; i++) {
    let complement = target - num[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(num[i], i);
  }

  return [];
}
