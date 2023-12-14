const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// Ul Objesini Başlatma
const ui = new Ul();

// Storage Objesi Üret
const storage = new Storage();

// Tüm Eventleri Yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        // Hata
        ui.displayMessages("Tüm alanları doldurunuz!","danger");
    } else {
        // Yeni Film
        const newFilm = new Film(title,director,url);
        ui.addFilmToUl(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // LocalStorag ekleme

        ui.displayMessages("Ekleme başarılı!","success");
    }

    ui.clearInputs(titleElement,directorElement,urlElement);
    
    e.preventDefault();
}