(()=>{"use strict";let e=15.678,t=123.965,n=90.2345;const o=Math.max(e,t,n),l=Math.min(e,t,n);console.log(l),console.log(o);let r=Math.floor(229.8775);console.log(r);const c=100*Math.round(r/100);console.log(c);const s=Boolean(r%2==0),a=Boolean(r%2==1);console.log(s),console.log(a);const i=500-r;console.log(i);const u=(229.8775/3).toFixed(2);console.log(u);let h=100*Math.random(r);console.log(h.toFixed(2));const d=100*h/r;console.log(Math.round(d)+"%");const g=(r-h).toFixed(2);console.log(g);const f=114.93875-h;function m(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}function M(e){return e-(18*e/100+1.5*e/100)}console.log(f.toFixed(2)),console.log(`Максимальна вартість заокруглена до меншого : ${l}\nМаксимальна вартість заокруглена до більшого : ${o}\nЗагальна вартість фруктів заокруглена до меншого цілого : ${r} \nЗагальна вартість фруктів заокруглена до сотень : ${c}\nБулеве значення: чи є сума всіх товарів (округлена до меншого цілого) парним числом : ${s}\nБулеве значення: чи є сума всіх товарів (округлена до меншого цілого) непарним числом : ${a} \nСумa решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн : ${i}\nCереднє значення цін, округлене до другого знаку після коми : ${u} \nВипадковa знижкa : ${h.toFixed(2)} у відсотках : ${Math.round(d)} %\nСума до оплати з випадковою знижкою округлена до 2 знаків після коми : ${g}\nЧистий прибуток з товару : ${f.toFixed(2)} `),console.log(m("viKToRiIa"));let y=M(1e3);console.log(y);const p=function(e,t){return Math.round(Math.random()*(t-e)+e)};function v(e,t){return t.replaceAll(e,"")}function b(e,t){let n=0;for(let o=0;o<t.length;o++)t.toLowerCase().charAt(o)==e&&(n+=1);return n}function w(e){e||(e=8);let t=Math.pow(10,e),n=Math.random();return n<=.09&&(n+=.1),Math.round(n*t)}console.log(p(1,10)),console.log(v("a","blablabla")),console.log(b("а","Асталавіста")),console.log(w()),document.writeln(`Функція№1 : ${m("viKToRiIa")}; <br> Функція№2 : ${M(1e3)}; <br>\nФункція№3 : ${p(1,10)}; <br> Функція№4 : ${v("a","blablabla")};<br>\nФункція№5 : ${b("а","Асталавіста")}; <br> Функція№6 : ${w()}`);const S=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],$=S.slice(0,1),L=S.slice(1,6).concat($);console.log(L);let k=function(e,t){const n=[];for(;e.length;)n.push(e.splice(0,2));return n}(L);console.log(k);let x=function(e,t){let n=[];for(let o=0;o<e.length;o++)n.push(e[o].concat(t[o]));return n}(k,["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"]);console.log(x);const T=function(e,t){let n=[];for(let o=0;o<e.length;o++)n[o]=[e[o]+" - "+t[o]];return n.join("; ")}(S,[4,5,5,3,4,5]);console.log(T);const q=function(e){let t=[];for(let n=0;n<e.length;n++){let o=(5*Math.random()).toFixed();0==o&&(o+=1),t.push(e[n].concat(o))}return t}(x);console.log(q);let H=Array.from([]),j=function(e,t,n){for(let e=1;e<=3;e++)H.push(Math.round(100*Math.random()));return H}();console.log(j);let C=function(...e){return e.reduce(((e,t)=>e+t),0)/e.length}(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2);console.log(C);let E=function(...e){return e.sort(((e,t)=>e-t)),e.length%2?e[Math.floor(e.length/2)]:(e[e.length/2]+e[e.length/2-1])/2}(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2);console.log(E);let I=[1,2,3,4,5,6].filter((e=>e%2==1));console.log(I);let A=[1,-2,3,-4,-5,6].filter((e=>e>0)).length;console.log(A);let F=[6,2,55,11,78,2,55,77,57,87,23,2,56,3,2].filter((e=>e%5==0));console.log(F);const O=[{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}];let _=function(e){const t=Object.keys(e.subjects),n=[];for(let e of t){const t=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase();n.push(t)}return n}(O[0]);function B(e){const t=Object.values(e.subjects);let n=[];for(let e=0;e<t.length;e++)n=n.concat(t[e]);let o=0;for(let e=0;e<n.length;e++)o+=n[e];return(o/n.length).toFixed(2)}console.log(_);let P=B(O[0]);console.log(P),console.log(function(e){return{name:e.name,course:e.course,averageMark:B(e)}}(O[0])),console.log(function(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].name);return t.sort()}(O)),console.log(function(e){const t=[];return e.map((e=>{t.push(B(e))})),console.log(t),Object.values(e.find((e=>B(e)==Math.max(...t))))[0]}(O)),console.log(function(e){let t={};for(let n=0;n<4;n++){let o=e[n].toLowerCase();t[o]?t[o]++:t[o]=1}return t}("тест"));const D={tax:.195,middleSalary:1789,vacancies:11476};let K=function(e){return e*this.tax}.call(D,2e3);console.log(K+" - myTaxes");let N=function(){return this.middleSalary*this.tax}.call(D);console.log(N+" - middleTaxes");let R=function(){return this.tax*this.middleSalary*this.vacancies}.call(D);function U(){let e=(1500,2e3,Math.round(500*Math.random()+1500));let t=e*D.tax,n={salary:e,taxes:t,profit:e-t};return console.log(n),n}console.log(R+" -totalTaxes"),U.call(D),setInterval(U,1e4);class V{constructor(e,t,n){this.university=e,this.fullName=t,this.course=n,this.marks=[5,4,4,5]}getInfo(){let e=`Студент ${this.course}ого курсу ${this.university}, ${this.fullName}`;return console.log(e),e}set changeMark(e){this.marks.push(e)}get changeMark(){return this.marks}getAverageMark(){let e=this.marks.reduce(((e,t)=>e+t));return console.log(e/this.marks.length),e/this.marks.length}dismiss(){let e=this.marks;e=null,console.log(null)}recover(){console.log(this.marks)}}let z=new V("Київського національного університету імені Тараса Шевченка","Тимко Іван Олександрович","1");z.getInfo(),z.changeMark=3,console.log(z.changeMark),z.getAverageMark(),z.dismiss(),z.recover();let G=new class extends V{constructor(e,t,n){super(e,t,n),this.budget="Ви отримали 1400 грн. стипендії",setInterval((()=>this.getScholarship()),3e4)}getScholarship(){console.log(this.budget)}}("Авіаційний університет","Собко Олег Васильович","3");function J(){let e=document.getElementById("parent");e.innerHTML="";for(let t=0;t<25;t++){let t=document.createElement("div");t.setAttribute("class","myStyle"),t.style.backgroundColor=`rgb(${Math.round(255*Math.random())}, ${Math.round(255*Math.random())}, ${Math.round(255*Math.random())})`,e.append(t)}}G.getAverageMark()>=4&&G.getScholarship(),J();let Q=setInterval((()=>J()),2e3);window.addEventListener("keydown",(function(e){document.querySelector(`audio[class ="${e.keyCode}"]`).play()}));let W=(4,new Promise((e=>{let t=0,n="";for(;t<4;)setTimeout((function(){n+=String.fromCharCode(Date.now().toString().slice(-5)),4===n.length&&e(n)}),500*t),t++})).then((e=>document.querySelector("#div").innerHTML=e)));async function X(e){const t=await fetch(e);Y(await t.json())}function Y(e){const t=`\n    <div class="charapters">\n    <h2>${e.name}</h2>\n    <p>${e.birth_year}, ${e.gender}</p>\n    </div>\n    `;document.querySelector("#btn_1").addEventListener("click",(function(){document.querySelector("#info").innerHTML+=t})),document.querySelector(".exit").addEventListener("click",(function(){document.querySelector("#info").innerHTML=""}))}async function Z(e){const t=await fetch(e);ee(await t.json())}function ee(e){const t=`\n        <div class="planets">\n        <h2>${e.name}</h2> \n        </div>\n        `;document.querySelector("#btn_2").addEventListener("click",(function(){document.querySelector("#info").innerHTML+=t})),document.querySelector(".exit").addEventListener("click",(function(){document.querySelector("#info").innerHTML=""}))}!async function(){const e=await fetch("https://swapi.dev/api/films/2/");!function(e){const t=e.characters.map(X);Promise.all(t).then((e=>e.forEach(Y)))}(await e.json())}(),async function(){const e=await fetch("https://swapi.dev/api/films/2/");!function(e){const t=e.planets.map(Z);Promise.all(t).then((e=>e.forEach(ee)))}(await e.json())}();let te=function*(e){for(let e=0;;e++)yield e}();te.next(),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#hw-1").innerHTML+=o,document.querySelector("#hw-3").innerHTML+=y,document.querySelector("#hw-4").innerHTML+=T,document.querySelector("#hw-5").innerHTML+=C,document.querySelector("#hw-6").innerHTML+=_,document.querySelector("#hw-7").innerHTML+=K,document.querySelector("#hw-8").innerHTML+=z.getInfo(),document.querySelector("#parent").innerHTML+=Q,document.querySelector("#div").innerHTML+=W,document.querySelector("#hw-13").innerHTML+=te}))})();