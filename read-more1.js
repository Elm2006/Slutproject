const readMore = document.querySelector('.readMore');
const openReadMores = document.querySelectorAll('.openReadMore');
const closeReadMores = document.querySelectorAll('.closeReadMore');
const readMoreTitle = document.querySelector('.readMoreTitle');
const readMoreDescription = document.querySelector('.readMoreDescription');//Skapar mina klasser i Javascript

openReadMores.forEach((openReadMore, index) => {
    openReadMore.addEventListener('click', () => {
        readMore.showModal();
        const Title={
            0:["Den Evolutionära Resan av Informationsteknik: Från Abakus till Quantum Computing"],
            1:["Den Framväxande Trenden av Edge Computing: Nära Tillhands Teknik för Nästa Generationens Applikationer"],
        };
        const text={
            0:["Informationsteknikens historia sträcker sig tillbaka tusentals år. Från abakusen, den tidigaste kända räkneapparaten som användes av antika civilisationer, till mekaniska räknemaskiner under 1600- och 1700-talet, har människan alltid sökt sätt att automatisera och förbättra beräkningar och informationshantering. Under 1900-talet accelererade utvecklingen av informationsteknik dramatiskt. Den första programmerbara datorn, ENIAC, byggdes under andra världskriget för att beräkna artilleriavstånd. Denna milstolpe banade väg för en era av datorer och elektronisk databehandling. Persondatorn gjorde sin entré under 1970-talet, vilket demokratiserade tillgången till datorer och startade en teknikrevolution. Med framsteg inom halvledarteknik och mikroprocessorer kunde datorer krympas i storlek och öka i kapacitet. Internetets framväxt på 1990-talet revolutionerade hur vi delar och tillgängliggör information över hela världen. Molnteknologi och mobila enheter följde snabbt, vilket möjliggjorde sömlös åtkomst till data och tjänster från praktiskt taget var som helst i världen. Under 2000-talet har informationstekniken fortsatt att utvecklas i en hisnande takt. Artificiell intelligens och maskininlärning har tagit fram banbrytande applikationer inom områden som självkörande fordon, medicinsk diagnos och språköversättning. Blockchain-tekniken har potentialen att omforma ekonomiska system och digitala transaktioner. Nu står vi på tröskeln till en ny era av informationsteknik med introduktionen av kvantdatorer. Dessa kraftfulla maskiner har potentialen att lösa komplexa problem som är bortom kapaciteten hos konventionella datorer. Medan kvantdatorer fortfarande är i sin linda, erbjuder de spännande möjligheter inom områden som kryptografi, materialvetenskap och läkemedelsdesign."],
            1:["Traditionellt har datahantering och beräkningar utförts i centraliserade datacenter, vilket kräver att data skickas till och från användare och enheter. Detta kan resultera i fördröjningar och flaskhalsar, särskilt för applikationer som kräver snabba svarstider eller bearbetning av stora datamängder. Edge computing bryter detta mönster genom att placera beräkningsresurser närmare användare och enheter, vanligtvis vid kanten av nätverket. Genom att utföra beräkningar lokalt på enheten eller nära användaren kan edge computing minska behovet av att skicka data tillbaka till centrala servrar för bearbetning. Detta resulterar i snabbare svarstider och minskad belastning på nätverket. En av de mest uppenbara tillämpningarna av edge computing är inom Internet of Things (IoT), där miljarder enheter genererar stora mängder data i realtid. Genom att använda edge computing kan IoT-enheter bearbeta och analysera data lokalt innan de skickar endast relevanta data till molnet för ytterligare analys eller lagring. Detta minskar bandbreddsbehovet och möjliggör snabbare beslut. Edge computing är också avgörande för applikationer som kräver låg-latensrespons, såsom virtuell och förstärkt verklighet (VR/AR) och autonoma fordon. Genom att placera beräkningsresurser närmare användare och enheter kan edge computing minska fördröjningar och möjliggöra realtidsinteraktioner och feedback. Dessutom kan edge computing förbättra datasäkerheten genom att minska risken för dataläckage och attacker. Genom att bearbeta och analysera känslig data lokalt kan edge-enheter minska exponeringen för potentiella säkerhetsrisker som kan uppstå vid överföring av data över nätverket. Som tekniken fortsätter att utvecklas förväntas edge computing spela en allt viktigare roll i den framtida tekniklandskapet. Med potentialen att förbättra prestanda, säkerhet och användarupplevelse är edge computing en teknologitrend som är värd att hålla ögonen på."],
        };
        readMoreTitle.textContent=Title[index];
        readMoreDescription.textContent=text[index];
    });
});//Gör så man kan öppna popupen, visar texten beroende på vliken knapp du trykte på medhjälp av index

closeReadMores.forEach((closeReadMore, index) => {
    closeReadMore.addEventListener('click', () => {
        readMore.close();
    });
});//Stänger ned popupen