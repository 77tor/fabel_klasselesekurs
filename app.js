// ==========================================================================
  // INNLOGGINGSSPERRE
  // ==========================================================================
  const VALID_USER = "Haanes";
  const VALID_PASS = "Hest1234";
  const AUTH_STORAGE_KEY = "fabel_authenticated_v1";

  const loginOverlay = document.getElementById("login-overlay");
  const loginForm = document.getElementById("login-form");
  const loginUsername = document.getElementById("login-username");
  const loginPassword = document.getElementById("login-password");
  const loginError = document.getElementById("login-error");

  function unlockSite() {
    document.body.classList.remove("is-locked");
    if (loginOverlay) loginOverlay.classList.add("hidden");
  }

  // Sjekk om brukeren allerede er logget inn i denne nettleseren
  if (localStorage.getItem(AUTH_STORAGE_KEY) === "true") {
    unlockSite();
  } else {
    document.body.classList.add("is-locked");
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredUser = loginUsername.value.trim();
      const enteredPass = loginPassword.value;

      if (enteredUser === VALID_USER && enteredPass === VALID_PASS) {
        localStorage.setItem(AUTH_STORAGE_KEY, "true");
        if (loginError) loginError.style.display = "none";
        unlockSite();
      } else {
        if (loginError) loginError.style.display = "block";
        loginPassword.value = "";
        loginPassword.focus();
      }
    });
  }


document.addEventListener("DOMContentLoaded", () => {
  const TASK_TYPES = [
    { key: "stavelser", label: "Stavelser", color: "#d896ff" },
    { key: "ordsok", label: "Ordsøk", color: "#5cb8ff" },
    { key: "luketekst", label: "Luketekst", color: "#f67b7b" },
    { key: "silhuettOgOrdkjeder", label: "Silhuettord og ordkjeder", color: "#6ee755" },
    { key: "lydretteOrd", label: "Lydrette ord?", color: "#fdcb6e" },
    { key: "gitter", label: "Gitter", color: "#b5d380" }
  ];


// Lagre dyp kopi av originaldata for tilbakestilling
  const originalData = JSON.parse(JSON.stringify(window.FABEL_DATA || []));
  let workingData = JSON.parse(JSON.stringify(window.FABEL_DATA || []));

  let currentItemIndex = -1;
  let expandedTextIndex = null; // Starter minimert
  let currentTaskKey = null;
  let isEditing = false;
  let expandedThemeName = null;
  let ordkjedeFontSize = localStorage.getItem("fabel_ordkjede_size") || "medium";

  const menuContainer = document.getElementById("menu-container");
  const worksheetEl = document.getElementById("worksheet");
  const breadcrumbEl = document.getElementById("current-breadcrumb");
  const editPanel = document.getElementById("edit-panel");
  const editFields = document.getElementById("edit-fields");
  const btnToggleEdit = document.getElementById("btn-toggle-edit");
  const btnReset = document.getElementById("btn-reset");
  const btnPrint = document.getElementById("btn-print");

  // Starter lukket (minimert) slik at ingen bøker er åpne ved oppstart
  let expandedBookName = null;
  let sheetObserver = null;
  let isProgrammaticScroll = false;

  const hiddenTasksMap = JSON.parse(localStorage.getItem("fabel_hidden_tasks") || "{}");
  const isTaskHidden = (itemIdx, taskKey) => Boolean(hiddenTasksMap[`${itemIdx}:${taskKey}`]);
  function toggleTaskVisibility(itemIdx, taskKey) {
    const id = `${itemIdx}:${taskKey}`;
    if (hiddenTasksMap[id]) delete hiddenTasksMap[id];
    else hiddenTasksMap[id] = true;
    localStorage.setItem("fabel_hidden_tasks", JSON.stringify(hiddenTasksMap));
  }

function showWelcomeScreen() {
    currentItemIndex = -1;
    currentTaskKey = null;
    expandedBookName = null;     // <-- Lukker alle åpne bøker
    expandedThemeName = null;    // <-- Lukker alle åpne temaer
    expandedTextIndex = -1;      // <-- Lukker eventuell åpen tekst
    isEditing = false;
    if (editPanel) editPanel.style.display = "none";
    document.body.classList.add("is-welcome-screen");
    buildMenu();
  }

  const sidebarHeader = document.querySelector(".sidebar-header");
  if (sidebarHeader) {
    sidebarHeader.addEventListener("click", (e) => {
      // Unngå at klikk på tannhjul-knappen (innstillinger) lukker menyen
      if (e.target.closest("button")) return;

      showWelcomeScreen();
    });
  }

  // AUTOMATISK SKJERMTILPASSET ZOOM OG FLYTENDE ZOOM-KONTROLL
  let manualZoomOffset = 0; // 0 = automatisk tilpasset gjeldende skjerm

  function getAutoFitZoom() {
    const sampleSheet = document.querySelector("#worksheet-stack .a4-sheet") || worksheetEl;
    const sheetW = sampleSheet ? sampleSheet.offsetWidth : 794;
    const sheetH = sampleSheet ? sampleSheet.offsetHeight : 1123;
    const sidebarW = document.querySelector(".sidebar")?.offsetWidth || 280;
    const toolbarH = document.querySelector(".toolbar")?.offsetHeight || 60;

    const availW = Math.max(300, window.innerWidth - sidebarW - 110);
    const availH = Math.max(300, window.innerHeight - toolbarH - 40);

    const fitScale = Math.min(availW / sheetW, availH / sheetH, 1.15);
    return Math.max(0.35, fitScale);
  }

  function applySheetZoom() {
    const baseZoom = getAutoFitZoom();
    const finalZoom = Math.min(1.6, Math.max(0.35, baseZoom + manualZoomOffset));

    const stack = document.getElementById("worksheet-stack") || worksheetEl;
    if (stack) stack.style.zoom = finalZoom;

    const resetBtn = document.getElementById("btn-zoom-reset");
    if (resetBtn) {
      resetBtn.textContent = `${Math.round(finalZoom * 100)}%`;
      resetBtn.title = manualZoomOffset === 0
        ? "Tilpasset skjermstørrelse (standard)"
        : "Klikk for å tilbakestille til standard-zoom for skjermen";
    }
  }

  document.getElementById("btn-zoom-in")?.addEventListener("click", () => {
    manualZoomOffset = Math.round((manualZoomOffset + 0.1) * 100) / 100;
    applySheetZoom();
  });

  document.getElementById("btn-zoom-out")?.addEventListener("click", () => {
    manualZoomOffset = Math.round((manualZoomOffset - 0.1) * 100) / 100;
    applySheetZoom();
  });

  document.getElementById("btn-zoom-reset")?.addEventListener("click", () => {
    manualZoomOffset = 0;
    applySheetZoom();
  });

  window.addEventListener("resize", () => {
    applySheetZoom();
  });

// GJØR REDIGERINGSPANELET FLYTTBART (NULLSTILLES VED HVER ÅPNING)
  function resetEditPanelPosition() {
    if (!editPanel) return;
    editPanel.style.left = "";
    editPanel.style.top = "";
    editPanel.style.transform = "";
  }

  if (editPanel) {
    let dragActive = false;
    let startX = 0, startY = 0, origLeft = 0, origTop = 0;

    editPanel.addEventListener("pointerdown", (e) => {
      // Ikke start draing hvis man klikker i et skrivefelt eller på en knapp
      if (e.target.closest("input, textarea, select, button, label")) return;

      const rect = editPanel.getBoundingClientRect();
      dragActive = true;
      startX = e.clientX;
      startY = e.clientY;
      origLeft = rect.left;
      origTop = rect.top;

      // Bytt fra CSS-sentrering til faste pikselkoordinater for myk draing
      editPanel.style.transform = "none";
      editPanel.style.left = `${origLeft}px`;
      editPanel.style.top = `${origTop}px`;
      editPanel.classList.add("is-dragging");
      editPanel.setPointerCapture(e.pointerId);
    });

    editPanel.addEventListener("pointermove", (e) => {
      if (!dragActive) return;
      const newLeft = Math.max(10, Math.min(window.innerWidth - editPanel.offsetWidth - 10, origLeft + (e.clientX - startX)));
      const newTop = Math.max(64, Math.min(window.innerHeight - 60, origTop + (e.clientY - startY)));
      editPanel.style.left = `${newLeft}px`;
      editPanel.style.top = `${newTop}px`;
    });

    const stopDrag = () => {
      if (!dragActive) return;
      dragActive = false;
      editPanel.classList.remove("is-dragging");
    };

    editPanel.addEventListener("pointerup", stopDrag);
    editPanel.addEventListener("pointercancel", stopDrag);
  }

// 1. BYGG VENSTREMENY GRUPPERT ETTER BOK (OG EVENTUELT TEMA)
  function buildMenu() {
    menuContainer.innerHTML = "";
    const books = {};

    workingData.forEach((item, index) => {
      if (!books[item.bok]) books[item.bok] = [];
      books[item.bok].push({ ...item, index });
    });

    function renderTextItem(textItem, parentContainer, bookName, themeName = null) {
      if (textItem.underKonstruksjon) {
        const textGroup = document.createElement("div");
        textGroup.className = "menu-text-group collapsed";

        const headerRow = document.createElement("div");
        headerRow.className = "menu-text-row";

        const infoDiv = document.createElement("div");
        infoDiv.className = "menu-text-header";
        infoDiv.style.cursor = "default";
        infoDiv.style.opacity = "0.7";
        infoDiv.innerHTML = `<span class="text-label" style="font-style: italic;">${textItem.sidetall} – ${textItem.tittel}</span>`;

        headerRow.appendChild(infoDiv);
        textGroup.appendChild(headerRow);
        parentContainer.appendChild(textGroup);
        return;
      }

      const isExpanded = textItem.index === expandedTextIndex;
      const isCurrentActiveText = textItem.index === currentItemIndex;

      const textGroup = document.createElement("div");
      textGroup.className = `menu-text-group ${isExpanded ? "expanded" : "collapsed"}`;

      const headerRow = document.createElement("div");
      headerRow.className = `menu-text-row ${isCurrentActiveText ? "is-active-text" : ""}`;

      const headerBtn = document.createElement("button");
      headerBtn.type = "button";
      headerBtn.className = "menu-text-header";
      headerBtn.innerHTML = `
        <span class="text-label">${textItem.sidetall} – ${textItem.tittel}</span>
        <span class="chevron">${isExpanded ? "▾" : "▸"}</span>
      `;

      headerBtn.addEventListener("click", () => {
        const firstTask = TASK_TYPES.find(t => textItem.oppgaver[t.key] && !isTaskHidden(textItem.index, t.key));
        if (!firstTask) return;

        document.body.classList.remove("is-welcome-screen");
        expandedBookName = bookName;
        expandedThemeName = themeName;
        expandedTextIndex = textItem.index;
        currentItemIndex = textItem.index;
        currentTaskKey = firstTask.key;

        buildMenu();
        renderWorksheet();
        if (isEditing) renderEditPanel();

        const mainArea = worksheetEl.closest("main") || document.documentElement;
        mainArea.scrollTo({ top: 0, behavior: "instant" });
        window.scrollTo({ top: 0, behavior: "instant" });
      });

      const printAllBtn = document.createElement("button");
      printAllBtn.type = "button";
      printAllBtn.className = "menu-print-all-btn";
      printAllBtn.title = `Skriv ut alle synlige oppgaveark for ${textItem.tittel}`;
      printAllBtn.textContent = "🖨️";
      printAllBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        printAllForText(textItem.index);
      });

      headerRow.appendChild(headerBtn);
      headerRow.appendChild(printAllBtn);
      textGroup.appendChild(headerRow);

      const ul = document.createElement("ul");
      ul.className = "menu-task-list";

      TASK_TYPES.forEach(task => {
        if (!textItem.oppgaver[task.key]) return;
        const hidden = isTaskHidden(textItem.index, task.key);

        const li = document.createElement("li");
        li.className = `menu-task-row ${hidden ? "is-hidden-task" : ""}`;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "menu-task-btn";
        btn.dataset.taskKey = task.key;
        btn.dataset.itemIndex = textItem.index;
        if (!hidden && isCurrentActiveText && task.key === currentTaskKey) {
          btn.classList.add("active");
        }
        btn.innerHTML = `<span class="dot" style="background:${task.color}"></span><span class="task-label">${task.label}</span>`;
        btn.addEventListener("click", () => {
          if (isTaskHidden(textItem.index, task.key)) return;
          const isSameText = !document.body.classList.contains("is-welcome-screen") && currentItemIndex === textItem.index;
          document.body.classList.remove("is-welcome-screen");
          currentItemIndex = textItem.index;
          expandedTextIndex = textItem.index;
          expandedBookName = textItem.bok;
          expandedThemeName = themeName;
          currentTaskKey = task.key;

          if (!isSameText) {
            buildMenu();
            renderWorksheet();
          } else {
            updateActiveTaskUI(task.key);
          }
          if (isEditing) renderEditPanel();

          const targetSheet = document.querySelector(`.a4-sheet[data-task-key="${task.key}"]`);
          if (targetSheet) {
            isProgrammaticScroll = true;
            targetSheet.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => { isProgrammaticScroll = false; }, 650);
          }
        });

        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.className = "menu-task-toggle-btn";
        toggleBtn.title = hidden ? `Vis ${task.label} igjen` : `Skjul ${task.label}`;
        toggleBtn.textContent = hidden ? "🚫" : "👁️";
        toggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleTaskVisibility(textItem.index, task.key);
          buildMenu();
          if (!document.body.classList.contains("is-welcome-screen") && currentItemIndex === textItem.index) {
            renderWorksheet();
            if (isEditing) renderEditPanel();
          }
        });

        li.appendChild(btn);
        li.appendChild(toggleBtn);
        ul.appendChild(li);
      });

      textGroup.appendChild(ul);
      parentContainer.appendChild(textGroup);
    }

    Object.keys(books).sort().forEach(bookName => {
      const isBookExpanded = bookName === expandedBookName;

      const bookDiv = document.createElement("div");
      bookDiv.className = `menu-book ${isBookExpanded ? "expanded" : "collapsed"}`;

      const titleDiv = document.createElement("div");
      titleDiv.className = "menu-book-title";
      titleDiv.innerHTML = `<span>📘 ${bookName}</span><span>${isBookExpanded ? "▾" : "▸"}</span>`;
      
      const textsDiv = document.createElement("div");
      textsDiv.className = "menu-texts";
      textsDiv.style.display = isBookExpanded ? "block" : "none";

      titleDiv.addEventListener("click", () => {
        expandedBookName = isBookExpanded ? null : bookName;
        buildMenu();
      });

      const hasThemes = books[bookName].some(item => item.tema);

      if (hasThemes) {
        const themes = {};
        books[bookName].forEach(item => {
          const tName = item.tema || "Øvrige tekster";
          if (!themes[tName]) themes[tName] = [];
          themes[tName].push(item);
        });

Object.keys(themes).forEach(themeName => {
          const themeKey = `${bookName}::${themeName}`;
          const isThemeExpanded = themeKey === expandedThemeName;

          const themeGroup = document.createElement("div");
          themeGroup.className = `menu-theme-group ${isThemeExpanded ? "expanded" : "collapsed"}`;

          // Rad med temanavn + "Skriv ut alle i tema"-knapp til høyre
          const themeRow = document.createElement("div");
          themeRow.className = "menu-theme-row";

          const themeHeader = document.createElement("button");
          themeHeader.type = "button";
          themeHeader.className = "menu-theme-header";
          themeHeader.innerHTML = `
            <span class="theme-label">📂 ${themeName}</span>
            <span class="chevron">${isThemeExpanded ? "▾" : "▸"}</span>
          `;

          themeHeader.addEventListener("click", () => {
            expandedThemeName = isThemeExpanded ? null : themeKey;
            buildMenu();
          });

         themeRow.appendChild(themeHeader);

          const hasPrintableItems = themes[themeName].some(item => !item.underKonstruksjon);
          if (hasPrintableItems) {
            const printThemeBtn = document.createElement("button");
            printThemeBtn.type = "button";
            printThemeBtn.className = "menu-print-all-btn";
            printThemeBtn.title = `Skriv ut temahefte for «${themeName}»`;
            printThemeBtn.textContent = "🖨️";
            printThemeBtn.addEventListener("click", (e) => {
              e.stopPropagation();
              openThemePrintModal(themes[themeName], themeName, bookName);
            });
            themeRow.appendChild(printThemeBtn);
          }

          const themeTextsDiv = document.createElement("div");
          themeTextsDiv.className = "menu-theme-texts";
          themeTextsDiv.style.display = isThemeExpanded ? "block" : "none";

          themes[themeName].forEach(textItem => {
            renderTextItem(textItem, themeTextsDiv, bookName, themeKey);
          });

          themeGroup.appendChild(themeRow);
          themeGroup.appendChild(themeTextsDiv);
          textsDiv.appendChild(themeGroup);
        });

      } else {
        books[bookName].forEach(textItem => {
          renderTextItem(textItem, textsDiv, bookName, null);
        });
      }

      bookDiv.appendChild(titleDiv);
      bookDiv.appendChild(textsDiv);
      menuContainer.appendChild(bookDiv);
    });
  }

