//1. Select the section with an id of container without using querySelector

const section1 = document.getElementById('container');

console.log(section1);

//2. Select the section with an id of container with using querySelector

const section2 = document.querySelector('section');

console.log(section2);

//3. select all of the list items with a class of "Second"

const secondList = document.getElementsByClassName('second');

console.log(secondList);

//4. select a list item with a class of third, but only the list item inside of the ol tag.

const orderedList = document.querySelector('ol');

const thirdList = orderedList.getElementsByClassName('third');

console.log(thirdList);

//5. give the section with an id of container the text "Hello!"

// section1.innerText = "Hello!"

// console.log(section1);

//6. Add the Class main to the div with a class of footer

const div = document.querySelector('.footer');

div.classList.add('main');

console.log(div);

//7. Remove the class main on the div with a class of footer.

div.classList.remove('main');

console.log(div);

//8. creat a new li element

const newLi = document.createElement('li');

newLi;

console.log(newLi);

//9. Give the li the text "four"

newLi.innerText = 'four';

console.log(newLi);

const ul = document.querySelector('ul');

ul.append(newLi);

console.log(ul);

//10. loop over all of the li's inside the ol tag and give them a background color of 'green'.

const olList = document.querySelectorAll('ol li');

for(let i=0; i <olList.length; i++) {
    olList[i].style.backgroundColor = 'green';
}

//why cant i do for (let li of olList){
//olList[li].style.backgroundColor = 'green'
//}

//11. remove the div with a class of footer
const body = document.querySelector('body');

body.removeChild(div);

console.log(body);
