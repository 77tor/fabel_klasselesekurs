window.FABEL_DATA.push({
  id: "fabel1-s78-79",
  bok: "Fabel 1 (vår)",
  sidetall: "S.78-79",
  tittel: "Bjørnen sover",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["bjørnen", "usynlig", "forstyrre", "snorkingen", "vinter", "sulten", "eneste"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 16x16 rutenett der de 6 ordene ligger skjult vannrett og loddrett.
    ordsok: {
      rutenett: [
        ["b","j","ø","r","n","e","n","m","k","p","l","o","n","b","v","c"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","u","s","y","n","l","i","g","y","u","i","o","p","å","n"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","f","o","r","s","t","y"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","r"],
        ["m","n","b","v","c","x","z","s","u","l","t","e","n","q","w","r"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","e"],
        ["v","å","r","e","n","z","x","c","v","b","n","m","q","w","e","r"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","v","e","k","k","e"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","g"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["bjørnen", "usynlig", "sulten", "våren", "vekke", "forstyr"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["hi", "natt", "vinter", "forstyrre", "våren", "usynlig"],
      ekstraoppgave: "Tell hvor mange ganger ordet «bjørnen» (eller «Bjørnen») står i teksten. Svar: ______",
      overskrift: "Bjørnen sover",
      tekst: "Nå er det ___.\nI skogen er det snø.\nBjørnen sover i ___.\nDen er helt ___.\nDen sover dag og ___.\nIngen får lov å ___.\nBjørnen skal bare sove helt til ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["snorkingen", "bjørnen", "usynlig", "forstyrre", "vinter", ""],
      silhuettVisning: ["bjørnen", "vinter", "usynlig", "forstyrre", "snorkingen"],
      ordkjeder: [
        "nåsoverbjørnen",
        "ingenmåvekkebjørnen",
        "bjørnensoverihi",
        "helttilvåren"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["sover", "natt", "dag", "bjørn", "vinter", "tørst"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["snorkingen", "bjørnen", "usynlig", "vinter", "sulten", "natt"],
      monster: ["K", "K", "V", "K", "K", "V", "K", "K", "V", "K", "V", "K", "V", "K"],
      antallRader: 6
    }
  }
});