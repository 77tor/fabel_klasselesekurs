window.FABEL_DATA.push({
  id: "fabel2-s60-61",
  bok: "Fabel 2 (høst)",
  tema: "Vær og klima",
  sidetall: "S.60-61",
  tittel: "Regn, yr, snø og hagl",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    // Merk: "kretsløp" sto to ganger i PDF-en, så jeg byttet ut duplikatet med "evighetsmekanisme" fra ordsøket (kan redigeres på siden)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["kretsløp", "jordkloden", "nedbøren", "evighetsmekanisme", "innsjøer", "himmelen", "likevel"]
    },

    // 2. ORDSØK (Blå)
    // Utvidet til 17x14 rutenett slik at det lengste ordet ("evighetsmekanisme", 17 bokstaver) får plass vannrett
    ordsok: {
      rutenett: [
        ["e","v","i","g","h","e","t","s","m","e","k","a","n","i","s","m","e"],
        ["v","f","a","m","n","c","d","f","v","g","m","n","q","s","p","c","v"],
        ["k","r","e","t","s","l","ø","p","e","t","b","l","f","f","r","i","e"],
        ["d","å","y","m","o","t","j","c","d","n","k","l","å","a","s","h","d"],
        ["i","g","d","s","n","c","r","f","p","a","g","a","z","b","d","t","f"],
        ["k","l","i","m","a","o","c","k","b","b","d","a","ø","p","b","p","r"],
        ["e","v","d","d","å","e","w","n","ø","y","h","f","t","l","i","e","m"],
        ["d","w","m","q","g","y","p","e","v","y","r","l","k","l","d","å","ø"],
        ["r","e","g","n","a","j","r","q","y","y","z","v","n","m","å","w","n"],
        ["h","k","s","j","o","r","q","b","i","x","g","h","n","h","p","h","b"],
        ["d","s","g","k","l","k","a","v","w","e","t","r","v","z","n","g","g"],
        ["x","s","h","a","g","l","p","n","b","d","ø","q","f","j","å","z","e"],
        ["h","t","k","a","s","o","a","e","e","s","e","å","t","y","j","k","j"],
        ["s","n","ø","z","å","n","r","w","k","b","ø","p","n","ø","l","n","y","r"]
      ],
      ord: ["kretsløpet", "regn", "yr", "snø", "hagl", "klima", "evighetsmekanisme"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["elver", "vannet", "om", "nedbør", "hagl", "yr"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en vokal. Hvor mange ord fant du? ______",
      overskrift: "Regn, yr, snø og hagl",
      tekst: "Hvis det ikke kom ___, hadde jordkloden tørket ut.\nBrønnene hadde blitt tomme, og innsjøer og ___ hadde forsvunnet.\nRegn, ___, snø og ___ er nedbøren som sørger for at vi kan bruke ___ på jorda om og ___ igjen."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["nedbør", "damp", "innsjø", "himmel", "kretsløp", "hagl"],
      silhuettVisning: ["kretsløp", "nedbør", "hagl", "innsjø", "himmel", "damp"],
      ordkjeder: [
        "regnyrsnøhagl",
        "tørketommeelvergår",
        "omvannbrønnhav",
        "startskydamphimmel"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 temaord fra s. 60-61 lagt inn
    lydretteOrd: {
      ord: ["regn", "snø", "hagl", "nedbør", "innsjø", "elver"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 60-61 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["hagl", "damp", "elver", "nedbør", "himmel"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});