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
        form.submit();
    }
}
