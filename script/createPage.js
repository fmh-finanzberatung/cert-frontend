window.addEventListener('load', createPage)

async function createPage() {
  fetch('https://api.cert.fmh.de/template',).then((res) => {
    return res.text()
  }).then(function (html) {
    document.write(html);
    setTimeout(() => {
      const content = document.getElementById('template-content');
      const main = document.querySelector('.fmh-main');
      const box1 = document.createElement("div");
      const box2 = document.createElement("div");
      const box3 = document.createElement("div");
      const box4 = document.createElement("div");
      const box5 = document.createElement("div");

      box1.insertAdjacentHTML('beforeend', '<div class="first-box">\n' +
       '<div class="first-box-content">\n' +
          '    <img' +
          '            width="600" \n' +
          '            height="200"\n' +
          '            src="./assets/img/Logo.webp" \n' +
          '            srcset="./assets/img/Logo.webp 1250w, ./assets/img/Logo-medium.webp 640w, ./assets/img/Logo-medium.webp 320w,"\n' +
          '            sizes="(max-width: 1250px) 1250px,(max-width: 640px) 640px,(max-width: 320px) 320px, "\n' +
          '            alt="FMH Finanzberatung"\n' +
          '            />\n' +
       '    <div class="title-container">\n' +
       '        <h1>Das FMH-Zertifikat für Baufinanzierungsvermittler</h1>\n' +
       '        <h2>Geprüfte Expertise für echten Kundennutzen.</h2> \n' +
       '    </div>\n' +
       '    <div class="contact">\n' +
       '        <a href="#form-content">Kontakt</a>\n' +
       '    </div>\n' +
       '</div>\n'+
        '</div>');

      box2.insertAdjacentHTML('beforeend', '<div class="secondary-box layout">\n' +
        '    <div class="mb-5">\n' +
        '        <img' +
        '            srcset="./assets/img/zitat-max-herbst-small.webp 320w,' +
        '                    ./assets/img/zitat-max-herbst-medium.webp 640w"\n' +
        '            sizes="(max-width: 320px) 320px, 320px;' +
        '                   (max-width: 640px) 640px, 640px;"' +
        '           height="200"' +
        '           width="200"' +
        '           src="./assets/img/zitat-max-herbst-medium.webp"' +
        '           alt="Max Herbst" ' +
        '           class="circle-200"/>\n' +
        '        <div class="author-box">\n' +
        '            <p class="italic font-size-medium">„Das Zertifikat belegt: Wirklich gute Baufinanzierungsvermittler haben mehr zu bieten als nur gute Zinsen.”</p>\n' +
        '            <p class="text-secondary"><span class=" text-secondary bolder">Max Herbst</span> | <span class=" text-secondary bolder">Inhaber FMH-Finanzberatung</span></p>\n' +
        '        </div>\n' +
        '\n' +
        '    </div>\n' +
        '      <p class="mb-5">Rund 1.000 Banken kooperieren in Deutschland mit ca. 50.000 Vermittlern für die ' +
          '                    Baufinanzierung. Darunter gibt es exzellente, gute und weniger gute Vermittler. Doch woher sollen Kunden ' +
          '                    wissen, welche der ca. 50.000 Vermittler in welche Kategorie fällt? Zwar müssen in Deutschland alle ' +
          '                    Vermittler einen Sachkunde-Nachweis erbringen, doch für die vielleicht wichtigste finanzielle Entscheidung' +
          '                    im Leben, wünschen Kunden sich mehr als Sachkunde: Sie wollen individuelle Beratung und Unterstützung. ' +
          '                    Genau deshalb gibt es jetzt das FMH-Zertifikat für Baufinanzierungsvermittler. </p>\n' +
        '</div>')

      box3.insertAdjacentHTML('beforeend', '<div class="background-primary">\n' +
        '    <div class="layout box3">\n' +
          '        <div class="image2"><img height="250" width="350" src="./assets/img/FMH-Zertifikat-medium.webp" alt="FMH-Zertifikat."></div>\n' +
        '        <div class="box3-wrapper">\n' +
        '            <p class="bolder">Übersicht</p>\n' +
        '            <div>\n' +
        '                <img src="./assets/img/arrow-right-solid.svg" alt="arrow-right" height="15" width="15">\n' +
        '                <a class="box2-link" href="#warum">Warum ein Zertifikat für Baufinanzierungsvermittler?</a>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <img src="./assets/img/arrow-right-solid.svg" alt="arrow-right" height="15" width="15">\n' +
        '                <a class="box2-link" href="#grundvoraussetzungen">Grundvoraussetzungen zum Erwerb des Zertifikats</a>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <img src="./assets/img/arrow-right-solid.svg" alt="arrow-right" height="15" width="15">\n' +
        '                <a class="box2-link" href="#ablauf">Antrag und Ablauf der Prüfung</a>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <img src="./assets/img/arrow-right-solid.svg" alt="arrow-right" height="15" width="15">\n' +
        '                <a class="box2-link" href="#mehrwert">Mehrwert für Baufinanzierungsvermittler</a>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <img src="./assets/img/arrow-right-solid.svg" alt="arrow-right" height="15" width="15">\n' +
        '                <a class="box2-link" href="#form-content">Die Zertifizierung anfragen</a>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                 <img src="./assets/img/arrow-right-solid.svg" alt="arrow-right" height="15" width="15">\n' +
        '                  <a class="box2-link" href="#vermittler">Vermittler mit unserem Zertifikat</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');
      box4.insertAdjacentHTML('beforeend', '<div class="layout">\n' +
        '    <div class="box4">\n' +
          '            <a id="warum"></a>\n' +
        '        <h2>Warum ein Zertifikat für Baufinanzierungsvermittler?</h2>\n' +
        '        <div>\n' +
        '           <p class="mb-5">Trotz exzellenter Beratungsleistung und hohen Servicestandards fragen Sie sich ' +
          '                         sicher manchmal, wie Sie sich von Ihren Mitbewerbern abheben können. ' +
          '                         Das FMH-Zertifikat „geprüft & gecheckt“ bietet Ihnen diese Möglichkeit: Es bewertet' +
          '                         nicht das Zinsangebot, das sich täglich ändern kann, sondern vorrangig den ' +
          '                         technischen Standard, die Beratungsintensität, die Betreuung zwischen Unterschrift ' +
          '                         und Darlehensauszahlung sowie den Service nach erfolgter Auszahlung.' +
          '                         Ob das Zinsangebot gut oder weniger gut ist, können Kunden nach 15 Minuten ' +
          '                         feststellen, nicht aber, was sie an Betreuung und Dienstleistung erhalten.' +
          '                         Das FMH-Zertifikat soll genau diesen Mehrwert herausstellen.</p>\n' +
          '            <a id="grundvoraussetzungen"></a>\n' +
        '        </div>\n' +
        '        <h2>Grundvoraussetzungen zum Erwerb des Zertifikats</h2>\n' +
        '        <div class="row section-basic-requirements">\n' +
        '         <div class="col">' +
        '           <img' +
        '              srcset="./assets/img/shutterstock-small.webp 320w,' +
        '                    ./assets/img/shutterstock-medium.webp 640w"\n' +
        '              sizes="(max-width: 320px) 320px, 320px;' +
        '                   (max-width: 640px) 640px, 640px;"' +
        '               height="174"' +
        '               width="500"' +
        '               src="./assets/img/shutterstock-medium.webp"' +
        '               alt="Shutterstock" ' +
        '               />\n' +
        '         </div>\n' +
        '         <div class="col align-center">\n' +
        '          <span>Jeder Baufinanzierungsvermittler muss in Deutschland IHK-geprüft sein und eine behördliche ' +
          '              Erlaubnis im Sinne des Paragrafen 34i der Gewerbeordnung vorweisen: Diese Grundvoraussetzung ' +
          '              muss erfüllt sein, um das FMH-Zertifikat beantragen zu können</span>\n' +
        '         </div>\n' +
          '            <a id="ablauf"></a>\n' +
        '        </div>\n' +
        '        <h2  style="margin-top: 50px">Ablauf der Prüfung & Auswertung</h2>\n' +
        '        <div class="wrapper column pl-0">\n' +
        '            <div>\n' +
        '                <span class="number">1</span>\n' +
        '                <span class="max-w-80">Nachdem Sie unser <a href="#form-content" class="text-secondary">Kontaktformular</a> ausgefüllt und abgeschickt haben, lassen wir Ihnen das Auftragsformular inkl. Allen wichtigen Infos (Preis, rechtliche Vorgaben und Abwicklung)\n' +
        '                     zukommen.' +
        '                </span>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <span class="number">2</span>\n' +
        '                <span class="max-w-80">' +
          '                Sie schicken uns den vollständig ausgefüllten Auftrag per E-Mail zurück.' +
          '                Sollten Sie Fragen vorweg haben, steht Ihnen ein persönlicher' +
          '                Ansprechpartner gern zur Seite.' +
          '              </span>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <span class="number">3</span>\n' +
        '                <p class="max-w-80">' +
          '                 Da wir die Prüfung vor Ort persönlich vornehmen, erwarten wir für die Durchführung der ' +
          '                 Überprüfung Ihrer Dienstleistungen, dass Sie 70 Prozent der anfallenden Gebühr vor einer ' +
          '                 Terminvereinbarung an die FMH-Finanzberatung zahlen. Anschließend meldet sich unsere ' +
          '                 Prüferin/Prüfer bei Ihnen, um einen Besuchstermin zu vereinbaren. Legen Sie am besten ' +
          '                 bereits vorab einen internen Ansprechpartner für die Zertifizierung fest.' +
          '             </p>\n' +
        '            </div>\n' +
        '            <div class="info-container align-center">\n' +
        '               <img src="./assets/img/information.svg" alt="info" width="30" height="30">\n' +
        '              <span>\n' +
        '                     Der Ansprechpartner sollte kompetent sein und Statements für das Unternehmen' +
        '                     treffen dürfen. Die Bewertung kann sich nicht ausschließlich auf mündliche ' +
        '                     Aussagen des Vermittlers stützen, sondern müssen entsprechend belegbar sein.\n' +
        '              </span>\n' +
        '           </div>\n' +
        '         <div>\n' +
        '            <span class="number">4</span>\n' +
        '            <span class="max-w-80">Wenn der Termin feststeht, besucht Sie eine FMH-Mitarbeiterin/Mitarbeiter in Ihren Räumlichkeiten,\n' +
        '                 um die Überprüfung durchzuführen.<br/>\n' +
        '                 <strong>Wichtig:</strong> Um einem reibungslosen Ablauf zu ermöglichen, sollte der von Ihnen ernannte Ansprechpartner<br/>\n' +
        '                 am Tag der Prüfung ca. 3 Stunden von allen anderen Verpflichtungen befreit sein.' +
        '           </span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '           <span class="number">5</span>\n' +
        '           <span class="max-w-80">' +
          '             Der FMH-Mitarbeiter geht am Ende der „Bestandsaufnahme“ die notierten Antworten nochmals durch' +
          '             und lässt Sie oder Ihren Mitarbeiter gegenzeichnen. Beide Parteien verpflichten sich zur' +
          '             Verschwiegenheit über die erhaltenen Interna und Abläufe.' +
          '        </span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <span class="number">6</span>\n' +
        '              <span class="max-w-80">\n' +
        '                 Im letzten Schritt werten wir die Ergebnisse in unserer Zentrale aus. Die Bewertung und Gewichtung erfolgen unabhängig und<br/>\n' +
        '                 diskret. Das Ergebnis teilen wir Ihnen innerhalb von fünf Arbeitstagen mit.\n' +
        '            </span>\n' +
        '        </div>\n' +
        '        </div>\n' +
        '        <h2  style="margin-top: 50px">Kriterien, die Vermittler erfüllen müssen</h2>\n' +
        '        <p class="mb-5">Die FMH-Finanzberatung hat bei ihrer Prüfung für das FMH-Zertifikat 90 Fragen definiert. Damit Sie sich eine Vorstellung machen können, hier ein Auszug:</p>\n' +
        '        <div>\n' +
        '        <div class="panels-container">\n' +
        '    <div class="container">\n' +
        '        <div class="v-expansion-panel">\n' +
        '            <div class="v-expansion-panel__shadow"></div>\n' +
        '            <button type="button" class="trigger v-expansion-panel-title">\n' +
        '                <span class="v-expansion-panel-title__overlay">Technische Expertise und digitale Präsenz</span>\n' +
        '                <span class="v-expansion-panel-title__icon"><img height="16" width="16" class="icon" src="./assets/img/arrow.svg" alt="up"/></span>\n' +
        '            </button>\n' +
        '            <div class="content">\n' +
        '                <div class="v-expansion-panel-text">\n' +
        '                    <div class="v-expansion-panel-text__wrapper">\n' +
        '                        <p class="mb-1"><strong>Vorab-Zinsinformationen ohne Dateneingabe:</strong> Sie bieten Zinsinformationen vor der Eingabe persönlicher Daten, um\n' +
        '                            einen schnellen Überblick zu ermöglichen.</p>\n' +
        '                        <p class="mb-1"><strong>Direkte schriftliche Anfrageoption:</strong> Sie ermöglichen eine unkomplizierte schriftliche Anfrage über Ihre Website.\n' +
        '                        </p>\n' +
        '                        <p class="mb-1"><strong>Vielseitiger Kreditvergleich:</strong> Sie haben die Möglichkeit, Ihren Kunden, verschiedene Kreditinstitute gleichzeitig aufzuzeigen, um die beste Finanzierungslösung zu finden.</p>\n' +
        '                        <p class="mb-1"><strong>Professionelle Kundenbetreuung durch CRM-System:</strong> Sie setzen ein leistungsstarkes CRM-System ein, um eine reibungslose Kundenbetreuung und Service zu gewährleisten.</p>\n' +
        '                        <p class="mb-1"><strong>Digitale Beratungsoptionen:</strong> Sie bieten auch digitale Beratungsmöglichkeiten per Video-Calls oder Telefon an, um eine individuelle Beratung zu ermöglichen.</p>\n' +
        '                        <p class="mb-1"><strong>Eigene digitale Services:</strong> Sie bieten maßgeschneiderte digitale Services wie Rechner und Antragsstrecken an, um den Finanzierungsprozess zu erleichtern.</p>\n' +
        '                        <p class="mb-0"><strong>Erreichbarkeit in Ausnahmesituationen:</strong> Sie garantieren eine stets erreichbare Ansprechperson, selbst während Urlaubs- oder Krankheitsphasen.</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="container">\n' +
        '        <div class="v-expansion-panel">\n' +
        '            <div class="v-expansion-panel__shadow"></div>\n' +
        '            <button type="button" class="trigger v-expansion-panel-title">\n' +
        '                <span class="v-expansion-panel-title__overlay">Professionelle Beratungsstandards</span>\n' +
        '                <span class="v-expansion-panel-title__icon"><img height="16" width="16"  class="icon" src="./assets/img/arrow.svg" alt="up"/></span>\n' +
        '            </button>\n' +
        '            <div class="content">\n' +
        '                <div class="v-expansion-panel-text">\n' +
        '                    <div class="v-expansion-panel-text__wrapper">\n' +
        '                        <p class="mb-1"><strong>Servicelevel:</strong> Sie reagieren innerhalb eines definierten Zeitraums auf Kundenanfragen.</p>\n' +
        '                        <p class="mb-1"><strong>Beratungssprachen:</strong> Sie beraten Ihre Kunden auch auf Englisch oder anderen Fremdsprachen.</p>\n' +
        '                        <p class="mb-1"><strong>Service-Kontrolle und Dokumentation:</strong> Sie verfügen über eine Service-Kontrolle oder Dokumentation für den Beratungsprozess.</p>\n' +
        '                        <p class="mb-1"><strong>Berücksichtigung weiterer Kosten:</strong> Sie berücksichtigen auch Kosten für Umzug, Renovierung der Altwohnung, etc.</p>\n' +
        '                        <p class="mb-1"><strong>Unterstützung bei Unterlagenbeschaffung:</strong> Sie helfen dabei, wichtige Unterlagen und Informationen digital zu organisieren.</p>\n' +
        '                        <p class="mb-1"><strong>Berücksichtigung von Fördermitteln:</strong> Sie berücksichtigen öffentliche Fördermittel (KfW, Landesfördermittel).</p>\n' +
        '                        <p class="mb-0"><strong>Aufklärung über Vertragsrisiken und Instandhaltungskosten:</strong> Sie klären über die Risiken im Darlehensvertrag und zukünftige Instandhaltungskosten auf.</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="container">\n' +
        '        <div class="v-expansion-panel">\n' +
        '            <div class="v-expansion-panel__shadow"></div>\n' +
        '            <button type="button" class="trigger v-expansion-panel-title">\n' +
        '                <span class="v-expansion-panel-title__overlay">Kundenbetreuung entlang des Finanzierungsprozesses</span>\n' +
        '                <span class="v-expansion-panel-title__icon"><img height="16" width="16" class="icon" src="./assets/img/arrow.svg" alt="up"/></span>\n' +
        '            </button>\n' +
        '            <div class="content">\n' +
        '                <div class="v-expansion-panel-text">\n' +
        '                    <div class="v-expansion-panel-text__wrapper">\n' +
        '                        <p class="mb-1"><strong>Kontinuierliche Betreuung nach Vertragsabschluss:</strong> Sie gewährleisten eine engagierte Betreuung Ihrer Kunden zwischen dem Vertragsabschluss und der Auszahlung des Kredits.</p>\n' +
        '                        <p class="mb-1"><strong>Effizientes Auszahlungsmanagement:</strong> Sie verfügen über ein professionelles Auszahlungsmanagement.</p>\n' +
        '                        <p class="mb-1"><strong>Professionelles Beschwerdemanagement:</strong> Sie verfügen über ein effektives Beschwerdemanagement, um Kundenanliegen zeitnah und professionell zu bearbeiten.</p>\n' +
        '                        <p class="mb-0"><strong>Fortbildungsangebot für Mitarbeiter:</strong> Sie bieten ein strukturiertes Fortbildungsangebot, um sicherzustellen, dass Ihre Mitarbeiter stets auf dem neuesten Stand sind und ihre Beratungskompetenz kontinuierlich verbessert wird.</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="container">\n' +
        '        <div class="v-expansion-panel">\n' +
        '            <div class="v-expansion-panel__shadow"></div>\n' +
        '            <button type="button" class="trigger v-expansion-panel-title">\n' +
        '                <span class="v-expansion-panel-title__overlay">Service ab der Auszahlung bis zum Anschlussdarlehen</span>\n' +
        '                <span class="v-expansion-panel-title__icon"><img height="16" width="16" class="icon" src="./assets/img/arrow.svg" alt="up"/></span>\n' +
        '            </button>\n' +
        '            <div class="content">\n' +
        '                <div class="v-expansion-panel-text">\n' +
        '                    <div class="v-expansion-panel-text__wrapper">\n' +
        '                        <p class="mb-1"><strong>Weiterempfehlungs-Marketing praktizieren:</strong> Sie fördern aktiv und gezielt die Empfehlungsbereitschaft Ihrer Kunden.</p>\n' +
        '                        <p class="mb-1"><strong>Pflege der Kundenbeziehung:</strong> Sie pflegen regelmäßigen Kontakt zu Ihren Kunden zu besonderen Anlässen wie Weihnachten, Geburtstagen, etc., um eine langfristige Kundenbindung zu gewährleisten.</p>\n' +
        '                        <p class="mb-1"><strong>Unterstützung bei Immobilienpreisfindung:</strong> Sie unterstützen Ihre Kunden bei möglichen Verkaufsplänen und bieten Hilfe bei der Immobilienpreisfindung.</p>\n' +
        '                        <p class="mb-1"><strong>Informationen zu seriösen Maklern:</strong> Sie informieren Ihre Kunden darüber, dass Sie Kontakte zu seriösen Maklern haben, um ihnen bei Bedarf eine umfassende Unterstützung beim Immobilienverkauf zu bieten.</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '            <a id="mehrwert"></a>\n' +
        '    </div>\n' +
        '    <div class="mt-5 layout">\n' +
        '        <h2>Der Mehrwert für Ihre Marke und Kundenakquise:</h2>\n' +
        '        <div class="row section" style="width: 100%">\n' +
        '            <div class="col-5">\n' +
        '                <img class="certificate" src="./assets/img/placeholder-medium.webp" height="240" width="320" alt="Placeholder">\n' +
        '            </div>\n' +
        '            <div class="col-4">\n' +
        '                <div class="mb-2">\n' +
        '                    <p><strong>Auflistung der Zertifikatsinhaber auf der Internetseite www.FMH.de</strong></p>\n' +
        '                    <p>Nur wer auf der FMH-Seite gelistet ist, darf das Zertifikat werblich einsetzen.</p>\n' +
        '                    <p>Gleichzeitig erfolgt ein Direktlink zu Ihrer Internetseite.</p>\n' +
        '                </div>\n' +
        '                <div class="mb-2">\n' +
        '                    <p><strong>Garantierte Aktualität für langfristige Transparenz</strong></p>\n' +
        '                    <p>Jährliche Neuprüfung des Zertifikats, um Veränderungen der</p>\n' +
        '                    <p>Dienstleistungen neu zu bewerten.</p>\n' +
        '                </div>\n' +
        '                <div class="mb-2">\n' +
        '                    <p><strong>Zwölfmonatige Nutzung des Logos und Zertifikats</strong></p>\n' +
        '                    <p>Eigennutzung für Werbemedien wie Website, Broschüren, Aufsteller,</p>\n' +
        '                    <p>Visitenkarte, E-Mail-Signatur etc. Einsatz des Zertifikats innerhalb der\n' +
        '                        Kundenkommunikation.\n' +
        '                    </p>\n' +
        '                </div>\n' +
          '              <div class="mb-2">\n' +
          '                <p>Ein FMH-Zertifikat ist aussagekräftig: FMH ist seit 1986 eine bekannte Marke in der Finanzwelt, die nahezu täglich in der Presse Erwähnung findet. Wir stehen für korrekte, unabhängige Informationen und einen hohen Kundentrust.</p>\n' +
          '              </div>\n' +
          '              <div class="mb-2">\n' +
          '                <p>Das FMH-Zertifikat zeigt Kunden auf den ersten Blick: Hier handelt es sich um einen Baufinanzierungsvermittler, der wirklich Wert auf individuelle Beratung und hohen Kundennutzen legt.</p></div>\n' +
        '                </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '    </div>\n' +
        '</div>');
      box5.insertAdjacentHTML('beforeend', '<div class="background-primary">\n' +
        '    <div class="layout" style="position: relative">\n' +
        '        <div class="slider">\n' +
        '            <div class="slider-container">\n' +
        '                <div id="content1" class="active slide">\n' +
        '                    <div class="wrapper align-center wrap">\n' +
        '                        <div class="mb-0 mr-5">' +
        '                           <img' +
        '                             srcset="./assets/img/testimonial-christoph-mueller-small.webp 320w,' +
        '                                     ./assets/img/testimonial-christoph-mueller-medium.webp 640w"\n' +
        '                             sizes="(max-width: 320px) 320px;' +
        '                                    (max-width: 640px) 640px;"' +
        '                             height="200"' +
        '                             width="200"' +
        '                             src="./assets/img/testimonial-christoph-mueller-medium.webp"' +
        '                             alt="Christoph Mueller" ' +
        '                             class="circle-200"/>\n' +
        '                        </div>\n' +
        '                        <div class="column mb-0">\n' +
        '                            <p class="italic mb-1">\n' +
        '                              „Das Zertifikat von FMH präsentieren wir gerne unseren Kunden, da es sich um ein besonders vertrauenswürdiges Siegel handelt, das die Qualität unserer Arbeit dokumentiert."\n' +
        '                            </p>\n' +
        '                            <p class="bolder text-secondary">Christoph Müller | Geschäftsführer | DTW GmbH</p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div id="content2" class="slide">\n' +
        '                    <div class="wrapper align-center wrap">\n' +
        '                        <div class="mb-0 mr-5">' +
        '                           <img' +
        '                             srcset="./assets/img/testimonial-timm-grosskurth-small.webp 320w,' +
        '                                     ./assets/img/testimonial-timm-grosskurth-small.webp 640w"\n' +
        '                             sizes="(max-width: 320px) 320px, 320px;' +
        '                                    (max-width: 640px) 640px, 640px;"' +
        '                             height="200"' +
        '                             width="200"' +
        '                             src="./assets/img/testimonial-timm-grosskurth-medium.webp"' +
        '                             alt="Timm Großkurth" ' +
        '                             class="circle-200"/>\n' +
        '                        </div>\n' +
        '                        <div class="column mb-0">\n' +
        '                            <p class="italic mb-1">\n' +
        '                              „Ich bin seit jeher überzeugt, dass die Immobilienfinanzierungsberatung mit Qualität und \n' +
        '                              Service in der Endabrechnung für den Kunden die größte Ersparnis bringt.<br/> Der reine Blick \n' +
        '                              auf Zinssätze, besonders in der Phase der Beratersuche, kann das Bild verfälschen und zu \n' +
        '                              einem nachteiligen Ergebnis für den Verbraucher führen.<br/> FMH richtet mit dem Zertifikat den \n' +
        '                              Fokus auf die Dienstleistungen und erhöht damit die Transparenz für die \n' +
        '                              Finanzierungsinteressenten.“\n' +
        '                            </p>\n' +
        '                            <p class="bolder text-secondary">Timm Großkurth | Geschäftsführer | HW BAUFI Finanzgruppe GmbH</p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
          '                <div id="content3" class="slide">\n' +
          '                    <div class="wrapper align-center wrap">\n' +
          '                        <div class="mb-0 mr-5">' +
          '                           <img' +
          '                             srcset="./assets/img/testimonial-roland-gisinger-small.webp 320w,' +
          '                                     ./assets/img/testimonial-roland-gisinger-medium.webp 640w"\n' +
          '                             sizes="(max-width: 320px) 320px, 320px;' +
          '                                    (max-width: 640px) 640px, 640px;"' +
          '                             height="200"' +
          '                             width="200"' +
          '                             src="./assets/img/testimonial-roland-gisinger-medium.webp"' +
          '                             alt="Roland Gisinger" ' +
          '                             class="circle-200"/>\n' +
          '                        </div>\n' +
          '                        <div class="column mb-0">\n' +
          '                            <p class="italic mb-1">\n' +
          '                              „Das Zertifikat von FMH bedeutet, mit einer der besten und zuverlässigsten \n' +
          '                              Finanzierungspartner im Markt zu sein.<br/> Unsere Marken BAUFI DIREKT und HAUS & \n' +
          '                              WOHNEN wurden unabhängig und objektiv getestet. <br/> Die gesetzten Qualitätsstandards \n' +
          '                              unterstützen den Verbraucher bei der Vertrauensbildung und der Recherche für den \n' +
          '                              bestmöglichen Service.“\n' +
          '                            </p>\n' +
          '                            <p class="bolder text-secondary">Roland Gisinger | Geschäftsführer | BauFi Direkt Finanzierungspartner GmbH</p>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '            </div>\n' +
          '            <div class="dot-container">\n' +
          '                <button onclick = "dot(1)"></button>\n' +
          '                <button onclick = "dot(2)"></button>\n' +
          '                <button onclick = "dot(3)"></button>\n' +
          '            </div>\n' +
        '            </div>\n' +
        '            <button id="prev" onclick="prev()" class="hide" aria-labelledby="Prev"><img height="40" width="40" src="./assets/img/chevron_left.svg" alt="Prev"></button>\n' +
        '            <button id="next" onclick="next()" aria-labelledby="Next"><img height="40" width="40" src="./assets/img/chevron_left.svg" alt="Next" class="rotate-next"></button>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');


      main.prepend(box5);
      main.prepend(box4);
      main.prepend(box3);
      main.prepend(box2);
      main.prepend(box1);

      if (content) {
        content.innerHTML = '';
        document.head.title = 'Cert';
        const links = {
          1: 'assets/styles/form.css',
          2: 'assets/styles/index.css',
          3: 'assets/styles/expansionPanels.css',
          4: 'assets/styles/slider.css'
        }
        const scripts = {
          1: 'script/form.js',
          2: 'script/slider.js'
        };

        [1, 2].forEach(num => {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = scripts[num];
          document.head.appendChild(script);
        });
        [1, 2, 3, 4].forEach(num => {
          const link = document.createElement('link');
          link.type = 'text/css';
          link.href = links[num];
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        })
        const mainHeader = document.getElementsByClassName('fmh-page')?.[0]?.getElementsByTagName('header')?.[0];
        if(mainHeader) {
          mainHeader.remove();
        }
        content.insertAdjacentHTML('beforeend', '<div id="main">' +
          '    <div class="toast">\n' +
          '        <div class="toast-content" id="toast-content">\n' +
          '\n' +
          '        </div>\n' +
          '    </div>\n' +
          '    <div class="row section">\n' +
          '        <div class="col-5 mb-2">\n' +
          '            <a id="form-content"></a>\n' +
          '<h2 class="color-inherit mb-5 bolder">Interesse geweckt?</h2>\n' +
          '<p style="margin-bottom: 20px">Nehmen Sie jetzt an der Zertifizierung teil und sichern Sie sich als einer der ersten Vermittler unsere unabhängige und renommierte Auszeichnung.</p>\n' +
          ' <p style="margin-bottom: 50px">Füllen Sie unser Kontaktformular aus und wir schicken Ihnen ein Auftragsformular und weitere Details zu.</p>\n' +
          '<p style="margin-bottom: 20px">Falls Sie weitere Fragen haben, stehen wir Ihnen jederzeit zur Verfügung.</p>\n' +
          '  <p style="margin-bottom: 50px">Ihr Erfolg liegt uns am Herzen.</p>\n' +
          ' <div class="card">\n' +
          '   <div class="card-content">\n' +
          ' <div class="row">\n' +
          '  <div class="col" style="margin: auto 0">\n' +
          '  <p>Ihr Ansprechpartner ist</p>\n' +
          ' <p style="margin-bottom: 20px"><strong>Max Herbst</strong></p>\n' +
          ' <div class="flex mb-1">\n' +
          '   <img src="./assets/img/envelope-regular.svg" alt="mail" width="15" height="15" class="mr-1">\n' +
          '<span>sales@fmh</span>\n' +
          ' </div>\n' +
          ' <div class="flex">\n' +
          ' <img src="./assets/img/phone-solid.svg" alt="phone" width="15" height="15" class="mr-1">\n' +
          '   <span>+49 (0) 69 951 898 20</span>\n' +
          '</div>\n' +
          ' </div>\n' +
          ' <div class="col contact-person">\n' +
          '        <img' +
          '            srcset="./assets/img/zitat-max-herbst-small.webp 320w,' +
          '                    ./assets/img/zitat-max-herbst-medium.webp 640w"\n' +
          '            sizes="(max-width: 320px) 320px;' +
          '                   (max-width: 640px) 640px;"' +
          '           height="150"' +
          '           width="150"' +
          '           src="./assets/img/zitat-max-herbst-medium.webp"' +
          '           alt="Max Herbst" ' +
          '           class="circle-150"/>\n' +
          ' </div>\n' +
          '</div>\n' +
          '</div>\n' +
          ' </div>\n' +
          ' </div>\n' +
          '        <div class="col-4">\n' +
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
            '    <a id="vermittler"></a>\n' +
          '    <div class="row" style="margin: 50px 0">\n' +
          '        <h2 class="color-inherit bolder">Diese Vermittler wurden "geprüft und gecheckt"</h2>\n' +
          '    </div>\n' +
          '    <div class="row" id="cards">\n' +
          '    </div>\n' +
          '</div>');
        fetchData()
        initDrawers()
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      }

    }, 500)

  }).catch(e => {
    console.log(e)
  })
}

