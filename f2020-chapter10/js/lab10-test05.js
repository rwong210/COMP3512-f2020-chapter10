document.addEventListener("DOMContentLoaded", function () {

    const endpoint = 'https://gist.githubusercontent.com/rconnolly/a0ad7768d65b6fa46f4e007a1cf27193/raw/38696e5b84cd6b66667a6b87c66c058ab2606ba2/galleries.json';

    fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            setup(data);
            listListen(data);
        })
});

function setup(galleries) {
    let boxB = document.querySelector(".box.b section");
    let ul = document.querySelector("#galleryList");

    // make box b viewable
    boxB.style.display = "block";

    /* Loop through the galleries and add a <li> element to <ul id=galleryList> with the 
       textContent set as the nameEn property of the gallery 
    */
    for (let gallery of galleries) {
        let li = document.createElement("li");
        li.textContent = `${gallery.nameEn}`;
        ul.appendChild(li);
    }
}

// Loop through the list and assign an event handler to populate all boxes with selected information
function listListen(galleries) {
    let list = document.querySelector("#galleryList");

    list.addEventListener('click', function (e) {
        let event = e.target;
        let lookup = event.textContent;
        let gallery = galleries.find(g => lookup == g.nameEn);
        populateA(gallery);
        populateC(gallery);
        populateD(gallery);
    });
}

// populate box a with gallery details
function populateA(gallery) {
    let boxA = document.querySelector(".box.a section");

    boxA.style.display = "grid";

    document.querySelector("#galleryName").textContent = `${gallery.nameEn}`;
    document.querySelector("#galleryNative").textContent = `${gallery.nameNative}`;
    document.querySelector("#galleryCity").textContent = `${gallery.location.city}`;
    document.querySelector("#galleryAddress").textContent = `${gallery.location.address}`;
    document.querySelector("#galleryCountry").textContent = `${gallery.location.country}`;

    let link = document.querySelector("#galleryHome");
    link.textContent = `${gallery.link}`;
    link.setAttribute("href", `${gallery.link}`);
}

//  populate box c with a list of paintings in that gallery
function populateC(gallery) {
    let boxC = document.querySelector(".box.c section");
    let ul = document.querySelector("#paintingList");
    let paintings = gallery.paintings;

    // set display to block from none
    boxC.style.display = "block";

    // clear any previous content
    ul.innerHTML = "";

    for (let p of paintings) {
        let li = document.createElement("li");
        li.textContent = `${p.title}`;
        ul.appendChild(li);
    }
}

function populateD(gallery){
    let boxD = document.querySelector(".box.d");
    boxD.id = "map";


    let latlng = {
        lat: gallery.location.latitude,
        lng: gallery.location.longitude
    }

    initMap(latlng);

}

function initMap(latlng) {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: latlng,
        mapTypeId: 'satellite'
    });
}