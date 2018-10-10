# Custom Reduce Function

I have created a custom Reduce function that mimic the real function of the actual reduce function itself.

It takes a callback function as well as an initial value. It applies the initial value to the callback and pass the following parameter to a call function:

```shell
  - accumulator value
  - current index
  - current value in the array
  - this object
```
once the accumulator has been updated for n number of times(n being the array length) it returns the accumulator value.


