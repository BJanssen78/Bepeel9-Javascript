const changeTXT = document.getElementsByTagName('p');
// const txtChange = changeTXT.getElementsByTagName('p');

// document.getElementsByTagName('p').innerHTML = 'i am a new paragraph';

// txtChange.innerHTML = 'i am a new paragraph';

// document.getElementsByTagName('p').innerHtml = 'i am a new paragraph';
// console.log(changeTXT);
document.getElementsByTagName('p').innerHTML += 'i am a new paragraph';
// changeTXT.querySelector('p').innerHtml += 'i am a new paragraph';
changeTXT.innerHTML = 'i am a new paragraph';