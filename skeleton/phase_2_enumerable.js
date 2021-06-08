Array.prototype.myEach = function(dolphin){
  for( let i = 0; i < this.length; i++){
    dolphin(this[i]);
  }
  return this;
}

Array.prototype.myMap = function(dolphin){
  let result = [];

  function whale(arg){
    result.push(dolphin(arg));
  };

  this.myEach(whale);

  return result;
}