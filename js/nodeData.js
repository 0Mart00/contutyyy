const fullData = {
    nodes: [
      { id: "0", name: "Khaosz", group: "Eredet", level: 0, color: "#ffffff", size: 15, 
      description: "A mindenséget megelőző tátongó üresség és végtelen sötétség. Belőle vált ki Gaia (Föld), Tartarosz (Alvilág) és Erósz (Szerelem), megalapozva a létezés fizikai és metafizikai vázát." },
        { id: "1", name: "Görög Kultúra", group: "Központ", level: 1, color: "#ffd700", size: 14, 
        description: "A hellén civilizáció szellemi magja. Itt ér össze a mitikus narratíva és a racionális gondolkodás, létrehozva azt a kulturális mátrixot, amely a nyugati tudományok és művészetek bölcsőjévé vált." },
            { id: "f1", name: "Filozófia", group: "Filozófia", level: 2, color: "#00E5FF", size: 10, 
            description: "A bölcsesség és a stratégiai gondolkodás istennője. A filozófia területén ő képviseli a tiszta logoszt, a logikai következtetést és az igazság keresésének fegyelmezett útját." },
            
            
                { id: "fM1", name: "Logika", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "Az érvelés, a helyes gondolkodás és a bizonyítás tudománya. Arisztotelész az „Organon” (eszköz) elnevezéssel illette a logikai műveit, mivel ezt minden más tudomány alapfeltételének tekintette." },
                    { id: "fMLa1", name: "Fogalmak és kategóriák", group: "Filozófia", level: 4, color: "", size: 10, 
                    description: "Mielőtt állításokat tennénk, meg kell vizsgálni magukat a szavakat és azt, hogy miként csoportosítjuk a dolgokat. "},

                        { id: "fMFb1", name: "Kategóriák", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Arisztotelész tíz kategóriát határozott meg (pl. szubsztancia/lényeg, mennyiség, minőség, hely, idő), amelyekbe a világ minden dolga besorolható." },
    
                        { id: "fMFb2", name: "Definíciók", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Annak meghatározása, hogy pontosan mi egy dolog (pl. „az ember értelmes állat”)." },
    
                    { id: "fMLa2", name: "Ítéletek és kijelentések", group: "Filozófia", level: 4, color: "", size: 10, 
                    description: "Itt már nem csak szavakról van szó, hanem olyan mondatokról, amelyek lehetnek igazak vagy hamisak. " },
                    
                        { id: "fMFa3", name: "Állítás és Tagadás", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Annak vizsgálata, hogyan kapcsolunk össze egy alanyt és egy állítmányt (pl. „Minden ember halandó”)." },

                        { id: "fMFa3", name: "Kijelentéslogika (Sztoikusok)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: " A sztoikusok (főleg Khrüszipposz) továbbmentek, és az összetett mondatokat vizsgálták olyan kötőszavakkal, mint a „ha... akkor”, az „és” vagy a „vagy”" },

                    { id: "fMLa3", name: "A következtetések", group: "Filozófia", level: 4, color: "", size: 10, 
                    description: "Ez a logika „csúcsa”, ahol több állításból egy újat vezetünk le. " },

                        { id: "fMLb1", name: "Kategorikus szillogizmus:", group: "Filozófia", level: 5, color: "", size: 10, 
                        description: "A klasszikus arisztotelészi forma." },
                        { id: "fMLb2", name: "Bizonyításelmélet", group: "Filozófia", level: 5, color: "", size: 10, 
                        description: "Hogyan építhetünk fel megdönthetetlen tudományos érveléseket." },
                        { id: "fMLb3", name: "Dialektika", group: "Filozófia", level: 5, color: "", size: 10, 
                        description: "A vitatkozás tudománya; hogyan kényszeríthetjük az ellenfelet ellentmondásba valószínű állítások használatával." },
                        { id: "fMLb4", name: "Szofisztika", group: "Filozófia", level: 5, color: "", size: 10, 
                        description: " A hibás, félrevezető érvelések (érvhibák) leleplezése." },


                { id: "fM2", name: "Fizika ", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "A természet, a világmindenség (kozmosz) keletkezésének és működésének vizsgálata. A korai (preszókratikus) gondolkodók elsősorban ezzel foglalkoztak, a világ „ősanyagát” (arkhé) keresve." },
                    { id: "fMFa3", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                
                
                { id: "fM3", name: "Etika", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "Az erkölcs, a helyes életvitel és a boldogság (eudaimonia) kutatása. Szókratész volt az, aki a figyelmet a természetről az emberi viselkedésre és az erényekre irányította. " },

                    { id: "", name: "Eudaimónia (A legfőbb jó)", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Ez az etika célja. Nem pillanatnyi örömöt jelent, hanem a beteljesült, sikeres életet. Minden iskola máshogy határozta meg:" },
                        { id: "", name: "Arisztotelész", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Az értelemnek megfelelő tevékeny élet." },
                        { id: "", name: "Epikurosz", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "A testi fájdalom és a lelki zavar hiánya (ataraxia)." },
                        { id: "", name: "Sztoikusok", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "A természettel (ésszel) összhangban lévő élet." },
                    
                    { id: "", name: "Arete (Erénytan)", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Az erény a görögöknél „kiválóságot” jelent. Azt vizsgálták, milyen jellemvonások tesznek egy embert jóvá. Négy fő (kardinális) erényt különítettek el:" },
                        { id: "", name: "Okosság (Phronészisz)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Gyakorlati bölcsesség a döntésekben." },
                        { id: "", name: "Igazságosság", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Megadni mindenkinek, ami jár." },
                        { id: "", name: "Bátorság", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Helytállás a veszélyben és a nehézségekben." },
                        { id: "", name: "Mértékletesség", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Az ösztönök és vágyak kontrollálása." },
                    
                    { id: "", name: "Az „Arany Középút” elve", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Főleg Arisztotelészhez köthető elv, miszerint az erény mindig két szélsőség között helyezkedik el. Példa: A bátorság a gyávaság (hiány) és a vakmerőség (túlzás) között van." },
                   
                    { id: "", name: "Ismeret és cselekvés kapcsolata", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                        
                        { id: "", name: "Etikai intellektualizmus (Szókratész):", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Szerinte senki sem tesz rosszat akarattal. Aki tudja, mi a jó, az jól is fog cselekedni. A bűn tehát nem más, mint tudatlanság." },
                        { id: "", name: "Akaratgyengeség (Akraszia):", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Arisztotelész ezzel szemben felismerte, hogy néha tudjuk, mi a helyes, mégis az érzelmeink vagy vágyaink győznek." },
                   
                    { id: "", name: "Gyakorlati etika és barátság", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Az etika nem csak elmélet volt, hanem a közösségi élet alapja is." },
                        { id: "", name: "Philia (Barátság):", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Kiemelt terület volt, mert a görögök szerint a jó élet elképzelhetetlen barátok és a közösségben (polisz) való részvétel nélkül." },
                    
                    
                    


                { id: "fS1", name: "Metafizika", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "A görög metafizika a „fizika utáni” vagy „fizika feletti” dolgokkal foglalkozik: azokkal az alapelvekkel, amelyek nem láthatóak, de meghatározzák a teljes valóságot. Arisztotelész ezt még „első filozófiának” nevezte." },
                    { id: "", name: "Ontológia (Lételmélet)", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Ez a „lét mint létező” tanulmányozása. Azt vizsgálja, mit jelent egyáltalán az, hogy valami van." },
                    
                        { id: "", name: "Szubsztancia (Lényeg)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Mi az, ami egy dologban állandó, miközben a tulajdonságai változnak? (Pl. Szókratész akkor is Szókratész marad, ha megöregszik)." },
                        { id: "", name: "Létezők csoportosítása", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Mi létezik valóságosabban? Egy konkrét tárgy (pl. egy asztal) vagy az asztal általános fogalma?" },
                    
                    
                    { id: "", name: "Az anyagi és a szellemi világ kapcsolata", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Itt válik ketté a görög gondolkodás két legnagyobb iránya:" },
                        { id: "", name: "Platón (Idealizmus):", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Szerinte a mi világunk csak árnyékképe a tökéletes Ideák birodalmának. A metafizika célja, hogy a lelkünk „visszaemlékezzen” ezekre az örök formákra." },
                        { id: "", name: "Arisztotelész (Realizmus)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Elvetette az ideák külön világát. Szerinte a „forma” (a dolog lényege) és az „anyag” elválaszthatatlanul benne van magukban a tárgyakban (Hülemorfizmus)." },
                    
                    { id: "", name: "Kozmológia és az Első Mozgató", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "A világ eredetét és végső okait keresi." },
                        { id: "", name: "Teleológia (Célokság)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Az a meggyőződés, hogy a természetben mindennek célja van. Semmi sem történik ok nélkül." },
                        { id: "", name: "Az Első Mozgató", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Arisztotelész érvelése szerint kell lennie egy végső oknak, amely mindent mozgásba hoz, de ő maga mozdulatlan és örökkévaló (ez később a keresztény istenfogalom alapja lett)." },
                    
                    { id: "", name: " Potencialitás és Aktualitás (Lehetőség és Megvalósulás)", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                        { id: "", name: "Dünamisz (Lehetőség)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Ami egy dologban benne rejlik (pl. a makkban a tölgyfa lehetősége)." },
                        { id: "", name: "Energeia (Megvalósulás)", group: "Filozófia", level: 3, color: "", size: 10, 
                        description: "Amikor a lehetőség valósággá válik (a makk ténylegesen fává nő)." },
                    
                    { id: "", name: "Egy és Sok problémája", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "Hogyan lehet a világ egyszerre sokszínű és változékony, miközben az értelemmel felfogható törvényszerűségei egységesek és állandóak? (Pl. Hérakleitosz a változást, Parmenidész az állandóságot tartotta az alapvető valóságnak)." },
                    
                    
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                    { id: "", name: "", group: "Filozófia", level: 3, color: "", size: 10, 
                    description: "" },
                { id: "fS2", name: "Episztemológia", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },

                { id: "fS3", name: "Politika", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },
            
                { id: "fS4", name: "Esztétika ", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },
                
                { id: "fS5", name: "Rétorika ", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },


                { id: "fK1", name: "Preszókratikus ", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },
                
                { id: "fK2", name: "Klasszikus kor", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },

                { id: "fK3", name: "Hellénisztikus kor", group: "Filozófia", level: 3, color: "", size: 10, 
                description: "" },



            { id: "t1", name: "Tudomány", group: "", level: 2, color: "#FF5722", size: 10, 
            description: "A kovácsmesterség és a technológia istene. Az anyag törvényszerűségeinek ismerője, aki az első automatákat és az Olümposz mechanikus csodáit alkotta meg, összekötve a tudást a gyakorlati megvalósítással." },
            
            { id: "p1", name: "Politika", group: "", level: 2, color: "#FFC107", size: 10, 
            description: "Az istenek és emberek ura, a rend (Kosmos) őrzője. A politikai hierarchia, a törvényhozás és a társadalmi igazságosság égi megfelelője, a hatalom gyakorlásának legfőbb szimbóluma." },
            
            { id: "m1", name: "Mitológia", group: "", level: 2, color: "#9C27B0", size: 10, 
            description: "Az utak, a tolmácsolás és a hírnöki szolgálat istene. Ő köti össze a szférákat, segítve az információ áramlását és az isteni üzenetek emberi nyelvre történő lefordítását (hermeneutika)." },
            
            { id: "h1", name: "Történelem", group: "", level: 2, color: "#4CAF50", size: 10, 
            description: "A történetírás múzsája. Feladata az események kauzális láncolatának rögzítése és a hősök tetteinek megőrzése az utókor számára, biztosítva a kollektív emlékezet folytonosságát." },
            
            { id: "n1", name: "Nyelv", group: "", level: 2, color: "#E91E63", size: 10, 
            description: "A phóné (hang) és a logosz (értelem) felbonthatatlan egysége. Ez a struktúra teszi lehetővé, hogy a mitikus narratívák és elvont fogalmak érthető formában öröklődjenek generációkon át, hidat képezve a gondolat és a valóság között." },
            
            { id: "v1", name: "Vallas", group: "", level: 2, color: "#E91E63", size: 10, 
            description: "" },
            
            { id: "tt1", name: "Természet", group: "", level: 2, color: "#E91E63", size: 10, 
            description: "" },
            
            { id: "s1", name: "Sport", group: "", level: 2, color: "#E91E63", size: 10,
            description: "" },
            
            { id: "ne1", name: "Nevezetesseg", group: "", level: 2, color: "#E91E63", size: 10, 
            description: "" },
            
            { id: "mu1", name: "Müvészet", group: "", level: 2, color: "#E91E63", size: 10, 
            description: "" },
            
            { id: "me1", name: "Mentalitás", group: "", level: 2, color: "#E91E63", size: 10,
            description: "" },
            
            { id: "g1", name: "Gaszto", group: "", level: 2, color: "#E91E63", size: 10, 
            description: "" },
      
      
    ],

    links: [
      { source: "0", target: "1" },
      { source: "1", target: "f1" },
      { source: "1", target: "t1" },
      { source: "1", target: "p1" },
      { source: "1", target: "m1" },
      { source: "1", target: "h1" },
      { source: "1", target: "n1" },
      { source: "1", target: "v1" },
      { source: "1", target: "tt1" },
      { source: "1", target: "s1" },
      { source: "1", target: "ne1" },
      { source: "1", target: "mu1" },
      { source: "1", target: "me1" },
      { source: "1", target: "g1" },
    ],

    linksConnection: [
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
        {source: "0", target: "0"},
    ]
  };
