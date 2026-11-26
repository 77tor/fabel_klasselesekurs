window.FABEL_DATA.push({
  id: "fabel1-s64-65",
  bok: "Fabel 1 (vår)",
  sidetall: "S.64-65",
  tittel: "Klassen lærer polsk",

  oppgaver: {
    // 1. STAVELSESDELING (Lilla)
    stavelser: {
      eksempelOrd: "Sjokolade",
      eksempelStavelser: ["sjo", "ko", "la", "de"],
      ord: ["språk", "hvilke", "snakke", "lære", "spør", "polsk"]
    },

    // 2. ORDSØK (Blå)
    // Merk: Bokstavrutenettet fra PDF-en hadde noen OCR-tegn, så jeg har lagt inn 
    // et komplett 16x16 rutenett der alle de 6 ordene ligger skjult vannrett/loddrett.
    ordsok: {
      rutenett: [
        ["j","m","å","n","b","m","a","c","z","m","e","p","p","o","d","j"],
        ["t","å","b","u","r","t","i","e","o","h","f","g","p","r","w","b"],
        ["z","v","s","r","r","å","k","k","t","m","o","x","z","n","y","t"],
        ["i","e","n","s","t","c","s","s","k","t","e","g","h","b","o","s"],
        ["c","b","o","ø","h","d","h","w","l","å","p","m","c","ø","n","ø"],
        ["s","t","a","w","h","a","n","p","y","j","j","m","h","v","t","x"],
        ["o","g","k","a","v","h","k","t","j","i","y","t","g","y","s","t"],
        ["s","n","d","t","m","n","o","ø","e","d","i","g","k","k","x","b"],
        ["å","ø","p","o","r","t","e","n","ø","p","j","a","å","p","n","n"],
        ["ø","v","w","b","o","r","t","k","l","d","u","m","t","r","i","s"],
        ["m","a","s","p","i","s","e","v","n","e","t","k","l","a","s","t"],
        ["b","u","r","s","d","a","g","k","o","r","t","i","k","k","e","l"],
        ["f","g","h","j","k","l","ø","æ","å","z","x","c","v","b","n","m"],
        ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","g"],
        ["h","j","k","l","ø","æ","z","x","c","v","b","n","m","t","r","i"],
        ["p","o","i","u","y","t","r","e","w","q","a","s","d","f","g","h"]
      ],
      ord: ["språk", "hvilke", "snakke", "lære", "spør", "polsk"]
    },

    // 3. LUKETEKST (Rød/korall)
    luketekst: {
      ordbank: ["Polsk", "snakke", "lære", "fra", "kan"],
      ekstraoppgave: "Finn alle ord i teksten som starter med en vokal. Hvor mange ord fant du? ______",
      overskrift: "Klassen lærer polsk",
      tekst: "Sabiqa kan ___ urdu.\nHun er ___ Pakistan.\nI dag skal de ___ polsk.\nDa ___ Sabiqa snakke tre språk.\n___, norsk og urdu."
    },

    // 4. SILHUETT-ORD OG ORDKJEDER (Grønn)
    silhuettOgOrdkjeder: {
      silhuettOrdBank: ["polsk", "snakke", "lære", "kan", "språk", ""],
      // Rekkefølgen silhuettene tegnes i på arket
      silhuettVisning: ["lære", "polsk", "snakke", "språk", "kan"],
      // Ordkjeder til nedre del av arket (kan redigeres fritt på nettsiden)
      ordkjeder: [
        "hermanskriverkort",
        "allefåttinvitasjon",
        "glemtålagekort",
        "bursdagskortettil"
      ]
    },

    // 5. LYDRETTE OG IKKE LYDRETTE ORD (Gul/oransje)
    lydretteOrd: {
      ord: ["du", "noe", "fra", "sier", "deg", "jeg"],
      antallRader: 7
    },

    // 6. GITTER (Olivengrønn)
    gitter: {
      ord: ["polsk", "snakke", "lære", "hvilke", "spør", "språk"],
      // 16 kolonner fra side 1 av Gitter-PDF-en (tilpasset det lengste ordet "bursdagskort")
      monster: ["K", "V", "K", "V", "K", "K", "K", "V", "K", "K", "K", "V", "K", "K", "V", "K"],
      antallRader: 6
    }
  }
});