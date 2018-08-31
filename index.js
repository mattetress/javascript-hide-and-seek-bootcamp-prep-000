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
  lists.innerHTML = (parseInt(lists) + n).toString();
  return lists;
}