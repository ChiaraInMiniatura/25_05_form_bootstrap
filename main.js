function inviaForm(){

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confpassword = document.getElementById("confpassword").value;

    let output = document.getElementById("output");

    // VALIDAZIONE
    if(
        nome === "" ||
        cognome === "" ||
        email === "" ||
        password === "" ||
        confpassword === ""
    ){
        alert("Compila tutti i campi");
        return;
    }

    if(!email.includes("@")){
        alert("Email non valida");
        return;
    }

    if(password !== confpassword){
        alert("Le password non coincidono");
        return;
    }

    // OUTPUT
    let risultato = `
        <h2><strong>Dati inseriti</strong></h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cognome:</strong> ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    output.innerHTML = risultato;
    output.classList.remove("d-none");

    document.querySelector("form").reset();
}


function togglePassword(inputId, iconId){

    let input = document.getElementById(inputId);
    let icon = document.getElementById(iconId);

    if(input.type === "password"){
        input.type = "text";
        icon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/eye-off.svg";
    } else {
        input.type = "password";
        icon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/eye.svg";
    }
}