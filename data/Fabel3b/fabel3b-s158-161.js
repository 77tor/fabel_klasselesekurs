window.FABEL_DATA.push({
  id: "fabel3b-s158-161",
  bok: "Fabel 3b",
  sidetall: "S.158-161",
  tittel: "Vekk fra det vanskelige", // Endre til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Eventyr", "Trollmann", "Slott", "Skattekiste", "Drage", "Ridder", "Tryllestav"]
    },

    // 2. ORDSØK (Blå)
    ordsok: {
      rutenett: [
        ["e","v","e","n","t","y","r","d","e","l","u","t","n","i"],
        ["g","q","e","x","r","s","p","i","s","e","r","v","d","l"],
        ["t","r","o","l","l","m","a","n","n","p","e","s","a","k"],
        ["o","n","k","a","m","z","o","v","l","t","s","p","t","e"],
        ["s","l","o","t","t","y","l","l","e","i","t","m","m","f"],
        ["k","w","n","x","f","i","s","k","z","k","s","t","e","q"],
        ["s","k","a","t","t","e","k","i","s","t","e","r","a","t"],
        ["f","j","æ","r","a","t","s","h","a","v","e","t","u","s"],
        ["d","r","a","g","e","t","t","e","r","e","r","g","o","p"],
        ["r","c","n","u","a","u","g","y","u","j","d","b","e","g"],
        ["r","i","d","d","e","r","y","r","l","s","e","p","n","q"],
        ["d","u","v","f","l","f","p","w","x","m","s","j","p","d"],
        ["t","r","y","l","l","e","s","t","a","v","d","e","n","e"],
        ["s","m","å","g","o","d","t","u","g","n","n","f","q","r"]
      ],
      ord: ["eventyr", "trollmann", "slott", "skattekiste", "drage", "ridder", "tryllestav"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["eventyr", "trollmann", "slott", "skattekiste", "drage", "ridder"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Side 158–161",
      tekst: "I et spennende ___ bor en klok ___ høyt oppe i et gammelt ___.\nEn modig ___ må passe seg for en stor ___ som vokter en gjemt ___ full av gull."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["eventyr", "trollmann", "slott", "skattekiste", "drage", "ridder"],
      silhuettVisning: ["eventyr", "trollmann", "slott", "skattekiste", "drage", "ridder"],
      ordkjeder: [
        "enmodigridderogkloktrollmann",
        "stortslottmedgjemtskattekiste",
        "enspennendedrageieventyr",
        "magisktryllestavogfortelling"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["Eventyr", "Trollmann", "Slott", "Skattekiste", "Drage", "Ridder"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["slott", "drage", "ridder", "eventyr", "trollmann"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});