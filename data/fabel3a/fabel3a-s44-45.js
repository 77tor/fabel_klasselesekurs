window.FABEL_DATA.push({
  id: "fabel3a-s44-45",
  bok: "Fabel 3a",
  sidetall: "S.44-45",
  tittel: "Havet rundt Norge",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Kart", "Havet", "Barentshavet", "Norskehavet", "Olje", "Millioner", "Fisk"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 7 ordene fra Ordsøk-PDF-en skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["u","p","u","o","h","y","u","w","p","d","g","j","g","b"],
        ["j","f","d","c","n","n","r","z","d","f","x","s","l","a"],
        ["n","o","r","s","k","e","h","a","v","e","t","k","k","r"],
        ["e","x","b","r","c","r","e","u","j","r","x","s","y","e"],
        ["h","u","p","m","w","s","n","x","l","y","w","u","k","n"],
        ["g","q","u","c","j","k","o","l","j","e","m","f","e","t"],
        ["b","a","r","e","n","t","s","h","a","v","e","t","h","s"],
        ["e","q","v","t","n","h","l","e","h","n","m","c","v","h"],
        ["k","g","t","r","f","l","a","x","f","i","s","k","c","a"],
        ["z","s","o","b","j","v","p","j","h","a","v","e","t","v"],
        ["u","a","q","p","a","e","m","e","t","g","t","s","m","e"],
        ["w","z","l","b","r","t","k","t","b","z","q","t","c","t"],
        ["m","i","l","l","i","o","n","e","r","g","w","x","h","y"],
        ["k","a","r","t","c","t","e","k","k","f","f","r","c","e"]
      ],
      ord: ["havet", "fisk", "olje", "millioner", "kart", "barentshavet", "norskehavet"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["Kart", "Barentshavet", "Norskehavet", "fisk", "bunnen"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Havet rundt Norge",
      tekst: "Det er mye hav rundt Norge.\nPå et ___ er nord oppover.\nVest for Norge ligger ___.\nHelt nord ligger ___.\nI havet fanger fiskerne ___.\nI Norskehavet er det 3500 meter ned til ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["kart", "havet", "fisk", "olje", "bunnen", "millioner"],
      silhuettVisning: ["kart", "havet", "fisk", "olje", "bunnen", "millioner"],
      ordkjeder: [
        "myehavrundtnorge",
        "nordoppoverpåetkart",
        "fiskernefangerfisk",
        "nedtilbunnenihavet"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["Havet", "Barentshavet", "Norskehavet", "Olje", "Millioner", "Fisk"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["Kart", "Havet", "Barentshavet", "Norskehavet", "Olje"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});