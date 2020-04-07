function binary (num){
 
 if (num < 1024 && num > 0){
  let a = num.toString(2);
  console.log(a);
 }
}
binary(5)