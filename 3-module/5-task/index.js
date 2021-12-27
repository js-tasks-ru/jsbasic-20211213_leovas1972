function getMinMax(str) {
  let result = str.split(' ').map(item => (+item !== NaN) ? +item : '')
    .filter(item => (item !== NaN) ? +item : '');
  
  let min = result[0], max = result[0];
    
  for (let i = 0; i < result.length; i++) {
    if( result[i] < min ) min = result[i]; 
    if( result[i] > max ) max = result[i]; 
  }
  
  return {'min': min, 'max': max};
}
