import { kutyaLISTA } from "./model/adat.js";
import Kartya from "./view/Kartya.js";
import Kartyak from "./view/Kartyak.js";
const kivKutyaLista = [];

const taroloELEM = $(".tartalom");
new Kartyak(kutyaLISTA, taroloELEM);
const kivELEM = $(".kivalasztott");
//ha rákattintunk a kiválaszt gombra, akkor a hozzátartozó kutya adata kerükjön bele a listába

//feliratkozunk a asaját eseményünkre, hogy elérjük azt az információt, hogy kire is kattintottak rá?

$(window).on("kivalaszt", (event) => {
  console.log(event.detail);
  kivKutyaLista.push(event.detail);
  console.log(kivKutyaLista);
  new Kartya(event.detail, kivELEM);
});
