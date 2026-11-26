window.FABEL_DATA.push({
  id: "fabel1-s94-95",
  bok: "Fabel 1 (vår)",
  sidetall: "S.94-95",
  tittel: "Krysse veien",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["krysse", "gangfelt", "løpefelt", "bilene", "venstre", "ingen", "betyr"]
    },

    // 2. ORDSØK (Blå)
    ordsok: {
      rutenett: [
        ["g","a","n","g","f","e","l","t","p","l","o","n","b","v","c","x"],
        ["a","d","f","g","h","j","k","l","ø","æ","å","z","x","c","v","b"],
        ["q","w","l","ø","p","e","f","e","l","t","u","i","o","p","å","n"],
        ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l"],
        ["p","o","i","u","y","t","r","e","w","q","v","e","n","s","t","r"],
        ["l","k","j","h","g","f","d","s","a","æ","ø","å","z","x","c","e"],
        ["m","n","b","v","c","x","z","k","r","y","s","s","e","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["b","i","l","e","n","e","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","t","r","y","g","t"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","g"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","q","w","e"],
        ["r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k"],
        ["l","ø","æ","å","z","x","c","v","b","n","m","q","w","e","r","t"],
        ["y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ø"]
      ],
      ord: ["gangfelt", "løpefelt", "venstre", "krysse", "bilene", "trygt"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["gangfelt", "venstre", "høyre", "gåfelt", "løpefelt", "trygt"],
      ekstraoppgave: "Finn alle spørsmålstegnene (?) i teksten. Hvor mange spørsmål står det? ______",
      overskrift: "Krysse veien",
      tekst: "Gå til et ___.\nSe til ___. Ingen biler?\nSe til ___. Ingen biler?\nSe til venstre. Ingen biler?\nDa er det helt ___.\n\nDet heter gangfelt. Det betyr ___.\nDet heter ikke ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["gangfelt", "løpefelt", "venstre", "krysse", "trygt", ""],
      silhuettVisning: ["krysse", "gangfelt", "venstre", "løpefelt", "trygt"],
      ordkjeder: [
        "skalduoverveien",
        "gåtiletgangfelt",
        "daerdethelttrygt",
        "detheterikkeløpefelt"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["til", "bilen", "over", "høyre", "veien", "trygt"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["gangfelt", "løpefelt", "venstre", "krysse", "trygt", "til"],
      monster: ["K", "V", "K", "K", "K", "V", "K", "K", "V", "K", "V", "K", "V", "K"],
      antallRader: 6
    }
  }
});