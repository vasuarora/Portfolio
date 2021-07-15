let home_btn=document.querySelector(".home");
let home_section=document.querySelector(".introduction-page");

let abt_btn=document.querySelector(".about");
let abt_section=document.querySelector(".about-me-outer");

let resume_btn=document.querySelector(".resume");
let resume_section=document.querySelector(".education-outer-container");

let contact_btn=document.querySelector(".contact");
let contact_section=document.querySelector(".contact-outer-container");

home_btn.addEventListener("click",function(e){
    home_section.scrollIntoView();
})

abt_btn.addEventListener("click",function(e){
    abt_section.scrollIntoView();
})

resume_btn.addEventListener("click",function(e){
    resume_section.scrollIntoView();
})

contact_btn.addEventListener("click",function(e){
    contact_section.scrollIntoView();
})