// Examples to modify the DOM:

// Create element:
let element = document.createElement('div');

// Set properties on it:
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

// Append elements into the DOM:
document.body.appendChild(element);

let ul = document.createElement('ul');
for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}
element.appendChild(ul);

// Remove elements from the DOM:
ul.remove();
ul.removeChild(ul.querySelector('li:nth-child(2)'));