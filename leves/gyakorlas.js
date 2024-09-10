import { kutyaLISTA } from "../adat.js";
import Kartya from "../Kartya.js";

let cim = "Minden amit a cicákról tudni kell!"; //globális, flokkszintű
cim = "Minden ami Cica!";
const nev = "dézi";

//var globális, függvény szintű

//írjuk ki a cím alá a cím változó tartaémát
//megfogjuk a HTML elemet

const cimELEM = $("header");
cimELEM.append(`<p>${cim}</p>`);

//kutya adatait szeretném tárolni, név, kor, nem

const kutya1 = {
  nev: "Dézi",
  kor: 12,
  nem: "nöstény",
};

/* kutya1.nev = "Morzsa";
console.log(kutya1);
const taroloELEM = $(".tartalom"); */

/* 
kutyaKiir(kutya1);
 */