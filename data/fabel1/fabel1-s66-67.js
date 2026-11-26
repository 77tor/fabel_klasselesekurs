window.FABEL_DATA.push({
  id: "fabel1-s66-67",
  bok: "Fabel 1 (vår)",
  sidetall: "S.66-67",
  tittel: "Større enn et ord",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["rose", "stokk", "vaffel", "knapp", "smaker", "reiser", "gaffel"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 16x16 rutenett der de 6 ordene ligger skjult vannrett og loddrett.
    ordsok: {
      rutenett: [
        ["s","t","ø","r","r","e","m","k","p","l","o","n","b","v","c","x"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","v","a","f","f","e","l","r","t","y","u","i","o","p","å"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","m","i","n","d","r","e"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","v"],
        ["m","n","b","v","c","x","z","l","u","k","t","e","r","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["g","a","f","f","e","l","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","r","e","i","s","e"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","g"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["større", "vaffel", "mindre", "lukter", "gaffel", "reise"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["bil", "trapp", "pose", "by", "sokk", "gaffel"],
      ekstraoppgave: "Finn alle rimordene i teksten. Hvor mange rimpar fant du? ______",
      overskrift: "Større enn et ord",
      tekst: "En rose lukter bedre enn en ___.\nEn stokk er mye lengre enn en ___.\nEn vaffel smaker bedre enn en ___.\nEn knapp er mye mindre enn en ___.\nEn sky kan være større enn en ___.\nEt smil kan reise lengre enn en ___.\n\nEn liten er litt mindre enn en stor.\nMen finnes det noe større enn et ord?"
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["vaffel", "stokk", "knapp", "lukter", "større", ""],
      silhuettVisning: ["stokk", "vaffel", "knapp", "større", "lukter"],
      ordkjeder: [
        "enroselukterbedre",
        "envaffelsmakerbedre",
        "enknappermyemindre",
        "etsmilkanreiselengre"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["rose", "stokk", "bil", "knapp", "smil", "større"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["vaffel", "rose", "stokk", "knapp", "gaffel", "smil"],
      monster: ["K", "V", "K", "K", "V", "K", "K", "V", "K", "V", "K", "K"],
      antallRader: 6
    }
  }
});