function updateActiveMenu() {
    const item = workingData[currentItemIndex];
    if (item) {
      expandedBookName = item.bok;
      expandedThemeName = item.tema ? `${item.bok}::${item.tema}` : null;
    }
    buildMenu();
  }



// HJELPEFUNKSJON: Topplinje/bunntekst med Bok, (valgfri tittel) og Sidetall
  function getHeaderHTML(item) {
    // Gjør om "S.10-11" eller "s. 10-11" til "side 10-11"
    const sideTekst = item.sidetall.replace(/^s\.?\s*/i, "side ");
    const includeTitle = document.getElementById("toggle-footer-title")?.checked;
    const footerText = (includeTitle && item.tittel)
      ? `${item.bok} - ${item.tittel} - ${sideTekst}`
      : `${item.bok} - ${sideTekst}`;

    return `
      <div class="sheet-top-meta">
        <span></span>
        <span>${footerText}</span>
      </div>
    `;
  }

  // HJELPEFUNKSJON: Marker vokaler med prikk under i eksempelord
  function formatExampleWordWithVowelDots(word) {
    const vowels = "aeiouyæøåAEIOUYÆØÅ";
    return word.split("").map(ch => 
      vowels.includes(ch) ? `<span class="vowel-dot">${ch}</span>` : ch
    ).join("");
  }

