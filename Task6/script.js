function validateJSON() {
    const input = document.getElementById("jsonInput").value;
    const result = document.getElementById("result");

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
    document.getElementById("result").innerText = "";
}
