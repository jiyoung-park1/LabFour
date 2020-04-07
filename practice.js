for (let i = 0; i < 5 ; i ++){
    console.log(i);}

for (let i = 5; i >= 0; i--){
    console.log(i);}

    for (let i = 0;; i++) {
        console.log("loop, i = " + i );
        if (i > 1)
            break;
    }

    let counter = 0;
    function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
    console.log(counter); // 10

    for(let y = 0; y < 3; y++){
        for(let x = 0; x < 3; x++){
            console.log(x,y);
        }
    }

    for (let i = 0; i < 3; i++){
        let loop = "loop.";
        console.log(loop);
    }

    for( let i = 0; i < 3; i++){
        if(i == 1)
            continue;
        console.log(i);
    }

    let c = 0;
    mark: for (let i = 0; i < 5; i++){
        inner: for (let j = 0; j < 5; j++){
            c++; 
            if (i == 2) break mark;}
        }
    console.log(c); // 11

    let d = 0;
mark: for (let i = 0; i < 5; i++){
    inner: for (let j = 0; j < 5; j++){
        d++; 
        if (i == 2) break inner;}
}
console.log(d); // 21

block: {
    console.log("before");
    break block;
    console.log("after");
}

// Generator function:
function* generator() {
    yield 1;
    yield 2;
    yield 3;}
  for (let value of generator()) {
        console.log( value );
    }

    let string = 'text';
    for (let value of string)
  console.log( value );


 let array = [0, 1, 2, 3];
 for (let value of array){
     console.log(value);
 }

 const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  let enumerable = {property : 1 , method : 55};
  
  for( let key of Object.keys(enumerable)){
      console.log(key);}
  for(let value of Object.values(enumerable)){
      console.log(value);}
  for( let entry of Object.entries(enumerable)){
      console.log(entry);
  }