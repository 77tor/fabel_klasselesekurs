window.FABEL_DATA.push({
  id: "fabel2-s14-15",
  bok: "Fabel 2 (høst)",
  sidetall: "S.14-15",
  tittel: "Hvorfor ventet du ikke?",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["penger", "lærere", "saft", "andre", "kafé", "respekt", "klokere"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett fra PDF-en med alle 7 ordene gjemt inni
    ordsok: {
      rutenett: [
        ["N","G","U","J","B","Z","X","V","M","R","K","S","A","J"],
        ["H","A","V","S","W","S","C","Y","M","Y","D","F","H","H"],
        ["Z","K","Q","E","Y","O","K","J","H","P","N","Y","F","D"],
        ["W","Z","L","B","N","H","R","U","P","O","R","T","E","N"],
        ["C","J","A","F","Q","T","D","F","L","G","T","W","Q","A"],
        ["J","F","C","T","Q","H","W","X","S","W","E","E","K","U"],
        ["L","W","M","L","Y","V","E","W","L","U","A","Y","E","M"],
        ["C","M","Y","B","A","O","Q","H","F","T","L","N","Z","S"],
        ["A","E","X","A","M","X","Z","J","V","O","T","B","H","Q"],
        ["Y","Y","P","R","M","N","E","P","U","J","C","D","J","W"],
        ["K","K","X","H","E","A","L","E","N","E","R","U","E","D"],
        ["U","E","M","E","N","W","D","P","S","Y","L","D","M","A"],
        ["G","D","Y","X","E","H","U","E","W","Q","K","D","S","M"],
        ["E","Z","H","Z","O","V","H","S","M","M","U","O","F","S"]
      ],
      ord: ["VENTE", "SKULLE", "ALENE", "DUMT", "SAMMEN", "PORTEN", "HJEM"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["porten", "sammen", "er", "hun", "ikke?", "Emilie"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en vokal. Hvor mange ord fant du? ______",
      overskrift: "Hvorfor ventet du ikke?",
      tekst: "Anna og ___ skulle gå sammen.\nNå ___ Emilie borte.\nAnna ser ut av ___.\nDer ser ___ Emilie.\nHun går ___ med Tobias.\nHvorfor ventet hun ___"
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["vente", "sammen", "skulle", "porten", "alene", "dumt"],
      silhuettVisning: ["skulle", "vente", "sammen", "dumt", "alene", "porten"],
      ordkjeder: [
        "ventesammenporten",
        "skullealenedumt",
        "annagårhjemnå",
        "serutavporten"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["klatrekatt", "stjerner", "juletre", "gaven", "glitter", "julekule", "endelig", "trappa"],
      antallRader: 8
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["klassen", "regler", "plage", "passe", "porten"],
      // 10 kolonner fra Gitter-PDF-en (tilpasset bl.a. "klassen" = K-K-V-K-K-V-K)
      monster: ["K", "K", "V", "K", "K", "V", "K", "V", "K", "V"],
      antallRader: 5
    }
  }
});