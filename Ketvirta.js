//Sukurkite funkciją, kuri gauna tris parametrus - tris kraštinių ilgius. 
//Funkcija grąžina true, jeigu iš tų trijų kraštinių eina sudaryti trikampį ir false, jeigu neina. 
//Trikampį sudaryti eina tik tada, jei su visais variantais dviejų kraštinių suma yra didesnė už kitos kraštinės ilgį. 
//T.y., turi būti a < b + c taip pat b < a + c ir c < b + a
alert("Patikrinkime ar is siu krastiniu galima sudaryti trikampi.")
a = +prompt("Pirmos krastines ilgis:");
b = +prompt("Antros krastines ilgis:");
c= +prompt("Trecios krastines ilgis:");
alert(patikrinimas(a,b,c));

function patikrinimas(a,b,c) {
    if (( a < b + c ) && (b < a + c) && (c < b + a)) {
        return true;
    }
    else {
        return false;
    }
    }
