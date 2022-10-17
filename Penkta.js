//Sukurkite funkciją, kuri gauna tris kraštines ir patikrina ar tas trikampis yra statusis. 
//Turėkite omenyje, jog šį kartą kraštinės nėra surikiuotis pagal didėjimo tvarką ir jų surikiuoti negalima. 
//Galite pernaudoti funkciją iš praeito skyriaus, kur ieškojote stataus trikampio, 
//bet tą funkciją pernaudoti kelis kartus su vis skirtingais parametrais ir visus pernaudojimus sujungti viename 
//if'e su OR operatoriais.


let a = 13;
let b = 11;
let c = 12;
console.log(arStatus(a,b,c));

let sk1 = 31;
let sk2 = 27;
let sk3 = 30;
console.log(arStatus(sk1,sk2,sk3))

let v = 12;
let z = 16;
let x = 20;
console.log(arStatus(v,z,x))



function arStatus(a,b,c,sk1,sk2,sk3,v,z,x) {
    if (((c * c) == (a * a) + (b * b)) || ((sk3 * sk3) == (sk1 * sk1) + (sk2 * sk2)) || ((x * x) == (v * v) + (z * z))) {
    return true;
    }
    else {
        return false;
    }
}
