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

Array.prototype.myReduce = function(callback, initialValue){
  let receivedInitialValue = true;
  if(typeof initialValue === 'undefined'){
    initialValue = this[0];
    receivedInitialValue = false;
  };

  let result = initialValue;

  function closure(arg){
    result = callback(result, arg);
  }

  if(receivedInitialValue){
    this.myEach(closure);    
  }
  else{
    this.slice(1,this.length).myEach(closure);
  }

  return result;
}