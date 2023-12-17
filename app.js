
async function getImages(query) {
    const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=ml6bRDnz2_FsW11E0KfUf9fJ6_Kw0vR2s9laeDaTvIc`
    );
    const json = await response.json();
    console.log(json);
    renderImages(json.results);
}
function renderImages(data) {
    document.getElementById("thumbnails").innerHTML = "";
    data.forEach(function (imageObj) {
    const img = document.createElement("img");
    img.src = imageObj.urls.full;
    img.alt = imageObj.alt_description;
    document.getElementById("thumbnails").appendChild(img);
    });
}
//couldnt get unsplash images clickable
const form = document.getElementById("searchForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const myQuery = event.target.myQuery.value;
    getImages(myQuery);
});

//getImages("rennaisance");
const thumbnails = document.querySelectorAll("#thumbnails img"); 
const display = document.getElementById("disImg");
const imgSrc=document.getElementById("disImg").getAttribute('src'); 
function writeOverlay(){
    if (imgSrc=='./placeholderImg/cat1.jpg'){ //unsure why these two if statements dont work :/
        document.getElementById("overlay").innerHTML= "This guy is a cat look at him roar wow crazy";}
    if (imgSrc=='./placeholderImg/cat2.jpg'){
        document.getElementById("overlay").innerHTML= "Don't be fooled, this is a viscous criminal";}
    else{
        document.getElementById("overlay").textContent= "This in an image ofa thing, wowwwwwww";}
};

thumbnails.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
        display.src = thumb.src;
        display.alt = thumb.alt;
        writeOverlay()
    });
    thumb.addEventListener("keydown", function () {
        display.src = thumb.src;
        display.alt = thumb.alt;
        writeOverlay()
        });
});
function focus(key){
    const {activeElement:{[key]: elementSibling} = {}} = document;
    if(elementSibling){
        elementSibling.focus();
    }
}
const Arrows = {
    ArrowDown: () => focus('nextElementSibling'),
    ArrowUp: () => focus('previousElementSibling'),
    ArrowRight: () => focus('nextElementSibling'),
    ArrowLeft: () => focus('previousElementSibling'),
    Enter: (e) => myCustomEvent(e)
}
function handleKeyDown (e) {
    console.log(e.key, e.target);
    const handler = Arrows[e.key];
    if(handler) {
        e.preventDefault();
        handler(e);
    }
}
window.addEventListener('keyup', handleKeyDown);
//does both keydown event and arrow navigation on arrow press :/ unsure how to prevent



