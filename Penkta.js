//Sukurkite funkciją, kuri gauna tris kraštines ir patikrina ar tas trikampis yra statusis. 
//Turėkite omenyje, jog šį kartą kraštinės nėra surikiuotis pagal didėjimo tvarką ir jų surikiuoti negalima. 
//Galite pernaudoti funkciją iš praeito skyriaus, kur ieškojote stataus trikampio, 
//bet tą funkciją pernaudoti kelis kartus su vis skirtingais parametrais ir visus pernaudojimus sujungti viename 
//if'e su OR operatoriais.


let a = 13;
let b = 11;
let c = 12;
console.log(arStatusV1(a,b,c));

let sk1 = 31;
let sk2 = 27;
let sk3 = 30;
console.log(arStatusV1(sk1,sk2,sk3))

let v = 12;
let z = 16;
let x = 20;
console.log(arStatusV1(v,z,x))


//------------------testavimai
console.log("Ss" + arStatusV1(3, 4, 5));

console.log(arStatusV1(2, 5, 3));       // turėtų išvesti false
console.log(arStatusV1(3, 5, 4));       // turėtų išvesti true
console.log(arStatusV1(5, 4, 3));       // turėtų išvesti true

console.log(patikrinaArStatusNerikiuotus(2, 5, 3));     // false
console.log(patikrinaArStatusNerikiuotus(3, 5, 4));     // true
console.log(patikrinaArStatusNerikiuotus(5, 4, 3));     // true



function arStatusV1(a,b,c) {
    if (((c * c) == (a * a) + (b * b)) || (a * a == b * b + c * c) || (b * b == a * a + c * c)) {
        return true;
    }
    else {
        return false;
    }
}


/*-------------------- Antro varianto funkcijos ----------------------- */
function arStatusV2(a,b,c) {
    if ((c * c) == (a * a) + (b * b)){
        return true;
    }
    else {
        return false;
    }
}

function patikrinaArStatusNerikiuotus(a, b, c) {
    if (arStatusV2(a, b, c) || arStatusV2(a, c, b) || arStatusV2(b, c, a)) {       // tiesiog paskutinį parametrą vis paduodu skirtingą raidę, tai taip patikrins tris skirtingus variantus su trim skirtingom įžambinėm (gal kuri nors iš jų bus tikroji)
        return true;
    }
    else {
        return false;
    }
}
