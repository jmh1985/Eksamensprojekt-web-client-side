var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
//alert(filename);
if(filename === "forside.html") {
    
document.getElementById("#forside");
const forsideBoger = [
    {navn:"Meter i sekundet", img:"Images/meter.png"},
    {navn:"Arabica", img:"Images/Arabica.png"},
    {navn:"It ends with us", img:"Images/itendswithus.png"},
    {navn:"Tvilling", img:"Images/tvilling.png"},
    {navn:"Rampen", img:"Images/rampen.png"},
    {navn:"Store Kongensgade", img:"Images/stkongensgade.png"},
    {navn:"Det samme", img:"Images/detsamme.png"},
    {navn:"De Uadskillelige", img:"Images/deuadskillelige.png"},
    {navn:"Aftentid", img:"aftentid.png"},
    {navn:"Achilles", img:"Images/achilles.png"},
    {navn:"Menneske", img:"Images/menneske.png"},
    {navn:"Liv Lever", img:"Images/livlever.png"}
];

    const kurv = [];
       
    let boger = document.querySelector(".bogliste");
    let bog = boger.getElementsByTagName("img");
    for(let i = 0; i < bog.length;i++) {
        bog[i].addEventListener("click", function() {
           kurv.push(bog[i].alt);
        
           alert("Du har tilføjet " + bog[i].alt + " til din kurv")
        })
    }

 
        basket.addEventListener("click", function() {
            if(kurv.length > 0) {
                alert("Din kurv indeholder " + kurv.length + " bøger: " + kurv.join(", "));
            }
            else {
                alert("Din kurv er tom");
            }
        })
    

    /*for(let bog of forsideBoger) {
    let bogValgt = (bog['navn']);
    forside.addEventListener("click", function() {
        alert("Du har tilføjet " + bogValgt);

})*/
    
}


//bestsellers.html
const table = document.getElementById("tableBooks");
const books = [
  { title: "Kongens fald", author: "Johannes V. Jensen", year: "1900", info:"Kongens fald handler om Mikkel Thøgersens liv, som forløber parallelt med kong Christian 2."},
  { title: "Pride and Prejudice", author: "Jane Austen", year: "1813", info:"Pride and Prejudice handler om den selvstændige Elisabeth Bennet, som er en ud af en søskende flok på fem. Det er afgørende, at hun gifter sig ind i en velhavende familie og en dag møder hun Mr. Darcy, som vil ændre hendes liv for altid." },
  { title: "New York Triologien", author: "Paul Auster", year: "1987", info:"New York Triologien består af bøgerne:'By af glas', 'Genfærd' og 'Det aflåste værelse" },
  { title: "East of Eden", author: "John Steinbeck", year: "1939", info:"I East of Eden følger man Adam Trask som bosætter sig i Califonien med sin kone og to sønner Cal og Aron." },
  { title: "Åndernes Hus", author: "Isabel Allende", year: "1982", info:"Åndernes Hus er en skildring af en familie i Chile, som følges gennem tre generationer." },
  { title: "Det forsømte forår", author: "Hans Scherfig", year: "1940", info:"Det forsømte forår centrerer sig om latinlærer C. Blommes død. Han er blevet forgiftet af et maltbolsje. Her bliver det store spørgsmål stillet: Hvem er morderen?"},
  { title: "How to kill a Mockingbird", author: "Harper Lee", year: "1940", info:"I How to kill a Mockingbird følger man pigen 'Scout', hendes bror Jeremy og deres Far Atticus, som er advokat. Atticus får til opgave at forsvare en sort mand, Tom Robinson, som anklages for voldtægt af en hvid kvinde." },
  { title: "Ondskaben", author: "Jan Guillot", year: "1999", info:"Ondskaben skildrer drengen, Erik Ponti, som vokser op i en voldeligt hjem. Han smides ud af skolen og bliver sendt til privatskolen, Stjärnsberg, hvor Erik forsøger at bryde med voldens mønster og blive 'fri'." },
  { title: "The Handmaid's Tale", author: "Margaret Atwood", year: "1985", info:"The Handmaid's omhandler den patriakalske Republic of Gilead, hvor kvinderne kaldt 'handmaids' opgave er at føde børn for de såkaldte 'commanders'" },
  { title: "The Help", author: "Kathryn Stockett", year: "2009", info:" I The Help følger man de tre kvinder, Skeeter, Aibillen and Minny, som får et tæt venskab trods mange udfordringer på deres vej." }
];
//Metoden addRows bliver kun kørt, når der vælges siden bestsellers.
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
//alert(filename);
if(filename === "bestsellers.html") {
    function addRows() {

        for (let book of books) { //looper henover bøgerne
          let row = table.getElementsByTagName("tbody")[0].insertRow()
      
          // Såfremt der klikkes på rækken, vis da info om bogen i en alert('...');
          row.addEventListener('click', function() {
            alert(book['info']);
          });
      
          //Der indsættes en ny celle for UDVAGLTE properties i bogobjektet.
          for (let key of ['title', 'author', 'year']) {
            //appendChild metoden tager en vilkårlig node af typen string som parameter.
            //createTextNode metoden tager en string som parameter. Indsætter objektet property som det sidste element på parent-elementet = row
            row.insertCell().appendChild(document.createTextNode(book[key]));
            }
          }
      } 

      function removeRow(index) {
        if(index > 0 && index < table.rows.length) {
          table.deleteRow(index);
        }
        console.log(table.rows);
      }
      addRows();
}


