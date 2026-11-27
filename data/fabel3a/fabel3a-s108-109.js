window.FABEL_DATA.push({
  id: "fabel3a-s108-109",
  bok: "Fabel 3a",
  tema: "4. Vi er forskjellige",
  sidetall: "S.108-109",
  tittel: "Kjære dagbok", // Endre gjerne til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Dagbok", "Boksen", "Selvfølgelig", "Ingenting", "Tjene", "Tippet", "Ryddedag"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 6 ordene fra Ordsøk-PDF-en skjult vannrett
    ordsok: {
      rutenett: [
        ["d","h","j","b","t","m","e","g","o","v","w","t","a","k"],
        ["p","v","y","y","u","z","l","l","c","g","v","b","d","u"],
        ["r","o","y","x","t","n","y","u","a","n","s","e","t","t"],
        ["w","r","e","g","p","o","v","v","r","c","c","j","n","o"],
        ["c","f","b","u","t","i","k","k","e","n","p","v","a","c"],
        ["u","o","x","p","k","p","y","o","u","k","j","a","m","l"],
        ["h","r","d","b","e","k","q","j","m","n","w","x","k","s"],
        ["s","s","z","y","n","d","p","p","k","k","m","o","e","k"],
        ["o","r","d","c","z","g","v","e","w","l","o","q","r","i"],
        ["p","l","h","g","c","z","w","k","e","k","y","r","f","v"],
        ["c","y","u","k","z","a","d","a","l","w","n","e","t","a"],
        ["a","h","v","o","r","f","o","r","s","t","m","h","u","d"],
        ["a","l","r","q","k","l","i","k","e","r","w","x","s","m"],
        ["v","n","t","w","c","s","u","d","b","x","q","v","f","t"]
      ],
      ord: ["butikken", "skiva", "uansett", "meg", "hvorfor", "liker"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["dagbok", "ryddedag", "butikken", "pappa", "hagen", "tjene"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Ryddedag i hagen",
      tekst: "I dag har vi stor ___ hjemme.\nJeg hjelper ___ med å rydde ute i ___.\nKanskje jeg kan ___ noen penger til å gå på ___.\nEtterpå skal jeg skrive alt sammen i min ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["dagbok", "boksen", "ryddedag", "butikken", "pappa", "hagen"],
      silhuettVisning: ["dagbok", "boksen", "pappa", "hagen", "butikken", "ryddedag"],
      ordkjeder: [
        "skriveiminnyedagbok",
        "storeryddedagmedpappa",
        "gåtilsammenpåbutikken",
        "selvfølgeliglikerjegskiva"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["meg", "pappa", "hvorfor", "uansett", "butikken", "hagen"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // De 5 ordene og 14-kolonners K/V-mønster fra Gitter-PDF-en
    gitter: {
      ord: ["boller", "film", "ake", "blink", "dårlig"],
      monster: ["V", "V", "K", "K", "V", "K", "K", "V", "K", "V", "K", "K", "V", "K"],
      antallRader: 5
    }
  }
});