async function fetchData() {
  try {
    const certificates = await fetchDataWithApiToken();
    if (certificates?.length) {
      const row = document.getElementById('cards');
      const cols = document.createDocumentFragment();
      const images = {
        'DTW | Immobilienfinanzierung': './assets/img/dtw.webp',
        'Stephan Thiele': './assets/img/dtw.webp',
        'HAUS & WOHNEN': './assets/img/haus_woman.jpeg',
        'BAUFI DIREKT': './assets/img/baufi.jpeg',
        'Mike Rojem': './assets/img/hypofriend.png'
      }
      certificates.forEach(function (item) {
        const cardContainer = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardBodyContent = document.createElement("div");
        const cardActions = document.createElement("div");

        const h3 = document.createElement("h3");

        const img = document.createElement("img");

        const a = document.createElement("a");

        cardContainer.classList.add('card');
        cardContainer.classList.add('mb-1');

        cardBody.className = 'card-body';
        cardBodyContent.className = 'card-body-content';
        cardActions.className = 'card-action';


        img.src = images[item.name];
        img.alt = 'Logo';
        img.height = 75;
        img.width = 225;

        h3.innerText = item?.name || '';
        a.className = 'card-action';
        a.innerText = 'Zum Anbieter';
        a.href = item?.url || '#';
        a.target = '_blank';
        cardBodyContent.appendChild(img);
        cardBodyContent.appendChild(h3);
        cardBody.appendChild(cardBodyContent);
        cardBody.appendChild(a);
        cardContainer.appendChild(cardBody);
        cols.appendChild(cardContainer);
      });
      row.appendChild(cols);
    } else {
      document.getElementById('cards').innerText = 'No offers'
    }
  } catch (e) {
    console.log(`Error Fetching data : ${e}`)
    document.getElementById('cards').innerText = 'Error Loading Data'
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

