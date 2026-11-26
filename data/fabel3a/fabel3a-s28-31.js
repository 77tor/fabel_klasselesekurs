window.FABEL_DATA.push({
  id: "fabel3a-s28-31",
  bok: "Fabel 3a",
  sidetall: "S.28-31",
  tittel: "Ny mobil", // Endre gjerne til teksttittelen i boka

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["mobil", "avhengig", "misunnelig", "koster", "spille", "meldinger"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med temaord fra s. 28-31 skjult vannrett
    ordsok: {
      rutenett: [
        ["m","o","b","i","l","n","m","t","w","f","p","b","v","k"],
        ["g","q","e","x","r","n","m","t","w","f","p","b","v","d"],
        ["a","v","h","e","n","g","i","g","k","e","l","t","s","p"],
        ["o","n","k","a","m","z","o","v","l","t","s","p","t","e"],
        ["m","i","s","u","n","n","e","l","i","g","k","l","m","f"],
        ["k","w","n","x","a","j","u","w","z","k","s","t","e","q"],
        ["k","o","s","t","e","r","h","q","x","t","p","o","c","g"],
        ["f","å","u","f","e","w","s","y","k","e","h","u","s","d"],
        ["s","p","i","l","l","e","j","e","s","t","s","z","k","l"],
        ["r","c","n","u","a","u","g","y","u","j","d","b","e","g"],
        ["m","e","l","d","i","n","g","e","r","h","t","u","e","j"],
        ["d","u","v","f","l","f","p","w","x","m","s","j","p","d"],
        ["t","e","g","n","e","b","o","k","t","z","r","y","e","f"],
        ["s","m","å","g","o","d","t","u","g","n","n","f","q","r"]
      ],
      ord: ["mobil", "avhengig", "misunnelig", "koster", "spille", "meldinger", "sykehus", "tegnebok", "smågodt"]
    },

    // 3. LUKETEKST (Rød/korall)
    // Luketekst-PDF-en var en kopi fra Fabel 2 s. 10, så her er en tilpasset luketekst med ordene fra s. 28-31 (kan redigeres på siden)
    luketekst: {
      ordbank: ["mobil", "meldinger", "sykehus", "blomst", "tegnebok", "smågodt"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Besøk på sykehuset",
      tekst: "Mamma har fått en ny ___.\nDen kan sende mange ___.\nI dag skal vi på besøk på et ___.\nVi tar med en fin ___ og en ___.\nTil slutt kjøper vi litt ___ i kiosken."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    // Hentet fra Silhuett-PDF-en (5 ord i 6-ruters ordbank + visningsrekkefølge)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["tegnebok", "sykehus", "smågodt", "gave", "blomst", ""],
      silhuettVisning: ["blomst", "gave", "tegnebok", "sykehus", "smågodt"],
      ordkjeder: [
        "nymobilsendemeldinger",
        "avhengigspillekoster",
        "sykehusblomstgave",
        "tegneboksmågodtmamma"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    // Lydrette ord-PDF-en var en tom mal, så her er 6 temaord fra s. 28-31 lagt inn
    lydretteOrd: {
      ord: ["mobil", "avhengig", "misunnelig", "koster", "spille", "meldinger"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    // De 5 ordene og 10-kolonners K/V-mønster fra Gitter-PDF-en
    gitter: {
      ord: ["avhengig", "mobil", "koster", "misunnelig", "mamma"],
      monster: ["K", "V", "K", "K", "V", "K", "K", "V", "K", "V"],
      antallRader: 5
    }
  }
});