function buildSilhuettHTML(word) {
  const mode = localStorage.getItem("fabel_silhuett_type") || "vanlig";
  const len = word.trim().length;
  const sizeClass = len >= 11 ? " word-xlong" : (len >= 9 ? " word-long" : "");

  // 1. VANLIG SILHUETT (eksisterende logikk)
  if (mode !== "tilpasset") {
    const ascenders = ["b", "d", "f", "h", "k", "l", "t", "å"];
    const descenders = ["g", "j", "p", "q", "y"];
    const boxes = word.toLowerCase().split("").map(ch => {
      let cls = "s-box";
      if (ascenders.includes(ch)) cls += " asc";
      else if (descenders.includes(ch)) cls += " desc";
      return `<div class="${cls}"></div>`;
    }).join("");
    return `<div class="silhuett-word${sizeClass}">${boxes}</div>`;
  }

  // 2. TILPASSET SILHUETT (SVG med bokstavspesifikke former og bredder)
  const U = 28;      // Standard x-høyde / bredde
  const ASC = 16;    // Ekstra høyde oppover (totalt 44)
  const DESC = 16;   // Ekstra dybde nedover (totalt 44)
  const STROKE = 2;

  // Definer bredde og polygon-koordinater [x, y] relativt til grunnlinjen y = ASC + U (44)
  // Topp ascender = 0, topp x-høyde = 16, grunnlinje = 44, bunn descender = 60
  const yTop = 0;
  const yMid = ASC;
  const yBase = ASC + U;
  const yBot = ASC + U + DESC;

  const shapes = {
    // Smale bokstaver
    i: { w: 16, pts: [[0, 10], [16, 10], [16, yBase], [0, yBase]] },
    j: { w: 22, pts: [[0, 10], [22, 10], [22, yBot], [0, yBot]] },
    l: { w: 16, pts: [[0, yTop], [16, yTop], [16, yBase], [0, yBase]] },

    // L-formede ascenders (hals på venstre eller høyre side)
    b: { w: 28, pts: [[0, yTop], [15, yTop], [15, yMid], [28, yMid], [28, yBase], [0, yBase]] },
    h: { w: 28, pts: [[0, yTop], [15, yTop], [15, yMid], [28, yMid], [28, yBase], [0, yBase]] },
    k: { w: 28, pts: [[0, yTop], [15, yTop], [15, yMid], [28, yMid], [28, yBase], [0, yBase]] },
    d: { w: 28, pts: [[0, yMid], [13, yMid], [13, yTop], [28, yTop], [28, yBase], [0, yBase]] },

    // Fulldekkende ascenders
    f: { w: 22, pts: [[0, yTop], [22, yTop], [22, yBase], [0, yBase]] },
    t: { w: 22, pts: [[0, yTop], [22, yTop], [22, yBase], [0, yBase]] },
    å: { w: 26, pts: [[0, 9], [26, 9], [26, yBase], [0, yBase]] },

    // Descenders (inkl. L-formet p)
    g: { w: 28, pts: [[0, yMid], [28, yMid], [28, yBot], [0, yBot]] },
    q: { w: 28, pts: [[0, yMid], [28, yMid], [28, yBot], [0, yBot]] },
    y: { w: 28, pts: [[0, yMid], [28, yMid], [28, yBot], [0, yBot]] },
    p: { w: 28, pts: [[0, yMid], [28, yMid], [28, yBase], [15, yBase], [15, yBot], [0, yBot]] },

    // Brede midtbokstaver
    m: { w: 36, pts: [[0, yMid], [36, yMid], [36, yBase], [0, yBase]] },
    w: { w: 36, pts: [[0, yMid], [36, yMid], [36, yBase], [0, yBase]] },
    æ: { w: 34, pts: [[0, yMid], [34, yMid], [34, yBase], [0, yBase]] }
  };

  let curX = 0;
  let polygons = "";

  word.toLowerCase().split("").forEach(ch => {
    // Store bokstaver i egennavn (f.eks. Synne) får full ascender-høyde
    const isUpper = word[curX === 0 ? 0 : -1] === ch.toUpperCase() && ch !== ch.toLowerCase();
    const def = shapes[ch] || {
      w: 28,
      pts: [[0, yMid], [28, yMid], [28, yBase], [0, yBase]]
    };

    const pointsStr = def.pts.map(([px, py]) => `${curX + px},${py}`).join(" ");
    polygons += `<polygon points="${pointsStr}" fill="#fff" stroke="#000" stroke-width="${STROKE}" stroke-linejoin="miter" />`;
    curX += def.w;
  });

const pad = STROKE;
  const totalW = curX + pad * 2;
  const totalH = yBot + pad * 2;
  const maxAllowedW = 285;
  const scale = totalW > maxAllowedW ? (maxAllowedW / totalW) : 1;

  return `
    <div class="silhuett-word silhuett-custom${sizeClass}">
      <svg width="${Math.round(totalW * scale)}" height="${Math.round(totalH * scale)}" viewBox="${-pad} ${-pad} ${totalW} ${totalH}" style="display:block; overflow:visible;">
        ${polygons}
      </svg>
    </div>
  `;
}



// HJELPEFUNKSJON: Generer nytt ordsøk-rutenett etter valgt retning og størrelse
  function generateWordsearchGrid(words, rows, cols, directionMode, useUpperCase) {
    const cleanWords = words
      .map(w => w.replace(/[^a-zA-ZæøåÆØÅ]/g, ""))
      .filter(Boolean)
      .sort((a, b) => b.length - a.length);

    const maxLen = cleanWords.reduce((m, w) => Math.max(m, w.length), 0);
    const numCols = Math.max(cols || 14, maxLen);
    const numRows = Math.max(rows || 15, maxLen);

    const dirMap = {
      horizontal: [[0, 1]],
      vertical: [[1, 0]],
      hv: [[0, 1], [1, 0]],
      diagonal: [[1, 1], [1, -1]],
      mixed: [[0, 1], [1, 0], [1, 1], [1, -1]]
    };
    const allowedDirs = dirMap[directionMode] || dirMap.horizontal;

    for (let attempt = 0; attempt < 50; attempt++) {
      const grid = Array.from({ length: numRows }, () => Array(numCols).fill(""));
      let allPlaced = true;

      for (let wIdx = 0; wIdx < cleanWords.length; wIdx++) {
        const rawWord = cleanWords[wIdx];
        const word = useUpperCase ? rawWord.toUpperCase() : rawWord.toLowerCase();
        let placed = false;

        const preferredDir = allowedDirs.length > 1
          ? allowedDirs[(wIdx + attempt) % allowedDirs.length]
          : null;

        const candidates = [];
        for (let r = 0; r < numRows; r++) {
          for (let c = 0; c < numCols; c++) {
            for (const dir of allowedDirs) {
              candidates.push({ r, c, dir });
            }
          }
        }

        candidates.sort(() => Math.random() - 0.5);
        if (preferredDir) {
          candidates.sort((a, b) => (a.dir === preferredDir ? -1 : b.dir === preferredDir ? 1 : 0));
        }

        for (const { r, c, dir: [dr, dc] } of candidates) {
          const endR = r + dr * (word.length - 1);
          const endC = c + dc * (word.length - 1);
          if (endR < 0 || endR >= numRows || endC < 0 || endC >= numCols) continue;

          let fits = true;
          for (let i = 0; i < word.length; i++) {
            const existing = grid[r + dr * i][c + dc * i];
            if (existing !== "" && existing !== word[i]) {
              fits = false;
              break;
            }
          }

          if (fits) {
            for (let i = 0; i < word.length; i++) {
              grid[r + dr * i][c + dc * i] = word[i];
            }
            placed = true;
            break;
          }
        }

        if (!placed) {
          allPlaced = false;
          break;
        }
      }

      if (allPlaced) {
        const alphabet = useUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ" : "abcdefghijklmnopqrstuvwxyzæøå";
        for (let r = 0; r < numRows; r++) {
          for (let c = 0; c < numCols; c++) {
            if (grid[r][c] === "") {
              grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
          }
        }
        return grid;
      }
    }

    return null;
  }

// HJELPEFUNKSJON: Finn alle rutekoordinater ("rad,kolonne") for ordene i ordsøk
  function findWordsearchFasitCells(grid, words) {
    const foundCells = new Set();
    if (!grid || grid.length === 0 || !words) return foundCells;

    const numRows = grid.length;
    const numCols = grid[0].length;
    const directions = [
      [0, 1], [0, -1],   // Vannrett (høyre, venstre)
      [1, 0], [-1, 0],   // Loddrett (ned, opp)
      [1, 1], [-1, -1],  // Diagonalt (\)
      [1, -1], [-1, 1]   // Diagonalt (/)
    ];

    for (const rawWord of words) {
      const word = rawWord.toUpperCase().replace(/[^A-ZÆØÅ]/g, "");
      if (!word) continue;

      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          for (const [dr, dc] of directions) {
            const coords = [];
            let match = true;

            for (let i = 0; i < word.length; i++) {
              const nr = r + dr * i;
              const nc = c + dc * i;
              if (nr < 0 || nr >= numRows || nc < 0 || nc >= numCols) {
                match = false;
                break;
              }
              if ((grid[nr][nc] || "").toUpperCase() !== word[i]) {
                match = false;
                break;
              }
              coords.push(`${nr},${nc}`);
            }

            if (match) {
              coords.forEach(coord => foundCells.add(coord));
            }
          }
        }
      }
    }

    return foundCells;
  }

// HJELPEFUNKSJON: Finn det matematisk korteste mulige K/V-mønsteret for alle ordene
  function buildGitterLayout(words) {
    const vowels = "aeiouyæøå";
    const getPatternStr = (w) =>
      w.toLowerCase().replace(/[^a-zæøå]/g, "").split("").map(ch => vowels.includes(ch) ? "V" : "K").join("");

    const rawPatterns = words.map(getPatternStr).filter(Boolean);

    // 1. Fjern mønstre som allerede finnes inni et annet mønster
    const uniquePatterns = [...new Set(rawPatterns)].filter((p, idx, arr) =>
      !arr.some((other, oIdx) => oIdx !== idx && other.includes(p))
    );

    if (uniquePatterns.length === 0) {
      return { monster: [], findStart: () => -1 };
    }

    // 2. Finn maksimalt overlapp mellom to mønsterstrenger (a etterfulgt av b)
    const getOverlap = (a, b) => {
      const maxLen = Math.min(a.length, b.length) - 1;
      for (let len = maxLen; len >= 1; len--) {
        if (a.endsWith(b.slice(0, len))) return len;
      }
      return 0;
    };

    // 3. Eksakt søk (Branch & Bound) for å finne garantert kortest mulig supersekvens
    let bestSuperstring = uniquePatterns.join("");

    function search(currentStr, remaining) {
      if (currentStr.length >= bestSuperstring.length) return;
      if (remaining.length === 0) {
        bestSuperstring = currentStr;
        return;
      }

      // Prøv de kandidatene som gir størst overlapp først for raskest mulig resultat
      const candidates = remaining.map((pat, idx) => ({
        pat,
        idx,
        overlap: getOverlap(currentStr, pat)
      })).sort((a, b) => b.overlap - a.overlap);

      for (const { pat, idx, overlap } of candidates) {
        const nextRemaining = remaining.filter((_, i) => i !== idx);
        search(currentStr + pat.slice(overlap), nextRemaining);
      }
    }

    for (let i = 0; i < uniquePatterns.length; i++) {
      const rest = uniquePatterns.filter((_, idx) => idx !== i);
      search(uniquePatterns[i], rest);
    }

    const monster = bestSuperstring.split("");

    // Finn startposisjon for hvert ord i det korteste mønsteret
    const findStart = (w) => {
      const pat = getPatternStr(w);
      return pat ? bestSuperstring.indexOf(pat) : -1;
    };

    return { monster, findStart };
  }

