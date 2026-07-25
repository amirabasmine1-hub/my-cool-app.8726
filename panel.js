/* ==========================
   Login Protection
========================== */

const PASSWORD = "Amir2026";

alert("panel.js اجرا شد");

const login = prompt("رمز ورود به پنل را وارد کنید:");
                   
if(login !== PASSWORD){

document.body.innerHTML = `
<div style="
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#050816;
color:white;
font-family:Vazirmatn;
flex-direction:column;
">

<h1>❌ دسترسی غیرمجاز</h1>

<p>رمز عبور اشتباه است.</p>

</div>
`;

throw new Error("Access Denied");

}
/*==================================
 Amir Gamer Admin Panel
==================================*/

const title=document.getElementById("newsTitle");
const text=document.getElementById("newsText");
const addBtn=document.getElementById("addNews");
const newsList=document.getElementById("newsList");

let news=JSON.parse(localStorage.getItem("news"))||[];

/* نمایش اخبار */

function renderNews(){

newsList.innerHTML="";

news.forEach((item,index)=>{

newsList.innerHTML+=`

<div class="newsItem">

<h3>${item.title}</h3>

<p>${item.text}</p>

<div class="actions">

<button class="editBtn"
onclick="editNews(${index})">

ویرایش

</button>

<button class="deleteBtn"
onclick="deleteNews(${index})">

حذف

</button>

</div>

</div>

`;

});

}

/* ثبت خبر */

addBtn.onclick=()=>{

if(title.value===""||text.value===""){

alert("همه فیلدها را پر کنید.");

return;

}

news.unshift({

title:title.value,

text:text.value

});

localStorage.setItem(

"news",

JSON.stringify(news)

);

title.value="";

text.value="";

renderNews();

};

/* حذف */

function deleteNews(index){

if(confirm("این خبر حذف شود؟")){

news.splice(index,1);

localStorage.setItem(

"news",

JSON.stringify(news)

);

renderNews();

}

}

/* ویرایش */

function editNews(index){

title.value=news[index].title;

text.value=news[index].text;

news.splice(index,1);

localStorage.setItem(

"news",

JSON.stringify(news)

);

renderNews();

}

/* شروع */

renderNews();
