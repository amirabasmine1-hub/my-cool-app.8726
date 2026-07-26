import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

/* ==========================
   Login Protection
========================== */

const PASSWORD = "Amir2026";

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

/* ==========================
   Elements
========================== */

const title=document.getElementById("newsTitle");
const text=document.getElementById("newsText");
const addBtn=document.getElementById("addNews");
const newsList=document.getElementById("newsList");

/* ==========================
   Add News
========================== */

addBtn.onclick=async()=>{

if(title.value.trim()===""||text.value.trim()===""){

alert("همه فیلدها را پر کنید.");

return;

}

try{

await addDoc(collection(db,"news"),{

title:title.value,

text:text.value,

date:new Date().toLocaleString("fa-IR")

});

title.value="";
text.value="";

alert("✅ خبر ثبت شد");

renderNews();

}catch(error){

console.error(error);

alert("❌ خطا در ثبت خبر");

}

};

/* ==========================
   Show News
========================== */

async function renderNews(){

newsList.innerHTML="";

const snapshot=await getDocs(collection(db,"news"));
   snapshot.forEach((item)=>{

const data=item.data();

newsList.innerHTML+=`

<div class="newsItem">

<h3>${data.title}</h3>

<p>${data.text}</p>

<small>${data.date}</small>

<div class="actions">

<button onclick="deleteNews('${item.id}')">

🗑 حذف

</button>

</div>

</div>

`;

});

}

/* ==========================
   Delete News
========================== */

window.deleteNews=async(id)=>{

if(!confirm("خبر حذف شود؟")) return;

await deleteDoc(doc(db,"news",id));

renderNews();

};

/* ==========================
   Start
========================== */

renderNews();
