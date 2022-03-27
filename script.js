function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// <li><a href="#">Node.js</a></li>

function addContentToElement(element) {
  
}
function createElement(content) {
  if (typeof(content) != 'string') {
    throw new Error('Element content must be a string');
  } else {
    
    let li, a;
    li = document.createElement('li');
    a = document.createElement('a');
    a.href = '#';
    a.innerText = content
    li.appendChild(a);
    
    return li;
  }
}

function addElementToList() {
  let ul;
  ul = document.getElementById('myMenu');
  ul.appendChild('');
}