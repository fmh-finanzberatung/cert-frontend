window.addEventListener('load', fetchCardsData)
function fetchCardsData(){
    const data = [{
        "anbieterId": 110,
        "anbietername": "Haus & Wohnen",
        "anbieterLogoUrl": "https://www.fmh.de/resources/assets/1286/wide/b2559417a9eb56cbde01d91f8d543339a18d639b-HausundWohnen_1822x607.jpg",
        "internetUrl": "",
        "gruendungsort": "Wiesbaden"
    },{
        "anbieterId": 110,
        "anbietername": "Haus & Wohnen",
        "anbieterLogoUrl": "https://www.fmh.de/resources/assets/1286/wide/b2559417a9eb56cbde01d91f8d543339a18d639b-HausundWohnen_1822x607.jpg",
        "internetUrl": "",
        "gruendungsort": "Wiesbaden"
    },{
        "anbieterId": 267,
        "anbietername": "DTW-Immobilienfinanzierung",
        "anbieterLogoUrl": "https://www.fmh.de/resources/assets/1265/wide/2fa484ae10a335df50ea78a14e1d04e01b5652ec-dtw120x40.jpg",
        "internetUrl": "",
        "gruendungsort": "Mannheim"
    },{
        "anbieterId": 267,
        "anbietername": "DTW-Immobilienfinanzierung",
        "anbieterLogoUrl": "https://www.fmh.de/resources/assets/1265/wide/2fa484ae10a335df50ea78a14e1d04e01b5652ec-dtw120x40.jpg",
        "internetUrl": "",
        "gruendungsort": "Mannheim"
    },];
    /*fetch('https://trata').then((res) => res.json()).then((data) => {}).catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('cards').innerHTML = 'Error Loading Data'
    });*/
    const row = document.getElementById('cards');
    const cols = document.createDocumentFragment();

    data.forEach(function (item) {
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

        locationImage.alt = 'Location';
        locationImage.height = 30;
        locationImage.width = 23;
        locationImage.src = './assets/img/location.png';

        img.src = item?.anbieterLogoUrl || '';
        img.alt = 'Logo';
        img.height = 50;
        cardHeader.appendChild(img);
        h3.innerHTML = item?.anbietername || '';
        p.innerHTML = item?.gruendungsort || '';
        a.innerHTML = 'Zum anbieter';
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
}
