const readMore = document.querySelector('.readMore');
const openReadMores = document.querySelectorAll('.openReadMore');
const closeReadMores = document.querySelectorAll('.closeReadMore');
const readMoreTitle = document.querySelector('.readMoreTitle');
const readMoreDescription = document.querySelector('.readMoreDescription');

openReadMores.forEach((openReadMore, index) => {
    openReadMore.addEventListener('click', () => {
        readMore.showModal();
        const Title={
            0:["Innovativa Kolfiberkompositer: Framtidens Lättviktiga Material i Fordonsindustrin"],
            1:["Mekanisk Teknik: Nyckeln till Effektivitet och Innovation i Industriell Automation"],
        };
        const text={
            0:["Kolfiberkompositer har länge varit kända för sin användning inom flyg- och rymdindustrin på grund av deras enastående styrka-till-vikt-förhållande. Men nu ser vi en snabb utveckling av användningen av dessa avancerade material inom fordonsindustrin, där de erbjuder unika fördelar för att förbättra prestanda och effektivitet. Vad som gör kolfiberkompositer så attraktiva för fordonsapplikationer är deras extremt låga vikt i förhållande till sin styrka. Genom att ersätta traditionella material som stål och aluminium med kolfiberkompositer kan fordonskonstruktioner bli betydligt lättare samtidigt som de bibehåller eller till och med förbättrar sin strukturella integritet och kraschsäkerhet. En av de mest framstående användningarna av kolfiberkompositer i fordonsindustrin är i tillverkningen av chassikomponenter och karosseridelar. Genom att använda kolfiberkompositer istället för stål eller aluminium kan biltillverkare minska fordonets totala vikt avsevärt, vilket leder till förbättrad bränsleekonomi, acceleration och hantering. Dessutom erbjuder kolfiberkompositer möjligheten till mer komplexa och innovativa designlösningar. Deras överlägsna formbarhet och styrka gör det möjligt att skapa komponenter med avancerade geometrier och strukturer som är svåra eller omöjliga att uppnå med konventionella material. Även om kolfiberkompositer fortfarande kan vara dyrare att tillverka än traditionella material, har deras kostnader minskat avsevärt tack vare avancerade tillverkningsmetoder och ökad efterfrågan. Dessutom, med krav på lägre utsläpp och strängare bränsleekonomistandarder, blir investeringen i lättviktiga material som kolfiberkompositer allt mer attraktiv för fordonsindustrin. Sammanfattningsvis erbjuder kolfiberkompositer en spännande möjlighet att revolutionera fordonsdesign och prestanda. Med sina unika egenskaper för styrka, lättviktighet och mångsidighet förväntas kolfiberkompositer fortsätta att vara en nyckelfaktor i att forma framtidens fordon för ökad effektivitet och hållbarhet."],
            1:["I dagens högteknologiska produktionsmiljö är mekanisk teknik en nyckelkomponent för att möjliggöra automatiserade processer och effektivisera industriell produktion. Genom att utnyttja avancerade maskiner, robotar och automatiserade system kan företag inom olika branscher optimera sin produktion och uppnå högre effektivitet och kvalitet i tillverkningsprocessen. En central aspekt av mekanisk teknik inom industriell automation är utvecklingen av avancerade maskiner och produktionsutrustning. Genom att integrera avancerade sensorer, styrsystem och mekaniska komponenter kan dessa maskiner utföra komplexa uppgifter med hög precision och hastighet, vilket minskar produktionskostnaderna och förbättrar kvaliteten på de tillverkade produkterna. Robotik är en annan viktig del av mekanisk teknik inom industriell automation. Industrirobotar används för att utföra en mängd olika uppgifter, från montering och svetsning till plockning och packning av produkter. Genom att automatisera repetitiva och fysiskt krävande uppgifter kan robotar öka produktiviteten och frigöra mänsklig arbetskraft för mer värdeskapande uppgifter. Automatiserade system och processer är också avgörande för att optimera industriell produktion. Genom att integrera olika delar av tillverkningsprocessen, från materialhantering och maskinstyrning till kvalitetskontroll och dataanalys, kan företag skapa en sömlös och effektiv produktionskedja som minskar ledtider och ökar produktionskapaciteten. En av de mest spännande utvecklingarna inom mekanisk teknik är framväxten av digitala tvillingar och simuleringsverktyg. Genom att skapa virtuella modeller av produktionsanläggningar och processer kan företag testa och optimera sina system innan de implementeras i den verkliga världen, vilket minskar risken för fel och ökar effektiviteten i produktionsprocessen. Sammanfattningsvis spelar mekanisk teknik en avgörande roll i att driva innovation och effektivitet inom industriell automation. Genom att utnyttja avancerade maskiner, robotar och automatiserade system kan företag öka sin produktivitet, förbättra produktkvaliteten och stärka sin konkurrenskraft på den globala marknaden."],
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