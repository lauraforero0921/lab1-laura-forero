

let canvas;
let URL = 'https://catfact.ninja/fact';
let URL1 = 'https://dog.ceo/api/breeds/image/random';
let URL2 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let URL3 = 'https://api.coindesk.com/v1/bpi/currentprice.json'
let URL4 = 'https://randomuser.me/api/'

let catFact = null;
let dogFact = null;
let populationFact = null;
let bitcoinFact = null;
let randomUser = null;
let imageDog;
let order = 0;
let userOrder = 0;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');


    fetch(URL)
    .then(response => response.json())
    .then(data => {catFact = data
    console.log(catFact.fact)})

    fetch(URL1)
    .then(response => response.json())
    .then(data => {dogFact = data
    console.log(dogFact.message)
imageDog = loadImage(dogFact.message)})

fetch(URL2)
    .then(response => response.json())
    .then(data => {populationFact = data
    console.log(populationFact.data)

    
})

fetch(URL3)
    .then(response => response.json())
    .then(data => {bitcoinFact = data
    console.log(bitcoinFact)

    fetch(URL4)
    .then(response => response.json())
    .then(data => {randomUser = data
    console.log(randomUser)})

    
})



}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();

    textSize(35);
        textWrap(WORD);
        text('press f',50,50,300);

    if(catFact != null){

        textSize(20);
        textWrap(WORD);
        text(catFact.fact,50,120,300);
    }
    textSize(35);
        textWrap(WORD);
        text('press d',50,320,300);
    if(dogFact != null){
        image(imageDog, 70,400,350,350);
    }

    textSize(35);
        textWrap(WORD);
        text('press p',400,50,300);
    if(populationFact != null){

        textSize(20);
        textWrap(WORD);
        text(populationFact.data[order]["ID Nation"],400,110,300);
        text(populationFact.data[order].Nation,400,140,300);
        text(populationFact.data[order].Population,400,170,300);
        text(populationFact.data[order].Year,400,200,300);

    
}




if(bitcoinFact != null){

    textSize(20);
    textWrap(WORD);
    text(bitcoinFact.bpi.EUR.code,700,90,500);
    text(bitcoinFact.bpi.EUR.rate,700,120,300);
    text(bitcoinFact.bpi.USD.code,700,165,300);
    text(bitcoinFact.bpi.USD.rate,700,195,300);
    text(bitcoinFact.bpi.GBP.code,700,240,300);
    text(bitcoinFact.bpi.GBP.rate,700,270,300);


}

textSize(35);
        textWrap(WORD);
        text('press u',700,340,300);
if(randomUser != null){

    textSize(20);
    textWrap(WORD);
    text(randomUser.results[userOrder].gender,700,400,500);
    text(randomUser.results[userOrder].name.first,700,430,500);
    text(randomUser.results[userOrder].name.last,700,460,500);
    text(randomUser.results[userOrder].email,700,490,500);
    


}
}

function keyPressed(){
    if(key.toLocaleLowerCase() === 'f'){
        console.log('funciona')
    fetch(URL)
    .then(response => response.json())
    .then(data => {catFact = data
    console.log(catFact.fact)})
    }

    if(key.toLocaleLowerCase() === 'd'){
        console.log('funciona')
    fetch(URL1)
    .then(response => response.json())
    .then(data => {dogFact = data;
        imageDog = loadImage(dogFact.message)
    console.log(dogFact.message)})
    }

    if(key.toLocaleLowerCase() === 'p'){
        if(order <=7){
            order ++
        }
        if(order ===7){
            order = 0;
        }

        console.log('funciona')
    fetch(URL2)
    .then(response => response.json())
    .then(data => {populationFact = data
    console.log(populationFact.data)})
    }

    if(key.toLocaleLowerCase() === 'u'){
        console.log('funciona')
    fetch(URL4)
    .then(response => response.json())
    .then(data => {randomUser = data
    console.log(randomUser)})
    }

   

    


    /*console.log('funciona')
    fetch(URL)
    .then(response => response.json())
    .then(data => {catFact = data
    console.log(catFact.fact)})*/
       
}

function mouseClicked(){

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

