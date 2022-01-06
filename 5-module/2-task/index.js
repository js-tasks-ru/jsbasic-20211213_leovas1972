function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  button.onclick = function(){
    !text.hidden ? text.hidden = true : text.hidden = false ;
  }
  
}
