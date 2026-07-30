const foto=[
"foto.jpg",
];

let i=0;

setInterval(()=>{

i++;

if(i>=foto.length)i=0;

document.getElementById("slide").src=foto[i];

},3000);


const text="🎉 Selamat Ulang Tahun Salwa! Semoga panjang umur, sehat selalu, dimudahkan semua urusannya, bahagia setiap hari, dan semoga semua impianmu tercapai. Terima kasih sudah menjadi orang yang luar biasa. Semoga senyummu selalu menghiasi setiap harimu. Happy Birthday! ❤️";

let index=0;

function ketik(){

if(index<text.length){

document.getElementById("typing").innerHTML+=text.charAt(index);

index++;

setTimeout(ketik,40);

}

}

ketik();

function surprise(){

alert("Semoga hari ini menjadi hari yang paling membahagiakan buat kamu ❤️🎂🥳");

createLove();

}

function createLove(){

setInterval(()=>{

const love=document.createElement("div");

love.innerHTML="❤️";

love.style.position="fixed";
love.style.left=Math.random()*100+"vw";
love.style.top="-30px";
love.style.fontSize=(20+Math.random()*30)+"px";

love.style.animation="fall 5s linear";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},5000);

},200);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{transform:translateY(0);}
100%{transform:translateY(110vh);}
}
`;

document.head.appendChild(style);
