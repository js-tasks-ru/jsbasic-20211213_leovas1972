function truncate(str, maxlength) {
  let result;
  if (str.length <= maxlength) {
    result = str;
  } else if (str.length > maxlength) {
    result = str.slice(0, maxlength - 1) + "…";
  }
  return result;
}
