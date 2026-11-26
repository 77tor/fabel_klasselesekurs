window.FABEL_DATA.push({
  id: "fabel3a-s120-121",
  bok: "Fabel 3a",
  sidetall: "S.120-121",
  tittel: "Deichman",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["Deichman", "Christiania", "Opplysningstiden", "Bibliotek", "Boksamlingen", "vitenskapsmenn", "Kongen"]
    },

    // 2. ORDSØK (Blå)
    // Komplett 14x14 rutenett med de 6 ordene fra Ordsøk-PDF-en skjult vannrett
    ordsok: {
      rutenett: [
        ["r","v","c","k","h","d","t","n","q","m","r","d","p","x"],
        ["c","h","r","i","s","t","i","a","n","i","a","g","s","l"],
        ["s","l","z","b","r","p","z","f","n","m","d","h","c","d"],
        ["k","u","e","g","u","b","h","l","c","b","r","v","j","k"],
        ["k","v","k","f","r","q","s","h","q","b","q","y","x","b"],
        ["l","f","o","y","z","l","m","t","l","p","q","m","o","k"],
        ["d","e","i","c","h","m","a","n","p","w","b","u","a","b"],
        ["c","r","g","u","n","d","d","t","f","a","e","h","e","l"],
        ["w","o","e","u","g","v","t","r","o","w","n","h","z","p"],
        ["m","u","n","c","h","m","u","s","e","e","t","k","b","o"],
        ["n","w","k","o","n","g","e","n","t","p","h","r","a","t"],
        ["o","n","n","z","s","g","b","y","y","d","a","a","z","e"],
        ["f","b","o","k","s","a","m","l","i","n","g","e","n","k"],
        ["b","i","b","l","i","o","t","e","k","e","t","m","z","p"]
      ],
      ord: ["christiania", "boksamlingen", "munchmuseet", "kongen", "deichman", "biblioteket"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["Deichman", "Christiania", "opplysningstiden", "biblioteket", "kongen"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en konsonant. Hvor mange ord fant du? ______",
      overskrift: "Deichman og opplysningstiden",
      tekst: "___ i Oslo heter Deichman.\n___ bestemte hva som var lov å skrive.\nDa han døde, hadde han bestemt at ___ skulle få bøkene hans.\nVi kaller denne perioden for ___."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["Deichman", "Christiania", "Biblioteket", "Boksamlingen", "Kongen", "Munchmuseet"],
      silhuettVisning: ["Deichman", "Christiania", "Biblioteket", "Boksamlingen", "Kongen", "Munchmuseet"],
      ordkjeder: [
        "biblioteketiosloheterdeichman",
        "kongenbestemtehvamanlovskrive",
        "boksamlingenichristiania",
        "opplysningstidenogvitenskapsmenn"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["Deichman", "Christiania", "Kongen", "Biblioteket", "Boksamlingen", "Opplysningstiden"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["Christiania", "Biblioteket", "Deichman", "boksamlingen", "Opplysningstiden"],
      monster: ["K", "V", "K", "K", "V", "K", "V", "K", "K", "V"],
      antallRader: 5
    }
  }
});