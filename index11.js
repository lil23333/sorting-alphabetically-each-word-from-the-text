let body = document.querySelector('body');

let str = 'The entire oeuvre of Stephen King, which runs across five decades and is arguably the most eclectic body of work ever written by a single author: several dozen novels, published in less than half that time, have testified to his undisputed crown as a format king of horror fiction. That is one core aspect of the work that makes King’s psyche the perfect canvas for movie producers and directors, and therefore makes him not only the most frequent author to have ever been converted into movie material, but also the most lucrative one of modern times.';

let arr = str.split(' ');

let arr1 = arr.map((i)=>i.charAt(0).toLowerCase()+i.slice(1));
let arr2 = arr1.sort((a,b)=> a.localeCompare(b));
let arr3 = arr2.filter((e,i)=>i === arr2.indexOf(e));

let arrWithCharAt = arr3.map(([c])=> c);
let arrWithCharAt3 = arrWithCharAt.filter((e,i)=>i === arrWithCharAt.indexOf(e));

let grouped = Object.values(arr3.reduce((acc,v)=> {
    (acc[v.charAt(0)] ??= []).push(v);
return acc;
},{}));

let grouped1 = [];

for ( let i = 0; i < grouped.length; i++) {
    let el = grouped[i].toString();
    grouped1.push(el);
}


let arrWithCharAt2 = arrWithCharAt3.sort((a,b)=> a.localeCompare(b));

let ul,li;

for (let i = 0; i < arrWithCharAt2.length; i++) {
    ul = document.createElement('ul'),
	ul.classList.add('hh');
    ul.textContent = arrWithCharAt2[i];
	


 for (let j = i; j < grouped1.length, j <=i; j++) {
     li = document.createElement('li');  
     li.textContent = grouped1[j];
	 
     ul.appendChild(li); 
    } 

	 
      body.appendChild(ul);
}
li = document.querySelectorAll('li');
for (let el of li) {
	el.classList.add('hh1');
}








