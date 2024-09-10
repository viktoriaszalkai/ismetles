export default class Kartya {
  //adattagok
  #kutyaAdat = {}; //objektum
  #szuloElem; //html DOME

  //contructor
  constructor(adat, szuloELEM) {
    this.#kutyaAdat = adat;
    this.#szuloElem = szuloELEM;
    this.kutyaKiir();

    this.gombELEM = $(".kiv:last");
    this.gombKattint();
    /* console.log(gombELEM) */
  }
  //tagfüggvény
  kutyaKiir() {
    this.#szuloElem.append(
      `<div class="card col-4 col-md-4">
                              <div class="card-body">
                                  <h3 class="card-title">${
                                    this.#kutyaAdat.nev
                                  }</h3>
                                  <p class="card-text">${
                                    this.#kutyaAdat.kor
                                  }</p>
                                  <p class="card-text">${
                                    this.#kutyaAdat.nem
                                  }</p>
                                  <button type="button" class="kiv btn btn-dark">Kiválaszt</button>
                              </div>
                  </div>`
    );
  }
  /*egy osztályban a this, egy konkrét objektum példányát jelenti, de egy eseménykezelőben
    function névtelen függvénnyel használva, azt a html elemet jelenti, amelyik az eseményt kiváltotta
    nyílt függvénnyel használva pedig, az objektum példányra mutat*/
  gombKattint() {
    this.gombELEM.on("click", () => {
      console.log(this);

      //saját esemény, hogy az adott objektum át tudjon adni magáról információkat
      const e = new CustomEvent("kivalaszt", { detail: this.#kutyaAdat });
      window.dispatchEvent(e);
    });
  }
}
