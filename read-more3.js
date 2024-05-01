const readMore = document.querySelector('.readMore');
const openReadMores = document.querySelectorAll('.openReadMore');
const closeReadMores = document.querySelectorAll('.closeReadMore');
const readMoreTitle = document.querySelector('.readMoreTitle');
const readMoreDescription = document.querySelector('.readMoreDescription');

openReadMores.forEach((openReadMore, index) => {
    openReadMore.addEventListener('click', () => {
        readMore.showModal();
        const Title={
            0:["Framtidens Hållbara Lösningar: Miljöteknikens Roll i Kampen mot Klimatförändringar"],
            1:["Gröna Transformatorer: Miljöteknikens Revolution inom Avfallshantering"],
        };
        const text={
            0:["Miljöteknik omfattar en bred skala av teknologier och metoder som är utformade för att minska negativ miljöpåverkan och främja hållbarhet. En av de mest kritiska områdena inom miljöteknik är avfallshantering, där innovativa metoder används för att minska mängden avfall som hamnar på soptippar och öka återvinningen av resurser. Avancerade sorterings- och återvinningsanläggningar möjliggör återvinning av material som plast, glas, metall och papper, vilket minskar belastningen på deponier och minskar behovet av råmaterialproduktion. Vattenreningstekniker är också avgörande för att säkerställa tillgången på rent vatten för mänsklig konsumtion och ekosystemets hälsa. Genom avancerade processer som omvänd osmos, ultraviolettdesinfektion och avancerad oxidation kan föroreningar avlägsnas från vattenkällor och avloppsvatten, vilket minskar risken för vattenburna sjukdomar och miljöförorening. Förnybar energi är en annan viktig del av miljötekniken, där teknologier som solenergi, vindkraft, vattenkraft och biomassa används för att producera elektricitet utan att generera växthusgaser eller annan luftförorening. Genom att investera i förnybar energi kan samhällen minska sin koldioxidutsläpp och minska sitt beroende av fossila bränslen, vilket främjar en mer hållbar energiförsörjning och minskar risken för klimatförändringar. Hållbar stadsutveckling är också ett viktigt fokusområde för miljöteknik, där teknologier som gröna tak, permeabla ytor och energieffektiva byggnader används för att minska stadsmiljöns miljöpåverkan och förbättra invånarnas livskvalitet. Genom att integrera gröna infrastrukturlösningar kan städer minska luftföroreningar, översvämningar och värmeöeffekter samtidigt som de främjar biologisk mångfald och rekreation. Med fortsatta framsteg och innovationer förväntas miljöteknik spela en allt viktigare roll i kampen mot klimatförändringar och miljöförstöring. Genom att investera i hållbara lösningar och främja en cirkulär ekonomi kan vi forma en mer hållbar framtid för vår planet och kommande generationer."],
            1:["Avfallshantering är en av de mest påtagliga miljöutmaningarna i dagens samhälle, men tack vare framsteg inom miljöteknik har vi nu möjlighet att förändra hur vi ser på och hanterar avfall. En av de mest lovande teknikerna inom avfallshantering är avancerad återvinning, där avfall sorteras och återanvänds för att skapa nya produkter och material. Med hjälp av robotik, sensorer och automatisering kan sorteringsanläggningar identifiera och separera olika material, vilket möjliggör återvinning av metaller, glas, plast och papper på ett effektivt sätt. Förutom återvinning erbjuder miljötekniken också metoder för att omvandla organiskt avfall till användbara resurser. Biogasproduktion är en sådan metod där organiskt avfall, som matavfall och gödsel, bryts ned av mikroorganismer för att producera biogas och biogödsel. Biogas kan användas som en förnybar energikälla för att producera el och värme, medan biogödsel kan användas som ett näringsrikt gödningsmedel för jordbruket, vilket minskar behovet av kemiska gödningsmedel och minskar utsläppen av växthusgaser. En annan spännande utveckling inom avfallshantering är avfallsminskningstekniker, där teknologier används för att minska mängden avfall som genereras från början. Detta kan inkludera metoder som förpackningsdesign för att minska onödigt avfall, återanvändning av produkter och material för att förlänga deras livslängd, och kompostering av organiskt avfall för att producera näringsrik jord för trädgårdsbruk och jordbruk. Genom att investera i miljöteknik för avfallshantering kan samhällen minska sin miljöpåverkan och skapa en mer hållbar framtid. Genom att omvandla avfall till resurser och minska behovet av deponier kan vi minska vår planets belastning och skapa en cirkulär ekonomi där inget avfall går till spillo."],
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