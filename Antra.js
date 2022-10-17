//Sukurkite funkciją, kuri suranda ar skaičius yra neigiamas ir ar jis dalinasi iš 10 be liekanos. 
//Panaudokite funkciją su vartotojo įvedamais duomenimis. 
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau)
alert("Issiaiskinkime! Ar Jusu pasirinktas skaicius yra neigiamas ir dalinasi is 10 be liekanos?")
skaicius = +prompt("Iveskite skaiciu, kuri norite patikrinti.")
alert(skaiciausPatikrinimas(skaicius))

function skaiciausPatikrinimas(skaicius){
    if (((skaicius < 0) && (skaicius % 10 == 0))){
        return "Pasirinktas skaicius yra neigiamas ir dalinasi is 10! "
    }
    else {
        return "Skaicius neatitinka kriteriju!"
    }
}
