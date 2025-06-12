function submitName() {
    const name = document.getElementById("nameInput").value;

    fetch("http://127.0.0.1:5000/greet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("message").innerText = "Error: " + error;
    });
}

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("message").innerText = "";
}
