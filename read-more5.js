const readMore = document.querySelector('.readMore');
const openReadMores = document.querySelectorAll('.openReadMore');
const closeReadMores = document.querySelectorAll('.closeReadMore');
const readMoreTitle = document.querySelector('.readMoreTitle');
const readMoreDescription = document.querySelector('.readMoreDescription');

openReadMores.forEach((openReadMore, index) => {
    openReadMore.addEventListener('click', () => {
        readMore.showModal();
        const Title={
            0:["Framstegen inom Djupinlärning: Revolutionen inom Artificiell Intelligens och Datavetenskap"],
            1:["Blockchain-teknik: Framtiden för Säkerhet och Tillförlitlighet i Digitala Transaktioner"],
        };
        const text={
            0:["Djupinlärning har på senare tid fått mycket uppmärksamhet tack vare dess förmåga att lösa komplexa problem inom olika områden, inklusive bildigenkänning, naturligt språkbehandling, autonoma fordon och medicinsk diagnostik. Till skillnad från traditionella maskininlärningsmetoder kan djupinlärning extrahera och lära sig att representera data på ett hierarkiskt sätt, vilket gör det möjligt att identifiera mönster och göra prediktioner med högre precision. En av de mest imponerande tillämpningarna av djupinlärning är inom bildigenkänning, där neurala nätverk tränas att känna igen objekt, ansikten och mönster i digitala bilder med enastående precision. Detta har möjliggjort framsteg inom områden som medicinsk bildbehandling, autonoma fordon och övervakningssystem där snabb och exakt bildanalys är avgörande. Inom naturligt språkbehandling (NLP) har djupinlärning också revolutionerat hur datorer förstår och genererar mänskligt språk. Genom att använda neurala nätverk kan maskiner översätta språk, generera text och förstå sammanhang och känslor i skriven eller talad kommunikation, vilket öppnar upp nya möjligheter inom översättningsteknik, chatbots och personlig assistans. I medicinsk diagnostik har djupinlärning visat sig vara särskilt kraftfullt för att analysera medicinska bilder och diagnostisera sjukdomar som cancer, hjärtsjukdomar och neurologiska störningar. Genom att träna neurala nätverk på stora dataset av medicinska bilder kan läkare och forskare dra nytta av avancerade algoritmer för att upptäcka och klassificera sjukdomar med hög precision och tidigare upptäckt. Trots sina imponerande framsteg finns det fortfarande utmaningar med djupinlärning, inklusive behovet av stora mängder data, kraven på beräkningsresurser och frågor om säkerhet och etik. Men med fortsatta framsteg inom datavetenskap och teknikutveckling förväntas djupinlärning fortsätta att vara en drivkraft för innovation och förändring inom artificiell intelligens och datavetenskap."],
            1:["Blockchain-tekniken, som först introducerades som grunden för kryptovalutor som Bitcoin, har sedan dess vuxit till att omfatta en bredare rad tillämpningar som sträcker sig från finansiella transaktioner till röstningssystem och fastighetsregister. På dess mest grundläggande nivå är en blockchain en decentraliserad och distribuerad digital huvudbok som registrerar transaktioner i en serie av ihopkopplade block, vilket skapar en transparent och oåterkallelig transaktionshistorik. En av de främsta fördelarna med blockchain-tekniken är dess säkerhet. Genom att använda kryptografiska tekniker och en decentraliserad struktur kan blockkedjan erbjuda en hög grad av säkerhet och skydd mot manipulation och bedrägeri. Eftersom varje transaktion är kopplad till föregående transaktioner och måste godkännas av ett nätverk av noder, är det i princip omöjligt att ändra eller förfalska data i en blockchain utan att upptäckas. En annan fördel med blockchain är dess tillförlitlighet och spårbarhet. Genom att använda en distribuerad huvudbok kan användare spåra och verifiera transaktioner i realtid utan att behöva lita på en central auktoritet eller mellanhand. Detta gör det möjligt för företag och organisationer att skapa transparenta och pålitliga transaktionssystem som minskar risken för fel och bedrägeri. Blockchain-tekniken erbjuder också fördelar när det gäller effektivitet och kostnadsbesparingar. Genom att eliminera behovet av mellanhänder och intermediärer kan blockchain-tekniken minska transaktionskostnader och öka hastigheten på transaktioner. Dessutom kan smarta kontrakt, som är självutförande kodar som exekveras automatiskt när förutsatta villkor är uppfyllda, automatisera och effektivisera komplexa affärsprocesser. Trots sina många fördelar finns det fortfarande utmaningar och frågor som måste lösas för att blockchain-tekniken ska nå sin fulla potential, inklusive skalbarhet, reglering och integritet. Men med fortsatta framsteg och innovationer förväntas blockchain-tekniken fortsätta att vara en kraftfull och disruptiv kraft inom digitala transaktioner och datavetenskap."],
        };
        readMoreTitle.textContent=Title[index];
        readMoreDescription.textContent=text[index];
    });
});

closeReadMores.forEach((closeReadMore, index) => {
    closeReadMore.addEventListener('click', () => {
        readMore.close();
    });
});