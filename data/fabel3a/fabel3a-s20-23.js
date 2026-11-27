window.FABEL_DATA.push({
  id: "fabel3a-s20-23",
  bok: "Fabel 3a",
  tema: "1. Hva sier du?",
  sidetall: "S.20-23",
  tittel: "Vigg-Varg 4-2", // Endre gjerne til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Våkne", "Gruer", "Sint", "Unnskyld", "Spennende", "Kjefter", "Garantert"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 7 ordene fra Ordsøk-PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["k","e","e","p","e","r","n","m","t","w","f","p","b","v"],
        ["g","q","e","x","r","n","m","t","w","f","p","b","v","d"],
        ["v","a","n","n","f","l","a","s","k","e","l","t","s","p"],
        ["o","n","k","a","m","z","o","v","l","t","s","p","t","e"],
        ["u","n","n","s","k","y","l","d","a","x","k","l","m","f"],
        ["k","w","n","x","a","j","u","w","z","k","s","t","e","q"],
        ["n","y","k","w","l","r","h","q","x","t","p","o","c","g"],
        ["f","å","u","f","e","w","u","n","n","s","k","y","l","d"],
        ["v","å","k","n","e","p","j","e","s","t","s","z","k","l"],
        ["r","c","n","u","a","u","g","y","u","j","d","b","e","g"],
        ["g","r","u","e","f","m","m","e","r","h","t","u","e","j"],
        ["d","u","v","f","l","f","p","w","x","m","s","j","p","d"],
        ["k","a","m","p","e","n","r","e","t","z","r","y","e","f"],
        ["s","i","n","t","r","d","y","u","g","n","n","f","q","r"]
      ],
      ord: ["keeper", "sint", "våkne", "vannflaske", "unnskyld", "grue", "kampen"]
    },

    // 3. LUKETEKST (Rød/korall)
    // Luketekst-PDF-en var en kopi fra Fabel 2 s. 10, så her er en tilpasset luketekst med ordene fra s. 20-23 (kan redigeres på siden)
    luketekst: {
      ordbank: ["keeper", "sint", "våkne", "vannflaske", "unnskyld", "kampen"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Før kampen",
      tekst: "Det er viktig å ___ tidlig når man skal spille fotball.\nI dag er det den store ___.\nJeg skal stå i mål som ___ og pakker med meg en ___.\nHvis noen blir ___ på banen, er det lurt å si ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    // Silhuett-PDF-en var en kopi fra Fabel 2, så her er ordene fra s. 20-23 lagt inn
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["keeper", "vannflaske", "unnskyld", "kjefter", "kampen", "våkne"],
      silhuettVisning: ["vannflaske", "unnskyld", "keeper", "kjefter", "kampen", "våkne"],
      ordkjeder: [
        "våknetidligførkampen",
        "keepervannflaskebane",
        "gruersegspennende",
        "kjeftersintunnskyld"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 temaord fra s. 20-23 lagt inn
    lydretteOrd: {
      ord: ["våkne", "unnskyld", "kjefter", "garantert", "spennende", "kampen"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 20-23 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["sint", "gruer", "kampen", "keeper", "unnskyld"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});