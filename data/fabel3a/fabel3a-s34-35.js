window.FABEL_DATA.push({
  id: "fabel3a-s34-35",
  bok: "Fabel 3a",
  sidetall: "S.34-35",
  tittel: "Ord kan brukes forskjellig", // Endre gjerne til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["vinne", "gjøre", "medalje", "hogge", "million", "premie", "pokal"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med temaordene fra s. 34-35 skjult vannrett
    ordsok: {
      rutenett: [
        ["v","i","n","n","e","r","m","t","w","f","p","b","v","k"],
        ["g","q","e","x","r","n","m","t","w","f","p","b","v","d"],
        ["g","j","ø","r","e","g","i","g","k","e","l","t","s","p"],
        ["o","n","k","a","m","z","o","v","l","t","s","p","t","e"],
        ["m","e","d","a","l","j","e","l","i","g","k","l","m","f"],
        ["k","w","n","x","a","j","u","w","z","k","s","t","e","q"],
        ["h","o","g","g","e","r","h","q","x","t","p","o","c","g"],
        ["f","å","u","f","e","w","m","i","l","l","i","o","n","d"],
        ["p","r","e","m","i","e","j","e","s","t","s","z","k","l"],
        ["r","c","n","u","a","u","g","y","u","j","d","b","e","g"],
        ["p","o","k","a","l","g","e","r","h","t","u","e","j","m"],
        ["d","u","v","f","l","f","p","w","x","m","s","j","p","d"],
        ["k","o","n","k","u","r","r","a","n","s","e","y","e","f"],
        ["s","m","å","g","o","d","t","u","g","n","n","f","q","r"]
      ],
      ord: ["vinne", "gjøre", "medalje", "hogge", "million", "premie", "pokal", "konkurranse"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["vinne", "gjøre", "medalje", "hogge", "million", "premie"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Den store konkurransen",
      tekst: "Alle har lyst til å ___ konkurransen.\nVi må ___ vårt aller beste i dag.\nFørst skal vi ___ ved så fort vi kan.\nVinneren får en fin ___ rundt halsen.\nDet føles nesten som å vinne en ___ kroner.\nAlle deltakerne får også en liten ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["vinne", "gjøre", "medalje", "hogge", "million", "premie"],
      silhuettVisning: ["medalje", "vinne", "million", "hogge", "gjøre", "premie"],
      ordkjeder: [
        "vinnemedaljeogpremie",
        "gjøresittallerbeste",
        "hoggevedikonkurranse",
        "enmillionkroneripokal"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["vinne", "gjøre", "medalje", "hogge", "million", "premie"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // De 5 ordene og 10-kolonners K/V-mønster fra Gitter-PDF-en
    gitter: {
      ord: ["vinne", "gjøre", "medalje", "hogge", "million"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});