const readMore = document.querySelector('.readMore');
const openReadMores = document.querySelectorAll('.openReadMore');
const closeReadMores = document.querySelectorAll('.closeReadMore');
const readMoreTitle = document.querySelector('.readMoreTitle');
const readMoreDescription = document.querySelector('.readMoreDescription');

openReadMores.forEach((openReadMore, index) => {
    openReadMore.addEventListener('click', () => {
        readMore.showModal();
        const Title={
            0:["Framtidens Syn: Innovativa Teknologier inom Ögonvård och Synrehabilitering"],
            1:["Revolutionerande Hjälpmedel: Teknologins Roll i Rehabilitering av Neurologiska Skador"],
        };
        const text={
            0:["Inom området för synvård och synrehabilitering har biomedicinsk teknik öppnat upp nya möjligheter för personer med synnedsättningar. En av de mest banbrytande teknologierna är ögonproteser, som används för att ersätta eller komplettera skadade ögon och återställa synförmågan. Genom att använda avancerade elektroniska komponenter och mikroelektroder kan ögonproteser omvandla ljus till elektriska signaler som hjärnan kan tolka, vilket ger en form av konstgjord syn. Adaptiva kontaktlinser är en annan innovativ teknologi inom synvården, som erbjuder dynamisk korrigering av synfel och skydd mot ögonsjukdomar. Dessa kontaktlinser kan automatiskt justera sin form för att korrigera för astigmatism, närsynthet eller långsynthet och kan även fungera som en plattform för att leverera läkemedel direkt till ögat för behandling av ögonsjukdomar som glaukom eller torra ögon. Artificiell syn är ett spännande forskningsområde inom biomedicinsk teknik som syftar till att skapa datorgenererade bilder som kan tolkas av hjärnan för att återskapa synupplevelsen hos personer med synnedsättningar. Genom att använda avancerade bildbehandlingsalgoritmer och implantat som stimulerar synnerven, kan artificiell syn potentiellt återställa någon form av synförmåga för personer med total blindhet. Utöver dessa teknologier har biomedicinsk teknik också bidragit till att förbättra diagnostik och behandling av vanliga ögonsjukdomar som grön starr, åldersrelaterad makuladegeneration och diabetic retinopati. Avancerade bildbehandlingsmetoder som optisk koherenstomografi (OCT) och fluoresceinangiografi möjliggör tidig upptäckt och övervakning av dessa sjukdomar, vilket kan leda till snabbare intervention och bättre utfall för patienterna. Genom att kombinera biomedicinsk teknik med ögonvårdens expertis och patientens behov fortsätter synvården att utvecklas och förbättras för att möta de växande behoven hos en åldrande befolkning och ökad frekvens av ögonsjukdomar över hela världen."],
            1:["Rehabiliteringsteknik för neurologiska skador omfattar en mångfald av avancerade hjälpmedel och terapeutiska metoder som syftar till att återställa funktion och förbättra livskvalitet för personer som har drabbats av stroke, traumatisk hjärnskada (TBI), Parkinsons sjukdom och andra neurologiska tillstånd. En av de mest banbrytande teknologierna är robotassisterad rehabilitering, där avancerade robotiska enheter används för att hjälpa patienter att återfå rörelseförmåga och styrka. Genom användning av exoskelett, robotarmar och virtuell verklighetsbaserad träning kan robotassisterad rehabilitering skräddarsys för varje patients behov och mål. Dessa tekniker möjliggör intensiv och repetitiv träning, vilket är avgörande för neuroplasticitet och återhämtning efter neurologiska skador. Neurostimuleringstekniker är också viktiga inom rehabilitering av neurologiska skador, där elektrisk eller magnetisk stimulering används för att modulera hjärnans aktivitet och främja återhämtning. Transkraniell magnetisk stimulering (TMS) och djup hjärnstimulering (DBS) är två exempel på neurostimuleringstekniker som har visat lovande resultat för att förbättra motorisk funktion och kognitiv förmåga hos patienter med neurologiska tillstånd som Parkinsons sjukdom och depression. Sensorbaserade enheter och smarta proteser är ytterligare exempel på teknologier som används inom rehabilitering av neurologiska skador för att övervaka patienters framsteg och underlätta återhämtning. Genom att använda avancerade sensorer och algoritmer kan dessa enheter registrera och analysera rörelse och aktivitet för att ge realtidsåterkoppling och skräddarsydd träning. Genom att kombinera teknikens kraft med expertis inom neurovetenskap fortsätter rehabiliteringstekniken att utvecklas och förbättras för att möta behoven hos personer med neurologiska skador. Med ständiga framsteg och innovationer är framtiden för neurologisk rehabilitering full av hopp och möjligheter för patienter världen över."],
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