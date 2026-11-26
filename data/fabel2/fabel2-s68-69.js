window.FABEL_DATA.push({
  id: "fabel2-s68-69",
  bok: "Fabel 2 (høst)",
  sidetall: "S.68-69",
  tittel: "Penest kledd i verden",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["verden", "prinsesse", "slott", "balkongen", "rosa", "lyseblå", "kjole"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med alle de 6 ordene fra Ordsøk-PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["p","e","n","e","s","t","z","v","r","d","ø","å","f","p"],
        ["b","r","b","m","w","r","b","w","a","n","x","v","t","ø"],
        ["d","m","p","l","t","o","n","k","l","e","d","d","h","z"],
        ["h","r","l","e","k","t","w","g","e","r","e","v","k","a"],
        ["k","d","z","n","r","d","y","d","k","b","k","e","l","j"],
        ["v","e","r","d","e","n","t","k","l","å","d","m","z","w"],
        ["q","e","a","x","g","k","i","v","d","d","n","p","r","p"],
        ["b","e","s","t","e","m","m","e","y","k","f","m","b","g"],
        ["o","a","g","e","ø","x","o","n","e","j","g","a","r","o"],
        ["x","l","h","h","n","i","w","ø","n","b","r","v","c","b"],
        ["b","a","l","k","o","n","g","e","n","w","d","k","o","f"],
        ["j","w","x","j","ø","e","w","r","h","y","s","t","y","a"],
        ["g","a","n","g","e","h","e","j","o","g","e","ø","x","s"],
        ["n","m","h","p","u","e","s","t","b","g","d","i","n","g"]
      ],
      ord: ["penest", "kledd", "verden", "bestemme", "balkongen", "gang"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["bestemme", "balkongen", "bodde", "befaler", "rosa", "prinsesse"],
      ekstraoppgave: "Finn alle ord i teksten som starter med stor bokstav. Hvor mange ord fant du? ______",
      overskrift: "Penest kledd i verden",
      tekst: "Det var en gang en ___.\nHun skulle ___ alt.\nHun ___ i et slott.\nKjolen hennes var ___.\nEn morgen gikk prinsessen ut på ___.\n– Jeg ___! sa hun. – Alle må gjøre som jeg sier!"
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["prinsesse", "utrolig", "kjole", "rosa", "slott", "farger"],
      silhuettVisning: ["prinsesse", "kjole", "utrolig", "slott", "farger", "rosa"],
      ordkjeder: [
        "altkjolefinslott",
        "verdenklærskiftegul",
        "rødbrungråttlilla",
        "fargerprinsessehurraturkis"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 temaord fra s. 68-69 lagt inn
    lydretteOrd: {
      ord: ["kjole", "slott", "rosa", "verden", "prinsesse", "farger"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 68-69 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["slott", "kjole", "farger", "rosa", "prinsesse"],
      monster: ["K", "K", "V", "K", "K", "V", "K", "V", "K", "K"],
      antallRader: 5
    }
  }
});