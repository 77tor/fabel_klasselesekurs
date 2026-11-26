window.FABEL_DATA.push({
  id: "fabel3a-s102-105",
  bok: "Fabel 3a",
  sidetall: "S.102-105",
  tittel: "De kule fetterne", // Endre gjerne til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Besøk", "Hodet", "Konkurranse", "Plukke", "Hjul", "Fetterne"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 5 ordene fra Ordsøk-PDF-en skjult vannrett
    ordsok: {
      rutenett: [
        ["f","c","y","m","k","n","n","g","k","b","o","i","e","y"],
        ["b","e","s","ø","k","t","p","n","å","o","h","g","v","k"],
        ["å","f","p","s","u","j","r","k","u","z","t","å","x","m"],
        ["f","g","a","v","e","y","q","b","a","y","f","å","p","d"],
        ["i","r","r","i","a","r","n","o","s","z","b","v","y","m"],
        ["f","e","t","t","e","r","n","e","w","i","j","x","k","t"],
        ["v","t","d","f","å","e","m","e","o","f","h","x","l","p"],
        ["k","o","n","k","u","r","r","a","n","s","e","r","e","h"],
        ["s","d","r","k","ø","v","s","w","ø","u","v","k","n","t"],
        ["p","l","u","k","k","e","h","g","c","h","g","ø","p","o"],
        ["e","o","b","i","g","y","q","b","a","y","f","å","p","d"],
        ["i","a","t","t","a","i","r","r","i","a","r","n","o","s"],
        ["z","b","v","y","m","z","p","u","k","h","f","r","d","i"],
        ["e","w","i","j","x","k","t","f","d","c","j","y","z","g"]
      ],
      ord: ["besøk", "gave", "fetterne", "konkurranse", "plukke"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["besøk", "fetterne", "konkurranse", "plukke", "gave", "hodet"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Besøk av fetterne",
      tekst: "I helgen får vi ___ av ___ våre.\nDe har med seg en fin ___ til oss.\nUte i hagen skal vi ___ bær og lage en ___.\nTil slutt må vi tenke oss godt om og bruke ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["fetterne", "hodet", "gave", "besøk", "konkurranse", ""],
      silhuettVisning: ["fetterne", "hodet", "gave", "besøk", "konkurranse"],
      ordkjeder: [
        "besøkavfetterneihagen",
        "enfinogmorsomgave",
        "plukkebærpåhjul",
        "konkurransemedhodet"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["Besøk", "Fetterne", "Plukke", "Konkurranse", "Hodet", "Gave"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // De 5 ordene og 13-kolonners K/V-mønster fra Gitter-PDF-en
    gitter: {
      ord: ["besøk", "gave", "konkurranse", "fetterne", "plukke"],
      monster: ["K", "V", "K", "V", "K", "K", "V", "K", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});