//medlem.html 
//Form
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
//alert(filename);
if(filename === "medlem.html") {
let form = document.querySelector("form");
//^ = start of string ([^ = exept tal fra 0-9]) $ = end of string
let validName = /^([^0-9]*)$/;
// \w+ = finder første AN karakter og tjekker dernæst næste karakter og inkluderer den, hvis AN. Leder indtil der rammes en ikke AN-karakter.
// \w matcher en hver karakter[a-zA-Z0-9_]
let validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Validering på navn
    form.submit.addEventListener("click", function() {
   
    validateForm(); 
    let kundeNavnOk;
    let kundeEmailOk;
    let kundeTlfOk;
    let kundePostnrByOk;
    let passwordOk;
//test = en metode som tester det indtastet navn op imod reg.exp. udtrykket og returnere bool sand el. falsk.           
          
            /*if(form.navn.value.length === 0) {
                alert("Navn skal udfyldes");
            }*/
            if(form.navn.value.length > 1 && validName.test(form.navn.value)) {
               
                kundeNavnOk = "ok";
                alert("Dit navn er godkendt");
             }
            else {
                 alert("Dit navn er ikke godkendt");
             }

        //Validering på email-adresse
      
            if(validMail.test(form.email.value)) {
                kundeEmailOk = "ok";
                alert("Indtastet e-mail valid")
            }
            else{
                alert("Indtastet e-mail er ikke valid")
            }
            //Validering på tlfnr.
                
            if(form.number.value.length === 8) {
                kundeTlfOk = "ok";
                alert("Dit tlf.nr er godkendt");
            }
            else {
                alert("Dit tlf.nr. skal bestå af 8 tal");
            }

            //Validering på postnr. og by
            let postnr = form.postnr.value; 
            let by = form.by.value;
                
            if(postnr === by) {
                kundePostnrByOk = "ok";
                alert("postnr. og by stemmer overens");
            }
            else{
                alert("postnr. og by stemmer ikke overens");
            }

        //Validering på password med if-statment 
        let password1 = form.password1.value;
        let password2 = form.password2.value;
        
            if (password1 === password2) {
            passwordOk = "ok";
            alert("password matcher"); 

        } else {
            alert("password matcher ikke");
        }

        if((kundeNavnOk, kundeEmailOk, kundeTlfOk, kundePostnrByOk, passwordOk) == "ok") {
            let kundeNavn = form.navn.value;
            let firstChar = kundeNavn.slice(0,1).toUpperCase();
            let restChar = kundeNavn.slice(1, navn.value.length);
            restChar = restChar.toLowerCase();
            let capitalisedName = firstChar + restChar;
            alert("Du er nu medlem " + capitalisedName + ". Vi sender dig en mail med login oplysninger til mail: " + email.value)
        };
  
})


function validateForm() {
    if(form.navn.value.length === 0) {
        alert("Navn skal udfyldes");
        document.form.navn.focus() ;
            return false;
    }

    if(form.email.value === "") {
        alert("email skal udfyldes");
        document.form.email.focus() ;
            return false;
    }

    if(form.number.value.length === 0) {
        alert("Tlf.nr. skal udfyldes");
        document.form.number.focus();
            return false;
    }

    if(form.postnr.value == "0" ) {
        alert( "Postnr skal udfyldes" );
        document.form.postnr.focus();
        return false;
     }
    
    //Kig på denne validering - virker ikke. 
    if (form.password1.value.length === 0) {
        alert("Indtast password");
        document.form.password1.focus();
        return false;
        }

    if (form.password2.value.length === 0) {
        alert("Gentag password");
        document.form.password2.focus();
        return false;
        }
   
    else {
        return true;
    }
}

//metode som lytter med hver gang der trykkes på en tast. For hver gang tælles længden af antal karakterer.
document.getElementById("kommentar").addEventListener("keydown", karakterer);
function karakterer() {
    let antal = form.kommentar.value.length+1;
    //alert(antal);
    //Tjek af karakterer i kommentarfelt med brug af slice.

    if(antal > 25) {
        let kundeKommentar2 = form.kommentar.value;
        let under250 = kundeKommentar2.slice(0,250);
        document.getElementById("kommentar").style.border = "2px solid red";
        alert("Du har skrevet mere end 250 karakterer: " + under250);
    }
   
    
  }
}

  

  






 

    
    
    