// 2. RENDER VALGT OPPGAVEARK
  function renderSingleSheetToEl(taskKey) {
    const prevKey = currentTaskKey;
    currentTaskKey = taskKey;

    const item = workingData[currentItemIndex];
    if (!item) {
      currentTaskKey = prevKey;
      return;
    }

    const taskData = item.oppgaver[currentTaskKey];
    const taskMeta = TASK_TYPES.find(t => t.key === currentTaskKey);
    const explainWrapper = document.getElementById("lydrette-explain-wrapper");
    if (explainWrapper) {
      explainWrapper.style.display = currentTaskKey === "lydretteOrd" ? "inline-flex" : "none";
    }
    const gitterWrapper = document.getElementById("gitter-helper-wrapper");
    if (gitterWrapper) {
      gitterWrapper.style.display = currentTaskKey === "gitter" ? "inline-flex" : "none";
    }
    const gitterFasitWrapper = document.getElementById("gitter-fasit-wrapper");
    if (gitterFasitWrapper) {
      gitterFasitWrapper.style.display = currentTaskKey === "gitter" ? "inline-flex" : "none";
    }
    const ordsokFasitWrapper = document.getElementById("ordsok-fasit-wrapper");
    if (ordsokFasitWrapper) {
      ordsokFasitWrapper.style.display = currentTaskKey === "ordsok" ? "inline-flex" : "none";
    }
    const ordsokDirWrapper = document.getElementById("ordsok-dir-wrapper");
    if (ordsokDirWrapper) {
      ordsokDirWrapper.style.display = currentTaskKey === "ordsok" ? "inline-flex" : "none";
    }
    const ordsokCaseWrapper = document.getElementById("ordsok-case-wrapper");
    if (ordsokCaseWrapper) {
      ordsokCaseWrapper.style.display = currentTaskKey === "ordsok" ? "inline-flex" : "none";
    }
    const luketekstSizeWrapper = document.getElementById("luketekst-size-wrapper");
    if (luketekstSizeWrapper) {
      luketekstSizeWrapper.style.display = currentTaskKey === "luketekst" ? "inline-flex" : "none";
    }
    const silhuettOrdkjederWrap = document.getElementById("silhuett-ordkjeder-wrapper");
    if (silhuettOrdkjederWrap) {
      silhuettOrdkjederWrap.style.display = currentTaskKey === "silhuettOgOrdkjeder" ? "inline-flex" : "none";
    }
    const silhuettLinjerWrap = document.getElementById("silhuett-linjer-wrapper");
    if (silhuettLinjerWrap) {
      silhuettLinjerWrap.style.display = currentTaskKey === "silhuettOgOrdkjeder" ? "inline-flex" : "none";
    }
    const silhuettTypeWrap = document.getElementById("silhuett-type-wrapper");
    if (silhuettTypeWrap) {
      silhuettTypeWrap.style.display = currentTaskKey === "silhuettOgOrdkjeder" ? "inline-flex" : "none";
    }
    const ordkjedeSizeCtrl = document.getElementById("ordkjede-size-control");
    if (ordkjedeSizeCtrl) {
      ordkjedeSizeCtrl.style.display = currentTaskKey === "silhuettOgOrdkjeder" ? "inline-flex" : "none";
    }

    breadcrumbEl.textContent = `${item.bok} › ${item.sidetall} (${item.tittel}) › ${taskMeta.label}`;

    // Sjekk om data er endret fra original for å vise/skjule tilbakestill-knapp
    const isModified = JSON.stringify(item.oppgaver[currentTaskKey]) !== JSON.stringify(originalData[currentItemIndex].oppgaver[currentTaskKey]);
    btnReset.style.display = isModified ? "inline-block" : "none";

    // Sett riktig fargetema og valgt ordkjedestørrelse på A4-arket
    worksheetEl.className = `a4-sheet ordkjede-size-${ordkjedeFontSize}`;

    if (currentTaskKey === "stavelser") {
      worksheetEl.classList.add("theme-stavelser");
      const exWordHTML = formatExampleWordWithVowelDots(taskData.eksempelOrd);
      const exCells = [0,1,2,3].map(i => `<td>${taskData.eksempelStavelser[i] || ""}</td>`).join("");
      const wordRows = taskData.ord.map(w => `
        <tr><td>${w}</td><td></td><td></td><td></td><td></td></tr>
      `).join("");

      worksheetEl.innerHTML = `
        <div class="sheet-inner-white">
          ${getHeaderHTML(item)}
          <h2 class="sheet-title">STAVELSESDELING</h2>
          <div class="sheet-colored-box">
            <div class="instruction-card">
              <ul>
                <li>Les ordet</li>
                <li>Sett prikk under vokalene</li>
                <li>Del ordet i stavelser</li>
              </ul>
            </div>
            <table class="syllable-table">
              <tr><td>${exWordHTML}</td>${exCells}</tr>
              ${wordRows}
            </table>
          </div>
        </div>
      `;
    }

    else if (currentTaskKey === "ordsok") {
      worksheetEl.classList.add("theme-ordsok");

      const dirSelect = document.getElementById("select-ordsok-dir");
      const dirMode = dirSelect ? dirSelect.value : "horizontal";
      const upperCheckbox = document.getElementById("chk-ordsok-uppercase");
      const isUpper = upperCheckbox ? upperCheckbox.checked : false;

      const activeGrid = generateWordsearchGrid(taskData.ord, 15, 14, dirMode, isUpper) || taskData.rutenett;
      const displayWords = taskData.ord.map(w => isUpper ? w.toUpperCase() : w.toLowerCase());

      const fasitCells = findWordsearchFasitCells(activeGrid, displayWords);
      const gridRows = activeGrid.map((row, rIdx) => 
        `<tr>${row.map((letter, cIdx) => {
          const isFasit = fasitCells.has(`${rIdx},${cIdx}`);
          const shownLetter = isUpper ? letter.toUpperCase() : letter.toLowerCase();
          return `<td class="${isFasit ? "ordsok-fasit-cell" : ""}">${shownLetter}</td>`;
        }).join("")}</tr>`
      ).join("");
      const chips = displayWords.map(w => `<span class="word-chip">${w}</span>`).join("");

      worksheetEl.innerHTML = `
        <div class="sheet-inner-white">
          ${getHeaderHTML(item)}
          <h2 class="sheet-title">ORDSØK</h2>
          <div class="sheet-colored-box">
            <table class="wordsearch-grid">${gridRows}</table>
            <div class="wordsearch-footer">
              <h4>Finn disse ordene:</h4>
              <div class="wordsearch-chips">${chips}</div>
            </div>
          </div>
        </div>
      `;
    }

    else if (currentTaskKey === "luketekst") {
      worksheetEl.classList.add("theme-luketekst");
      const bankRows = taskData.ordbank.map(w => `<tr><td>${w}</td></tr>`).join("");
      const formattedText = taskData.tekst
        .replace(/___/g, '<span class="cloze-blank"></span>')
        .replace(/\n/g, '<br>');

      worksheetEl.innerHTML = `
        <div class="sheet-inner-white">
          ${getHeaderHTML(item)}
          <h2 class="sheet-title">LUKETEKST</h2>
          <div class="sheet-colored-box">
            <div class="cloze-top">
              <table class="wordbank-table">${bankRows}</table>
              <div class="extra-task-box">
                <div class="extra-task-title">Ekstraoppgave:</div>
                <div class="extra-task-text">${taskData.ekstraoppgave}</div>
              </div>
            </div>
            <div class="pill-banner">Skriv ordene inn i luketeksten</div>
            <div class="cloze-text-box">
              <h3>${taskData.overskrift}</h3>
              <div class="cloze-body">${formattedText}</div>
            </div>
          </div>
        </div>
      `;
    }

    else if (currentTaskKey === "silhuettOgOrdkjeder") {
      worksheetEl.classList.add("theme-silhuett");
      // Lag 2 rader x 3 kolonner for ordbanken
      const b = taskData.silhuettOrdBank;
      const bankHTML = `
        <table class="silhuett-bank">
          <tr><td>${b[0]||""}</td><td>${b[1]||""}</td><td>${b[2]||""}</td></tr>
          <tr><td>${b[3]||""}</td><td>${b[4]||""}</td><td>${b[5]||""}</td></tr>
        </table>
      `;
      const silhuetterHTML = taskData.silhuettVisning.map(w => `
        <div class="silhuett-item">
          ${buildSilhuettHTML(w)}
          <div class="bokstavhus-linjer">
            <div class="bh-line bh-top"></div>
            <div class="bh-line bh-mid"></div>
            <div class="bh-line bh-base"></div>
            <div class="bh-line bh-bottom"></div>
          </div>
        </div>
      `).join("");
      const kjederHTML = taskData.ordkjeder.map(k => `<div>${k}</div>`).join("");

      worksheetEl.innerHTML = `
        <div class="sheet-inner-white">
          ${getHeaderHTML(item)}
          <h2 class="sheet-title">SILHUETT-ORD</h2>
          <div class="sheet-colored-box">
            ${bankHTML}
            <div class="silhuett-main-box">
              <div class="silhuett-canvas">${silhuetterHTML}</div>
            </div>
            <div class="ordkjeder-box">
              <div class="ordkjeder-title">ORDKJEDER</div>
              <div class="ordkjeder-grid">${kjederHTML}</div>
            </div>
          </div>
        </div>
      `;
    }

    else if (currentTaskKey === "lydretteOrd") {
      worksheetEl.classList.add("theme-lydrette");
      const half = Math.ceil(taskData.ord.length / 2);
      const col1 = taskData.ord.slice(0, half).join("<br>");
      const col2 = taskData.ord.slice(half).join("<br>");
      const emptyRows = Array.from({ length: taskData.antallRader || 7 })
        .map(() => "<tr><td></td><td></td><td></td></tr>").join("");

      worksheetEl.innerHTML = `
        <div class="sheet-inner-white">
          ${getHeaderHTML(item)}
          <h2 class="sheet-title" style="font-size: 2.2rem;">LYDRETTE OG IKKE LYDRETTE ORD</h2>
          <div class="sheet-colored-box">
            <div class="lydrette-wordbox">
              <div>${col1}</div>
              <div>${col2}</div>
            </div>
            <table class="lydrette-table">
              <tr>
                <th><span class="th-main">Lydrette ord:</span><span class="th-sub">Ord som skrives slik vi sier dem</span></th>
                <th><span class="th-main">Ikke lydrette ord:</span><span class="th-sub">Ord som skrives annerledes enn vi sier dem</span></th>
                <th><span class="th-main">Hva er ikke lydrett i ordet?</span></th>
              </tr>
              ${emptyRows}
            </table>
          </div>
        </div>
      `;
    }

    else if (currentTaskKey === "gitter") {
      worksheetEl.classList.add("theme-gitter");
      const wordRows = taskData.ord.map(w => `<tr><td>${w}</td></tr>`).join("");

      // Bygg felles K/V-mønster som garantert har plass til alle ordene i oppgaven
      const { monster, findStart } = buildGitterLayout(taskData.ord);
      const kvHeader = monster.map(kv => 
        `<td class="kv-header-cell ${kv === 'K' ? 'kv-header-k' : 'kv-header-v'}">${kv}</td>`
      ).join("");

      // Stokk ordene for gitterradene slik at de ikke følger ordlisten oppe til venstre
      const shuffledWords = [...taskData.ord];
      if (shuffledWords.length > 1) {
        for (let i = shuffledWords.length - 1; i > 0; i--) {
          const seed = shuffledWords[i].split("").reduce((acc, ch) => acc + ch.charCodeAt(0), i * 17);
          const j = seed % (i + 1);
          [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
        }
        if (shuffledWords[0] === taskData.ord[0]) {
          shuffledWords.push(shuffledWords.shift());
        }
      }

      const rowCount = Math.max(taskData.antallRader || 5, shuffledWords.length);
      const gridRows = Array.from({ length: rowCount }).map((_, rIdx) => {
        const word = shuffledWords[rIdx] || "";
        const cleanWord = word.replace(/[^a-zA-ZæøåÆØÅ]/g, "");
        const cleanLen = cleanWord.length;
        const startIdx = word ? findStart(word) : -1;

        const cells = monster.map((kv, cIdx) => {
          let cellClass = "";
          let letterHTML = "";
          if (startIdx !== -1) {
            const isInsideWord = cIdx >= startIdx && cIdx < startIdx + cleanLen;
            if (!isInsideWord) {
              cellClass = "gitter-cell-blocked";
            } else {
              if (kv === "V") cellClass = "gitter-cell-vowel";
              const ch = cleanWord[cIdx - startIdx] || "";
              letterHTML = `<span class="gitter-fasit-letter">${ch}</span>`;
            }
          }
          const rowLabel = cIdx === 0 ? `<span class="gitter-row-num">${rIdx + 1}.</span>` : "";
          return `<td class="${cellClass}">${rowLabel}${letterHTML}</td>`;
        }).join("");

        return `<tr>${cells}</tr>`;
      }).join("");

      worksheetEl.innerHTML = `
        <div class="sheet-inner-white">
          ${getHeaderHTML(item)}
          <h2 class="sheet-title">GITTER</h2>
          <div class="sheet-colored-box">
            <div class="gitter-top">
              <table class="wordbank-table">${wordRows}</table>
              <div class="vowel-box">
                <h4>Vokaler:</h4>
                <p>a e i<br>o u y<br>æ ø å</p>
              </div>
            </div>
            <div class="pill-banner">Skriv ordene inn i gitteret – vokalene skal under V, konsonantene under K</div>
            <table class="gitter-table">
              <tr>${kvHeader}</tr>
              ${gridRows}
            </table>
          </div>
        </div>
      `;
    }
  }

// OPPDATER MENY-MARKERING OG TOPPLINJE NÅR DU SKROLLER MELLOM ARK
  function updateActiveTaskUI(taskKey) {
    currentTaskKey = taskKey;
// Oppdater fargetema på toppmenylinjen etter aktivt ark
    document.body.className = document.body.className
      .split(" ")
      .filter(c => !c.startsWith("active-task-"))
      .join(" ");
    document.body.classList.add(`active-task-${taskKey}`);
    const item = workingData[currentItemIndex];
    const taskMeta = TASK_TYPES.find(t => t.key === taskKey);
    if (!item || !taskMeta) return;

    breadcrumbEl.textContent = `${item.bok} › ${item.sidetall} (${item.tittel}) › ${taskMeta.label}`;

    // Oppdater aktiv blå knapp i venstremenyen uten å bygge hele menyen på nytt
    document.querySelectorAll(".menu-task-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.taskKey === taskKey && Number(b.dataset.itemIndex) === currentItemIndex);
    });

    // Marker hvilket ark som er aktivt (for enkeltutskrift og verktøylinje)
    document.querySelectorAll("#worksheet-stack .a4-sheet").forEach(sheet => {
      sheet.classList.toggle("is-current-sheet", sheet.dataset.taskKey === taskKey);
    });

// Vis riktige oppgavespesifikke innstillinger i verktøylinjen
    const toggleMap = {
      "lydrette-explain-wrapper": "lydretteOrd",
      "gitter-helper-wrapper": "gitter",
      "gitter-fasit-wrapper": "gitter",
      "ordsok-fasit-wrapper": "ordsok",
      "ordsok-dir-wrapper": "ordsok",
      "ordsok-case-wrapper": "ordsok",
      "luketekst-size-wrapper": "luketekst",
      "silhuett-ordkjeder-wrapper": "silhuettOgOrdkjeder",
      "silhuett-linjer-wrapper": "silhuettOgOrdkjeder",
      "silhuett-type-wrapper": "silhuettOgOrdkjeder",
      "ordkjede-size-control": "silhuettOgOrdkjeder"
    };
    Object.entries(toggleMap).forEach(([elId, key]) => {
      const el = document.getElementById(elId);
      if (el) el.style.display = taskKey === key ? "inline-flex" : "none";
    });

    const isModified = JSON.stringify(item.oppgaver[taskKey]) !== JSON.stringify(originalData[currentItemIndex].oppgaver[taskKey]);
    btnReset.style.display = isModified ? "inline-block" : "none";
    if (isEditing) renderEditPanel();
  }

  // RENDER ALLE ARK I VALGT TEKST NEDOVER SOM ÉN BOLK
  function renderWorksheet() {
    const item = workingData[currentItemIndex];
    if (!item || !worksheetEl) return;

    let stackEl = document.getElementById("worksheet-stack");
    if (!stackEl) {
      stackEl = document.createElement("div");
      stackEl.id = "worksheet-stack";
      worksheetEl.parentNode.insertBefore(stackEl, worksheetEl);
      worksheetEl.style.display = "none";
    }
    stackEl.innerHTML = "";

    const availableTasks = TASK_TYPES.filter(t => item.oppgaver[t.key] && !isTaskHidden(currentItemIndex, t.key));
    if (!availableTasks.some(t => t.key === currentTaskKey) && availableTasks.length > 0) {
      currentTaskKey = availableTasks[0].key;
    }

    availableTasks.forEach(task => {
      renderSingleSheetToEl(task.key);
      const sheetNode = worksheetEl.cloneNode(true);
      sheetNode.removeAttribute("id");
      sheetNode.style.display = "";
      sheetNode.dataset.taskKey = task.key;
      if (task.key === currentTaskKey) sheetNode.classList.add("is-current-sheet");
      stackEl.appendChild(sheetNode);
    });

    updateActiveTaskUI(currentTaskKey);
    setupSheetScrollSpy();
    applySheetZoom();
  }

  // SPOR HVILKET ARK SOM ER SYNLIG UNDER SKROLLING
  function setupSheetScrollSpy() {
    if (sheetObserver) sheetObserver.disconnect();
    const sheets = document.querySelectorAll("#worksheet-stack .a4-sheet");
    if (!sheets.length) return;

    sheetObserver = new IntersectionObserver((entries) => {
      if (isProgrammaticScroll) return;
      let bestEntry = null;
      entries.forEach(entry => {
        if (entry.isIntersecting && (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)) {
          bestEntry = entry;
        }
      });
      if (bestEntry) {
        const visibleKey = bestEntry.target.dataset.taskKey;
        if (visibleKey && visibleKey !== currentTaskKey) {
          updateActiveTaskUI(visibleKey);
          if (isEditing) renderEditPanel();
        }
      }
    }, {
      rootMargin: "-15% 0px -45% 0px",
      threshold: [0.1, 0.4, 0.7]
    });

    sheets.forEach(sheet => sheetObserver.observe(sheet));
  }

