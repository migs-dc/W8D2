// Array.prototype.uniq = function(){
//   let uniq_array = [];
//   let uniq_elements = new Object();
//   this.forEach(function(number){
//     if (!uniq_elements[number]){
//       uniq_array.push(number);
//       uniq_elements[number] = 1;
//     }
//   });
//   return uniq_array;
// }

Array.prototype.uniq = function(){
  let uniq_array = [];
  let uniq_elements = new Object();
  this.forEach( number => {
    if (!uniq_elements[number]){
      uniq_array.push(number);
      uniq_elements[number] = 1;
    }
  });
  return uniq_array;
}