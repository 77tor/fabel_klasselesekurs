window.FABEL_DATA.push({
  id: "fabel1-s100-101",
  bok: "Fabel 1 (vår)",
  sidetall: "S.100-101",
  tittel: "Ut på tur",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["øyekontakt", "gangfeltet", "stopper", "krysse", "bilene", "klassen", "dama"]
    },

    // 2. ORDSØK (Blå)
    ordsok: {
      rutenett: [
        ["ø","y","e","k","o","n","t","a","k","t","l","o","n","b","v","c"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","g","a","n","g","f","e","l","t","e","t","o","p","å","n"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","s","t","o","p","p","e"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","r"],
        ["m","n","b","v","c","x","z","k","r","y","s","s","e","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["b","i","l","e","n","e","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","k","l","a","s","s"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","e"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","q","w","n"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["øyekontakt", "gangfeltet", "stopper", "krysse", "bilene", "klassen"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["gangfeltet", "dama", "øyekontakt", "veien", "tur", "bilen"],
      ekstraoppgave: "Finn alle navnene i teksten. Hvor mange forskjellige navn fant du? ______",
      overskrift: "Ut på tur",
      tekst: "Klassen er på ___.\nDe skal krysse ___.\nFørst stopper de ved ___.\n– Nå skal vi bruke ___, sier Ari.\n– Vi må se på ___ i ___, sier Ari.\nDa vet vi at hun ser oss. Nå kan vi krysse veien."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["øyekontakt", "gangfeltet", "stopper", "krysse", "klassen", ""],
      silhuettVisning: ["stopper", "gangfeltet", "øyekontakt", "krysse", "klassen"],
      ordkjeder: [
        "klassenerpåtur",
        "førststopperdevedgangfeltet",
        "nåskalvibrukeøyekontakt",
        "nåkanvikrysseveien"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["tur", "bilen", "dama", "de", "først", "også"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["gangfeltet", "øyekontakt", "stopper", "krysse", "bilene", "tur"],
      monster: ["K", "V", "K", "K", "K", "V", "K", "K", "V", "K", "V", "K", "V", "K"],
      antallRader: 6
    }
  }
});