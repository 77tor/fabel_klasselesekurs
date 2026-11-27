window.FABEL_DATA.push({
  id: "fabel2-s20-21",
  bok: "Fabel 2 (høst)",
  tema: "Skolen vår",
  sidetall: "S.20-21",
  tittel: "Det finnes regler for alt",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    // Merk: PDF-en inneholdt bare plassholdere ("Ord 2" - "Ord 8"), så jeg har lagt inn 
    // relevante ord fra teksten på s. 20-21 her (kan også redigeres direkte på siden).
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["klasseregler", "regler", "skrive", "hverandre", "tusjen", "hånda", "skole"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med alle de 6 ordene fra PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["k","l","a","s","s","e","r","e","g","l","e","r","w","z"],
        ["g","r","t","w","z","n","n","o","h","f","d","g","v","z"],
        ["k","v","g","e","r","w","x","b","e","v","y","b","l","z"],
        ["l","r","w","e","r","k","a","d","e","p","w","m","n","b"],
        ["s","k","r","i","v","e","s","e","r","g","l","e","r","x"],
        ["o","e","x","z","n","r","ø","g","d","k","s","x","d","v"],
        ["r","h","f","ø","s","r","ø","p","k","j","g","n","k","z"],
        ["ø","w","n","b","l","r","x","e","z","å","v","t","r","i"],
        ["c","t","j","s","a","d","o","t","o","k","d","b","t","z"],
        ["x","t","r","ø","m","m","t","h","y","v","e","b","m","v"],
        ["y","d","v","c","s","r","m","x","f","s","t","o","r","t"],
        ["p","l","k","j","h","g","f","d","v","e","r","d","e","n"],
        ["u","n","i","v","e","r","s","e","t","ø","æ","å","q","w"],
        ["m","n","b","v","c","x","z","r","e","g","l","e","r","p"]
      ],
      ord: ["klasseregler", "regler", "skrive", "stort", "verden", "universet"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["regel", "tusjen", "skriver", "regler", "hånda", "hverandre"],
      ekstraoppgave: "Finn alle ord i teksten som starter med stor bokstav. Hvor mange ord fant du? ______",
      overskrift: "Det finnes regler for alt",
      tekst: "– Alle må passe på ___, sier Emil.\n– Flott, sier Eva. – Det er en fin ___.\n– Du må skrive regelen, sier Eva.\nEmil får den store ___.\n– Alle må passe på hverandre, ___ han.\n– Trenger vi flere ___? spør Eva.\nAlle rekker opp ___.\nAlle vet om en regel."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["barn", "regel", "skrive", "hånd", "skole", ""],
      silhuettVisning: ["skrive", "barn", "skole", "regel", "hånd"],
      ordkjeder: [
        "barnregelskrive",
        "håndskolealle",
        "passepåhverandre",
        "finnesreglerforalt"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Merk: PDF-en hadde kun plassholdere ("Ord 1" - "Ord 6"), så jeg la inn ord fra teksten her
    lydretteOrd: {
      ord: ["hånd", "alle", "skrive", "hverandre", "flott", "spør"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Merk: Gitter-PDF-en var en kopi av mal-arket (vinne, gjøre, osv.), så jeg tilpasset 
    // dette arket med ord fra s. 20-21 og et 10-kolonners K/V-mønster som passer ordene.
    gitter: {
      ord: ["skrive", "regler", "tusjen", "hånda", "skole"],
      monster: ["K", "K", "V", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});