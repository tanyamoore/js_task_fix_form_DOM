'use strict';

// write code here

const inputs = Array.from(document.querySelectorAll('input'));

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;
  label.className = 'field-label';
  inputs[i].placeholder = inputs[i].name.toUpperCase();
  inputs[i].parentElement.append(label);
}
