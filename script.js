function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if(username === "" || password === ""){
        alert("Please fill all fields!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
}

function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(username === storedUser && password === storedPass){
        document.getElementById("securePage").style.display = "block";
        alert("Login Successful!");
    }
    else{
        alert("Invalid Username or Password!");
    }
}

function logout() {
    document.getElementById("securePage").style.display = "none";
    alert("Logged Out Successfully!");
}