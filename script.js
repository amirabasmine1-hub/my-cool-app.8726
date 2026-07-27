/*==================================
 Amir Gamer v2
==================================*/

const body=document.body;

const loading=document.getElementById("loading");

const menuBtn=document.getElementById("menuBtn");

const mobileMenu=document.getElementById("mobileMenu");

const searchBtn=document.getElementById("searchBtn");

const searchBox=document.getElementById("searchBox");

const closeSearch=document.getElementById("closeSearch");

const topBtn=document.getElementById("topBtn");

const themeBtn=document.getElementById("themeBtn");

/* Loading */

window.addEventListener("load",()=>{

setTimeout(()=>{

loading.style.opacity="0";

loading.style.visibility="hidden";

loading.style.pointerEvents="none";

},900);

});

/* Particles */

particlesJS("particles-js",{

particles:{

number:{value:70},

color:{value:"#00d9ff"},

shape:{type:"circle"},

opacity:{value:.4},

size:{value:3},

line_linked:{

enable:true,

distance:160,

color:"#00d9ff",

opacity:.25

},

move:{enable:true,speed:2}

}

});

/* Mobile Menu */

menuBtn.onclick=()=>{

mobileMenu.classList.toggle("active");

};

/* Search */

searchBtn.onclick=()=>{

searchBox.classList.add("active");

};

closeSearch.onclick=()=>{

searchBox.classList.remove("active");

};

/* Back To Top */

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>400

?"block"

:"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*==================================
 Theme
==================================*/

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

body.classList.add("light");

}

themeBtn.onclick=()=>{

body.classList.toggle("light");

localStorage.setItem(

"theme",

body.classList.contains("light")

?"light"

:"dark"

);

};

/*==================================
 Counter Animation
==================================*/

function counter(id,end){

const el=document.getElementById(id);

if(!el)return;

let n=0;

const timer=setInterval(()=>{

n+=Math.ceil(end/60);

if(n>=end){

n=end;

clearInterval(timer);

}

el.textContent=n.toLocaleString();

},25);

}

counter("videos",120);

counter("members",850);

counter("downloadsCount",5600);

/*==================================
 Social Buttons
==================================*/

document.getElementById("rubikaBtn")?.addEventListener("click",()=>{

window.open("https://rubika.ir/USERNAME","_blank");

});

document.getElementById("aparatBtn")?.addEventListener("click",()=>{

window.open("https://aparat.com/USERNAME","_blank");

});

document.getElementById("telegramBtn")?.addEventListener("click",()=>{

window.open("https://t.me/USERNAME","_blank");

});

/*==================================
 Download Buttons
==================================*/

document.querySelectorAll(".cardBtn").forEach(btn=>{

btn.addEventListener("click",()=>{

if(btn.textContent.includes("دانلود")){

alert("📥 لینک دانلود بعداً اضافه می‌شود.");

}

});

});
/*==================================
 Scroll Animation
==================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(".card,.section").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s ease";

observer.observe(el);

});

/*==================================
 Search
==================================*/

const searchInput=document.getElementById("searchInput");

searchInput?.addEventListener("input",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?"block"

:"none";

});

});

/*==================================
 Close Menu
==================================*/

document.addEventListener("click",(e)=>{

if(

mobileMenu.classList.contains("active") &&

!mobileMenu.contains(e.target) &&

e.target!==menuBtn

){

mobileMenu.classList.remove("active");

}

});

/*==================================
 Keyboard
==================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

searchBox.classList.remove("active");

mobileMenu.classList.remove("active");

}

if(e.ctrlKey && e.key==="k"){

e.preventDefault();

searchBox.classList.add("active");

searchInput.focus();

}

});

/*==================================
 Hero Buttons
==================================*/

document.querySelector(".primary")?.addEventListener("click",()=>{

document.getElementById("news").scrollIntoView({

behavior:"smooth"

});

});

document.querySelector(".secondary")?.addEventListener("click",()=>{

window.open("https://rubika.ir/USERNAME","_blank");

});

/*==================================
 Ready
==================================*/

console.log("✅ Amir Gamer Loaded");
/* ==========================
   News System
========================== */

const newsContainer = document.getElementById("newsList");

if(newsContainer){

fetch("data.json")
.then(res => res.json())
.then(data => {

newsContainer.innerHTML="";

data.news.forEach(item=>{

newsContainer.innerHTML += `
<div class="news-card">

<img src="${item.image}" alt="${item.title}">

<div class="news-content">

<h3>${item.title}</h3>

<p>${item.description}</p>

</div>

</div>
`;

});

})
.catch(()=>{

newsContainer.innerHTML=`
<h2 style="text-align:center;color:red;">
خطا در دریافت اخبار
</h2>
`;

});

}
/* =========================
   Load News From data.json
========================= */

const newsList = document.getElementById("newsList");

if(newsList){

fetch("data.json")
.then(response=>response.json())
.then(data=>{

newsList.innerHTML="";

data.news.forEach(news=>{

newsList.innerHTML+=`

<div class="card">

<h3>${news.title}</h3>

<p>${news.description}</p>

<small>${news.date}</small>

</div>

`;

});

})
.catch(error=>{

console.log(error);

newsList.innerHTML="<p>❌ خطا در بارگذاری اخبار</p>";

});

}
const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));

slides[i].classList.add("active");

}

document.querySelector(".next").onclick=()=>{

current=(current+1)%slides.length;

showSlide(current);

};

document.querySelector(".prev").onclick=()=>{

current=(current-1+slides.length)%slides.length;

showSlide(current);

};

setInterval(()=>{

current=(current+1)%slides.length;

showSlide(current);

},5000);
// ==========================
// Internet Check
// ==========================

function checkInternet(){

if(!navigator.onLine){

document.body.innerHTML=`

<div style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#050816;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:Vazirmatn;
color:white;
text-align:center;
padding:20px;
z-index:99999;
">

<h1 style="font-size:45px;">📡 اینترنت قطع شد!</h1>

<h2 style="color:#00d9ff;">
ببخشید! 😅
</h2>

<p style="font-size:22px;">
یکی پاش رفت تو سیم اینترنت! 🤣
</p>

<p style="opacity:.7;">
به محض وصل شدن اینترنت، صفحه دوباره کار می‌کند.
</p>

</div>

`;

}

}

checkInternet();

window.addEventListener("offline",checkInternet);

window.addEventListener("online",()=>{

location.reload();

});
