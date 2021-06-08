function range(start, end){
  if(start > end){
    return [];
  }
  
  return [start].concat(range(start+1, end));
};

function sumRec(arr){
  if (arr.length === 0){
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1, arr.length))
}

function exponentVersion1(base, exp){
  if (exp === 0){
    return 1;
  }
  return base * exponentVersion1(base, exp - 1);
}

function exponentVersion2(base, exp){
  if (exp === 0){
    return 1;
  } else if(exp === 1){
    return base;
  }
  if ((exp % 2) === 0){
    let temp = exponentVersion2(base, exp/2);
    return temp ** 2;
  } else {
    return base * ( exponentVersion2(base, (exp-1)/2) ** 2 );
  }
}