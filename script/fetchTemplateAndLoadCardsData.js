window.addEventListener('load', fetchTemplateAndLoadCardsData)

async function fetchTemplateAndLoadCardsData() {
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
                    '            <p class="paragraph">Hervorragende Baufinanzierungsvermittler verdienen Anerkennung.</p>\n' +
                    '            <p class="paragraph">Qualität ist der Schlüssel, wenn es um die Wahl eines Vermittlers für\n' +
                    '                Ihre Baufinanzierung geht. Deshalb führen wir umfassende Prüfungen\n' +
                    '                durch und vergeben unser begehrtes FMH-Zertifikat an Vermittler, die\n' +
                    '                hohe Qualitätsstandards erfüllen.</p>\n' +
                    '            <p class="paragraph">Wir haben in Zusammenarbeit mit führenden Anbietern auf dem Markt\n' +
                    '                insgesamt 000 Kriterien entwickelt, nach denen Vermittler in\n' +
                    '                Deutschland in allen relevanten Qualitätsaspekten bewertet werden.\n' +
                    '                Durch unsere gründliche Prüfung können Sie sich darauf verlassen,\n' +
                    '                dass Sie nicht nur attraktive Zinsen erhalten, sondern auch den besten\n' +
                    '                Service genießen.</p>\n' +
                    '            <p class="paragraph">Vermittler, die mindestens 75 % dieser Kriterien erfüllen, haben die\n' +
                    '                Möglichkeit, unser FMH-Zertifikat zu erhalten. Auf dieser Seite finden\n' +
                    '                Sie eine Liste der geprüften Vermittler in Deutschland.</p>\n' +
                    '            <p class="paragraph">Vertrauen Sie auf unser Zertifizierungsverfahren und finden Sie einen\n' +
                    '                qualifizierten Vermittler für Ihre Baufinanzierung.</p>\n' +
                    '            <p class="paragraph">Sind Sie selbst Vermittler und möchten das FMH-Zertifikat erhalten?\n' +
                    '                Dann nehmen Sie gerne Kontakt mit uns auf.</p>\n' +
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
                    '        <h2>Vermittler mit FMH-Zertifikat</h2>\n' +
                    '    </div>\n' +
                    '    <div class="row" id="cards">\n' +
                    '    </div>\n' +
                    '</div>');
                fetchCardsData()
            }

        }, 500)

    }).catch(e => {
        console.log(e)
    })
}
async function fetchCardsData(){
    const payload =
         `{
           fmhBasisAnbieterliste(anbietertyp:[7]){
            data{
              anbieterId
              anbietername
              anbieterLogoUrl
              internetUrl
              gruendungsort
            }
          }
        }
      `
        try {
            const response = await fetch('https://api.cert.fmh.de/certificates', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                }, body: payload });
            const { data = {} } = await response.json();
            const filtered = (data.fmhBasisAnbieterliste?.data || []).filter(item => [110,267].includes(item?.anbieterId));
            if(filtered?.length) {
                const row = document.getElementById('cards');
                const cols = document.createDocumentFragment();
                filtered.forEach(function (item) {
                    const cardContainer = document.createElement("div");
                    const cardHeader =  document.createElement("div");
                    const cardBody =  document.createElement("div");
                    const cardActions =  document.createElement("div");
                    const locationDiv = document.createElement("div");
                    const h3 =  document.createElement("h3");
                    const p =  document.createElement("p");
                    const img = document.createElement("img");
                    const locationImage = document.createElement("img");
                    const a = document.createElement("a");

                    cardContainer.className = 'card';
                    cardHeader.className = 'card-header';
                    cardBody.className = 'card-body';
                    cardActions.className = 'card-action';
                    locationDiv.className = 'location';
                    if(filtered.length <=2) {
                        row.classList.add('row-around');
                        cardContainer.classList.add('card-40');
                    }
                    locationImage.alt = 'Location';
                    locationImage.height = 30;
                    locationImage.width = 23;
                    locationImage.src = './assets/img/location.png';

                    img.src = item?.anbieterLogoUrl || '';
                    img.alt = 'Logo';
                    img.height = 40;
                    cardHeader.appendChild(img);
                    h3.innerHTML = item?.anbietername || '';
                    p.innerHTML = item?.gruendungsort || '';
                    a.innerHTML = 'Zum Anbieter';
                    a.href = item?.internetUrl || '#'
                    locationDiv.appendChild(locationImage);
                    locationDiv.appendChild(p);
                    cardBody.appendChild(h3);
                    cardBody.appendChild(locationDiv);
                    cardActions.appendChild(a);

                    cardContainer.appendChild(cardHeader);
                    cardContainer.appendChild(cardBody);
                    cardContainer.appendChild(cardActions);
                    cols.appendChild(cardContainer);
                });
                row.appendChild(cols);
            } else {
                document.getElementById('cards').innerHTML = 'No offers'
            }
        } catch (e) {
            console.log(`Error Fetching data : ${e}`)
            document.getElementById('cards').innerHTML = 'Error Loading Data'
        }


}
