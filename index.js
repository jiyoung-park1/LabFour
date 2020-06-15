function binary (num){ //declare function named 'binary
 
 if (num < 1024 && num > 0){ //conditional syntax: if 
    // if parameter named num is under 1024 and greater than 0
  var digit = num.toString(2) //converts num which is decimal to binary 
  console.log(digit); //print the value
 }
}
binary(5)

