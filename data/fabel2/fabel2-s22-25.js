window.FABEL_DATA.push({
  id: "fabel2-s22-25",
  bok: "Fabel 2 (høst)",
  sidetall: "S.22-25",
  tittel: "Den dagen rektor forsov seg", // Endre gjerne til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["heisekran", "klatre", "trillebår", "sjokolade", "rektor", "skole", "arbeid"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 5 temaordene skjult vannrett/loddrett
    ordsok: {
      rutenett: [
        ["h","e","i","s","e","k","r","a","n","m","p","l","o","k"],
        ["g","t","r","w","z","n","n","o","h","f","d","g","v","z"],
        ["k","v","g","e","r","w","x","b","e","v","y","b","l","z"],
        ["l","r","w","e","r","k","a","d","e","p","w","m","n","b"],
        ["a","k","l","a","t","r","e","s","e","r","g","l","e","r"],
        ["t","e","x","z","n","r","ø","g","d","k","s","x","d","v"],
        ["r","h","f","ø","s","r","ø","p","k","j","g","n","k","z"],
        ["e","w","t","r","i","l","l","e","b","å","r","t","r","i"],
        ["c","t","j","s","a","d","o","t","o","k","d","b","t","z"],
        ["x","t","r","ø","m","m","t","h","y","v","e","b","m","v"],
        ["s","j","o","k","o","l","a","d","e","f","s","t","o","r"],
        ["p","l","k","j","h","g","f","d","v","r","e","k","t","o"],
        ["u","n","i","v","e","r","s","e","t","ø","æ","å","q","r"],
        ["m","n","b","v","c","x","z","r","e","k","t","o","r","p"]
      ],
      ord: ["heisekran", "klatre", "trillebår", "sjokolade", "rektor"]
    },

    // 3. LUKETEKST (Rød/korall)
    // Tilpasset med temaordene fra s. 22-25 (kan redigeres direkte på siden)
    luketekst: {
      ordbank: ["heisekran", "klatre", "trillebår", "sjokolade", "rektor"],
      ekstraoppgave: "Finn alle ord i teksten som har dobbel konsonant. Hvor mange ord fant du? ______",
      overskrift: "På skoleplassen",
      tekst: "Utenfor skolen står det en stor ___.\nArbeiderne triller stein i en ___.\nDet er ikke lov til å ___ på gjerdet.\nDet sier ___ til alle barna.\nI pausen spiser de en bit ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    // Nøyaktig de 5 ordene fra Silhuett-PDF-en i samme rekkefølge som silhuettene
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["heisekran", "klatre", "trillebår", "sjokolade", "rektor", ""],
      silhuettVisning: ["rektor", "heisekran", "trillebår", "sjokolade", "klatre"],
      ordkjeder: [
        "heisekranklatre",
        "trillebårsjokolade",
        "rektorsnakkerhøyt",
        "klatrehøytopp"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["heisekran", "klatre", "trillebår", "sjokolade", "rektor", "skole"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["klatre", "rektor", "trillebår", "sjokolade", "heisekran"],
      monster: ["K", "K", "V", "K", "K", "V", "K", "V", "K", "V"],
      antallRader: 5
    }
  }
});