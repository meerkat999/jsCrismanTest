# Pre-Assesment Amwell JS

Please check the code here: [here](./pre-assestsment-code.js)

## Suggest improvements

### Code structure

- Use `{ }` (brackets) to improve the understand of code blocks.
- Change `var ispnum` to `const` because we don't need to change that function.
    ```diff
    - var ispnum = function (num) {
    + const ispnum = function (num) {
    ```
- Verify and change `var` to `let` in `for` and `function`s scopes. We do not use global variables in this implementation.
- Rename `ipsnum` to `isPrime` to improve the goal of the function
    ```diff
    - const ispnum = function (num) {
    + const isPrime = function (num) {
    ```
- Convert `isPrime` function into an array function
    ```diff
    - const ispnum = function (num) {
    + const isPrime = (num) => {
    ```
- Rename all var `num` to `paramNumber` as standard in all functions.
- Rename `nxtPrmFib` function to `nextPrimeFibonacci` to improve the goal of the function and change it to array function
    ```diff
    - function nxtPrmFib(number){
    + const nextPrimeFibonacci = (number) => {
    ```

### Logical

- I suggest do not use `console.log` because needs a lot of time to write. I suggets delete it or use a async logger.
- Delete `while(true)` because is a bad practice
- I suggest changing the recursive method, instead of calculating a Fibonacci number applying a minus operator to return when the Fibonacci finds a one, we can implement a recursive function that calculates the Fibonacci number using a plus operator. Using this way we can calculate the Fibonacci series in every iteration without sending the position of the iterator.

    ### **Example**:

    **Initial implementation:**

    Executes a cycle where in every iteration send the position in the Fibonacci series to calculate (in a recursive method) the value in that position and to identificate if that value is greater than the param number
    After that, it evaluates if every greater Fibonacci value is prime.

    Value: 20
    Time of execution: **28.982ms**

    Value: 104910
    Time of execution with logs: **100.494ms**
    Time of execution without logs: **18.642ms**

    **With refactor:**

    Executes a recursive method to generate the fibonacci serie from one to a prime value greater than the param number.

    Value: 20
    Time of execution: **14.434ms**

    Value: 104910
    Time of execution with logs: **40.313ms**
    Time of execution without logs: **17.946ms**


