function valid (form) {
    let fail = false;
    const nachname = form.nachname.value;
    const unternehmen = form.unternehmen.value;
    const vorname = form.vorname.value;
    const email = form.email.value;
    const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if (nachname === ""|| nachname === " " || nachname.length < 3 )
        fail = "Nachname field is required";
    else if (unternehmen === ""|| unternehmen === " " || unternehmen.length < 3 )
        fail = "Unternehmen field is required";
    else if(vorname === ""|| vorname === " " || vorname.length < 3 )
        fail = "Vorname field is required";
    else if(!adr_pattern.test(email))
        fail = "Email is not valid";
    if(fail)
        alert(fail);
    else {
        sendData()
    }
}
function sendData() {
    const formData = new FormData(document.getElementById("form"));
    const payload = {};
    for (let pair of formData.entries()) {
        Object.assign(payload, {[pair[0]]: pair[1]})
    }

    fetch("https://api.cert.fmh.de/send-email", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload) })
        .then(res => res.text())
        .then(response => {
            console.log(response);
            if (response === "OK") {
                createMessage('success', 'Alles gut');
                const form = document.getElementById("form-content");
                const success = document.getElementById("success");
                form.className = 'hide';
                success.className = 'show';

            } else {
                createMessage('error', 'General server error');
            }
        })

        .catch(() => {
            createMessage('error', 'General server error');
        });
    return false;
}

function createMessage(type, message) {
    const toast = document.querySelector(".toast");
    const toastContent = document.getElementById("toast-content");
    const messageContent = document.createElement("div");
    const img = document.createElement("img");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span1.innerHTML = type === 'success' ? 'Success': 'Error';
    span2.innerHTML = message;
    img.alt = 'icon';
    img.src = type === 'success' ? './assets/img/check-circle.svg': './assets/img/error-circle.svg';
    messageContent.className = 'message';
    span1.className = 'message-text text-1';
    span1.className = 'message-text text-2';
    if(type === 'success') {
        toast.classList.add('toast-border-success')
    }
    if(type === 'error') {
        toast.classList.add('toast-border-error')
    }

    messageContent.appendChild(span1);
    messageContent.appendChild(span2);
    toastContent.appendChild(img);
    toastContent.appendChild(messageContent);

    // disabled sending button
    document.getElementById("send").disabled = true;
    toast.classList.add("active");

    setTimeout(() =>{
        toast.classList.remove("active");
    }, 2000);

    setTimeout(() =>{
        img.remove();
        messageContent.remove();
        if(type === 'success') {
            toast.classList.remove("toast-border-success");
        }
        toast.classList.remove("toast-border-error");
        document.getElementById("send").disabled = false;
    }, 3000)
}
