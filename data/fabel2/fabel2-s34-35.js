window.FABEL_DATA.push({
  id: "fabel2-s34-35",
  bok: "Fabel 2 (høst)",
  tema: "Yrker",
  sidetall: "S.34-35",
  tittel: "Verdens beste baker",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    // Stavelsesdeling-PDF-en var mal-arket, så her er temaord fra baker-teksten lagt inn
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["eltemaskin", "rosiner", "blander", "kringle", "baker", "boller", "sukker"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 6 ordene fra Ordsøk-PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["r","u","n","d","t","e","i","d","y","r","x","t","i","v"],
        ["b","l","a","n","d","e","r","b","ø","j","w","v","r","n"],
        ["e","l","t","e","m","a","s","k","i","n","p","å","j","z"],
        ["c","å","i","ø","y","q","a","h","å","e","z","n","u","u"],
        ["p","t","i","c","v","n","c","ø","u","c","e","w","s","i"],
        ["r","o","s","i","n","e","r","w","b","t","a","n","d","e"],
        ["c","s","e","ø","r","y","ø","d","l","h","w","a","k","o"],
        ["p","d","i","r","n","p","b","p","y","p","s","v","å","t"],
        ["e","q","f","æ","t","t","ø","m","y","j","v","n","t","t"],
        ["f","m","a","k","q","n","a","n","e","x","a","i","w","v"],
        ["e","m","e","s","e","k","m","y","p","a","s","s","m","b"],
        ["w","c","o","p","p","n","e","s","z","g","v","r","o","c"],
        ["n","u","y","q","e","m","ø","n","s","p","w","a","y","v"],
        ["m","e","l","d","g","f","ø","v","r","k","h","s","n","p"]
      ],
      ord: ["rundt", "blander", "vått", "eltemaskin", "rosiner", "mel"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["rundt", "blander", "vått", "eltemaskin", "rosiner", "Mel"],
      ekstraoppgave: "Finn alle ord i teksten du kan spise. Hvor mange ord fant du? ______",
      overskrift: "Verdens beste baker",
      tekst: "Alex har en stor ___.\nDen ___ alt som skal bli til boller.\n___, gjær, sukker, salt, smør, melk og ___.\nFørst blander han alt som er tørt.\nSå det som er ___.\nEltemaskinen rører ___.\nDen elter deigen. Så må deigen hvile."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["baker", "hviler", "kjøp", "rosiner", "kringle", "boller"],
      silhuettVisning: ["kringle", "baker", "rosiner", "kjøp", "hviler", "boller"],
      ordkjeder: [
        "bakerstorelterovn",
        "blirmelroperhan",
        "altsaltmelkvått",
        "myksukkerskalkom"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 ord fra teksten lagt inn
    lydretteOrd: {
      ord: ["mel", "gjær", "deigen", "vått", "sukker", "hvile"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 34-35 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["boller", "sukker", "rosiner", "kringle", "eltemaskin"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});