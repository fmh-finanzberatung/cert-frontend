window.addEventListener('load', fetchTemplateAndLoadTableData)

async function fetchTemplateAndLoadTableData() {
    fetch('https://api.cert.fmh.de/template', ).then((res) => {
        return res.text()
    }).then(function(html) {
        document.write(html);
        setTimeout(() => {
            const content = document.getElementById('template-content');
            if(content) {
                content.innerHTML = '';
                const link1 = document.createElement('link');
                const link2 = document.createElement('link');
                const script1 = document.createElement('script');
                const script2 = document.createElement('script');
                link1.type = 'text/css';
                link1.href = 'assets/styles/form.css';
                link1.rel = 'stylesheet'
                link2.type = 'text/css';
                link2.href = 'assets/styles/index.css';
                link2.rel = 'stylesheet';
                script1.type = 'text/javascript';
                script1.src = 'script/form.js';
                script1.defer = true;

                document.head.appendChild(link1);
                document.head.appendChild(link2);
                document.head.appendChild(script1);
                document.head.appendChild(script2);
                content.insertAdjacentHTML('beforeend', '<div id="main">\n' +
                    '    <div class="toast">\n' +
                    '        <div class="toast-content" id="toast-content">\n' +
                    '\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    <div class="row section">\n' +
                    '        <div class="col">\n' +
                    '            <div class="badge">\n' +
                    '                <img width="430" height="150" src="https://www.fmh.de/resources/assets/1936/original/0eb4d826ec0bcf0d380a246530bd491ceaee6f78-Vermittler-Zertifikat-Logo.png" alt="Badge"/>\n' +
                    '            </div>\n' +
                    '            <p class="paragraph">Kundenorientierte Baufinanzierung verdient Anerkennung</p>\n' +
                    '            <p class="paragraph">Qualität ist der Schlüssel, wenn es um die Wahl eines Vermittlers ' +
                    '                für Ihre Baufinanzierung geht. Deshalb führen wir umfassende Prüfungen durch und vergeben ein FMH-Zertifikat an ' +
                    '                Vermittler, die hohe Qualitätsstandards erfüllen.</p>\n' +
                    '            <p class="paragraph">In Zusammenarbeit mit führenden Anbietern auf dem Markt ' +
                    '                entwickelten wir insgesamt 88 Kriterien, nach denen Vermittler in Deutschland in allen relevanten' +
                    '                Qualitätsaspekten bewertet werden. So können Sie sich darauf verlassen, dass Sie neben' +
                    '                attraktiven Zinsen auch den besten Service erhalten. </p>\n' +
                    '            <p class="paragraph">Wichtig waren uns dabei vier Bereiche:</p>\n' +
                    '            <ul class="paragraph">' +
                    '               <li>Technik und digitale Angebote</li>' +
                    '               <li>Dienstleistungen rund um die Beratung</li>' +
                    '               <li>Service ab Unterschrift bis zur Darlehensauszahlung</li>' +
                    '               <li>Betreuung nach der Darlehensauszahlung</li>' +
                    '           </ul>\n' +
                    '            <p class="paragraph">Vermittler, die mindestens 75 Prozent der FMH-Kriterien erfüllen,' +
                    '               haben die Möglichkeit, unser FMH-Zertifikat zu erlangen. Auf dieser Seite finden Sie die ersten' +
                    '               Baufinanzierungs-Makler mit FMH-Zertifikat.</p>' +
                    '           <p class="paragraph">Vertrauen Sie auf unser Zertifizierungsverfahren und finden Sie ' +
                    '               einen qualifizierten Vermittler für Ihre Baufinanzierung.</p>' +
                    '           <p class="paragraph">Sie sind selbst Vermittler und möchten das FMH-Zertifikat erhalten?' +
                    '               Dann nehmen Sie gerne Kontakt mit uns auf.</p>\n' +
                    '        </div>\n' +
                    '        <div class="col">\n' +
                    '            <div class="form-container">\n' +
                    '                <div id="form-content">\n' +
                    '                    <h2>Zertifizierung anfragen</h2>\n' +
                    '                    <form onsubmit="sendData()" id="form">\n' +
                    '                        <div class="form-group">\n' +
                    '                            <label for="vorname">Vorname *</label>\n' +
                    '                            <input type="text" class="form-control" id="vorname" name="vorname"\n' +
                    '                                   placeholder=""\n' +
                    '                            >\n' +
                    '                        </div>\n' +
                    '                        <div class="form-group">\n' +
                    '                            <label for="nachname">Nachname *</label>\n' +
                    '                            <input type="text" class="form-control" id="nachname" name="nachname"\n' +
                    '                                   placeholder="">\n' +
                    '                        </div>\n' +
                    '\n' +
                    '                        <div class="form-group">\n' +
                    '                            <label for="unternehmen">Unternehmen *</label>\n' +
                    '                            <input type="text" class="form-control" id="unternehmen" name="unternehmen"\n' +
                    '                                   placeholder="">\n' +
                    '                        </div>\n' +
                    '                        <div class="form-group">\n' +
                    '                            <label for="email">E-Mail Adresse *</label>\n' +
                    '                            <input type="text" class="form-control" id="email" name="email" placeholder="">\n' +
                    '                        </div>\n' +
                    '                        <div class="form-group">\n' +
                    '                            <label for="phone">Telefonnummer</label>\n' +
                    '                            <input type="text" class="form-control" id="phone" name="phone"\n' +
                    '                                   placeholder="">\n' +
                    '                        </div>\n' +
                    '                        <div class="form-check">\n' +
                    '                            <input type="checkbox" class="form-check-input" id="accept" name="accept">\n' +
                    '                            <label for="accept" class="form-check-label">\n' +
                    '                                Bitte bestätigen Sie, dass Sie die <a href="https://www.fmh.de/datenschutz">Datenschutzrichtlinien</a> der\n' +
                    '                                FMH-Finanzberatung gelesen haben und diese akzeptieren.\n' +
                    '                            </label>\n' +
                    '                        </div>\n' +
                    '                        <div class="action-container">\n' +
                    '                            <input id="send" type="button" class="send" value="Senden"\n' +
                    '                                   onclick="valid(document.getElementById(\'form\'))" >\n' +
                    '                        </div>\n' +
                    '                        <br><span style="color: #fff; font-weight: 300;"> * Pflichtfelder</span>\n' +
                    '                    </form>\n' +
                    '                </div>\n' +
                    '                <span class="hide" id="success">Danke für Ihre Anfrage, wir werden uns umgehend bei Ihnen melden.</span>\n' +
                    '            </div>\n' +
                    '\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    <div class="row" style="margin: 50px 0">\n' +
                    '        <h2>Diese Vermittler für Baufinanzierung haben bereits das Zertifikat der FMH-Finanzberatung erhalten</h2>\n' +
                    '    </div>\n' +
                    '    <div class="row" id="table-container">\n' +
                    '    </div>\n' +
                    '</div>');
                fetchTableData()
            }

        }, 500)

    }).catch(e => {
        console.log(e)
    })
}
async function fetchTableData(){
        try {
        const certificates = await fetchDataWithApiToken();
            if(certificates?.length) {
                const row = document.getElementById('table-container');

                const table = document.createElement("table");
                const headerRow = document.createElement("tr");
                const thead = document.createElement("thead");
                const th1 = document.createElement("th");
                const th2 = document.createElement("th");
                const body = document.createElement("tbody");
                table.classList.add('table');
                th1.classList.add('th');
                th2.classList.add('th');
                th1.innerHTML = 'Name';
                th2.innerHTML = 'Tätigkeitsgebiet';
                headerRow.appendChild(th1);
                headerRow.appendChild(th2);
                thead.appendChild(headerRow);
                table.appendChild(thead);

                certificates.forEach(function (item) {
                    const trBody = document.createElement("tr");
                    const tdBody1 = document.createElement("td");
                    const tdBody2 = document.createElement("td");
                    tdBody1.classList.add('td');
                    tdBody2.classList.add('td');
                    tdBody2.innerHTML = item.particularity || '';
                    if(item.url){
                        const a = document.createElement("a");
                        a.href = item.url;
                        a.target= '_blank';
                        a.innerHTML = item.name;
                        tdBody1.appendChild(a)
                    }
                    if(!item.url) {
                        tdBody1.innerHTML = item.name || '';
                    }
                    trBody.appendChild(tdBody1);
                    trBody.appendChild(tdBody2);
                    body.appendChild(trBody);
                });
                table.appendChild(body);
                row.appendChild(table);
            } else {
                document.getElementById('table-container').innerHTML = 'No offers'
            }
        } catch (e) {
            console.log(`Error Fetching data : ${e}`)
            document.getElementById('table-container').innerHTML = 'Error Loading Data'
        }
}

async function fetchDataWithApiToken() {
    const token = await fetch('https://api.cert.fmh.de/token')
        .then(res => res.json())
        .then(res => res.data?.authenticateUserWithPassword?.sessionToken || '')
    return fetch('https://cms.fmh.de/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `query ($active: Boolean) {
        brokerCertificates(
          where: {
            active: {
              # nur freigegebene Zertifikate
              equals: $active
            }
          }
        ) {
          name
          fieldOfEngagement
          url
          particularity
        }
      }
      `
        })
    })
        .then(res => res.json())
        .then(result => result.data?.brokerCertificates || [])
}
