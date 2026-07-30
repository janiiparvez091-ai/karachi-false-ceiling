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
