"use-strict";

const isPrime = (paramNumber) => {
  for (let i = 2; i < paramNumber; i++) {
    if (paramNumber % i === 0) {
      return false;
    }
  }
  return paramNumber > 1;
};

const nextPrimeFibonacci = (paramNumber, fibCurrent = 1, fibNext = 1) => {
  if (fibCurrent > Number.MAX_SAFE_INTEGER) {
    throw Error("Error max Integer or it could be infinity");
  }
  if (fibCurrent > paramNumber && isPrime(fibCurrent)) {
    return fibCurrent;
  }
  console.log("bumping to", fibCurrent + fibNext);
  return nextPrimeFibonacci(paramNumber, fibCurrent + fibNext, fibCurrent);
};

console.warn("Next prime fib ", nextPrimeFibonacci(20));
