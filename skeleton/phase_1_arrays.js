Array.prototype.uniq = function(){
  let uniq_array = [];
  let uniq_elements = new Object();
  this.forEach((number) => {
    if (!uniq_elements[number]){
      uniq_array.push(number);
      uniq_elements[number] = 1;
    }
  });
  return uniq_array;
}

Array.prototype.twoSum = function(){
  let result = [];

  for(i = 0; i < this.length; i++){
    for(j = 0; j < this.length; j++){
      if(j > i && this[i] + this[j] === 0){
        result.push([i, j])
      }
    }
  };

  return result;
}

Array.prototype.transpose = function(){
  let result = [];

  for(i = 0; i < this.length; i++){
    let subarray = [];

    for(j = 0; j < this.length; j++){
      subarray.push(this[j][i]);
    }

    result.push(subarray);
  };

  return result;
}

