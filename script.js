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



function getUserInputAndClearTextBox() {
  let userInput, ul, li, a;

  // Select the DOM Element containting user input.
  userInput = document.getElementById('text-box');

  if (userInput.value == '') {
    return;
  }


  // create element to be appended to DOM.
  
    li = document.createElement('li');
    a = document.createElement('a');
    a.href = '#';
    a.innerText = userInput.value;
    li.appendChild(a);


    // Select DOM node to pass our component
    ul = document.getElementById('myMenu');
    ul.appendChild(li);

    console.log('removing userInput');
    userInput.value = '';
}

// helpers

function convertHTMLCollection(htmlCollection) {
  let buffer = [];
  for (var i = 0; i < htmlCollection.length; i++) {
    buffer.push(htmlCollection[i]);
  }
  return buffer;
}

function removePageData(elementClassName) {
  let elements;
  elements = convertHTMLCollection(document.getElementsByClassName(elementClassName));
  elements.map((x) => x.remove());
}

function loadPageData() {
  

  
}

var content = `<div class="right" style="background-color:#ddd;">
    <h2>Page Content</h2>
    <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
    <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some text..</p>
  </div><div class="right" style="background-color:#ddd;">
    <h2>Page Content</h2>
    <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
    <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some text..</p>
  </div><div class="right" style="background-color:#ddd;">
    <h2>Page Content</h2>
    <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
    <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some text..</p>
  </div>`

var row = document.getElementsByClassName('row')[0];

frag = document.createRange().createContextualFragment(content);

removePageData('right');
row.appendChild(frag.firstChild);

// Doesn't work as expected
// refactor to correct behavior
function loadFragmentChildren(inputFragment) {
  for (var i = 0; i < inputFragment.childElementCount; i++) {
    row.appendChild(frag.firstChild);
  }
}


