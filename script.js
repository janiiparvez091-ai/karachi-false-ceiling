console.log("Karachi False Ceiling Website Loaded");
document.querySelectorAll(".faq button").forEach(button=>{
    button.addEventListener("click",()=>{
        let answer = button.parentElement.nextElementSibling;

        if(answer.style.display==="block"){
            answer.style.display="none";
            button.innerHTML="+";
        }else{
            answer.style.display="block";
            button.innerHTML="-";
        }
    });
});
const questions = document.querySelectorAll(".faq-question");

questions.forEach(btn => {

btn.addEventListener("click", () => {

let answer = btn.nextElementSibling;

document.querySelectorAll(".faq-answer").forEach(item => {
if(item !== answer){
item.style.display = "none";
}
});

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

});

});
