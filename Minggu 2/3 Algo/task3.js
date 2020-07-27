function divideAndSort(param) {
  // hasil refactoring
  return param.toString().split(0).map((v) => v.split('').sort((a, b) => a - b).join('')).join('');

  // Implementasi algoritma & flowchart
  // const number = param.toString().split(0)
  // const result = []
  // for(let a = 0; a<=number.length -1;a++){
  //     const numberAsc = number[a].split('').sort((a,b) => a-b).join('')
  //     result.push(numberAsc)
  // }
  // return result.join('')
}

console.log(divideAndSort(5956560159466056));
console.log(divideAndSort(595401929560159466056));
