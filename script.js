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








