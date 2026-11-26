window.FABEL_DATA.push({
  id: "fabel1-s68-69",
  bok: "Fabel 1 (vår)",
  sidetall: "S.68-69",
  tittel: "Gi meg et ord",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["kråke", "tåke", "rimer", "pølsebål", "ingenting", "kveld", "stein"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 16x16 rutenett der de 6 ordene ligger skjult vannrett og loddrett.
    ordsok: {
      rutenett: [
        ["p","ø","l","s","e","b","å","l","m","k","p","l","o","n","b","v"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","k","r","å","k","e","r","t","y","u","i","o","p","å","n"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","s","t","e","i","n","e"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","v"],
        ["m","n","b","v","c","x","z","g","r","e","i","n","q","w","e","r"],
        ["t","y","u","i","o","p","å","a","s","d","f","g","h","j","k","l"],
        ["k","v","e","l","d","z","x","c","v","b","n","m","q","w","e","r"],
        ["t","y","u","i","o","p","å","a","s","d","f","g","h","j","k","l"],
        ["ø","æ","å","z","x","c","v","b","n","m","r","i","m","e","r","q"],
        ["w","e","r","t","y","u","i","o","p","å","a","s","d","f","g","h"],
        ["j","k","l","ø","æ","å","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["pølsebål", "kråke", "stein", "grein", "kveld", "rimer"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["KVELD", "MYR", "TÅKE", "VED", "KOPP", "GREIN"],
      ekstraoppgave: "Finn alle ord i teksten som er skrevet med bare STORE bokstaver. Hvor mange ord fant du? ______",
      overskrift: "Gi meg et ord",
      tekst: "Gi meg et ord som rimer på tre. ___!\nGi meg et ord som rimer på dyr. ___!\nGi meg et ord som rimer på kråke. ___!\nGi meg et ord som rimer på stein. ___!\nGi meg et ord som rimer på sopp. ___!\nGi meg et ord som rimer på fjell. ___!\n\nGi meg et ord som rimer på pølsebål.\nDet fins vel ingenting som rimer på pølsebål?\nHva blir så det? Skog!"
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["pølsebål", "kråke", "fjell", "skog", "kveld", ""],
      silhuettVisning: ["kråke", "fjell", "pølsebål", "skog", "kveld"],
      ordkjeder: [
        "gimegetord",
        "somrimerpåtre",
        "detblirtilenskog",
        "rimerpåpølsebål"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["ved", "sopp", "tåke", "fjell", "skog", "kveld"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["pølsebål", "kråke", "stein", "skog", "sopp", "kveld"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V", "K", "V", "K", "K"],
      antallRader: 6
    }
  }
});