console.log("Karachi False Ceiling Website Loaded");

const questions = document.querySelectorAll(".faq-question");

questions.forEach(btn => {

    btn.addEventListener("click", () => {

        const answer = btn.nextElementSibling;
        const icon = btn.querySelector("span");

        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach(item => {
            if (item !== answer) {
                item.style.display = "none";
                item.previousElementSibling.querySelector("span").textContent = "+";
            }
        });

        // Toggle current answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            answer.style.display = "block";
            icon.textContent = "−";
        }

    });

});
