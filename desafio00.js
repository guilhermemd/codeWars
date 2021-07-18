const arr = [6, 6, 6, 2, 2, 2, 5, 7, 7];

function desafio(arr) {
  let numberList = [];
  for(let indexOne = 0; arr.length > indexOne; indexOne += 1) {
      let aux = 0;
      for(let indexTwo = 0; arr.length > indexTwo; indexTwo += 1) {
        if (arr[indexOne] === arr[indexTwo]) {
          aux += 1;
        }
      }
      if (aux !== 0 && aux % 2 !== 0) {
          numberList.push(arr[indexOne]);
        }
  }
  
  return [...new Set(numberList)]

  }

  console.log(desafio(arr));

