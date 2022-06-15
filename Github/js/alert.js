
const $ = x => document.querySelector(x), _$ = x => document.querySelectorAll(x);
const form = $(".form-section");

form.addEventListener("submit", e => {
    e.preventDefault();
    let username = $("#username").value, password = $("#password").value;
    console.log({username, password})
    if(username == "Joshua" && password == "John"){
        createAlert("&#10004; Success! You will be redirected shortly...", 'success');
    }else{
        createAlert("&#10007; Error! Invalid username/password combination", "danger");
    }
})

// setTimeout(() => $(".alert").classList.toggle("deactivate"), 1500);
function createAlert(message, className){
    let div = document.createElement("DIV"); div.setAttribute("class", "alert");
    div.classList.add(className); div.innerHTML = message; 
    div.style.transition = 'all .5s ease-in-out'; document.body.appendChild(div);
    setTimeout(() => div.classList.toggle("deactivate"), 2500);
    setTimeout(() => div.remove(), 3000);
}
