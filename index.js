function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var nodes = document.querySelector('#grand-node');
  
  while (nodes.children[0] != undefined) {
    nodes = nodes.children[0];
  }
  return nodes;
}

function increaseRankBy(n) {
  var nodes = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n;
  }
}