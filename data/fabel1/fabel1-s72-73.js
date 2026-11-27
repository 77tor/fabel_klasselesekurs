window.FABEL_DATA.push({
  id: "fabel1-s72-73",
  bok: "Fabel 1 (vår)",
  tema: "Vinter",
  sidetall: "S.72-73",
  tittel: "Snø",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["vinter", "gresset", "bladene", "himmelen", "allerede", "hvisker", "snøen"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 16x16 rutenett der de 6 ordene ligger skjult vannrett og loddrett.
    ordsok: {
      rutenett: [
        ["h","i","m","m","e","l","e","n","k","p","l","o","n","b","v","c"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","g","r","e","s","s","e","t","y","u","i","o","p","å","n"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","b","l","a","d","e","n"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","v"],
        ["m","n","b","v","c","x","z","v","i","n","t","e","r","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["b","a","k","k","e","n","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","h","v","i","l","e"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","g"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["himmelen", "gresset", "vinter", "bakken", "hvile", "bladen"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["vinter", "første", "høst", "snøen", "hvit", "gresset"],
      ekstraoppgave: "Finn alle ordene i teksten med dobbel konsonant (to like konsonanter etter hverandre). Hvor mange fant du? ______",
      overskrift: "Snø",
      tekst: "Før var det ___.\nNå er det ___.\nTrærne har mistet bladene.\nGresset ligger flatt på bakken.\nSnøen faller fra himmelen.\nDette er den aller ___ snøen.\n\nHei! sier ___.\nHer kommer jeg.\nHurra! svarer ___.\nSkogen blir helt ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["himmelen", "gresset", "vinter", "skogen", "snøen", ""],
      silhuettVisning: ["vinter", "gresset", "himmelen", "skogen", "snøen"],
      ordkjeder: [
        "heisiersnøen",
        "skogenblirhelthvit",
        "førvardethøst",
        "gressetsoverallerede"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["snø", "hvit", "kom", "høst", "hvile", "vinter"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["himmelen", "vinter", "bakken", "skogen", "høst", "snø"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V", "K", "V", "K", "K"],
      antallRader: 6
    }
  }
});