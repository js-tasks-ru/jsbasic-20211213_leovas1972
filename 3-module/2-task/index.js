function filterRange(arr, a, b) {
  return arr.filter(function(item){
    if(a <= item && item <= b) {
      return true;
    }
    return false;
  })
}
