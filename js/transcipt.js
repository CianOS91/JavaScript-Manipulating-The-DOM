
var article = document.getElementById('home-page');


var sections = article.getElementsByTagName('section');


var leads = document.getElementsByClassName('lead');

var lead = leads[0];
lead.textContent;

var article = document.querySelector('#home-page');
var section = document.querySelector('section');
var lead = document.querySelector('.lead');

var sections = document.querySelectorAll('section');

var article = document.getElementById('home-page');

article.children;
article.parentElement;
article.nextElementSibling
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;


var li = document.createElement('li');

li.classList.add('last');


li.style.backgroundColor = 'pink';

var a = document.createElement('a');

a.textContent = "Four";

a.style.color = 'white';

li.appendChild(a);



var uls = document.getElementsByTagName('ul');

var ul = uls[0];

ul.appendChild(li);

var firstLi = ul.getElementsByTagName('li');
ul.insertBefore(li, firstLi);

firstLi.classList.remove('active');


var ul = document.getElementsByTagName('ul');
var li;
for (var i = 0; i < ul[0].children.length; i++) {
    li = ul[0].children;
    li.style.backgroundColor = 'pink';
}


ul.removeClass('active').css('pink');

