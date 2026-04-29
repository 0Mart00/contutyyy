/**
 * api.js - Bölcsességek lekérése és kezelése
 */

// Globális változó az aktuális idézet tárolásához a másoláshoz
let currentQuote = null;

async function fetchAndDisplayRandomQuote() {
    try {
        const baseUrl = 'https://philosophersapi.com';
        
        // 1. Adatok lekérése párhuzamosan
        const [qRes, pRes] = await Promise.all([
            fetch(`${baseUrl}/api/quotes`),
            fetch(`${baseUrl}/api/philosophers`)
        ]);
        console.log("sd");
        const quotes = await qRes.json();
        const philosophers = await pRes.json();

        // 2. Véletlenszerű idézet kiválasztása
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const authorData = philosophers.find(p => p.id === randomQuote.philosopher.id);

        // 3. Adatobjektum összeállítása
        currentQuote = {
            text: randomQuote.quote,
            author: authorData?.name || "Ismeretlen",
            school: authorData?.school || "N/A",
            life: authorData?.life || "N/A",
            image: authorData?.images?.faceImages?.face500x500 
                   ? baseUrl + authorData.images.faceImages.face500x500 
                   : "https://placeholder.com"
        };

        renderToSidebar(currentQuote);
    } catch (error) {
        console.error("Hiba az adatok lekérésekor:", error);
        const welcomeView = document.getElementById('welcome-view');
        if(welcomeView) welcomeView.innerHTML = "<p>Hiba történt a bölcsesség betöltésekor.</p>";
    }
}

function renderToSidebar(item) {
    const welcomeView = document.getElementById('welcome-view');
    if (!welcomeView) return;

    // Megjelenítés a sidebar-ban a kért elrendezés szerint
    welcomeView.innerHTML = `
        <div style="position: relative;">
            <button onclick="closeQuotePanel()" style="position: absolute; right: -10px; top: -10px; background: none; border: none; color: #889; cursor: pointer; font-size: 20px;">&times;</button>
            
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                <img src="${item.image}" alt="${item.author}" 
                     style="width: 80px; height: 80px; border-radius: 50%; border: 2px solid #ffd700; object-fit: cover;">
                <div>
                    <h2 style="margin: 0; color: #ffd700; font-size: 18px;">${item.author}</h2>
                    <p style="margin: 0; font-size: 12px; color: #889;">${item.life}</p>
                </div>
            </div>

            <div class="description-box" style="margin-bottom: 15px;">
                <p style="font-style: italic; color: #fff; margin: 0; font-size: 16px;">“${item.text}”</p>
                <cite style="display: block; text-align: right; margin-top: 10px; color: #ffd700; font-weight: bold;">— ${item.author}</cite>
            </div>

            <div style="display: flex; gap: 10px;">
                <button id="copy-btn" onclick="copyToClipboard()" 
                        style="flex: 1; background: #ffd700; color: #000; border: none; padding: 10px; cursor: pointer; border-radius: 4px; font-weight: bold; transition: 0.3s;">
                    Másolás
                </button>
                <button onclick="fetchAndDisplayRandomQuote()" 
                        style="flex: 1; background: rgba(255,215,0,0.1); color: #ffd700; border: 1px solid #ffd700; padding: 10px; cursor: pointer; border-radius: 4px; font-weight: bold;">
                    Új idézet
                </button>
            </div>
        </div>
    `;
}

// Vágólapra másolás funkció
function copyToClipboard() {
    if (!currentQuote) return;

    const textToCopy = `“${currentQuote.text}”\n— ${currentQuote.author}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-btn');
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Másolva! ✓";
        copyBtn.style.background = "#00ff88";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.background = "#ffd700";
        }, 2000);
    }).catch(err => {
        console.error('Nem sikerült a másolás: ', err);
    });
}

// Panel bezárása (elrejtés)
function closeQuotePanel() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
        // Itt létrehozhatsz egy gombot, amivel visszahozható, ha szükséges
    }
}

// Kezdéskor futtatás
document.addEventListener('DOMContentLoaded', fetchAndDisplayRandomQuote);
