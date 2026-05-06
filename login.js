// Form switch panna
function toggleForm() {
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');
    loginBox.style.display = loginBox.style.display === "none" ? "block" : "none";
    signupBox.style.display = signupBox.style.display === "none" ? "block" : "none";
}

// Signup function
function signup() {
    const fullname = document.getElementById('newFullname').value;
    const username = document.getElementById('newUser').value;
    const pass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    // Empty check
    if(username === "" || pass === "") {
        alert("Username matrum Password kandippa venum!");
        return;
    }

    // Password matching check
    if(pass !== confirmPass) {
        alert("Password match aagavillai!");
        return;
    }

    // Username already iruntha check panna
    if(localStorage.getItem(username)) {
        alert("Intha Username munnadiye irukku. Vera choose pannunga!");
        return;
    }

    // Object-ah save pannurom
    const userData = {
        name: fullname,
        password: pass
    };

    localStorage.setItem(username, JSON.stringify(userData));
    alert("Signup Success! Ippo Login pannunga.");
    toggleForm();
}

// Login function
function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPassword').value;

    const savedData = localStorage.getItem(user);

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.password === pass) {
            alert("Vanakkan " + (parsedData.name || user) + "! Neenga login aagitinga.");
        } else {
            alert("Password thappu!");
        }
    } else {
        alert("Intha Username-la account illai!");
    }
    window.location.href="dashboard.html";
}
  