/* Enter the code to remove the main node element under this comment */
let x = document.querySelector('main') 
x.remove()

/* Create your new element here and assign it to newHeader */
let newHeader = null;
newHeader = document.createElement('header')
document.body.append(newHeader)

var element = document.createElement('h1')
element.id = 'victory'
element.innerHTML = 'Steph, is the champion!'
newHeader.append(element);