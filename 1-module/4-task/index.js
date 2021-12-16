function checkSpam(str) {

  let bottomStr = str.toLowerCase();
  let result;
  if (bottomStr.includes('1xbet') || bottomStr.includes('xxx')) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