// SKRIV UT ALLE OPPGAVEARK FOR VALGT TEKST
  function printAllForText(textIndex) {
    const item = workingData[textIndex];
    if (!item || !worksheetEl || !worksheetEl.parentNode) return;

    const prevItemIndex = currentItemIndex;
    const prevTaskKey = currentTaskKey;
    const wasWelcomeScreen = document.body.classList.contains("is-welcome-screen");
    const parent = worksheetEl.parentNode;

    // Fjern eventuelle gamle utskriftsark før nye lages
    parent.querySelectorAll(".batch-print-sheet").forEach(el => el.remove());

    // Bygg alle tilgjengelige oppgaveark for denne teksten i rekkefølge
    const allSheetsFragment = document.createDocumentFragment();
    currentItemIndex = textIndex;
    TASK_TYPES.forEach(task => {
      if (!item.oppgaver[task.key] || isTaskHidden(textIndex, task.key)) return;
      renderSingleSheetToEl(task.key);

      const clone = worksheetEl.cloneNode(true);
      clone.removeAttribute("id");
      clone.style.display = "";
      clone.classList.add("batch-print-sheet");
      allSheetsFragment.appendChild(clone);
    });

    // Gjenopprett tilstanden slik den var før utskrift
    currentItemIndex = prevItemIndex;
    currentTaskKey = prevTaskKey;

    document.body.classList.remove("is-welcome-screen");
    document.body.classList.add("printing-all-sheets");
    parent.appendChild(allSheetsFragment);

    const cleanup = () => {
      document.body.classList.remove("printing-all-sheets");
      if (wasWelcomeScreen) {
        document.body.classList.add("is-welcome-screen");
      }
      parent.querySelectorAll(".batch-print-sheet").forEach(el => el.remove());
      window.removeEventListener("afterprint", cleanup);
    };

    window.addEventListener("afterprint", cleanup);
    setTimeout(() => {
      window.print();
      setTimeout(cleanup, 1000);
    }, 50);
  }

