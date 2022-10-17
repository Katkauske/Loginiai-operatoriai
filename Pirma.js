//Sukurkite funkciją, kuri suranda ar skaičius yra intervale.
//Funkcija gauna tris parametrus: skaičių, intervaloPradžia, intervaloPabaiga.
//Grąžina true, jeigu skaičius yra tam intervale, false, jeigu nėra.
//Panaudokite funkciją su vartotojo įvedamais duomenimis. 
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau)

alert("Suzinokite ar jusu pasirinktas skaicius yra jusu pasirinktame intervale!")
skaicius = +prompt("Iveskite skaiciu:")
ipradzia = +prompt("Iveskite intervalo pradzia:")
ipabaiga = +prompt("Iveskite intervalo pabaiga:")

alert(arYraIntervale(skaicius))

function arYraIntervale(skaicius){
  
if ((skaicius > ipradzia) && (skaicius < ipabaiga)) {
   return "Pasirinktas skaicius yra intervale!"
}
else {
    return "Pasirinkto skaiciaus inervale nera!"
}
}