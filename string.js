console.log(String.fromCharCode(65, 108, 109, 97)); // Alma
console.log("   Java   Script     ".trim()); // "Java   Script"

let nev = prompt("Mi a neved? ").split(" ");
 // Keresztnév

if (nev.length != 2){
    console.log("Nem jó a név formátuma");
}
else {
    console.log( `ez a neved ${nev[1]}`);
}


let mondat = prompt("Írj be egy mondatot! ").toLowerCase();

let aBetu = 0;

for (let i = 0; i < mondat.length; i++) {
    if (mondat[i] === "a") {
        aBetu++;
    }
}
console.log(aBetu);


let szoveg = "Kérlek adj meg egy mondatot a!";
let aBetu2 = "";

for (let i = szoveg.length-1; i >= 0; i--) {
    aBetu2 += szoveg[i];
}
console.log(aBetu2);
