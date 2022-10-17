//Sukurkite funkciją, kuri gauna įvestą amžių ir patikrina ar tas amžius yra galimas ar ne. 
//Laikykime, kad gali būti įvedami amžiai nuo 0 iki 120. 
//Jeigu amžius yra tinkamas, funkcija grąžina true, jeigu netinkamas - funkcija grąžina false


amzius = +prompt("Iveskite savo amziu:")
alert(arTinkamas(amzius))

function arTinkamas(amzius){
    
    if ((amzius > 0) && (amzius < 120)) {
        return true;
    }
    else {
        return false;
    }
}