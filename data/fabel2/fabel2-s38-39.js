window.FABEL_DATA.push({
  id: "fabel2-s38-39",
  bok: "Fabel 2 (høst)",
  tema: "Yrker",
  sidetall: "S.38-39",
  tittel: "En søppelhval",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    // Merk: PDF-en inneholdt ordene fra baketeksten på s. 34-35, så jeg har lagt inn 
    // temaord fra søppel-teksten på s. 38-39 her (kan redigeres direkte på siden).
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["søppelhval", "restavfall", "sortering", "matavfall", "dunkene", "knappen", "tygger"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 8 ordene fra Ordsøk-PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["r","e","s","t","a","v","f","a","l","l","p","b","g","j"],
        ["s","ø","p","p","e","l","b","i","l","w","m","d","z","a"],
        ["t","r","y","k","k","e","r","h","w","w","j","q","e","r"],
        ["s","o","r","t","e","r","i","n","g","f","g","d","e","o"],
        ["e","g","e","n","t","l","i","g","d","m","a","r","e","f"],
        ["d","u","n","k","e","n","e","h","q","b","n","y","ø","r"],
        ["s","ø","p","p","e","l","h","v","a","l","q","h","p","s"],
        ["m","a","t","a","v","f","a","l","l","d","l","j","i","ø"],
        ["n","g","j","å","s","m","v","x","j","h","t","p","ø","a"],
        ["m","o","k","p","w","t","d","j","y","s","s","n","ø","c"],
        ["o","r","ø","i","a","a","w","x","p","p","x","w","a","c"],
        ["å","l","r","t","e","r","e","c","o","u","å","x","z","s"],
        ["i","n","g","i","b","i","l","j","p","y","x","p","m","q"],
        ["å","e","g","i","i","z","e","s","e","å","t","x","k","d"]
      ],
      ord: ["restavfall", "søppelbil", "trykker", "sortering", "egentlig", "dunkene", "søppelhval", "matavfall"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["søppel", "bil", "Søppelbilen", "dunkene", "knappen", "hvalen"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "En søppelhval.",
      tekst: "___ likner et stort dyr. Munnen er bak.\nJo mater ___. Han henger ___ fast i munnen.\nHan trykker på ___. Hvalen tygger ___.\nEgentlig er hvalen en ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["dunker", "søppel", "sortere", "hval", "restavfall", "plast"],
      silhuettVisning: ["restavfall", "dunker", "plast", "sortere", "søppel", "hval"],
      ordkjeder: [
        "kjørebaktrykkerbil",
        "tyggerknappryggrom",
        "lukehvalsultenalt",
        "fasttrillerglassved"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 ord fra teksten lagt inn
    lydretteOrd: {
      ord: ["egentlig", "tygger", "hvalen", "søppel", "dunkene", "knappen"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 38-39 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["søppel", "dunker", "tygger", "knappen", "søppelhval"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});