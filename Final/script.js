// Tab switcher
function showTab(tabId) {
    document.getElementById("greet").style.display = "none";
    document.getElementById("json").style.display = "none";
    document.getElementById(tabId).style.display = "block";
}

// Greet section
function submitName() {
    const name = document.getElementById("nameInput").value;
    const result = document.getElementById("greetResult");
    if (name.trim() !== "") {
        result.innerText = `Hello ${name}`;
    } else {
        result.innerText = "Please enter your name.";
    }
}

function resetName() {
    document.getElementById("nameInput").value = "";
    document.getElementById("greetResult").innerText = "";
}

// JSON validator section
function validateJSON() {
    const input = document.getElementById("jsonInput").value;
    const result = document.getElementById("jsonResult");

    try {
        JSON.parse(input);
        result.innerText = "Valid JSON";
        result.style.color = "green";
    } catch (e) {
        result.innerText = "Invalid JSON";
        result.style.color = "red";
    }
}

function resetJSON() {
    document.getElementById("jsonInput").value = "";
    document.getElementById("jsonResult").innerText = "";
}
