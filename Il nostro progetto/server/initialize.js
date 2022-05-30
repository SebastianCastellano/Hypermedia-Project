export default async (models) => {
    const mediaList = [
        {   
            // 1
            url: "../images/palazzoTe-esterno1.jpg",
            alternative: "Entrance of Palazzo Te.",
            type: "i",
        },
        {
            // 2
            url: "../images/palazzoTe-esterno2.jpg",
            alternative: "Internal portico and garden view.",
            type: "i",
        },
        {
            // 3
            url: "../images/palazzoTe-esterno3.jpg",
            alternative: "Aereal view.",
            type: "i",
        },
        {
            // 4
            url: "../images/palazzoTe-giganti1.jpg",
            alternative: "The giants on the ground watch the sky with terror.",
            type: "i",
        },
        {
            // 5
            url: "../images/palazzoTe-giganti2.jpg",
            alternative: "Two giants keep the vault still. Beneath a scene of a fight.",
            type: "i",
        },
        {
            // 6
            url: "../images/palazzoTe-soleLuna1.jpg",
            alternative: "Vault of the sala del Sole e della Luna.",
            type: "i",
        },
        {
            // 7
            url: "https://www.youtube.com/embed/MrLxyBg_USQ",
            alternative: "Explanation of Sala dei Giganti.",
            type: "v",
        },
        {
            // 8
            url: "https://www.youtube.com/embed/ugEP0v59xQg",
            alternative: "Documentary over Mantova, city of masterpieces.",
            type: "v",
        },
        {
            //9
            url: "../images/gandini1.jpg",
            alternative: "Dark sand.",
            type: "i",
        },
        {
            //10
            url: "../images/OPEN-festival1.jpg",
            alternative: "OPEN Festival banner",
            type: "i",
        },
        {
            //11
            url: "../images/palazzoDucale-galleriaSpecchi.jpg",
            alternative: "Gallery of the mirrors.",
            type: "i",
        },
        {
            //12
            url: "../images/palazzoDucale-map.jpg",
            alternative: "Map of Palazzo Ducale",
            type: "i",
        },
        {
            //13
            url: "../images/palazzoDucale-camera.jpg",
            alternative: "A decorated chamber.",
            type: "i",
        },
        {
            //14
            url: "../images/palazzoDucale-cameraSposi.jpg",
            alternative: "Camera degli sposi.",
            type: "i",
        },
        {
            //15
            url: "https://www.youtube.com/embed/Su8QJpc9HHU",
            alternative: "A tour inside Palazzo Ducale",
            type: "v",
        },
        {
            //16
            url: "../images/iBronziDellaPassione1.jpg",
            alternative: "The bronzes of Michelangelo",
            type: "i",
        },
        {
            //17
            url: "../images/palazzoDucale-cameraSposi2.jpg",
            alternative: "The vault of 'Camera degli Sposi', mimicking the sky.",
            type: "i",
        },
        {
            //18
            url: "../images/piazzaVirgiliana2.jpg",
            alternative: "Virgilio statue in the middle of 'Piazza Virgiliana'",
            type: "i",
        },
        {
            //19
            url: "../images/basilicaAndrea1.jpg",
            alternative: "The facade of 'Basilica di Sant'Andrea'.",
            type: "i",
        },
        {
            //20
            url: "../images/basilicaAndrea2.jpg",
            alternative: "The central nave of 'Basilica di Sant'Andrea'.",
            type: "i",
        },
        {
            //21
            url: "../images/basilicaAndrea3.jpg",
            alternative: "The vault of 'Basilica di Sant'Andrea'",
            type: "i",
        },
        {
            //22
            url: "../images/piazzaVirgiliana1.jpg",
            alternative: "Virgilio statue in the middle of 'Piazza Virgiliana'",
            type: "i",
        },
        {
            //23
            url: "../images/piazzaDelleErbe1.jpg",
            alternative: "Piazza Delle Erbe",
            type: "i",
        },
        {
            //24
            url: "../images/piazzaDelleErbe2.jpg",
            alternative: "Piazza Delle Erbe",
            type: "i",
        },
        {
            //25
            url: "../images/iBronziDellaPassione2.jpg",
            alternative: "The bronzes of Michelangelo",
            type: "i",
        },
        {
            //26
            url: "../images/teatro-sociale.jpg",
            alternative: "Interior of Teatro Sociale",
            type: "i",
        },
        {
            //27
            url: "../images/teatro-sociale2.jpg",
            alternative: "Facade of Teatro Sociale",
            type: "i",
        },
        {
            //28
            url: "../images/teatro-bibiena.jpg",
            alternative: "Interior of Teatro Bibiena",
            type: "i",
        },
        {
            //29
            url: "../images/teatro-bibiena2.jpg",
            alternative: "Interior of Teatro Bibiena.",
            type: "i",
        },
        {
            //30
            url: "../images/teatro-bibiena3.jpg",
            alternative: "Interior of Teatro Bibiena.",
            type: "i",
        },
        {
            //31
            url: "../images/violino.jpg",
            alternative: "A violin.",
            type: "i",
        },
        {
            //32
            url: "../images/concerto-jazz.jpg",
            alternative: "A jazz concert.",
            type: "i",
        },
        {
            //33
            url: "../images/signore-arte.jpg",
            alternative: "Some portaits of ladies.",
            type: "i",
        },
        {
            //34
            url: "../images/piazzaSordello1.jpg",
            alternative: "Piazza Sordello.",
            type: "i",
        },
        {
            //35
            url: "../images/duomo1.jpg",
            alternative: "Facade of Duomo.",
            type: "i",
        },
        {
            //36
            url: "../images/torreOrologio1.jpg",
            alternative: "The clock tower.",
            type: "i",
        },
        {
            //37
            url: "../images/rotondaLorenzo1.jpg",
            alternative: "View of the Rotonda of san Lorenzo.",
            type: "i",
        },
        {
            //38
            url: "../images/casaMercante1.jpg",
            alternative: "A store of Casa del Mercante.",
            type: "i",
        },
        {
            //39
            url: "../images/loggiaPescherie.jpg",
            alternative: "Loggia delle pescherie by night.",
            type: "i",
        },
        {
            //40
            url: "../images/laghi1.jpg",
            alternative: "Mantova seen from one of its lakes.",
            type: "i",
        },
        {
            //41
            url: "../images/museoArcheo1.jpg",
            alternative: "Some pieces inside the archeological museum.",
            type: "i",
        },
        {
            //42
            url: "../images/sbrisolona1.jpg",
            alternative: "Sbrisolona cake.",
            type: "i",
        },
        {
            //43
            url: "../images/laghi2.jpg",
            alternative: "The nature near the lakes.",
            type: "i",
        },
        {
            //44
            url: "../images/tortelliZucca1.jpg",
            alternative: "Some pieces inside the archeological museum.",
            type: "i",
        },
        {
            //45
            url: "../images/concerto-jazz2.jpg",
            alternative: "A cartoon of a jazz concert.",
            type: "i",
        },
        {
            //46
            url: "../images/sbrisolona2.jpg",
            alternative: "A piece of Sbrisolona.",
            type: "i",
        },
        {
            //47
            url: "../images/virgilio1.jpg",
            alternative: "Virgilio.",
            type: "i",
        },
    ]
    const eventList = [
        {
            //1
            name: "Antonella Gandini. In-naturale",
            dateBegin: new Date(2021, 10, 7),
            dateEnd: new Date(2022, 6, 30),
            date_s: "07/10/2021 - 30/06/2022",
            location: "Palazzo Te",
            price: "Free Entry", //€
            description: "Fondazione Palazzo Te presenta l’esposizione “Antonella Gandini. In-naturale”, la rassegna raccoglie tre fotografie di grande formato dell’ultima produzione dall’artista mantovana, \
            che raffigurano gli elementi naturali, aria, acqua e terra, resi indistinguibili da una sorta di mimetismo visivo. Le immagini appaiono come ibridi linguaggi della natura. La natura, infatti, \
            rimane sempre il punto di partenza per una ricerca che sfocia nell’inconscio: “Interpretando questi paesaggi fotografici che sfidano i nostri sensi e le nostre emozioni - racconta l’artista - \
            possiamo condividere l’infinito spazio e la fugacità del tempo. Percepiamo l’energia vitale che anima l’universo il disordine accidentale o la forza creatrice dello straordinario e del sublime. \
            Entrambe ci liberano dal dover descrivere l’ovvietà della realtà per consegnarci allo stupore della visione”.",
            shortDescription: "Photographic expositions over natural elements.",
            poiId: 1,
        },
        {
            //2
            name: "OPEN Festival",
            dateBegin: new Date(2022, 6, 10),
            dateEnd: new Date(2022, 6, 12),
            date_s: "10/06/2022 - 12/06/2022",
            location: "Palazzo Te",
            price: "Free Entry",
            description: "OPEN è il festival di teatro urbano e nouveau cinque che Fondazione “Umberto Artioli” Mantova Capitale Europea dello Spettacolo organizza ogni estate a Mantova. \
            OPEN è l’acronimo di (Other Performaces EN plein air) poiché intende riportare il teatro all’aperto, dove è nato. \
            Il festival si propone di aprire il centro storico a spettacoli e performance che permettono al pubblico di vivere alcuni spazi della nostra città con la vocazione originaria della Festa del teatro: \
            in questo modo Mantova diventa un palcoscenico a cielo aperto con spettacoli fino a notte fonda fra le piazze del centro, i giardini e il Palazzo Te. \
            La presenza degli artisti, con i loro spettacoli, diventa l’occasione di una bellezza dell’intrattenimento, attraverso il quale il pubblico può rivivere il patrimonio urbano come spazio di meraviglia e di incanto. \
            Dopo la prima edizione, organizzata nel 2018, ogni anno OPEN Festival rappresenta una nuova sfida, con programmi sempre più ricchi e nuovi spazi prestigiosi a fare da cornice alle suggestive performance. \
            Durante le varie edizioni, il festival ha intrecciato le sue atmosfere con gli spazi di Piazza Mantegna,  Piazza Marconi, Palazzo Te, Loggia del Grano, Piazza Erbe e tanti altri.",
            shortDescription: "Urban theatre festival en plain air.",
            poiId: 1,
        },
        {
            //3
            name: "Michelangelo: i bronzi della Passione",
            dateBegin: new Date(2022, 3, 18),
            dateEnd: new Date(2022, 6, 15),
            date_s: "18/03/2022 - 15/06/2022",
            location: "Palazzo Ducale",
            price: "Inside the usual ticket",
            description: "Michelangelo Buonarroti è semplicemente il “divino” Michelangelo, l’archetipo degli artisti di tutti i tempi. Grande fu la sua fama, anche in vita: nonostante la sua attività si sia concentrata su Roma e Firenze, anche la Mantova dei Gonzaga dovette fare i conti con l’ineludibile influenza di quel gigante. \
            Il 22 febbraio del 1527 Federico II scriveva di essere da “molt’anni (…) amatore dello excellentissimo messer Michele Angelo” e - in un significativo ribaltamento di ruoli - senza paura di mostrarsi supplice chiedeva di ottenere una sua opera. \
            Non importava quale fosse, ne bastava una qualsiasi. \
            L’esposizione “Michelangelo: i bronzi della Passione” di Palazzo Ducale di Mantova - aperta dal 18 marzo fino al 15 giugno 2022 - vuole puntare l’attenzione su un episodio poco noto della vita del grande artista. \
            Si tratta del progetto di un “Calvario”, ovvero la rappresentazione di Cristo sul Golgota assieme ai due ladroni; il termine deriva dal nome latino della collina appena fuori dalle mura di Gerusalemme, ossia il luogo sul quale si svolse la crocifissione.",
            shortDescription: "Exposition of Michelangelo bronze statues.",
            poiId: 2,
        },
        {
            //4
            name: "A violin for Virgilio",
            dateBegin: new Date(2022, 4, 1),
            dateEnd: new Date(2022, 4, 1),
            date_s: "01/04/2022",
            location: "Piazza Virgiliana",
            price: "5€",
            description: "Fondazione 'Amici di Virgilio' presents \
            a night of culture and music. 'A violin for Virgilio' is \
            a concert thought to celebrate the importance of the Roman \
            writer for the city. It will of course be held in Piazza \
            Virgiliana. Some great names are expected to come from all \
            over the world.",
            shortDescription: "A violin concert inspired by Virgilio.",
            poiId: 5,
        },
        {
            //5
            name: "Luke Hermond: my piano life",
            dateBegin: new Date(2022, 6, 14),
            dateEnd: new Date(2022, 6, 19),
            date_s: "14/06/2022 - 19/06/2022",
            location: "Teatro Sociale",
            price: "45€",
            description: "Luke Harmond is one of the most renowned \
            piano players in the world. Therefore it is no surprise \
            that his show - only performed for six days - got quite \
            some clamour. Harmond has already confirmed that other \
            unexpected guests are on their way. Not to miss in Teatro \
            Sociale.",
            shortDescription: "Luke Hermond presents his piano skills.",
            poiId: 6,
        },
        {
            //6
            name: "Jazz concert: I Treboniani",
            dateBegin: new Date(2022, 9, 25),
            dateEnd: new Date(2022, 9, 25),
            date_s: "25/09/2022",
            location: "Piazza delle Erbe",
            price: "Gratis",
            description: "'I Treboniani' return for an incredible night in \
            Piazza delle Erbe. After some months without shows, the jazz \
            group from Mantova comes back to demonstrate what they are \
            currently up to. It is also for a good cause: the entry is free \
            but everything that will be possibly collected will go to \
            the city hospital. Not bad at all.",
            shortDescription: "'I Treboniani' in an immersive concert in the city centre.",
            poiId: 4,
        },
        {
            //7
            name: "Art Ladies",
            dateBegin: new Date(2022, 10, 2),
            dateEnd: new Date(2023, 1, 29),
            date_s: "02/10/2022 - 29/01/2023",
            location: "Teatro Sociale",
            price: "10€",
            description: "Teatro Sociale becomes a place to celebrate \
            women and their impact in the artistic field, in every \
            possible dimension. Alongside some women-written or \
            women-interpreted theatre perfomances, also other visual \
            arts pieces are collected. Portraits, paintings, first-edition \
            books, statues and much more to be discovered.",
            shortDescription: "An exposition over women in visual arts.",
            poiId: 6,
        },
        {
            //8
            name: "Salone della Sbrisolona",
            dateBegin: new Date(2022, 3, 1),
            dateEnd: new Date(2022, 9, 31),
            date_s: "01/03/2022 - 31/09/2022",
            location: "Loggia delle Pescherie",
            price: "Gratis",
            description: "The most important cake of the city takes \
            its sweet spot every sunday from March 3rd 2022 to September \
            9th 2022 near Loggia delle Pescherie. Everyone will be able \
            to have free tastes and to buy the products of the local \
            pastry chefs. Alongside the traditional versions, some \
            experimental bakers will present their own variants, \
            some of them we are sure the public will find unexpected.",
            shortDescription: "Every sunday a meeting with Mantova's cake.",
            poiId: 13,
        },
        {
            //9
            name: "Walk&Relax",
            dateBegin: new Date(2022, 11, 1),
            dateEnd: new Date(2023, 11, 1),
            date_s: "15/11/2022",
            location: "I tre laghi",
            price: "Gratis",
            description: "The lakes around Mantova offer the unique \
            possibility to detox from the fast pace of the modern life. \
            Enjoy a relaxing walk alongside the lakes and their nature. \
            The walk is thought with different lengths to fit the \
            different physical conditions, which will not be therefore \
            a problem.",
            shortDescription: "Enjoy the relaxing contact with the lakes.",
            poiId: 14,
        },
        {
            //10
            name: "Tortello Festival",
            dateBegin: new Date(2022, 10, 1),
            dateEnd: new Date(2022, 10, 31),
            date_s: "01/10/2022 - 31/10/2022",
            location: "Piazza Sordello",
            price: "Gratis",
            description: "October 2022 sees the birth of the the 1st \
            edition of 'Tortello Festival'. It is an occasion for \
            everyone to enjoy one of the most delicious Mantova's dish. \
            Not only tradition though, but also a possibility to \
            experiment with different tastes. Everyday a chef will \
            present his own edition and tell the public his personal \
            experience.",
            shortDescription: "A month to celebrate the 'Tortello alla Zucca'",
            poiId: 8,
        },
    ]
    const eventmediaList = [
        {
            eventId: 1,
            mediumId: 9,
            order: 1,
        },
        {
            eventId: 2,
            mediumId: 10,
            order: 1,
        },
        {
            eventId: 3,
            mediumId: 16,
            order: 1,
        },
        {
            eventId: 3,
            mediumId: 25,
            order: 2,
        },
        {
            eventId: 4,
            mediumId: 31,
            order: 2,
        },
        {
            eventId: 4,
            mediumId: 47,
            order: 1,
        },
        {
            eventId: 5,
            mediumId: 29,
            order: 1,
        },
        {
            eventId: 6,
            mediumId: 45,
            order: 2,
        },
        {
            eventId: 6,
            mediumId: 32,
            order: 1,
        },
        {
            eventId: 7,
            mediumId: 33,
            order: 1,
        },
        {
            eventId: 8,
            mediumId: 42,
            order: 1,
        },
        {
            eventId: 8,
            mediumId: 46,
            order: 2,
        },
        {
            eventId: 9,
            mediumId: 43,
            order: 1,
        },
        {
            eventId: 10,
            mediumId: 44,
            order: 1,
        },
    ]
    const pointOfInterestList = [
        {
            // 1
            name: "Palazzo Te",
            location: "Viale Te, 13",
            times: "mon: 13.00-18.30, tue-sun: 09.00-18.30",
            price: "15€",
            description: "Palazzo Te è una villa rinascimentale collocata nell'area suburbana di Mantova. \
            Costruito tra il 1524 e il 1534 su commissione del marchese di Mantova Federico II Gonzaga, è l'opera più celebre dell'architetto e pittore italiano Giulio Romano. \
            Il complesso è oggi sede del museo civico e dal 1990 del Centro internazionale d'arte e di cultura di Palazzo Te che organizza mostre d'arte antica e moderna e di architettura. \
            Il palazzo è un edificio a pianta quadrata con al centro un grande cortile quadrato anch'esso, un tempo decorato con un labirinto, \
            con quattro entrate sui quattro lati (Giulio Romano si ispira nell'impianto alla descrizione vitruviana della casa di abitazione: la domus romana con quattro entrate, ciascuna su uno dei quattro lati). \
            Il palazzo ha proporzioni insolite: si presenta come un largo e basso blocco, a un piano solo, la cui altezza è circa un quarto della larghezza.",
            shortDescription: "Renaissance villa, work of Giulio Romano.",
        },
        {
            // 2
            name: "Palazzo Ducale",
            location: "Piazza Sordello, 40",
            times: "tue-sun: 08.15-19.15",
            price: "15€",
            description: "Il Palazzo Ducale di Mantova, noto anche come reggia dei Gonzaga, è uno dei principali edifici storici cittadini. \
            Dal 1308 è stata la residenza ufficiale dei signori di Mantova, i Bonacolsi, e quindi la residenza principale dei Gonzaga, signori, marchesi ed infine duchi della città virgiliana. \
            Ospitava il Gonzaga dominante del tempo, sua moglie, il figlio legittimo primogenito e gli altri figli legittimi sino alla maggiore età nonché gli ospiti importanti. \
            Assunse la denominazione di Palazzo Reale durante la dominazione austriaca a partire dall'epoca di Maria Teresa d'Austria regnante. \
            Ogni duca ha voluto aggiungere un'ala per sé e per le proprie opere d'arte, il risultato è un'area di più di 35.000 m². \
            Ha più di 500 stanze e racchiude 7 giardini e 8 cortili.",
            shortDescription: "The ancient palace of Mantova dukes.",
        },
        {
            // 3
            name: "Basilica di Sant'Andrea",
            location: "Piazza Andrea Mantegna, 1",
            times: "Everyday: 8.00-12.00 / 15.00-19.00",
            price: "Free Entry",
            description: "The Basilica of Sant'Andrea is a Roman Catholic co-cathedral and minor basilica. \
            It is one of the major works of 15th-century Renaissance architecture in Northern Italy. \
            Commissioned by Ludovico III Gonzaga, the church was begun in 1472 according to designs by Leon Battista Alberti on a site occupied by a Benedictine monastery, of which the bell tower (1414) remains. \
            The building, however, was only finished 328 years later. \
            Though later changes and expansions altered Alberti's design, the church is still considered to be one of Alberti's most complete works. \
            It looms over the Piazza Mantegna.",
            shortDescription: "The biggest church in Mantova, work of Leon Battista Alberti.",
        },
        {
            // 4
            name: "Piazza delle Erbe",
            location: "Piazza delle Erbe",
            times: "Everyday (public location)",
            price: "Gratis (public location)",
            description: "Cominciò a configurarsi quando la città comunale, verso la fine del XII secolo, iniziò ad espandersi oltre il Voltone di San Pietro, \
            oltre l'antica città romana che insisteva nei luoghi allora edificati dell'attuale Piazza Sordello. \
            Con il dominio prima dei Bonacolsi e dei Gonzaga successivamente, il centro amministrativo e del potere politico si sposta sulla costruenda nuova piazza San Pietro (ora Piazza Sordello). \
            Gli edifici medievali di Piazza Erbe subirono nel corso dei secoli rimaneggiamenti e ristrutturazioni. \
            La sequenza di case che ospitavano i mercanti cittadini, furono pregevolmente abbellite da portici di stile tardo gotico e rinascimentale.",
            shortDescription: "The must-see square in Mantova.",
        },
        {
            // 5
            name: "Piazza Virgiliana",
            location: "Piazza Virgiliana",
            times: "Everyday (public location)",
            price: "Gratis (public location)",
            description: "The Piazza Virgiliana is an oblong shaped park in the center of the city. \
            It spans from a circumvailling Piazza Virgilliana street, fed from Piazza dei Filipinni by Via Virgilio, and stretching northwest towards Lago di Mezzo (part of Mincio River). \
            The park has a number of tree-lined trails, and commemorative statues, most prominent of which is a monument to Virgil with flanking fountains.",
            shortDescription: "A big green area, towered by the statue of Virgilio.",
        },
        {
            // 6
            name: "Teatro Sociale",
            location: "Piazza Felice Cavallotti, 14",
            times: "thu-sun 15:00-18:00",
            price: "2.5€",
            description: "Il Teatro Sociale di Mantova è il maggiore teatro storico situato nel Comune di Mantova; \
            teatro di tradizione, si trova nel centro storico della città ed è di proprietà della Società dei Palchettisti. \
            Venne realizzato, tra il 1817 e il 1822, dal noto architetto ticinese Luigi Canonica.",
            shortDescription: "The greatest theatre in the city centre.",
        },
        {
            // 7
            name: "Teatro Scientifico Bibiena",
            location: "Via Accademia, 47",
            times: "tue-fri: 10:00-13:00 / 15:00-18:00; sat-sun: 10:00-18:00",
            price: "3€",
            description: "Costruito tra il 1767 e il 1769, il teatro fu progettato dal parmense \
            Antonio Galli Bibiena su commissione del rettore dell'Accademia dei Timidi, \
            conte Carlo Ottavio di Colloredo, con la finalità di ospitare principalmente \
            adunanze scientifiche, ma aperto anche a recite e concerti. \
            Il teatro, non più a gradinata come quelli rinascimentali, presenta una pianta \
            a forma di campana ed è disposto su più ordini di palchetti lignei, secondo il \
            genere di struttura inventato nel Seicento e che ormai imperava. \
            Con vivacità prodigiosa pari alle risorse dell'estro, l'architetto Bibiena \
            adempì in soli due anni all'obbligo che nel 1767 aveva contratto coi Timidi: \
            ideò lo speciale teatro, ne diresse i lavori di fabbrica ed infine, con \
            abilità di pittore oltre che di architetto, affrescò personalmente gli interni \
            dei numerosi palchetti con figurazioni monocrome, anch'esse documento prezioso \
            dell'attività artistica dell'insigne maestro.",
            shortDescription: "Theatre and arts national academy.",
        },
        {
            // 8
            name: "Piazza Sordello",
            location: "Piazza Sordello",
            times: "Everyday (public location)",
            price: "Gratis (public location)",
            description: "La piazza di San Pietro, sua prima denominazione, \
            fu realizzata nel 1330 dopo la demolizione di vecchie case \
            che si trovavano disposte fra due strade parallele che \
            seguivano ancora l'antico disegno urbanistico della città romana. \
            Una via, Strada Magna univa il voltone di San Pietro con la \
            cattedrale mentre l'altra via, Strata Sanctae Mariae Matris \
            Domini, univa la chiesa che le dava il nome, alla chiesa di \
            Santa Croce, inglobata poi nel Palazzo Ducale, che si \
            affacciava sul lato destro del sagrato del Duomo. Per secoli, \
            la piazza è rimasta il centro della vita politica, mondana e \
            religiosa di Mantova.",
            shortDescription: "Square in front of Palazzo Ducale.",
        },
        {
            // 9
            name: "Duomo",
            location: "Piazza Sordello",
            times: "mon-sun: 07:15-19:00",
            price: "Gratis",
            description: "Di origine paleocristiana, ma ricostruita \
            in età medievale (probabilmente da Matilde di Canossa), \
            la chiesa, inizialmente in stile romanico (di quest'epoca \
            è ancora il campanile), venne ampliata agli inizi del XV \
            secolo sotto l'egida di Francesco I Gonzaga. \
            Il duomo venne edificato dal 1395 al 1401 su commissione \
            di Francesco IV Gonzaga e sorge sulla chiesa romanica di \
            San Pietro di cui si conservano solo alcune strutture \
            murarie e il campanile.",
            shortDescription: "The central church of the city.",
        },
        {
            // 10
            name: "Torre dell' orologio",
            location: "Piazza delle Erbe",
            times: "Tue-fri: 10:00-13:00 / 15:00-18:00; sat-sun 10:00-18:00",
            price: "3€",
            description: "La Torre dell’Orologio, di impianto rettangolare \
            e costruita nel 1472-73 su progetto di Luca Fancelli su richiesta \
            del marchese Ludovico II Gonzaga, è così detta per l’antico \
            orologio realizzato da Bartolomeo Manfredi, meccanico, matematico \
            e astrologo alla corte dei Gonzaga, noto anche come Bartolomeo \
            dell’Orologio. L’Orologio venne inaugurato nel dicembre del 1473.",
            shortDescription: "The clock tower wanted by Ludovico II Gonzaga.",
        },
        {
            // 11
            name: "Rotonda di San Lorenzo",
            location: "Piazza delle Erbe",
            times: "mon-fri: 10:00-13::0, 14:00-18:00 / sat-sun 10:00-19:00",
            price: "5€",
            description: "E' la chiesa più antica della città, \
            fondata tra la fine del XI secolo e l'inizio del XII, forse \
            per volere di Matilde di Canossa. Ispirata alla chiesa del \
            Santo Sepolcro di Gerusalemme e dedicata a san Lorenzo \
            (martirizzato a Roma nel III secolo), la rotonda è a pianta \
            centrale, con soprastante galleria. Un deambulatorio precede \
            e circonda la navata, caratterizzata da dieci colonne e un \
            piccolo abside. E' costruita in cotto, secondo la tradizione \
            lombarda del periodo, ma presenta due colonne di marmo di \
            epoca romana e pilastrini in pietra dei secoli IX-XII \
            provenienti da edifici scomparsi.",
            shortDescription: "The oldest church in Mantova.",
        },
        {
            // 12
            name: "Casa del Mercante",
            location: "Piazza delle Erbe, 26",
            times: "Everyday (public location)",
            price: "Gratis (public location)",
            description: "La costruzione su tre piani presenta una facciata\
             - al tempo ornata di piccole foglie dorate - in cotto a motivi \
             tardo gotici e orientali di gusto veneziano. \
             Il piano terra è ritmato da un portico sostenuto da colonne \
             in marmo rosso di Verona, sulle cui architravi è possibile \
             leggere le seguenti iscrizioni: (ZO) HANBONIFORT DA CONCHOREZO \
             AFAT FAR QUESTA OPERA DELANO 1455 - IOHANESBONIFORT DE \
             CONCORESIO HOC OPUS FIERI FECIT SUB ANNO DOMINI 1455.",
            shortDescription: "Mansion of Giovanni Boniforte da Concorezzo, rich mercant",
        },
        {
            // 13
            name: "Loggia delle pescherie",
            location: "Via Pescheria, 20",
            times: "Everyday (public location)",
            price: "Gratis (public location)",
            description: "Le Pescherie di Giulio Romano (o \
            Loggia di Giulio Romano) sono un edificio storico di Mantova. \
            Edificate nel 1536 su progetto dell'architetto di palazzo Te, \
            erano dedicate al commercio del pesce. \
            La costruzione era costituita da due porticati ad archi tondi nel tipico bugnato giuliesco, con attico sovrastante dove si aprono finestre rettangolari incorniciate da lesene. Le pescherie erano poste ai lati del ponte di epoca medievale che scavalcava il Rio, corso d'acqua che attraversa la città di Mantova dal lago Superiore al lago Inferiore. ",
            shortDescription: "Large area used for trading fishes.",
        },
        {
            // 14
            name: "I tre laghi",
            location: "Around the city",
            times: "Everyday (public location)",
            price: "Gratis (public location)",
            description: "Nei pressi di Mantova la vegetazione palustre \
            lascia il posto a tre grandi specchi d'acqua: i tre laghi \
            di Mantova, che avvolgono la città a semicerchio. \
            Solo il Lago Superiore mostra ancora caratteristiche palustri, \
            con ampie isole galleggianti di Ninfea, Nannufero e Fior di loto, \
            il Lago di Mezzo e il Lago Inferiore sono mantenuti nudi \
            per esigenze di navigazione. Le rive sono notevolmente \
            frequentate ed il calpestio continuo impedisce la crescita \
            di vegetazione spontanea.",
            shortDescription: "The three lakes surrounding Mantova.",
        },
        {
            // 15
            name: "Museo d' Archeologia",
            location: "Piazza Sordello, 27",
            times: "tue-sat: 8:15-19:00; sun: 14:00-19:00",
            price: "9€",
            description: "Aperto nel 1998 nel sito che fu Teatro \
            di Corte dei Gonzaga nel Cinquecento e dal 1896 \
            mercato cittadino dei bachi da seta (come si evince \
            dalla scritta attualmente ancora visibile in facciata), \
            custodisce le testimonianze di archeologia del \
            territorio mantovano e spazia dalla Preistoria alla \
            Protostoria, dal Neolitico alla romanizzazione fino \
            alle soglie del Medioevo.",
            shortDescription: "The rich archeological museum.",
        },
    ]
    const poimediaList = [
        {
            poiId: 1,
            mediumId: 1,
            order: 1,
        },
        {
            poiId: 1,
            mediumId: 2,
            order: 2,
        },
        {
            poiId: 1,
            mediumId: 3,
            order: 3,
        },
        {
            poiId: 1,
            mediumId: 4,
            order: 4,
        },
        {
            poiId: 1,
            mediumId: 5,
            order: 5,
        },
        {
            poiId: 1,
            mediumId: 6,
            order: 6,
        },
        {
            poiId: 1,
            mediumId: 7,
            order: 7,
        },
        {
            poiId: 1,
            mediumId: 8,
            order: 8,
        },
        {
            poiId: 2,
            mediumId: 11,
            order: 1,
        },
        {
            poiId: 2,
            mediumId: 12,
            order: 2,
        },
        {
            poiId: 2,
            mediumId: 13,
            order: 3,
        },
        {
            poiId: 2,
            mediumId: 14,
            order: 4,
        },
        {
            poiId: 2,
            mediumId: 15,
            order: 5,
        },
        {
            poiId: 3,
            mediumId: 19,
            order: 1,
        },
        {
            poiId: 3,
            mediumId: 20,
            order: 2,
        },
        {
            poiId: 3,
            mediumId: 21,
            order: 3,
        },
        {
            poiId: 5,
            mediumId: 22,
            order: 1,
        },
        {
            poiId: 5,
            mediumId: 18,
            order: 2,
        },
        {
            poiId: 4,
            mediumId: 23,
            order: 1,
        },
        {
            poiId: 4,
            mediumId: 24,
            order: 2,
        },
        {
            poiId: 6,
            mediumId: 26,
            order: 1,
        },
        {
            poiId: 7,
            mediumId: 29,
            order: 1,
        },
        {
            poiId: 8,
            mediumId: 34,
            order: 1,
        },
        {
            poiId: 9,
            mediumId: 35,
            order: 1,
        },
        {
            poiId: 10,
            mediumId: 36,
            order: 1,
        },
        {
            poiId: 11,
            mediumId: 37,
            order: 1,
        },
        {
            poiId: 12,
            mediumId: 38,
            order: 1,
        },
        {
            poiId: 13,
            mediumId: 39,
            order: 1,
        },
        {
            poiId: 14,
            mediumId: 40,
            order: 1,
        },
        {
            poiId: 15,
            mediumId: 41,
            order: 1,
        },
    ]
    const itineraryList = [
        {
            name: "Masterpieces",
            duration: "30 min",
            length: "2 km",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d89599.96228458753!2d9.167748772960042!3d45.42952509772028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x4786c0e4f3622533%3A0xd165a5577378fd49!2sBiblioteca%20polimi%2C%20edificio%20pk%2C%20Via%20Giovanni%20Durando%2C%208%2C%2020158%20Milano%20MI%2C%20Italia!3m2!1d45.5036822!2d9.164496699999999!4m5!1s0x4786d1f408a0e7f1%3A0x3c1fc7590826d78f!2sCentro%20Scout%20Melegnanese%2C%20Via%20Baden%20Powell%2C%205%2C%2020077%20Melegnano%20MI!3m2!1d45.355072899999996!2d9.330140499999999!4m5!1s0x4786c3df1bad32a1%3A0x94f92b587b658221!2sEsselunga%2C%20Via%20Giorgio%20Washington%2C%20Milano%20MI!3m2!1d45.4607509!2d9.1555857!4m5!1s0x4786c1aafbb8ec73%3A0x99168e9e38cee9e9!2sVia%20Varesina%2C%2066!3m2!1d45.497609399999995!2d9.1456009!5e0!3m2!1sit!2sit!4v1653318126516!5m2!1sit!2sit",
            shortDescription: "The perfect itinerary to enjoy Mantova masterpieces.",
            image: 17,
        },
        {
            name: "Following Virgilio",
            duration: "2 h",
            length: "5.4 km",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d89599.96228458753!2d9.167748772960042!3d45.42952509772028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x4786c0e4f3622533%3A0xd165a5577378fd49!2sBiblioteca%20polimi%2C%20edificio%20pk%2C%20Via%20Giovanni%20Durando%2C%208%2C%2020158%20Milano%20MI%2C%20Italia!3m2!1d45.5036822!2d9.164496699999999!4m5!1s0x4786d1f408a0e7f1%3A0x3c1fc7590826d78f!2sCentro%20Scout%20Melegnanese%2C%20Via%20Baden%20Powell%2C%205%2C%2020077%20Melegnano%20MI!3m2!1d45.355072899999996!2d9.330140499999999!4m5!1s0x4786c3df1bad32a1%3A0x94f92b587b658221!2sEsselunga%2C%20Via%20Giorgio%20Washington%2C%20Milano%20MI!3m2!1d45.4607509!2d9.1555857!4m5!1s0x4786c1aafbb8ec73%3A0x99168e9e38cee9e9!2sVia%20Varesina%2C%2066!3m2!1d45.497609399999995!2d9.1456009!5e0!3m2!1sit!2sit!4v1653318126516!5m2!1sit!2sit",
            shortDescription: "Live the city of Mantova as Virgilio did.",
            image: 18,
        },
        {
            name: "Religious Steps",
            duration: "1 h 20 min",
            length: "4.3 km",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d89599.96228458753!2d9.167748772960042!3d45.42952509772028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x4786c0e4f3622533%3A0xd165a5577378fd49!2sBiblioteca%20polimi%2C%20edificio%20pk%2C%20Via%20Giovanni%20Durando%2C%208%2C%2020158%20Milano%20MI%2C%20Italia!3m2!1d45.5036822!2d9.164496699999999!4m5!1s0x4786d1f408a0e7f1%3A0x3c1fc7590826d78f!2sCentro%20Scout%20Melegnanese%2C%20Via%20Baden%20Powell%2C%205%2C%2020077%20Melegnano%20MI!3m2!1d45.355072899999996!2d9.330140499999999!4m5!1s0x4786c3df1bad32a1%3A0x94f92b587b658221!2sEsselunga%2C%20Via%20Giorgio%20Washington%2C%20Milano%20MI!3m2!1d45.4607509!2d9.1555857!4m5!1s0x4786c1aafbb8ec73%3A0x99168e9e38cee9e9!2sVia%20Varesina%2C%2066!3m2!1d45.497609399999995!2d9.1456009!5e0!3m2!1sit!2sit!4v1653318126516!5m2!1sit!2sit",
            shortDescription: "A religious itinerary across Mantova holy sites.",
            image: 21,
        },
    ]
    const serviceList = [
        {
            type: "Pharmacies",
            name: "Farmacia Augusto",
            address: "Via Camelie 1",
            times: "24h/24",
        },
        {
            type: "Pharmacies",
            name: "Farmacia Tiberio",
            address: "Via Girasoli 2",
            times: "24h/24",
        },
        {
            type: "Supermarkets",
            name: "Essecorta",
            address: "Via Gerani 3",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "Carrethree",
            address: "Via Ortensie 4",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "Eurostill",
            address: "Via Rododendri 5",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "Conan",
            address: "Via Colza 6",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "Super",
            address: "Via Begonia 7",
            times: "24h/24 lun-ven",
        },
        {
            type: "Restaurants",
            name: "Da Andrea",
            address: "Via Dipladenie 8",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "Da Nino",
            address: "Via Margherite 9",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "Da Ugo",
            address: "Via Primule 10",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "Da Marco",
            address: "Via Gelsomini 11",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "Di Bocca Buona",
            address: "Via Glicini 12",
            times: "19-24 tue-sun",
        },
        {
            type: "Hospitals",
            name: "Sant'Ambrogio",
            address: "Via Petunie 13",
            times: "24h/24",
        },
        {
            type: "Cafè's",
            name: "Al Chicco d'Oro",
            address: "Via Sempreverdi 14",
            times: "19-24 tue-sun",
        },
        {
            type: "Bakeries",
            name: "Pasticcino",
            address: "Via Betulle 15",
            times: "9-14 / 16-20 tue-sun",
        },
    ]
    const poiitiList = [
        {
            itineraryId: 1,
            poiId: 1,
            order: 1,
        },
        {
            itineraryId: 1,
            poiId: 2,
            order: 2,
        },
        {
            itineraryId: 1,
            poiId: 4,
            order: 3,
        },
        {
            itineraryId: 3,
            poiId: 3,
            order: 1,
        },
    ]
    await models.Media.bulkCreate(mediaList)
    await models.PointOfInterest.bulkCreate(pointOfInterestList)
    await models.Event.bulkCreate(eventList)
    await models.Itinerary.bulkCreate(itineraryList)
    await models.Service.bulkCreate(serviceList)
    await models.PoiIti.bulkCreate(poiitiList)
    await models.PoiMedia.bulkCreate(poimediaList)
    await models.EventMedia.bulkCreate(eventmediaList)
}
