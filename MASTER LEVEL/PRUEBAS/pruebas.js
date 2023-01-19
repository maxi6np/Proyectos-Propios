let ul = document.getElementById("ul");
let li = document.querySelectorAll("li");

ul.onclick = function(event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }

}

// evitando la selección innecesaria de elementos de la lista en los clics
ul.onmousedown = function() {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for(let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}