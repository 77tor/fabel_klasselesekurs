window.FABEL_DATA.push({
  id: "fabel3a-s52-55",
  bok: "Fabel 3a",
  tema: "2. Bli en havekspert!",
  sidetall: "S.52-55",
  tittel: "Alt lever av noe annet",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Spiser", "Barentshavet", "Lever", "Blåskjell", "Krabber", "Sjøfugler", "Krykkjer"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 10 ordene fra Ordsøk-PDF-en skjult vannrett
    ordsok: {
      rutenett: [
        ["k","r","a","b","b","e","w","f","p","b","v","k","m","t"],
        ["g","q","e","x","r","s","p","i","s","e","r","v","d","l"],
        ["b","l","å","s","k","j","e","l","l","k","e","l","t","s"],
        ["o","n","k","a","m","z","o","v","l","t","s","p","t","e"],
        ["k","r","y","k","k","j","e","l","i","g","k","l","m","f"],
        ["k","w","n","x","f","i","s","k","z","k","s","t","e","q"],
        ["s","j","ø","s","t","j","e","r","n","e","p","o","c","g"],
        ["b","a","r","e","n","t","s","h","a","v","e","t","u","s"],
        ["l","e","v","e","r","e","j","e","s","t","s","z","k","l"],
        ["r","c","n","u","a","u","g","y","u","j","d","b","e","g"],
        ["t","o","r","s","k","g","e","r","h","t","u","e","j","m"],
        ["d","u","v","f","l","f","p","w","x","m","s","j","p","d"],
        ["h","y","s","e","u","r","r","a","n","s","e","y","e","f"],
        ["s","m","å","g","o","d","t","u","g","n","n","f","q","r"]
      ],
      ord: ["krabbe", "spiser", "blåskjell", "krykkje", "fisk", "sjøstjerne", "barentshavet", "lever", "torsk", "hyse"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["Blåskjell", "Spiser", "Krykkje", "Sjøfugler", "Krabber"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Alt lever av noe annet",
      tekst: "Alt lever av noe annet.\n___ spiser plankton.\n___ fanger fisk.\nI lufta flyr det ___, lundefugl og storjo.\nFisk ___ krabber.\n___ spiser sjøstjerner."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["krabbe", "spiser", "blåskjell", "krykkje", "fisk", "sjøstjerne"],
      silhuettVisning: ["krabbe", "spiser", "blåskjell", "krykkje", "fisk", "sjøstjerne"],
      ordkjeder: [
        "blåskjellspiserplankton",
        "sjøfuglerfangerfisk",
        "krabberspisersjøstjerner",
        "krykkjelundefuglhistorjo"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["Krabber", "Sjøstjerne", "Krykkjer", "Lever", "Barentshavet", "Spiser"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["krabbe", "torsk", "lever", "fisk", "krykkje"],
      monster: ["K", "K", "V", "K", "K", "V", "K", "V", "K", "K"],
      antallRader: 5
    }
  }
});