// ==========================================================================
  // TEMAHEFTE: MODAL, FORSIDE, INNHOLDSFORTEGNELSE & PDF-FLYT
  // ==========================================================================
  let pendingThemePrint = null;

  function openThemePrintModal(themeItems, themeName, bookName) {
    pendingThemePrint = { themeItems, themeName, bookName };

    const subtitleEl = document.getElementById("print-modal-theme-subtitle");
    if (subtitleEl) subtitleEl.textContent = `${bookName} – ${themeName}`;

    updateThemePrintEstimate();
    document.getElementById("print-options-modal")?.classList.remove("hidden");
  }

  function getVisibleThemeSheets(themeItems) {
    const entries = [];
    themeItems.forEach(textItem => {
      if (textItem.underKonstruksjon) return;
      const item = workingData[textItem.index];
      if (!item || !item.oppgaver) return;

      const visibleTasks = TASK_TYPES.filter(
        t => item.oppgaver[t.key] && !isTaskHidden(textItem.index, t.key)
      );
      if (visibleTasks.length > 0) {
        entries.push({ textItem, item, visibleTasks });
      }
    });
    return entries;
  }

  function updateThemePrintEstimate() {
    if (!pendingThemePrint) return;
    const includeCover = document.getElementById("print-include-cover")?.checked;
    const tocCheckbox = document.getElementById("print-include-toc");
    const tocRow = document.getElementById("print-toc-row");

    // Innholdsfortegnelse ligger på forsiden; deaktiver valget hvis forside er slått av
    if (tocCheckbox && tocRow) {
      tocCheckbox.disabled = !includeCover;
      tocRow.style.opacity = includeCover ? "1" : "0.5";
    }

    const entries = getVisibleThemeSheets(pendingThemePrint.themeItems);
    const taskPages = entries.reduce((sum, e) => sum + e.visibleTasks.length, 0);
    const totalPages = taskPages + (includeCover ? 1 : 0);

    const estEl = document.getElementById("print-estimate-text");
    if (estEl) {
      estEl.textContent = `${totalPages} sider (${Math.ceil(totalPages / 2)} A4-ark tosidig)`;
    }
  }


function getBookThemeColors(bookName) {
    const lower = (bookName || "").toLowerCase();
    if (lower.includes("3b")) {
      return { main: "#bc4778", soft: "#fdf2f7", border: "#f5c2d7", dark: "#7a2347" };
    }
    if (lower.includes("3a")) {
      return { main: "#f69342", soft: "#fff7ed", border: "#fed7aa", dark: "#9a3412" };
    }
    if (lower.includes("2")) {
      return { main: "#54b0d6", soft: "#f0f9ff", border: "#bae6fd", dark: "#0c4a6e" };
    }
    if (lower.includes("1")) {
      return { main: "#a6c645", soft: "#f7fee7", border: "#d9f99d", dark: "#3f6212" };
    }
    // Standard Fabel-blå hvis boka ikke matcher 1, 2, 3a eller 3b
    return { main: "#2b7de9", soft: "#f0f7ff", border: "#bfdbfe", dark: "#1e3a8a" };
  }


function getThemeCoverVisualHTML(themeName, logoSrc) {
    // Fjerner eventuelt tall og punktum foran, f.eks. "1. Eventyr" -> "Eventyr"
    const cleanName = (themeName || "").trim().replace(/^\d+\.\s*/, "");
    const slug = cleanName
      .toLowerCase()
      .replace(/æ/g, "ae")
      .replace(/ø/g, "o")
      .replace(/å/g, "a")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const slugSrc = `bilder/${slug}.png`;
    const exactSrc = `bilder/${cleanName}.png`;

    if (!cleanName) {
      return logoSrc ? `<img src="${logoSrc}" alt="Fabel" class="cover-hero-logo" />` : "";
    }

    // Prøver først bilder/eventyr.png -> deretter bilder/Eventyr.png -> til slutt Fabel-logo
    return `
      <div class="cover-theme-visual">
        <img
          src="${slugSrc}"
          alt="${cleanName}"
          class="cover-theme-image"
          data-exact-src="${exactSrc}"
          onerror="if (this.dataset.triedExact !== '1') { this.dataset.triedExact = '1'; this.src = this.dataset.exactSrc; } else { this.style.display = 'none'; if (this.nextElementSibling) this.nextElementSibling.style.display = 'block'; }"
        />
        ${logoSrc ? `<img src="${logoSrc}" alt="Fabel" class="cover-hero-logo cover-logo-fallback" style="display:none;" />` : ""}
      </div>
    `;
  }

  function buildThemeCoverSheet(bookName, themeName, entries, includeToc, includePageNum) {
    const cover = document.createElement("div");
    cover.className = "a4-sheet batch-print-sheet theme-cover-sheet";
    cover.style.position = "relative";

    const colors = getBookThemeColors(bookName);
    cover.style.setProperty("--book-main", colors.main);
    cover.style.setProperty("--book-soft", colors.soft);
    cover.style.setProperty("--book-border", colors.border);
    cover.style.setProperty("--book-dark", colors.dark);

    const logoSrc = document.querySelector(".sidebar-logo")?.getAttribute("src") || "";
    const heroVisualHtml = getThemeCoverVisualHTML(themeName, logoSrc);

    let pageCursor = 2;
    const tocRowsHtml = entries.map(entry => {
      const startPage = pageCursor;
      const endPage = pageCursor + entry.visibleTasks.length - 1;
      pageCursor = endPage + 1;
      const pageRange = includePageNum
        ? (startPage === endPage ? `s. ${startPage}` : `s. ${startPage}–${endPage}`)
        : `${entry.visibleTasks.length} ark`;

      return `
        <li class="cover-toc-item">
          <div class="cover-toc-left">
            <span class="cover-check-box"></span>
            <span class="cover-toc-text"><strong>${entry.item.tittel}</strong> <span class="cover-book-pages">(${entry.item.sidetall})</span></span>
          </div>
          <span class="cover-toc-page">${pageRange}</span>
        </li>
      `;
    }).join("");

    cover.innerHTML = `
      <div class="cover-frame">
        <div class="cover-top-row">
          <span class="cover-top-badge">${bookName}</span>
          <span class="cover-top-sub">Klasselesekurs • Oppgavehefte</span>
        </div>

        <div class="cover-hero">
          ${heroVisualHtml}
          <h1 class="cover-title">${themeName}</h1>
          <p class="cover-subtitle">Klasselesekurs og arbeidsoppgaver til temaet</p>
        </div>

        ${includeToc ? `
          <div class="cover-toc-box">
            <div class="cover-toc-header">
              <h2 class="cover-toc-title">Innhold og framdrift</h2>
              <span class="cover-toc-hint">Kryss av når du er ferdig</span>
            </div>
            <ul class="cover-toc-list">${tocRowsHtml}</ul>
          </div>
        ` : ""}

        <div class="cover-student-box">
          <div class="cover-field"><span>Navn:</span><span class="cover-line"></span></div>
          <div class="cover-field"><span>Klasse:</span><span class="cover-line"></span></div>
        </div>
      </div>
    `;

    return cover;
  }



  function executeThemePrint(onAfterPrintCallback = null) {
    if (!pendingThemePrint || !worksheetEl || !worksheetEl.parentNode) return;

    const { themeItems, themeName, bookName } = pendingThemePrint;
    const includeCover = document.getElementById("print-include-cover")?.checked ?? true;
    const includeToc = includeCover && (document.getElementById("print-include-toc")?.checked ?? true);
    const includePageNum = document.getElementById("print-include-pagenum")?.checked ?? true;

    const entries = getVisibleThemeSheets(themeItems);
    if (entries.length === 0) {
      alert(`Ingen synlige oppgaveark å skrive ut for temaet «${themeName}».`);
      return;
    }

    const prevItemIndex = currentItemIndex;
    const prevTaskKey = currentTaskKey;
    const wasWelcomeScreen = document.body.classList.contains("is-welcome-screen");
    const parent = worksheetEl.parentNode;

    parent.querySelectorAll(".batch-print-sheet").forEach(el => el.remove());

    const allSheetsFragment = document.createDocumentFragment();
    let pageNumber = 1;

    if (includeCover) {
      allSheetsFragment.appendChild(
        buildThemeCoverSheet(bookName, themeName, entries, includeToc, includePageNum)
      );
      pageNumber = 2;
    }

    entries.forEach(entry => {
      currentItemIndex = entry.textItem.index;
      entry.visibleTasks.forEach(task => {
        renderSingleSheetToEl(task.key);

        const clone = worksheetEl.cloneNode(true);
        clone.removeAttribute("id");
        clone.style.display = "";
        clone.style.position = "relative";
        clone.classList.add("batch-print-sheet");

        if (includePageNum) {
          const pNumEl = document.createElement("div");
          pNumEl.className = "sheet-page-number";
          pNumEl.textContent = `Side ${pageNumber}`;
          clone.appendChild(pNumEl);
        }

        allSheetsFragment.appendChild(clone);
        pageNumber++;
      });
    });

    currentItemIndex = prevItemIndex;
    currentTaskKey = prevTaskKey;

    document.body.classList.remove("is-welcome-screen");
    document.body.classList.add("printing-all-sheets");
    parent.appendChild(allSheetsFragment);

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      document.body.classList.remove("printing-all-sheets");
      if (wasWelcomeScreen) document.body.classList.add("is-welcome-screen");
      parent.querySelectorAll(".batch-print-sheet").forEach(el => el.remove());
      window.removeEventListener("afterprint", cleanup);
      if (typeof onAfterPrintCallback === "function") onAfterPrintCallback();
    };

    window.addEventListener("afterprint", cleanup);
    setTimeout(() => {
      window.print();
      setTimeout(cleanup, 1200);
    }, 60);
  }

  // Koble hendelser til utskriftsmodalene
  ["print-include-cover", "print-include-toc", "print-include-pagenum"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", updateThemePrintEstimate);
  });

  document.querySelectorAll("[data-close-pmodal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-close-pmodal");
      document.getElementById(targetId)?.classList.add("hidden");
    });
  });

  document.getElementById("btn-do-normal-print")?.addEventListener("click", () => {
    document.getElementById("print-options-modal")?.classList.add("hidden");
    executeThemePrint();
  });

  document.getElementById("btn-open-pdf-guide")?.addEventListener("click", () => {
    document.getElementById("print-options-modal")?.classList.add("hidden");
    document.getElementById("pdf-guide-modal")?.classList.remove("hidden");
  });

  document.getElementById("btn-continue-save-pdf")?.addEventListener("click", () => {
    document.getElementById("pdf-guide-modal")?.classList.add("hidden");
    executeThemePrint(() => {
      document.getElementById("pdf-ready-modal")?.classList.remove("hidden");
    });
  });

  // Fanebytte i veiledningsmodalene
  document.querySelectorAll(".pmodal-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const group = tab.closest(".pmodal-tabs");
      const container = tab.closest(".pmodal-body");
      group?.querySelectorAll(".pmodal-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetPaneId = tab.getAttribute("data-tab-target");
      container?.querySelectorAll(".pmodal-tab-pane").forEach(pane => {
        pane.classList.toggle("active", pane.id === targetPaneId);
      });
    });
  });

  // Åpne lagret PDF i nettleser (Modal 3)
  document.getElementById("btn-open-saved-pdf")?.addEventListener("click", () => {
    document.getElementById("pdf-file-picker")?.click();
  });

  document.getElementById("pdf-file-picker")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const blobUrl = URL.createObjectURL(file);
    const link = document.getElementById("opened-pdf-link");
    const wrap = document.getElementById("opened-pdf-link-wrap");
    if (link && wrap) {
      link.href = blobUrl;
      wrap.classList.remove("hidden");
    }
    window.open(blobUrl, "_blank", "noopener");
  });

  // Bildelupe i veiledningen
  document.querySelectorAll("[data-zoom-img]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const src = el.getAttribute("data-zoom-img");
      const title = el.getAttribute("data-zoom-title") || "";
      const imgEl = document.getElementById("pmodal-zoom-image");
      const capEl = document.getElementById("pmodal-zoom-caption");
      if (imgEl) imgEl.src = src;
      if (capEl) capEl.textContent = title;
      document.getElementById("pmodal-zoom-overlay")?.classList.remove("hidden");
    });
  });

  document.getElementById("pmodal-zoom-close")?.addEventListener("click", () => {
    document.getElementById("pmodal-zoom-overlay")?.classList.add("hidden");
  });


