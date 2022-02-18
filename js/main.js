if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    'use strict';

    if (!((typeof func === 'Function' || typeof func === 'function') && this))
      throw new TypeError();

    var len = this.length >>> 0,
      res = new Array(len), // preallocate array
      t = this,
      c = 0,
      i = -1;

    var kValue;

    if (thisArg === undefined) {
      while (++i !== len) {
        // checks to see if the key was set

        if (i in this) {
          kValue = t[i]; // in case t is changed in callback

          if (func(t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    } else {
      while (++i !== len) {
        // checks to see if the key was set

        if (i in this) {
          kValue = t[i];

          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size

    return res;
  };
}

new Vue({
  el: '#app',

  data: {
    sortOrder: true,

    workers: [
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Stefa',
        surname: 'Budrienė',
        mail: 's.budriene@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Vilma ',
        surname: 'Bartninkienė',
        mail: 'v.bartninkiene@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Loreta',
        surname: 'Karbauskienė',
        mail: 'l.karbauskiene@jspc.lt',
      },
      {
        profession: 'Bendrosios praktikos slaugytoja',
        name: 'Natalija',
        surname: 'Talanova',
        mail: 'n.talanova@jspc.lt',
      },
      {
        profession: 'Bendrosios praktikos slaugytoja',
        name: 'Neringa',
        surname: 'Radzevičiūtė',
        mail: 'n.radzeviciute@jspc.lt',
      },
      {
        profession: 'Bendrosios praktikos slaugytoja',
        name: 'Salomėja ',
        surname: 'Volokanovienė',
        mail: 's.volokanoviene@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Sigita',
        surname: 'Petrošiūtė',
        mail: 's.petrosiute@jspc.lt',
      },
      {
        profession: 'Bendrosios praktikos slaugytoja',
        name: 'Viktorija',
        surname: 'Šeputytė',
        mail: 'v.seputyte@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Eglė',
        surname: 'Malikova',
        mail: 'e.malikova@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Meilutė',
        surname: 'Nedzinskienė',
        mail: 'm.nedzinskiene@jspc.lt',
      },
      {
        profession: 'Slaugytojo padėjėja',
        name: 'Edita',
        surname: 'Skrebienė',
        mail: 'e.skrebiene@jspc.lt',
      },
      {
        profession: 'Slaugytojo padėjėja',
        name: 'Deimantė',
        surname: 'Kubilienė',
        mail: 'd.kubiliene@jspc.lt',
      },
      {
        profession: 'Slaugytojo padėjėja',
        name: 'Vaida',
        surname: 'Saukalaitė',
        mail: 'v.saukalaite@jspc.lt',
      },
      {
        profession: 'Bendrosios praktikos slaugytoja',
        name: 'Monika',
        surname: 'Užkurėlytė',
        mail: 'm.uzkurelyte@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Regina',
        surname: 'Arytė',
        mail: 'r.aryte@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Gražina',
        surname: 'Lukšienė',
        mail: 'g.luksiene@jspc.lt',
      },
      {
        profession: 'Medicinos registratorė',
        name: 'Viktorija ',
        surname: 'Markevičienė',
        mail: 'v.markeviciene@jspc.lt',
      },
      {
        profession: 'Medicinos registratorė',
        name: 'Sandra',
        surname: 'Matulionienė',
        mail: 's.matulioniene@jspc.lt',
      },
      {
        profession: 'Šeimos gydytoja',

        name: 'Agnė',

        surname: 'Stankevičiūtė',

        mail: 'a.stankeviciute@jspc.lt',
      },
      {
        profession: 'Šeimos gydytoja',

        name: 'Gabrielė',

        surname: 'Stankevičiūtė',

        mail: 'g.stankeviciute@jspc.lt',
      },
      {
        profession: 'Šeimos gydytoja',

        name: 'Dovilė',

        surname: 'Isodė',

        mail: 'd.isode@jspc.lt',
      },

      {
        profession: 'Sekretorė - referentė',

        name: 'Airida',

        surname: 'Raižienė',

        mail: 'info@jspc.lt',
      },

      {
        profession: 'Burnos higienistė',

        name: 'Airidė',

        surname: 'Gelžinienė',

        mail: 'a.gelziniene@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Ala',

        surname: 'Butylova',

        mail: 'a.butylova@jspc.lt',
      },

      {
        profession: 'Šeimos gydytojas',

        name: 'Aleksandras',

        surname: 'Agafonovas',

        mail: 'a.agafonovas@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Alfreda',

        surname: 'Oleinikienė',

        mail: 'a.oleinikiene@jspc.lt',
      },

      {
        profession: 'III šeimos gydytojo skyriaus vedėjas',

        name: 'Anatolijus',

        surname: 'Polskij',

        mail: 'a.polskij@jspc.lt',
      },

      {
        profession: 'Gydytoja periodontologė',

        name: 'Angelija',

        surname: 'Dambrauskaitė',

        mail: 'a.dambrauskaite@jspc.lt',
      },

      {
        profession: 'Dantų technikė',

        name: 'Angelija',

        surname: 'Šimkuvienė',

        mail: 'a.simkuviene@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Asta',

        surname: 'Gakienė',

        mail: 'a.gakiene@jspc.lt',
      },

      {
        profession: 'Bendrosios praktikos slaugytoja',

        name: 'Audrutė',

        surname: 'Vaitelienė',

        mail: 'a.vaiteliene@jspc.lt',
      },

      {
        profession: 'Gydytojas odontologas',

        name: 'Aurelijus',

        surname: 'Aleksiejūnas',

        mail: 'a.aleksiejunas@jspc.lt',
      },

      {
        profession: 'Šeimos gydytoja',

        name: 'Beatričė',

        surname: 'Pargaliauskytė',

        mail: 'b.pargaliauskyte@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Birutė',

        surname: 'Zdanienė',

        mail: 'b.zdaniene@jspc.lt',
      },

      {
        profession: 'Darbo medicinos gydytojas',

        name: 'Bronislovas',

        surname: 'Gylys',

        mail: 'b.gylys@jspc.lt',
      },

      {
        profession: 'Vyriausioji slaugytoja - administratorė',

        name: 'Daiva',

        surname: 'Madelienė',

        mail: 'd.madeliene@jspc.lt',
      },

      {
        profession: 'Teisininkė',

        name: 'Daiva',

        surname: 'Maksvytienė',

        mail: 'd.maksvytiene@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Daiva',

        surname: 'Bačinskaitė',

        mail: 'd.bacinskaite@jspc.lt',
      },

      {
        profession: 'Šeimos gydytojo skyrių vedėja',

        name: 'Dalia',

        surname: 'Šalkauskienė',

        mail: 'd.salkauskiene@jspc.lt',
      },

      {
        profession: 'Dantų technikas',

        name: 'Danil',

        surname: 'Lazarev',

        mail: 'd.lazarev@jspc.lt',
      },

      {
        profession: 'Dantų technikė',

        name: 'Danutė',

        surname: 'Jomantienė',

        mail: 'd.jomantiene@jspc.lt',
      },

      {
        profession: 'Kasininkė',

        name: 'Dijana',

        surname: 'Padubrinienė',

        mail: 'd.padubriniene@jspc.lt',
      },

      {
        profession: 'Dantų technikas',

        name: 'Donatas',

        surname: 'Razutis',

        mail: 'd.razutis@jspc.lt',
      },

      {
        profession: 'Slaugytojos padėjėja',

        name: 'Edita',

        surname: 'Skrebienė',

        mail: 'e.skrebiene@jspc.lt',
      },

      {
        profession: 'Šeimos gydytoja',

        name: 'Eglė',

        surname: 'Blekaitytė',

        mail: 'e.blekaityte@jspc.lt',
      },

      {
        profession: 'Vidinės komunikacijos specialistė',

        name: 'Erika',

        surname: 'Lapaitė-Bružienė',

        mail: 'e.bruziene@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Eugenija',

        surname: 'Urbonienė',

        mail: 'e.urboniene@jspc.lt',
      },

      {
        profession: 'Burnos higienistė',

        name: 'Evelina',

        surname: 'Narutavičiūtė',

        mail: 'e.narutaviciute@jspc.lt',
      },

      {
        profession:
          'Vyriausiojo gydytojo pavaduotojas medicinai, šeimos gydytojas',

        name: 'Gediminas',

        surname: 'Dragūnas',

        mail: 'g.dragunas@jspc.lt',
      },

      {
        profession: 'Sveikatos statistikė',

        name: 'Gineta',

        surname: 'Mažeikienė',

        mail: 'statistika@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Gražina',

        surname: 'Macnorienė',

        mail: 'g.macnoriene@jspc.lt',
      },

      {
        profession: 'Gydytojas ortopedas',

        name: 'Haroldas',

        surname: 'Ivaškevičius',

        mail: 'h.ivaskevicius@jspc.lt',
      },

      {
        profession: 'Odontologinio skyrio vedėjas',

        name: 'Henrikas',

        surname: 'Galinauskas',

        mail: 'h.galinauskas@jspc.lt',
      },

      {
        profession: 'Bendruomenės slaugytoja',

        name: 'Ilona',

        surname: 'Trapienė',

        mail: 'i.trapiene@jspc.lt',
      },

      {
        profession: 'Viešųjų pirkimų specialistė',

        name: 'Inga',

        surname: 'Ruikienė',

        mail: 'i.ruikiene@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Inga',

        surname: 'Kaveckienė',

        mail: 'i.kaveckiene@jspc.lt',
      },

      {
        profession: 'Vyresnioji bendruomenės slaugytoja',

        name: 'Ingrida',

        surname: 'Veitienė',

        mail: 'i.veitiene@jspc.lt',
      },

      {
        profession: 'Kasininkė',

        name: 'Irena',

        surname: 'Milkeraitienė',

        mail: 'i.milkeraitiene@jspc.lt',
      },

      {
        profession: 'Kineziterapeutė, masažuotoja',

        name: 'Irina',

        surname: 'Valienė',

        mail: 'i.valiene@jspc.lt',
      },

      {
        profession: 'Bendruomenės slaugytoja',

        name: 'Irina',

        surname: 'Korotkich',

        mail: 'i.korotkich@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Jelena',

        surname: 'Pavlova',

        mail: 'j.pavlova@jspc.lt',
      },

      {
        profession: 'Kasininkė, registratorė',

        name: 'Jolanta',

        surname: 'Povilaitienė',

        mail: 'j.povilaitiene@jspc.lt',
      },
      {
        profession: 'Dantų technikė',

        name: 'Jorida',

        surname: 'Skinkienė',

        mail: 'j.skinkiene@jspc.lt',
      },

      {
        profession: 'Dantų technikė',

        name: 'Judita',

        surname: 'Vaičienė',

        mail: 'j.vaiciene@jspc.lt',
      },

      {
        profession: 'Kineziterapeutė',

        name: 'Julija',

        surname: 'Venckutė',

        mail: 'j.venckute@jspc.lt',
      },

      {
        profession: 'Dantų technikė',

        name: 'Jurgita',

        surname: 'Alilionienė',

        mail: 'j.alilioniene@jspc.lt',
      },

      {
        profession: 'Gydytojas odontologas',

        name: 'Justas',

        surname: 'Paulauskas',

        mail: 'j.paulauskas@jspc.lt',
      },

      {
        profession: 'Vyriausioji slaugytoja',

        name: 'Jūratė',

        surname: 'Beinorienė',

        mail: 'j.beinoriene@jspc.lt',
      },

      {
        profession: 'Gydytoja ortopedė',

        name: 'Jūratė',

        surname: 'Totoraitytė',

        mail: 'j.totoraityte@jspc.lt',
      },

      {
        profession: 'Gydytoja akušerė - ginekologė',

        name: 'Jūratė',

        surname: 'Jazbutienė',

        mail: 'j.jazbutiene@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Kornelija',

        surname: 'Kataržytė',

        mail: 'k.katarzyte@jspc.lt',
      },

      {
        profession: 'Vidaus MAG vadovė',

        name: 'Kristina',

        surname: 'Paulienė',

        mail: 'vak@jspc.lt',
      },

      {
        profession: 'Komunikacijos specialistas',

        name: 'Laimonas',

        surname: 'Viluckas',

        mail: 'l.viluckas@jspc.lt',
      },

      {
        profession: 'Slaugytojos padėjėja',

        name: 'Laura',

        surname: 'Žagarė',

        mail: 'l.zagare@jspc.lt',
      },

      {
        profession: 'Personalo vyresnioji specialistė',

        name: 'Indrė',

        surname: 'Pažusienė',

        mail: 'i.pazusiene@jspc.lt',
      },
      {
        profession: 'Oftalmologė',

        name: 'Vaida',

        surname: 'Gerbauskienė',

        mail: 'v.gerbauskiene@jspc.lt',
      },

      {
        profession: 'Darbo medicinos gydytoja, vidaus ligų gydytoja',

        name: 'Lida',

        surname: 'Juodviršienė',

        mail: 'l.juodvirsiene@jspc.lt',
      },

      {
        profession: 'Fizinės medicinos ir reabilitacijos gydytoja',

        name: 'Lina',

        surname: 'Nausėdaitė',

        mail: 'l.nausedaite@jspc.lt',
      },

      {
        profession: 'Bendruomenės slaugytoja',

        name: 'Lina',

        surname: 'Kučinskienė',

        mail: 'l.kucinskiene@jspc.lt',
      },

      {
        profession: 'Šeimos gydytoja',

        name: 'Liuda',

        surname: 'Paulikienė',

        mail: 'l.paulikiene@jspc.lt',
      },

      {
        profession: 'Šeimos gydytoja',

        name: 'Liudmila',

        surname: 'Mirgorodskaja',

        mail: 'l.mirgorodskaja@jspc.lt',
      },

      {
        profession: 'Vedėja - medicinos biologė',

        name: 'Liudmila',

        surname: 'Sipavičienė',

        mail: 'l.sipaviciene@jspc.lt',
      },

      {
        profession: 'Bendrosios praktikos slaugytoja',

        name: 'Liudmila',

        surname: 'Orlova',

        mail: 'l.orlova@jspc.lt',
      },

      {
        profession: 'Bendruomenės slaugytoja',

        name: 'Loreta',

        surname: 'Karbauskienė',

        mail: 'l.karbauskaite@jspc.lt',
      },

      {
        profession: 'Burnos higienistė',

        name: 'Margarita',

        surname: 'Narvilienė',

        mail: 'm.narviliene@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Marija',

        surname: 'Mitkienė',

        mail: 'm.mitkiene@jspc.lt',
      },

      {
        profession: 'Gydytoja ortopedė',

        name: 'Marija Danguolė',

        surname: 'Masaitienė',

        mail: 'd.masaitiene@jspc.lt',
      },

      {
        profession: 'Gydytoja akušerė - ginekologė',

        name: 'Marina',

        surname: 'Chadarceva',

        mail: 'm.chadarceva@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Natalja',

        surname: 'Koželeva',

        mail: 'n.kozeleva@jspc.lt',
      },

      {
        profession: 'Pagalbinės ūkio tarnybos vedėjas',

        name: 'Nerijus',

        surname: 'Miškinis',

        mail: 'ukis@jspc.lt',
      },

      {
        profession: 'Kompiuterinių sistemų administratorius',

        name: 'Nerijus',

        surname: 'Noreika',

        mail: 'n.noreika@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Neringa',

        surname: 'Švickutė',

        mail: 'n.svickute@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Nijolė',

        surname: 'Valutytė',

        mail: 'n.valutyte@jspc.lt',
      },

      {
        profession: 'Burnos higienistė',

        name: 'Nijolė',

        surname: 'Meškauskaitė-Michailovė',

        mail: 'n.meskauskaite-michailove@jspc.lt',
      },

      {
        profession: 'Buhalterė',

        name: 'Ona',

        surname: 'Medutienė',

        mail: 'o.medutiene@jspc.lt',
      },

      {
        profession: 'Vyresnioji bendruomenės slaugytoja',

        name: 'Regina',

        surname: 'Zimantienė',

        mail: 'r.zimantiene@jspc.lt',
      },

      {
        profession: 'Vyresnioji medicinos registratorė',

        name: 'Regina',

        surname: 'Grigolienė',

        mail: 'r.grigoliene@jspc.lt',
      },

      {
        profession: 'Personalo ir dokumentų valdymo vyriausioji specialistė',

        name: 'Rimanta',

        surname: 'Cvetkova',

        mail: 'personalas@jspc.lt',
      },

      {
        profession: 'Gydytojo odontologo padėjėja',

        name: 'Rita',

        surname: 'Lukošienė',

        mail: 'r.lukosiene@jspc.lt',
      },

      {
        profession: 'Gydytoja radiologė',

        name: 'Romualda',

        surname: 'Gylienė',

        mail: 'r.gyliene@jspc.lt',
      },

      {
        profession: 'Vyresnioji burnos priežiūros specialistė',

        name: 'Rozana',

        surname: 'Nikulina',

        mail: 'r.nikulina@jspc.lt',
      },

      {
        profession: 'Vyriausiasis gydytojas',

        name: 'Saulius',

        surname: 'Dabravalskis',

        mail: 's.dabravalskis@jspc.lt',
      },

      {
        profession: 'I odontologinio skyrio vedėja',

        name: 'Saulė',

        surname: 'Sabulienė',

        mail: 's.sabuliene@jspc.lt',
      },

      {
        profession: 'Gydytoja periodontologė',

        name: 'Sigutė',

        surname: 'Ilgauskienė',

        mail: 's.ilgauskiene@jspc.lt',
      },

      {
        profession: 'Gydytoja odontologė',

        name: 'Sigutė',

        surname: 'Vaškelaitienė',

        mail: 's.vaskelaitiene@jspc.lt',
      },

      {
        profession: 'Vyriausioji finansininkė',

        name: 'Simona',

        surname: 'Baranauskienė',

        mail: 'buhalterija@jspc.lt',
      },

      {
        profession: 'Slaugytoja diabetologė',

        name: 'Sonata',

        surname: 'Vyšniauskienė',

        mail: 's.vysniauskiene@jspc.lt',
      },

      {
        profession: 'Ekonomistė, buhalterė',

        name: 'Sonata',

        surname: 'Gylienė',

        mail: 'ekonomiste@jspc.lt',
      },

      {
        profession: 'Buhalterė',

        name: 'Svetlana',

        surname: 'Žerebcova',

        mail: 'buhaltere@jspc.lt',
      },

      {
        profession: 'Kompiuterinių tinklų administratorius',

        name: 'Tadas',

        surname: 'Rekašius',

        mail: 't.rekasius@jspc.lt',
      },

      {
        profession: 'Gydytoja endokrinologė',

        name: 'Tatjana',

        surname: 'Jocienė',

        mail: 't.jociene@jspc.lt',
      },

      {
        profession: 'Gydytojas odontologas',

        name: 'Tomas',

        surname: 'Jurkus',

        mail: 't.jurkus@jspc.lt',
      },

      {
        profession: 'Bendruomenės slaugytoja',

        name: 'Vaida',

        surname: 'Jablonskienė',

        mail: 'v.jablonskiene@jspc.lt',
      },

      {
        profession: 'Šeimos gydytoja',

        name: 'Vilma',

        surname: 'Morkuvienė',

        mail: 'v.morkuviene@jspc.lt',
      },

      {
        profession: 'Burnos higienistė',

        name: 'Vilma',

        surname: 'Areškevičienė',

        mail: 'v.areskeviciene@jspc.lt',
      },

      {
        profession: 'Vyresnioji dantų technikė',

        name: 'Violeta',

        surname: 'Savičenko',

        mail: 'savicenko@jspc.lt',
      },

      {
        profession: 'Gydytoja akušerė - ginekologė',

        name: 'Virginija',

        surname: 'Grušienė',

        mail: 'v.grusiene@jspc.lt',
      },

      {
        profession: 'Duomenų įvesties operatorė',

        name: 'Virginija',

        surname: 'Andrulienė',

        mail: 'v.andruliene@jspc.lt',
      },

      {
        profession: 'Kasininkė',

        name: 'Zita',

        surname: 'Šlymienė',

        mail: 'z.slymiene@jspc.lt',
      },

      {
        profession:
          'Ambulatorinių konsultacijų skyriaus vyresnioji specialistė',

        name: 'Živilė',

        surname: 'Kiaušienė',

        mail: 'z.kiausiene@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Viktorija',
        surname: 'Budginaitė',
        mail: 'v.budginaite@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Ieva ',
        surname: 'Kvietkauskaitė',
        mail: 'i.kvietkauskaite@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Svetlana',
        surname: 'Feoktistova',
        mail: 's.feoktistova@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Karolina',
        surname: 'Markauskaitė',
        mail: 'k.markauskaite@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Liudmila',
        surname: 'Selina',
        mail: 'l.selina@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Renata',
        surname: 'Paulikienė',
        mail: 'r.paulikiene@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Daiva ',
        surname: 'Dukauskienė',
        mail: 'd.dukauskiene@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Marina ',
        surname: 'Orechova',
        mail: 'm.orechova@jspc.lt',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Ilona',
        surname: 'Jencienė',
        mail: 'i.jenciene@jspc.lt',
      },
      {
        name: 'Stefanija',
        surname: 'Romanec',
        mail: 's.romanec@jspc.lt',
        profession: 'Bendrosios praktikos slaugytoja',
      },
      {
        name: 'Dovilė',
        surname: 'Koveckytė',
        mail: 'd.koveckyte@jspc.lt',
        profession: 'Medicinos registratorė',
      },
      {
        name: 'Iveta',
        surname: 'Kazlauskė',
        mail: 'i.kazlauske@jspc.lt',
        profession: 'Medicinos registratorė',
      },
      {
        name: 'Loreta ',
        surname: 'Kubilienė',
        mail: 'l.kubiliene@jspc.lt',
        profession: 'Medicinos registratorė',
      },
      {
        name: 'Daiva ',
        surname: 'Rimkuvienė',
        mail: 'd.rimkuviene@jspc.lt',
        profession: 'Medicinos registratorė',
      },
      {
        name: 'Ermina',
        surname: 'Gavėnaitė',
        mail: 'e.gavenaite@jspc.lt',
        profession: 'Medicinos registratorė',
      },
      {
        profession: 'Bendruomenės slaugytoja',
        name: 'Vilma',
        surname: 'Jančiauskienė',
        mail: 'v.janciauskiene@jspc.lt',
      },
      {
        profession: 'Sveikatos statistikė',
        name: 'Gineta',
        surname: 'Mažeikienė',
        mail: 'g.mazeikiene@jspc.lt',
      },
      {
        profession: 'Buhalterės padėjėja',
        name: 'Justė',
        surname: 'Šveikauskaitė',
        mail: 'j.sveikauskaite@jspc.lt',
      },
      {
        profession: 'Gydytojas otorinolaringologas',
        name: 'Žygimantas',
        surname: 'Tverskis',
        mail: 'z.tverskis@jspc.lt',
      },
      {
        profession: 'Gydytoja otorinolaringologė',
        name: 'Ieva',
        surname: 'Rojutė',
        mail: 'i.rojute@jspc.lt',
      },
      {
        profession: 'Medicinos registratorė',
        name: 'Kristina',
        surname: 'Navickaitė',
        mail: 'k.navickaite@jspc.lt',
      },
      {
        profession: 'Gydytojo odontologo padėjėja',
        name: 'Deimantė',
        surname: 'Daukšaitė',
        mail: 'd.dauksaite@jspc.lt',
      },
      {
        profession: 'Slaugytojos padėjėja',
        name: 'Rasa',
        surname: 'Šakalienė',
        mail: 'r.sakaliene@jspc.lt',
      },
      {
        profession: 'Šeimos gydytoja',
        name: 'Laura',
        surname: 'Černiauskaitė',
        mail: 'l.cerniauskaite@jspc.lt',
      },
      {
        profession: 'Šeimos gydytoja',
        name: 'Lina',
        surname: 'Merliūnaitė-Plečkaitienė',
        mail: 'l.pleckaitiene@jspc.lt',
      },
    ],

    filteredWorkers: [],

    search: '',
  },

  mounted: function () {
    this.workers.sort(function (a, b) {
      if (a.name > b.name) return 1;

      if (a.name < b.name) return -1;

      return 0;
    });
    this.filteredWorkers = [...this.workers];
  },

  methods: {
    filter(ev) {
      this.search = ev.target.value;

      this.filteredWorkers = this.workers.filter((elm) => {
        let name =
          elm.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;

        let surname =
          elm.surname.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;

        let mail =
          elm.mail.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;

        let profession =
          elm.profession.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;

        return name || surname || mail || profession;
      });

      return this.filteredWorkers;
    },

    sort: function (method) {
      if (method == 'name') {
        if (this.sortOrder) {
          this.filteredWorkers = this.sortByNameAsc;
        } else if (!this.sortOrder) {
          this.filteredWorkers = this.sortByName;
        }

        this.sortOrder = !this.sortOrder;
      }

      if (method == 'surname') {
        if (this.sortOrder) {
          this.filteredWorkers = this.sortBySurnameAsc;
        } else if (!this.sortOrder) {
          this.filteredWorkers = this.sortBySurname;
        }

        this.sortOrder = !this.sortOrder;
      }

      if (method == 'profession') {
        if (this.sortOrder) {
          this.filteredWorkers = this.sortByProfessionAsc;
        } else if (!this.sortOrder) {
          this.filteredWorkers = this.sortByProfession;
        }

        this.sortOrder = !this.sortOrder;
      }
    },

    copyText(text, event) {
      event.target.classList.add('animate-wiggle');

      setTimeout(function () {
        event.target.classList.remove('animate-wiggle');
      }, 300);

      text = text.trim();

      let input = document.createElement('input');

      document.body.appendChild(input);

      input.value = text;

      input.select();

      input.setSelectionRange(0, text.length);

      document.execCommand('copy');

      document.body.removeChild(input);
    },
  },

  computed: {
    sortByName() {
      return this.filteredWorkers.sort(function (a, b) {
        if (a.name > b.name) return 1;

        if (a.name < b.name) return -1;

        return 0;
      });
    },

    sortByNameAsc() {
      return this.filteredWorkers.sort(function (a, b) {
        if (a.name > b.name) return -1;

        if (a.name < b.name) return 1;

        return 0;
      });
    },

    sortBySurname() {
      return this.filteredWorkers.sort(function (a, b) {
        if (a.surname > b.surname) return 1;

        if (a.surname < b.surname) return -1;

        return 0;
      });
    },

    sortBySurnameAsc() {
      return this.filteredWorkers.sort(function (a, b) {
        if (a.surname > b.surname) return -1;

        if (a.surname < b.surname) return 1;

        return 0;
      });
    },

    sortByProfession() {
      return this.filteredWorkers.sort(function (a, b) {
        if (a.profession > b.profession) return 1;

        if (a.profession < b.profession) return -1;

        return 0;
      });
    },

    sortByProfessionAsc() {
      return this.filteredWorkers.sort(function (a, b) {
        if (a.profession > b.profession) return -1;

        if (a.profession < b.profession) return 1;

        return 0;
      });
    },
  },
});
