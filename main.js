const table = document.getElementById("tableBooks");
const books = [
{ title: "Kongens fald", author: "Johannes V. Jensen", year: "1900", info:"Klik her"}, 
{ title: "Pride and Prejudice", author: "Jane Austen", year: "1920", info:"Klik her" },
{ title: "New York Triologien", author: "Paul Auster", year: "2001", info:"Klik her" },
{ title: "East of Eden", author: "John Steinbeck", year: "1945", info:"Klik her" },
{ title: "Åndernes Hus", author: "Isabel Allende", year: "1987", info:"Klik her" },
{ title: "Det forsømte forår", author: "Hans Scherfig", year: "1962", info:"Klik her" },
{ title: "How to kill a Mockingbird", author: "Harper Lee", year: "1940", info:"Klik her" },
{ title: "Ondskaben", author: "Jan Guillot", year: "1999", info:"Klik her" },
{ title: "The Handmaid's Tale", author: "Magret Atwood", year: "1960", info:"Klik her" },
{ title: "The Help", author: "Kathryn Stockett", year: "2009", info:"Klik her" }
];
function addRows() {
    //looper henover bøgerne
    for (let book of books) {
        let row = table.getElementsByTagName("tbody")[0].insertRow()
        
        //key = properties(title, author, year)
        //looper henover properties i hver bog
        for (let key in book) {
            
            //Der indsættes en ny celle for hver property i bogobjektet. 
            //appendChild metoden tager en vilkårlig node af typen string som parameter. 
            //createTextNode metoden tager en string som parameter. Vedhæfter objektet property som det sidste element på parent-elementet = row
            
            if(key == "info"){
                let klikHer = row.insertCell()
                console.log(klikHer);
                
                klikHer.addEventListener("click", function(){
                    if(books.index[0])
                    alert("du har klikket her")
                })
                klikHer.appendChild(document.createTextNode(book[key]))

            }else{
                row.insertCell().appendChild(document.createTextNode(book[key])) 
            }

            //Hver bog bliver printet fire gange - en gang pr. property(key).
            
         
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
//setTimeout(() => removeRow(2),5000)

/*function info() {
   //https://www.sitepoint.com/community/t/issue-with-adding-a-link-to-javascript-array/37174/4
   row.addEventListener("click", function(){
    alert("du har klikket her")
})*/





 

    
    
    





