Array.prototype.bubbleSort = function(){
  let sorted = false;
  while (!sorted){
    sorted = true;
    for ( let i = 0; i < this.length-1; i++ ){
      if( this[i] > this[i+1] ){
        sorted = false;
        // this[i]
        [this[i], this[i+1]] = [this[i+1], this[i]];
      } 
    }
  }
  return this;
}

String.prototype.substrings = function(){
  let result = [];

  for(let x = 0; x < this.length; x++){
    for(let y = x; y < this.length; y++){
      result.push(this.substring(x, y + 1));
    }
  }

  return result;
}