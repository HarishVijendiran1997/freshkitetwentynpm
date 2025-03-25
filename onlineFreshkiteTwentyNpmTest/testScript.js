import {
    oddOrEven,
    swapTwoVariables,
    isLeapYear,
    isBinary,
    sumOfDigits,
    factorial,
    isPrime,
    fibonacciNumber,
    isPalindromeNumber,
    isPalindromeString,
    isArmstrongNumber,
    findGCD,
    isPerfectNumber,
    countDividingDigits,
    floorSquareRoot,
    powerOfReverse,
    findMinMax,
    findSecondMax,
    countArrayFrequency,
    twoSum,
  } from "freshkitetwenty";


  console.log("===== Basic Number Tests =====");
  console.log("Odd or Even (5):", oddOrEven(5));
  console.log("Swap 5 and 8:", swapTwoVariables(5, 8));
  console.log("Leap Year (2024):", isLeapYear(2024));
  console.log("Leap Year (1900):", isLeapYear(1900));
  
  console.log("\n===== String & Binary Tests =====");
  console.log("Is 1101 Binary?:", isBinary("1101"));
  console.log("Is 1181 Binary?:", isBinary("1181"));
  console.log("Sum of Digits (1181):", sumOfDigits(1181));
  console.log("Factorial (5):", factorial(5));
  
  console.log("\n===== Prime & Fibonacci Tests =====");
  console.log("Is 17 Prime?:", isPrime(17));
  console.log("Is 18 Prime?:", isPrime(18));
  console.log("8th Fibonacci Number:", fibonacciNumber(8));
  
  console.log("\n===== Palindrome & Armstrong Tests =====");
  console.log("Is 121 a Palindrome Number?:", isPalindromeNumber(121));
  console.log("Is 'MADAM' a Palindrome String?:", isPalindromeString("MADAM"));
  console.log("Is 371 an Armstrong Number?:", isArmstrongNumber(371));
  console.log("Is 123 an Armstrong Number?:", isArmstrongNumber(123));
  
  console.log("\n===== GCD, Perfect Numbers & Square Root =====");
  console.log("GCD of 28 and 35:", findGCD(28, 35));
  console.log("Is 28 a Perfect Number?:", isPerfectNumber(28));
  console.log("Floor Square Root of 27:", floorSquareRoot(27));
  
  console.log("\n===== Number Properties =====");
  console.log("Count Dividing Digits (1012):", countDividingDigits(1012));
  console.log("5 raised to the power of its reverse (5^5):", powerOfReverse(5));
  
  console.log("\n===== Array-based Problems =====");
  console.log("Find Min & Max [3, 8, 1, 9]:", findMinMax([3, 8, 1, 9]));
  console.log("Find Second Largest in [10, 5, 8, 20]:", findSecondMax([10, 5, 8, 20]));
  console.log("Frequency Count [2, 3, 2, 3, 5]:", countArrayFrequency([2, 3, 2, 3, 5]));
  
  console.log("\n===== Two Sum Problem =====");
  console.log("Two Sum [2, 7, 11, 15] target 9:", twoSum([2, 7, 11, 15], 9));
  console.log("Two Sum [3, 3] target 6:", twoSum([3, 3], 6));
