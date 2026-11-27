window.FABEL_DATA.push({
  id: "fabel2-s44-45",
  bok: "Fabel 2 (høst)",
  tema: "Simsalabim",
  sidetall: "S.44-45",
  tittel: "Majalinis trylleshow",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["trylle", "farfar", "tryllestav", "velkommen", "kanin", "trylleshow", "kasse"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 6 ordene fra Ordsøk-PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["t","r","y","l","l","e","s","h","o","w","å","o","k","x"],
        ["u","s","g","z","v","y","e","w","u","v","h","j","r","p"],
        ["j","k","v","h","o","p","p","e","å","s","n","u","e","p"],
        ["b","ø","s","o","k","j","w","y","z","w","u","a","e","ø"],
        ["v","ø","t","r","y","l","l","e","k","f","w","o","w","å"],
        ["i","e","h","p","k","a","i","n","n","z","w","j","b","v"],
        ["k","x","x","u","w","x","v","e","r","m","b","b","p","g"],
        ["d","d","æ","l","o","p","p","e","z","y","n","o","o","g"],
        ["å","c","s","i","v","ø","h","t","p","x","p","i","p","m"],
        ["b","z","e","k","a","n","i","n","e","x","r","j","d","f"],
        ["s","e","a","r","x","y","y","y","y","e","w","z","w","y"],
        ["h","v","r","r","j","m","k","m","w","g","ø","c","m","w"],
        ["f","n","o","b","o","r","d","h","y","o","r","l","g","j"],
        ["y","w","ø","u","c","b","w","v","e","z","å","i","o","a"]
      ],
      ord: ["hoppe", "trylle", "loppe", "kanin", "trylleshow", "bord"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["Hoppe", "trylle", "loppe", "kanin", "trylleshow!", "bord"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Majalinis trylleshow",
      tekst: "Velkommen til Majalinis ___\n«Jeg skal ___ fram en ___!» sier Maja.\nMaja har laget et ___ av en kasse.\nInne i kassen sitter Guro.\nGuro holder ___.\n___ er Majas ___.\nHoppe, ___, jokus, krokus!"
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["kappe", "tryllestav", "kopp", "kasse", "kanin", "tryllesett"],
      silhuettVisning: ["tryllestav", "kappe", "kanin", "kopp", "tryllesett", "kasse"],
      ordkjeder: [
        "tryllermagisksvartbord",
        "lagekoppballser",
        "lopperødstårunder",
        "hattgulkassejokus"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 ord fra trylleshow-teksten lagt inn
    lydretteOrd: {
      ord: ["trylle", "trylleshow", "kasse", "kanin", "jokus", "bord"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 44-45 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["kasse", "kanin", "trylle", "farfar", "trylleshow"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});