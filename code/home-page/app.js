let allFaq = document.querySelectorAll(".One-div");
let signIn=document.querySelectorAll(".signIn")

document.querySelector(".signIn").addEventListener("click", () => {
    window.location.href = "../sign-in page/index.html";
});

for (let div of allFaq) {
    div.addEventListener("click", () => {

        let icon = div.querySelector("i");
        let answer = div.querySelector("p");

        div.classList.toggle("active");
        
       
        answer.classList.toggle("hidden");
        
       
        if (div.classList.contains("active")) {
            
            
            icon.classList.replace("fa-plus", "fa-minus");
        } else {
            icon.classList.replace("fa-minus", "fa-plus");
        }
    });
}
