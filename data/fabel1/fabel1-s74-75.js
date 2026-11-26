window.FABEL_DATA.push({
  id: "fabel1-s74-75",
  bok: "Fabel 1 (vår)",
  sidetall: "S.74-75",
  tittel: "Akedagen",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["akedagen", "overalt", "vintersko", "akebrett", "matboks", "genser", "votter"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 16x16 rutenett der de 6 ordene ligger skjult vannrett og loddrett.
    ordsok: {
      rutenett: [
        ["a","k","e","b","r","e","t","t","k","p","l","o","n","b","v","c"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","v","i","n","t","e","r","s","k","o","i","o","p","å","n"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","o","v","e","r","a","l"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","t"],
        ["m","n","b","v","c","x","z","m","a","t","b","o","k","s","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["g","e","n","s","e","r","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","t","e","r","m","o"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","s"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["akebrett", "vintersko", "matboks", "genser", "overalt", "termos"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["vintersko", "sjokolade", "skogen", "akebrett", "votter", "perfekt"],
      ekstraoppgave: "Finn alle ordene i teksten som begynner med «s». Hvor mange ord fant du? ______",
      overskrift: "Akedagen",
      tekst: "Det snør! Vi skal ake.\nVi skal ake i ___.\nDet er helt ___.\n\nVi har genser, ___ og lue.\nVi har ___ på beina.\nVi har med oss ___.\nVi skal brenne bål og drikke varm ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["akebrett", "vintersko", "sjokolade", "matboks", "skogen", ""],
      silhuettVisning: ["skogen", "akebrett", "matboks", "vintersko", "sjokolade"],
      ordkjeder: [
        "viskalakeiskogen",
        "detersnøoveralt",
        "viharlueogvotter",
        "drikkevarmsjokolade"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["ake", "snø", "lue", "kaldt", "skogen", "bål"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["vintersko", "akebrett", "matboks", "genser", "termos", "bål"],
      monster: ["K", "V", "K", "K", "V", "K", "K", "V", "K", "V", "K", "K", "V", "K"],
      antallRader: 6
    }
  }
});