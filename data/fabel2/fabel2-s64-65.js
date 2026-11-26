window.FABEL_DATA.push({
  id: "fabel2-s64-65",
  bok: "Fabel 2 (høst)",
  sidetall: "S.64-65",
  tittel: "Kosetime", // Endre gjerne til eksakt teksttittel i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["kosetime", "søndag", "klassen", "boller", "blink", "snøballer", "ake"]
    },

    // 2. ORDSØK (Blå)
    // Ordsøk-PDF-en var en blank mal, så her er et komplett 14x14 rutenett med 7 ord fra s. 64-65
    ordsok: {
      rutenett: [
        ["k","o","s","e","t","i","m","e","p","l","o","k","j","h"],
        ["g","t","r","w","z","n","n","o","h","f","d","g","v","z"],
        ["s","n","ø","b","a","l","l","e","r","t","y","b","l","z"],
        ["l","r","w","e","r","k","a","d","e","p","w","m","n","b"],
        ["a","k","l","a","s","s","e","n","e","r","g","l","e","r"],
        ["t","e","x","z","n","r","ø","g","d","k","s","x","d","v"],
        ["p","r","i","k","k","e","l","e","k","j","g","n","k","z"],
        ["e","w","t","r","i","b","o","l","l","e","r","t","r","i"],
        ["c","t","j","s","a","d","o","t","o","k","d","b","t","z"],
        ["x","t","r","ø","m","m","t","h","y","v","e","b","m","v"],
        ["a","v","s","l","u","t","n","i","n","g","s","t","o","r"],
        ["p","l","k","j","h","g","f","d","v","b","l","i","n","k"],
        ["u","n","i","v","e","r","s","ø","n","d","a","g","q","r"],
        ["m","n","b","v","c","x","z","r","e","k","t","o","r","p"]
      ],
      ord: ["kosetime", "snøballer", "klassen", "prikkelek", "boller", "avslutning", "blink"]
    },

    // 3. LUKETEKST (Rød/korall)
    // Luketekst-PDF-en var en kopi fra s. 10 (bursdagskortet), så her er en luketekst laget ut fra ordene på s. 64-65 (kan redigeres på siden)
    luketekst: {
      ordbank: ["kosetime", "snøballer", "boller", "prikkelek", "film", "varm"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Kosetime i klassen",
      tekst: "På fredag skal klassen ha ___.\nFørst skal vi ut i snøen og kaste ___ på blink.\nNår vi kommer inn, drikker vi ___ kakao og spiser ___.\nEtterpå skal vi leke ___ og se en ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["varm", "prikkelek", "film", "boller", "velge", "avslutning"],
      silhuettVisning: ["prikkelek", "varm", "avslutning", "film", "boller", "velge"],
      ordkjeder: [
        "triksakelagebake",
        "borgkasteblinksnø",
        "pappaharsjokoladejeg",
        "skolenspisepremiehånd"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 temaord fra s. 64-65 lagt inn
    lydretteOrd: {
      ord: ["kosetime", "søndag", "boller", "blink", "ake", "film"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // Gitter-PDF-en var mal-arket, så her er ord fra s. 64-65 tilpasset 10-kolonners K/V-mønster
    gitter: {
      ord: ["boller", "søndag", "velge", "klassen", "snøballer"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});