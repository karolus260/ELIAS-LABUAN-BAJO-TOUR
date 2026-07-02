/*=====================================
CONTACT FORM TO WHATSAPP
=====================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const subject=document.getElementById("subject").value;

const message=document.getElementById("message").value;

const text=
`Halo Elias Labuan Bajo Tour 👋

Saya ingin menghubungi Anda.

========================

👤 Nama : ${name}

📧 Email : ${email}

📌 Subjek : ${subject}

💬 Pesan :

${message}

========================

Dikirim melalui Website Elias Labuan Bajo Tour.`;

const url=
`https://wa.me/6282145840302?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");
alert("Terima kasih 😊\nAnda akan diarahkan ke WhatsApp.");
window.open(url,"_blank");

contactForm.reset();

});

}
/*==============================
BACK TO TOP
==============================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backToTop.style.display="block";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});