// 3. ENKEL REDIGERING AV ORD OG TEKST
  function renderEditPanel() {
    const taskData = workingData[currentItemIndex].oppgaver[currentTaskKey];
    editFields.innerHTML = "";

    const addInput = (label, value, onChange, isTextarea = false) => {
      const div = document.createElement("div");
      div.className = "edit-group";
      div.innerHTML = `<label>${label}</label>`;
      const input = document.createElement(isTextarea ? "textarea" : "input");
      if (isTextarea) input.rows = 4;
      input.value = value;
      input.addEventListener("input", (e) => {
        onChange(e.target.value);
        renderWorksheet();
      });
      div.appendChild(input);
      editFields.appendChild(div);
    };

    if (currentTaskKey === "stavelser") {
      addInput("Ord i tabellen (skill med komma)", taskData.ord.join(", "), val => {
        taskData.ord = val.split(",").map(s => s.trim()).filter(Boolean);
      });
    } 
    else if (currentTaskKey === "ordsok") {
      addInput("Ord som skal finnes (skill med komma)", taskData.ord.join(", "), val => {
        taskData.ord = val.split(",").map(s => s.trim()).filter(Boolean);
      });
    } 
    else if (currentTaskKey === "luketekst") {
      addInput("Ordbank (skill med komma)", taskData.ordbank.join(", "), val => {
        taskData.ordbank = val.split(",").map(s => s.trim()).filter(Boolean);
      });
      addInput("Ekstraoppgave", taskData.ekstraoppgave, val => taskData.ekstraoppgave = val);
      addInput("Overskrift i tekstboks", taskData.overskrift, val => taskData.overskrift = val);
      addInput("Luketekst (bruk ___ for skrivefelt)", taskData.tekst, val => taskData.tekst = val, true);
    } 
    else if (currentTaskKey === "silhuettOgOrdkjeder") {
      addInput("Ordbank (6 ord, skill med komma)", taskData.silhuettOrdBank.join(", "), val => {
        taskData.silhuettOrdBank = val.split(",").map(s => s.trim()).filter(Boolean);
      });
      addInput("Silhuett-rekkefølge (tegnene endrer form automatisk!)", taskData.silhuettVisning.join(", "), val => {
        taskData.silhuettVisning = val.split(",").map(s => s.trim()).filter(Boolean);
      });
      addInput("Ordkjeder (skill med komma)", taskData.ordkjeder.join(", "), val => {
        taskData.ordkjeder = val.split(",").map(s => s.trim()).filter(Boolean);
      });
    } 
    else if (currentTaskKey === "lydretteOrd") {
      addInput("Ord i boksen (skill med komma)", taskData.ord.join(", "), val => {
        taskData.ord = val.split(",").map(s => s.trim()).filter(Boolean);
      });
    } 
    else if (currentTaskKey === "gitter") {
      addInput("Ord i listen (skill med komma)", taskData.ord.join(", "), val => {
        taskData.ord = val.split(",").map(s => s.trim()).filter(Boolean);
      });
    }
  }

  // KNAPPER
btnToggleEdit.addEventListener("click", () => {
    isEditing = !isEditing;
    if (isEditing) {
      resetEditPanelPosition();
      editPanel.style.display = "block";
      renderEditPanel();
    } else {
      editPanel.style.display = "none";
    }
    btnToggleEdit.textContent = isEditing ? "✖ Lukk redigering" : "✏️ Rediger tekst/ord";
  });

  btnReset.addEventListener("click", () => {
    workingData[currentItemIndex].oppgaver[currentTaskKey] = JSON.parse(
      JSON.stringify(originalData[currentItemIndex].oppgaver[currentTaskKey])
    );
    renderWorksheet();
    if (isEditing) renderEditPanel();
  });

  btnPrint.addEventListener("click", () => {
    window.print();
  });

