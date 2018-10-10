Array.prototype.cusReduce = function(f, initialVal){
   let accumulator = '';
   if(initialVal !== undefined){
      accumulator = initialVal;
   } 
   const len = this.length;
   for(let i = 0; i < len; i++){
      accumulator = f.call(undefined,accumulator, this[i],i, this);
   }
   return accumulator;
}

const numArr = [4,5,6,7];

let cusNum = numArr.cusReduce(function(a, b){
   return a * b;
}, 3);

console.log(cusNum);

const strArr = ['I', 'like', 'eating'];

let custStr = strArr.cusReduce(function(a, b){
   return b + " " + a;
});

console.log(custStr);
