function getFirstSelector(selector) {
  let first = document.querySelector(selector);
  return first;
}

function nestedTarget(){
  let target = document.getElementById("nested").querySelectorAll(".target");
  return target;
}

function increaseRankBy(n) {
  let lists = document.getElementById('app').querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < lists.length; i++) {
  lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}

function deepestChild() {
  
}