// --- INNSTILLINGER I VENSTREMENY (FONT & BUNNTEKST) ---
  const fontSelect = document.getElementById("font-select");
  const toggleFooterCheckbox = document.getElementById("toggle-footer");
  const toggleFooterTitleCheckbox = document.getElementById("toggle-footer-title");
  const footerTitleGroup = document.getElementById("footer-title-group");
  const toggleExplainCheckbox = document.getElementById("toggle-lydrette-explain");

  function applyExplainVisibility(isVisible) {
    if (isVisible) {
      document.body.classList.remove("hide-lydrette-explain");
    } else {
      document.body.classList.add("hide-lydrette-explain");
    }
    localStorage.setItem("fabel_show_lydrette_explain", isVisible ? "true" : "false");
  }

  if (toggleExplainCheckbox) {
    const savedExplain = localStorage.getItem("fabel_show_lydrette_explain");
    const showExplain = savedExplain === null ? true : savedExplain === "true";
    toggleExplainCheckbox.checked = showExplain;
    applyExplainVisibility(showExplain);

    toggleExplainCheckbox.addEventListener("change", (e) => {
      applyExplainVisibility(e.target.checked);
    });
  }

  const toggleGitterHelperCheckbox = document.getElementById("toggle-gitter-helper");

  function applyGitterHelperVisibility(isVisible) {
    if (isVisible) {
      document.body.classList.remove("hide-gitter-helper");
    } else {
      document.body.classList.add("hide-gitter-helper");
    }
    localStorage.setItem("fabel_show_gitter_helper", isVisible ? "true" : "false");
  }

  if (toggleGitterHelperCheckbox) {
    const savedGitterHelper = localStorage.getItem("fabel_show_gitter_helper");
    const showGitterHelper = savedGitterHelper === null ? true : savedGitterHelper === "true";
    toggleGitterHelperCheckbox.checked = showGitterHelper;
    applyGitterHelperVisibility(showGitterHelper);

    toggleGitterHelperCheckbox.addEventListener("change", (e) => {
      applyGitterHelperVisibility(e.target.checked);
    });
  }

  const toggleGitterFasitCheckbox = document.getElementById("toggle-gitter-fasit");

  function applyGitterFasitVisibility(isVisible) {
    if (isVisible) {
      document.body.classList.add("show-gitter-fasit");
    } else {
      document.body.classList.remove("show-gitter-fasit");
    }
    localStorage.setItem("fabel_show_gitter_fasit", isVisible ? "true" : "false");
  }

  if (toggleGitterFasitCheckbox) {
    const savedGitterFasit = localStorage.getItem("fabel_show_gitter_fasit");
    const showGitterFasit = savedGitterFasit === "true";
    toggleGitterFasitCheckbox.checked = showGitterFasit;
    applyGitterFasitVisibility(showGitterFasit);

    toggleGitterFasitCheckbox.addEventListener("change", (e) => {
      applyGitterFasitVisibility(e.target.checked);
    });
  }

  const toggleOrdsokFasitCheckbox = document.getElementById("toggle-ordsok-fasit");

  function applyOrdsokFasitVisibility(isVisible) {
    if (isVisible) {
      document.body.classList.add("show-ordsok-fasit");
    } else {
      document.body.classList.remove("show-ordsok-fasit");
    }
    localStorage.setItem("fabel_show_ordsok_fasit", isVisible ? "true" : "false");
  }

  if (toggleOrdsokFasitCheckbox) {
    const savedOrdsokFasit = localStorage.getItem("fabel_show_ordsok_fasit");
    const showOrdsokFasit = savedOrdsokFasit === "true";
    toggleOrdsokFasitCheckbox.checked = showOrdsokFasit;
    applyOrdsokFasitVisibility(showOrdsokFasit);

    toggleOrdsokFasitCheckbox.addEventListener("change", (e) => {
      applyOrdsokFasitVisibility(e.target.checked);
    });
  }

  const selectOrdsokDir = document.getElementById("select-ordsok-dir");
  if (selectOrdsokDir) {
    const validModes = ["horizontal", "vertical", "hv", "diagonal", "mixed"];
    const savedOrdsokDir = localStorage.getItem("fabel_ordsok_dir");
    selectOrdsokDir.value = validModes.includes(savedOrdsokDir) ? savedOrdsokDir : "horizontal";

    selectOrdsokDir.addEventListener("change", (e) => {
      localStorage.setItem("fabel_ordsok_dir", e.target.value);
      renderWorksheet();
    });
  }

  const selectLuketekstSize = document.getElementById("select-luketekst-size");

function applyLuketekstSize(sizeKey) {
    document.body.classList.remove("luketekst-size-small", "luketekst-size-medium", "luketekst-size-large", "luketekst-size-xlarge");
    const validSizes = ["small", "medium", "large", "xlarge"];
    const chosen = validSizes.includes(sizeKey) ? sizeKey : "medium";
    document.body.classList.add(`luketekst-size-${chosen}`);
    localStorage.setItem("fabel_luketekst_size", chosen);
  }

  if (selectLuketekstSize) {
    const savedSize = localStorage.getItem("fabel_luketekst_size") || "medium";
    selectLuketekstSize.value = savedSize;
    applyLuketekstSize(savedSize);

    selectLuketekstSize.addEventListener("change", (e) => {
      applyLuketekstSize(e.target.value);
    });
  }

  const chkOrdsokUppercase = document.getElementById("chk-ordsok-uppercase");
  if (chkOrdsokUppercase) {
    const savedOrdsokCase = localStorage.getItem("fabel_ordsok_case") || "lower";
    chkOrdsokUppercase.checked = savedOrdsokCase === "upper";

    chkOrdsokUppercase.addEventListener("change", (e) => {
      localStorage.setItem("fabel_ordsok_case", e.target.checked ? "upper" : "lower");
      renderWorksheet();
    });
  }

  const chkSilhuettOrdkjeder = document.getElementById("chk-silhuett-ordkjeder");
  if (chkSilhuettOrdkjeder) {
    const savedOrdkjeder = localStorage.getItem("fabel_silhuett_ordkjeder");
    const showOrdkjeder = savedOrdkjeder === null ? true : savedOrdkjeder === "true";
    chkSilhuettOrdkjeder.checked = showOrdkjeder;
    document.body.classList.toggle("hide-silhuett-ordkjeder", !showOrdkjeder);

    chkSilhuettOrdkjeder.addEventListener("change", (e) => {
      const isChecked = e.target.checked;
      localStorage.setItem("fabel_silhuett_ordkjeder", isChecked);
      document.body.classList.toggle("hide-silhuett-ordkjeder", !isChecked);
    });
  }

  const chkSilhuettLinjer = document.getElementById("chk-silhuett-linjer");
  if (chkSilhuettLinjer) {
    const savedLinjer = localStorage.getItem("fabel_silhuett_linjer") === "true";
    chkSilhuettLinjer.checked = savedLinjer;
    document.body.classList.toggle("show-silhuett-linjer", savedLinjer);

    chkSilhuettLinjer.addEventListener("change", (e) => {
      const isChecked = e.target.checked;
      localStorage.setItem("fabel_silhuett_linjer", isChecked);
      document.body.classList.toggle("show-silhuett-linjer", isChecked);
    });
  }

  const selSilhuettType = document.getElementById("sel-silhuett-type");
  if (selSilhuettType) {
    const savedType = localStorage.getItem("fabel_silhuett_type") || "vanlig";
    selSilhuettType.value = savedType;

    selSilhuettType.addEventListener("change", (e) => {
      localStorage.setItem("fabel_silhuett_type", e.target.value);
      renderWorksheet();
    });
  }

const ordkjedeSizeSelect = document.getElementById("ordkjede-font-size");
  if (ordkjedeSizeSelect) {
    ordkjedeSizeSelect.value = ordkjedeFontSize;
    ordkjedeSizeSelect.addEventListener("change", (e) => {
      ordkjedeFontSize = e.target.value;
      localStorage.setItem("fabel_ordkjede_size", ordkjedeFontSize);
      document.querySelectorAll(".a4-sheet").forEach(sheet => {
        sheet.classList.remove("ordkjede-size-small", "ordkjede-size-medium", "ordkjede-size-large");
        sheet.classList.add(`ordkjede-size-${ordkjedeFontSize}`);
      });
    });
  }

  const FONT_MAP = {
    trykkskrift: "'Trykkskrift', Arial, sans-serif",
    stavskrift: "'Stavskrift', Arial, sans-serif",
    "stavskrift-fet": "'Stavskrift Fet', Arial, sans-serif",
    abc: "'ABC Skrift', Arial, sans-serif",
    arial: "Arial, Helvetica, sans-serif"
  };

  function applyFont(fontKey) {
    const chosenFont = FONT_MAP[fontKey] || FONT_MAP.trykkskrift;
    document.documentElement.style.setProperty("--worksheet-font", chosenFont);
    localStorage.setItem("fabel_selected_font", fontKey);
  }

  function applyFooterVisibility(isVisible) {
    if (isVisible) {
      document.body.classList.remove("hide-sheet-footer");
    } else {
      document.body.classList.add("hide-sheet-footer");
    }
    localStorage.setItem("fabel_show_footer", isVisible ? "true" : "false");
  }

  function updateFooterTitleState() {
    if (!toggleFooterTitleCheckbox || !toggleFooterCheckbox) return;
    const isFooterVisible = toggleFooterCheckbox.checked;
    toggleFooterTitleCheckbox.disabled = !isFooterVisible;
    if (footerTitleGroup) {
      footerTitleGroup.style.opacity = isFooterVisible ? "1" : "0.45";
    }
  }

  // Last inn lagrede valg (standard: Trykkskrift og bunntekst PÅ)
  if (fontSelect) {
    const savedFont = localStorage.getItem("fabel_selected_font") || "trykkskrift";
    fontSelect.value = savedFont;
    applyFont(savedFont);

    fontSelect.addEventListener("change", (e) => {
      applyFont(e.target.value);
    });
  }

  if (toggleFooterCheckbox) {
    const savedFooter = localStorage.getItem("fabel_show_footer");
    const showFooter = savedFooter === null ? true : savedFooter === "true";
    toggleFooterCheckbox.checked = showFooter;
    applyFooterVisibility(showFooter);

    toggleFooterCheckbox.addEventListener("change", (e) => {
      applyFooterVisibility(e.target.checked);
      updateFooterTitleState();
    });
  }

  if (toggleFooterTitleCheckbox) {
    const savedFooterTitle = localStorage.getItem("fabel_show_footer_title") === "true";
    toggleFooterTitleCheckbox.checked = savedFooterTitle;
    updateFooterTitleState();

    toggleFooterTitleCheckbox.addEventListener("change", (e) => {
      localStorage.setItem("fabel_show_footer_title", e.target.checked ? "true" : "false");
      renderWorksheet();
    });
  }

// Åpne/lukke innstillingsmeny i topplinjen
  const btnToggleSettings = document.getElementById("btn-toggle-settings");
  const settingsPopover = document.getElementById("settings-popover");

  if (btnToggleSettings && settingsPopover) {
    btnToggleSettings.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = settingsPopover.style.display === "block";
      settingsPopover.style.display = isOpen ? "none" : "block";
    });

    settingsPopover.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      settingsPopover.style.display = "none";
    });
  }

  // START OPP
showWelcomeScreen();
});