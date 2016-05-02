/**
 * Created by Nobodies on 02.05.2016.
 */
var navItems = document.querySelectorAll("nav > ul > li");
var sectionItems = document.querySelectorAll(".container > section");

for (var i = 0; i < navItems.length; i++) {
    navItems[i].onclick = (function(i) {
        return function() {
            setActive(i, navItems);
            setActive(i, sectionItems);
        }
    })(i);
}

function setActive(index, array) {
    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove('active');
    }
    array[index].classList.add('active');
}

/*
 JS Class Manipulation Cheat Sheet

 document.body.classList.contains('thatClass');
 document.body.classList.add('thisClass');
 document.body.classList.remove('thatClass');
 document.body.classList.toggle('anotherClass');

 TODO: Look at classie
 */