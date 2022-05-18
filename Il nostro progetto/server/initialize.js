export default async (models) => {
    const mediaList = [
        {   
            // 1
            url: "https://www.mantova.com/wp-content/uploads/2017/06/palazzo-te-2-850x425.jpg",
            alternative: "Ingresso di Palazzo Te.",
            type: "i",
        },
        {
            // 2
            url: "https://www.travel365.it/f/palazzo-te-veduta-del-giardino-interno-__696x0__.jpg.webp",
            alternative: "Porticato interno e veduta del giardino.",
            type: "i",
        },
        {
            // 3
            url: "https://guideturistichemantova.it/wp-content/uploads/freshizer/dc8c599b1bea38732ae22a3b1decc584_palazzo-te-drone-1-793-c-90.jpg",
            alternative: "Veduta aerea.",
            type: "i",
        },
        {
            // 4
            url: "../static/images/palazzoTe-giganti1.jpg",
            alternative: "I giganti a terra osservano con terrore il cielo.",
            type: "i",
        },
        {
            // 5
            url: "../static/images/palazzoTe-giganti2.jpg",
            alternative: "Alcuni giganti reggono la volta. Al di sotto una scena di combattimento",
            type: "i",
        },
        {
            // 6
            url: "../static/images/palazzoTe-soleLuna1.jpg",
            alternative: "Volta della sala del Sole e della Luna.",
            type: "i",
        },
        {
            // 7
            url: "https://www.youtube.com/embed/MrLxyBg_USQ",
            alternative: "Spiegazione della Sala dei Giganti.",
            type: "v",
        },
        {
            // 8
            url: "https://www.youtube.com/embed/ugEP0v59xQg",
            alternative: "Documentario su Mantova, città di capolavori.",
            type: "v",
        },
        {
            //9
            url: "https://www.centropalazzote.it/wp-content/uploads/2021/10/immagine-per-cartolina.jpg",
            alternative: "Dark sand.",
            type: "i",
        },
        {
            //10
            url: "https://www.centropalazzote.it/wp-content/uploads/2022/04/copertina-evento-OPEN-2022.jpg",
            alternative: "OPEN Festival banner",
            type: "i",
        },
        {
            //11
            url: "https://www.itinerarieluoghi.it/wp-content/uploads/2020/04/129-Galleria-degli-Specchi.-Palazzo-Ducale.jpg",
            alternative: "Gallery of the mirrors.",
            type: "i",
        },
        {
            //12
            url: "https://www.inexhibit.com/wp-content/uploads/2017/10/Palazzo-Ducale-Mantova-vista-aerea-Ducal-Palace-Mantua-aerial-.jpg",
            alternative: "Map of Palazzo Ducale",
            type: "i",
        },
        {
            //13
            url: "https://www.viaggiverdeacido.com/wp-content/uploads/2016/04/mantova-palazzo-ducale-visitare.jpg",
            alternative: "A decorated chamber.",
            type: "i",
        },
        {
            //14
            url: "https://www.mantovaducale.beniculturali.it/images/Camera_degli_Sposi_generale_f.to_A._Quattrone_low.jpg",
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
            url: "https://www.mantovaducale.beniculturali.it/images/Visual_052_low.jpg",
            alternative: "The bronzes of Michelangelo",
            type: "i",
        },
    ]
    const eventList = [
        {
            name: "Antonella Gandini. In-naturale",
            date: new Date(2021, 9, 7),
            date_s: "07/10/2021 - 30/06/2022",
            location: "Palazzo Te",
            price: "Free Entry", //€
            description: "Fondazione Palazzo Te presenta l’esposizione “Antonella Gandini. In-naturale”, la rassegna raccoglie tre fotografie di grande formato dell’ultima produzione dall’artista mantovana, \
            che raffigurano gli elementi naturali, aria, acqua e terra, resi indistinguibili da una sorta di mimetismo visivo. Le immagini appaiono come ibridi linguaggi della natura. La natura, infatti, \
            rimane sempre il punto di partenza per una ricerca che sfocia nell’inconscio: “Interpretando questi paesaggi fotografici che sfidano i nostri sensi e le nostre emozioni - racconta l’artista - \
            possiamo condividere l’infinito spazio e la fugacità del tempo. Percepiamo l’energia vitale che anima l’universo il disordine accidentale o la forza creatrice dello straordinario e del sublime. \
            Entrambe ci liberano dal dover descrivere l’ovvietà della realtà per consegnarci allo stupore della visione”. \
            Il percorso artistico di Antonella Gandini si è svolto all’insegna di una personale ricerca che l’ha portata a esplorare connessioni e strutture di linguaggi liminari tra pittura, fotografia e video arte. \
            La sua formazione all’Accademia di Belle Arti G.B. Cignaroli di Verona è stata prevalentemente indirizzata alla pittura e alle tecniche grafiche, per le quali ottiene immediati riconoscimenti: \
            Premio Nazionale Giovani Incisori Italiani (1991); Premio Internazionale Biella per l’incisione (1993). \
            Interessata agli studi filosofici si laurea all’Università di Verona con una tesi in Estetica. Partecipa al Corso Internazionale di disegno promosso dalla Fondazione Ratti e tenuto dall’artista Gerhard Ricther. \
            La pratica disegnativa accompagnerà costantemente la sua ricerca che si accosta all’esperienza plastica. \
            Dopo aver utilizzato la pittura richiamandosi a certi procedimenti surrealisti, si dedica alla fotografia utilizzando principalmente il metodo analogico. Dal 2002 allestisce numerose personali, tra cui: \
            Centro Culturale Luigi di Sarro, Roma; Centro Arte Contemporanea, Bannata (Enna); La stanza delle biciclette, Brescia; Galleria Fotografica Luigi Ghirri; Caltagirone; Galleria Carte d’arte, Catania; Tinelli di Palazzo Te, Mantova (2009). \
            Interessata ad argomenti di stretta attualità il suo libro d’artista Diario intimo, fa parte della collana Memorie d’artista (edizioni Peccolo). \
            Nel 2018 viene invitata alla Stadtische Galerie, di Rosenheim, Germania, partecipa a Bookworks, Studio Expurgamento, Londra, a Visuali italiane, Roonee Gallery, Tokyo, e nel 2019 al 70° Premio Michetti, Francavilla a Mare, Chieti. \
            Fa parte dell’associazione Donne Fotografe Italiane con la quale promuove diverse iniziative riguardanti le questioni di genere, come la recente esposizione Scolpite Palazzo Reale, Milano (2021)",
            shortDescription: "Mostra fotografica dedicata agli elementi naturali.",
            poiId: 1,
        },
        {
            name: "OPEN Festival",
            date: new Date(2022, 5, 10),
            date_s: "10/06/2022 - 12/06/2022",
            location: "Palazzo Te",
            price: "Free Entry",
            description: "OPEN è il festival di teatro urbano e nouveau cinque che Fondazione “Umberto Artioli” Mantova Capitale Europea dello Spettacolo organizza ogni estate a Mantova. \
            OPEN è l’acronimo di (Other Performaces EN plein air) poiché intende riportare il teatro all’aperto, dove è nato. \
            Il festival si propone di aprire il centro storico a spettacoli e performance che permettono al pubblico di vivere alcuni spazi della nostra città con la vocazione originaria della Festa del teatro: \
            in questo modo Mantova diventa un palcoscenico a cielo aperto con spettacoli fino a notte fonda fra le piazze del centro, i giardini e il Palazzo Te. \
            La presenza degli artisti, con i loro spettacoli, diventa l’occasione di una bellezza dell’intrattenimento, attraverso il quale il pubblico può rivivere il patrimonio urbano come spazio di meraviglia e di incanto. \
            Dopo la prima edizione, organizzata nel 2018, ogni anno OPEN Festival rappresenta una nuova sfida, con programmi sempre più ricchi e nuovi spazi prestigiosi a fare da cornice alle suggestive performance. \
            Durante le varie edizioni, il festival ha intrecciato le sue atmosfere con gli spazi di Piazza Mantegna,  Piazza Marconi, Palazzo Te, Loggia del Grano, Piazza Erbe e tanti altri. \
            Ogni anno OPEN lancia anche una Call for Artists dedicato ad artisti e compagnie emergenti, alcuni dei quali vengono selezionati per esibirsi durante il festival. \
            Inoltre, la rassegna promuove anche la tradizione e il linguaggio della commedia rinascimentale, offrendo l’opportunità, ai vincitori del concorso “I giovani e la Commedia dell’Arte”, \
            che ogni anno si conclude in una serata di gala durante la quale si esibiscono i finalisti, di esibirsi con le loro performance in una delle prestigiose location del festival. \
            Infine, il calendario di ogni edizione si completa con alcuni laboratori dedicati alle diverse generazioni, con le quali i partecipanti possono cimentarsi con le arti del circo urbano e del teatro di strada. \
            OPEN è un Festival da gustare insieme, non senza ironia e spirito critico. Che sia un Festival davvero per tutti.",
            shortDescription: "Festival di teatro urbano all'aperto.",
            poiId: 1,
        },
        {
            name: "Michelangelo: i bronzi della Passione",
            date: new Date(2022, 2, 18),
            date_s: "18/03/2022 - 15/06/2022",
            location: "Palazzo Ducale",
            price: "Inside the usual ticket",
            description: "Michelangelo Buonarroti è semplicemente il “divino” Michelangelo, l’archetipo degli artisti di tutti i tempi. Grande fu la sua fama, anche in vita: nonostante la sua attività si sia concentrata su Roma e Firenze, anche la Mantova dei Gonzaga dovette fare i conti con l’ineludibile influenza di quel gigante. \
            Il 22 febbraio del 1527 Federico II scriveva di essere da “molt’anni (…) amatore dello excellentissimo messer Michele Angelo” e - in un significativo ribaltamento di ruoli - senza paura di mostrarsi supplice chiedeva di ottenere una sua opera. \
            Non importava quale fosse, ne bastava una qualsiasi. \
            L’esposizione “Michelangelo: i bronzi della Passione” di Palazzo Ducale di Mantova - aperta dal 18 marzo fino al 15 giugno 2022 - vuole puntare l’attenzione su un episodio poco noto della vita del grande artista. \
            Si tratta del progetto di un “Calvario”, ovvero la rappresentazione di Cristo sul Golgota assieme ai due ladroni; il termine deriva dal nome latino della collina appena fuori dalle mura di Gerusalemme, ossia il luogo sul quale si svolse la crocifissione. \
            Di questo progetto abbiamo testimonianza dell’esistenza di modelli di studio - in cera o terracotta - transitati a Mantova nel 1582, come attesta una scritta riportata su due disegni conservati uno a Budapest (Szépművészeti Múzeum) e l’altro già nella Rugby School Art Museum (e poi in asta a Londra, presso Christie’s). \
            Questi modelli, evidentemente oggetto di studio e attenzione nel tardo Cinquecento mantovano, sono alla base dei bronzi realizzati da un anonimo scultore lombardo e conservati presso le Raccolte di Arte Applicata del Castello Sforzesco a Milano. \
            Le tre sculture sono il fulcro della mostra di Palazzo Ducale e vengono esposte lungo il percorso di visita di Corte Vecchia in un allestimento inedito nella cappella dell’Appartamento Ducale e con un apparato di approfondimento dispiegato nella camera di Giove e Giunone. \
            L’intento è raccontare al pubblico la vicenda di quei modelli perduti e del relativo progetto incompiuto a opera del maestro toscano. I tre magnifici bronzi milanesi, pur non essendo di mano di Michelangelo ma di un suo abile imitatore, costituiscono l’esito a noi più vicino della sua ricerca figurativa sul tema del Calvario. \
            Cristo crocifisso è al centro e ai suoi lati sono i due ladroni, alla nostra sinistra il buon ladrone e a destra il cattivo. I nomi di questi ultimi - rispettivamente Disma e Gesta - compaiono solo nel Vangelo apocrifo di Nicodemo. \
            La loro vicenda, ripresa in numerosi testi dal Medioevo e per tutto il Rinascimento, si lega al tema della Salvezza e del libero arbitrio: Disma si pente, comprendendo la natura divina di Cristo, ed è raffigurato con lo sguardo rivolto al Salvatore; al contrario, Gesta rifiuta la salvezza offerta da Gesù e distoglie lo sguardo, volgendolo nella direzione opposta. \
            Il gruppo fu eseguito negli ultimi decenni del Cinquecento in area lombarda e doveva probabilmente essere destinato alla devozione privata, in una cappella all’interno di un palazzo o di un edificio religioso. \
            Oltre al gruppo del Castello Sforzesco esposto in mostra e appartenuto all’inizio dell’Ottocento all’artista neoclassico Giuseppe Bossi, sono note altre due versioni in bronzo raffiguranti lo stesso tema. \
            Il gruppo più celebre e fedele al pensiero di Michelangelo, si conserva al Metropolitan Museum of Art di New York; alla fine dell’Ottocento, era proprietà del celebre antiquario fiorentino Stefano Bardini. \
            L’altro, già seicentesco, è nel Dommuseum di Hildesheim ed è completato dalle figure dei tre dolenti - la Madonna, la Maddalena e San Giovanni Evangelista. Le due versioni più importanti - Milano e New York - differiscono tra di loro per alcuni dettagli, soprattutto nella figura di Cristo, e mescolano studi diversi dello stesso Michelangelo. \
            “Questa mostra - afferma Stefano L’Occaso, Direttore di Palazzo Ducale di Mantova – affronta un singolo progetto michelangiolesco, legato a un Calvario, del quale ci sono tracce a Mantova nel 1582, quando l’artista era già morto, e i cui riflessi si colgono, in un labirintico gioco di specchi (tra copie e derivazioni, citazioni dissimulate e variazioni), in questa e numerose altre città. \
            Certamente un argomento così profondo, come quello della Salvezza, non poteva non toccare la sensibilità e il cuore di un artista di sincera e profonda religiosità, quale fu Michelangelo. Con questo piccolo ma prezioso tassello espositivo confidiamo di illuminare uno dei molteplici aspetti della straordinaria vitalità artistica della città di Mantova nel Cinquecento”.",
            shortDescription: "Un'esposizione di bronzi di Michelangelo.",
            poiId: 2,
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
            shortDescription: "Villa rinascimentale opera di Giulio Romano.",
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
            shortDescription: "Antica residenza dei duchi di Mantova.",
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
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "The perfect itinerary to enjoy Mantova masterpieces.",
        },
        {
            name: "Following Virgilio",
            duration: "2 h",
            length: "5.4 km",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "Live the city of Mantova as Virgilio did.",
        },
        {
            name: "Religious Steps",
            duration: "1 h 20 min",
            length: "4.3 km",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "A religious itinerary across Mantova holy sites.",
        },
    ]
    const serviceList = [
        {
            type: "Pharmacies",
            name: "NamePharmacy1",
            address: "address1",
            times: "24h/24",
        },
        {
            type: "Pharmacies",
            name: "NamePharmacy2",
            address: "address2",
            times: "24h/24",
        },
        {
            type: "Supermarkets",
            name: "NameSupermarket1",
            address: "address1",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "NameSupermarket2",
            address: "address2",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "NameSupermarket3",
            address: "address3",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "NameSupermarket4",
            address: "address4",
            times: "24h/24 lun-ven",
        },
        {
            type: "Supermarkets",
            name: "NameSupermarket5",
            address: "address5",
            times: "24h/24 lun-ven",
        },
        {
            type: "Restaurants",
            name: "NameRestaurant1",
            address: "address1",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "NameRestaurant2",
            address: "address2",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "NameRestaurant3",
            address: "address3",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "NameRestaurant4",
            address: "address4",
            times: "19-24 tue-sun",
        },
        {
            type: "Restaurants",
            name: "NameRestaurant5",
            address: "address5",
            times: "19-24 tue-sun",
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
