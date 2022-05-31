const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    const Media = database.define("media", {
        url: DataTypes.STRING,
        alternative: DataTypes.STRING,
        type: DataTypes.STRING,
    })

    const Event = database.define("event", {
        name: DataTypes.STRING,
        dateBegin: DataTypes.DATE,
        dateEnd: DataTypes.DATE,
        date_s: DataTypes.STRING,
        location: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.TEXT,
        shortDescription: DataTypes.TEXT,
    })

    const EventMedia = database.define('eventmedia', {
        order: DataTypes.INTEGER
      }, { timestamps: false });
      Event.belongsToMany(Media, { through: 'eventmedia' });
      Media.belongsToMany(Event, { through: 'eventmedia' });

    const PointOfInterest = database.define("poi", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        times: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.TEXT,
        shortDescription: DataTypes.TEXT,
    })

    const PoiMedia = database.define('poimedia', {
        order: DataTypes.INTEGER
      }, { timestamps: false });
      PointOfInterest.belongsToMany(Media, { through: 'poimedia' });
      Media.belongsToMany(PointOfInterest, { through: 'poimedia' });

    const Itinerary = database.define("itinerary", {
        name: DataTypes.STRING,
        duration: DataTypes.STRING,
        length: DataTypes.STRING,
        description: DataTypes.TEXT,
        map: DataTypes.TEXT,
        shortDescription: DataTypes.TEXT,
        image: DataTypes.INTEGER,
    })
   
    const PoiIti = database.define('poiiti', {
        order: DataTypes.INTEGER
      }, { timestamps: false });
      Itinerary.belongsToMany(PointOfInterest, { through: 'poiiti' });
      PointOfInterest.belongsToMany(Itinerary, { through: 'poiiti' });

    const Service = database.define("service", {
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        times: DataTypes.STRING,
    })

    PointOfInterest.hasMany(Event)
    Event.belongsTo(PointOfInterest)

    await database.sync({ force: true })
    return {
        Media, Event, PointOfInterest, Itinerary, Service, PoiIti, EventMedia, PoiMedia
    }
}

const pageContentObject = {
    index: {
        title: "Mantova",
        image: "https://guideturistichemantova.it/wp-content/uploads/freshizer/223f204f831a424ec0e13a4ffa807afe_la-citta-di-mantova-793-446-c-90.jpg",
        shortOverview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        history: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        whyVisitThisTown: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        photoLibrary: {
            image1: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
            image2: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
            image3: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
            image4: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
            image5: "https://fs.i3lab.group/hypermedia/images/index.jpeg"
        }
    },
    aboutMantova: {
        title: ["Title1","Title2","Title3","Title4","Title5","Title6"],
        image: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/220px-Gatto_europeo4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/220px-Gatto_europeo4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/220px-Gatto_europeo4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/220px-Gatto_europeo4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/220px-Gatto_europeo4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/220px-Gatto_europeo4.jpg",
        ],
        alternative: ["Alternative1","Alternative2","Alternative3","Alternative4","Alternative5","Alternative6"],
        text: ["Text1","Text2","Text3"],
    }
}

async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    // This api is to obtain some useful info x pages index and aboutMantova
    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    // This api is used to obtain useful information used in a page of topic event:
    // the info of a specific event, the info of the associated point of interest (where the event takes place),
    // the info about the previous and next event
    app.get('/eventAndAssociatedPointOfInterest/:id', async (req, res) => {
        const eventId = +req.params.id // id of the event you are interested in
        const findingSpecificEvent = await models.Event.findOne({ where: { id: eventId } }) // found the specific event
        var tempEventMedia = await models.EventMedia.findAll()
        tempEventMedia = tempEventMedia.filter(el => el.eventId == eventId)
        tempEventMedia.sort(function (a, b) {
            return a.order - b.order;
        })
        var eventRelatedMediaList = []
        for (const el of tempEventMedia){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            eventRelatedMediaList.push(temp2) // array relatedMediaList is filled with images and video related to the event
        }
        const resultEvent = {
            name: findingSpecificEvent.name,
            dateBegin: findingSpecificEvent.dateBegin.toLocaleDateString(),
            dateEnd: findingSpecificEvent.dateEnd.toLocaleDateString(),
            date_s: findingSpecificEvent.date_s,
            location: findingSpecificEvent.location,
            price: findingSpecificEvent.price,
            description: findingSpecificEvent.description,
            imagesUrl: eventRelatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: eventRelatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: eventRelatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: eventRelatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: findingSpecificEvent.shortDescription,
            id: findingSpecificEvent.id,
        } // this is the resultEvent, the first result obtained by this api
        const pointOfInterestId = findingSpecificEvent.poiId // the id of the related point of interest where the event takes place
        const result2 = await models.PointOfInterest.findOne({ where: { id: pointOfInterestId } }) // found the specefic point of interest
        var tempPointOfInterest = await models.PoiMedia.findAll()
        tempPointOfInterest = tempPointOfInterest.filter(el => el.poiId == pointOfInterestId)
        tempPointOfInterest.sort(function (a, b) {
            return a.order - b.order;
        })
        var PointOfInterestRelatedMediaList = []
        for (const el of tempPointOfInterest){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            PointOfInterestRelatedMediaList.push(temp2) // array PointOfInterestRelatedMediaList is filled with images and video related to the point of interest (relaterd itsself to the event)
        }
        const resultAssociatedPointOfInterest = {
            name: result2.name,
            location: result2.location,
            times: result2.times,
            price: result2.price,
            description: result2.description,
            imagesUrl: PointOfInterestRelatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: PointOfInterestRelatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: PointOfInterestRelatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: PointOfInterestRelatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: result2.shortDescription,
            id: result2.id,
        } // this is the resultAssociatedPointOfInterest, the second result obtained by this api
        const idThisEvent = eventId
        var allEventList = await models.Event.findAll() // now we are going to find witch is the previous and the next event
        const allEventListEssentialInfo = []
        for (const singleEvent of allEventList) {
            allEventListEssentialInfo.push({
                realDateLocalVar: singleEvent.dateBegin,
                id: singleEvent.id,
                name: singleEvent.name,
            })
        }
        allEventListEssentialInfo.sort(function (a, b) {
            return a.realDateLocalVar - b.realDateLocalVar;
        }) // now the array allEventListEssentialInfo contains all event essential info reordered by date
        var findIndex = 0
        var found = false
        for (const singleEvent of allEventListEssentialInfo){
            if (singleEvent.id == idThisEvent){
                found = true
            }
            if(found == false){
                findIndex = findIndex + 1
            }
        }
        var idPreviousEvent = -1
        var namePreviousEvent = ""
        if(findIndex > 0){
            idPreviousEvent = allEventListEssentialInfo[findIndex - 1].id
            namePreviousEvent = allEventListEssentialInfo[findIndex - 1].name
        }
        var idNextEvent = -1
        var nameNextEvent = ""
        if(findIndex < allEventListEssentialInfo.length - 1){
            idNextEvent = allEventListEssentialInfo[findIndex + 1].id
            nameNextEvent = allEventListEssentialInfo[findIndex + 1].name
        } // now we have found ids and names of previous and next events (-1 in case does not exists)
        const result = [resultEvent, resultAssociatedPointOfInterest, idPreviousEvent, idNextEvent, namePreviousEvent, nameNextEvent]
        return res.json(result)
    })

    // This api is used to obtain useful information used in a page of topic point of interest:
    // the info of a specific point of interest, the info of the associated events (events witch take place i that point of interest),
    // the info about the itineraries involving that point of interest
    app.get('/pointOfInterestAndAssociatedEventsAndAssociatedItineraries/:id', async (req, res) => {
        const pointOfInterestId = +req.params.id // id of the point of interest you are interested in
        const findingSpecificPointOfInterest = await models.PointOfInterest.findOne({ where: { id: pointOfInterestId } }) // found the specific point of interest
        var tempPointOfInterest = await models.PoiMedia.findAll()
        tempPointOfInterest = tempPointOfInterest.filter(el => el.poiId == pointOfInterestId)
        tempPointOfInterest.sort(function (a, b) {
            return a.order - b.order;
        })
        var pointOfInterestRelatedMediaList = []
        for (const el of tempPointOfInterest){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            pointOfInterestRelatedMediaList.push(temp2) // array pointOfInterestRelatedMediaList is filled with images and video related to the point of interest
        }
        const resultPointOfInterest = {
            name: findingSpecificPointOfInterest.name,
            location: findingSpecificPointOfInterest.location,
            times: findingSpecificPointOfInterest.times,
            price: findingSpecificPointOfInterest.price,
            description: findingSpecificPointOfInterest.description,
            imagesUrl: pointOfInterestRelatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: pointOfInterestRelatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: pointOfInterestRelatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: pointOfInterestRelatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: findingSpecificPointOfInterest.shortDescription,
            id: findingSpecificPointOfInterest.id,
        } // this is the resultPointOfInterest, the first result obtained by this api
        const allEventsList = await models.Event.findAll()
        const eventsRelatedToThatPoi = allEventsList.filter(el => el.poiId == pointOfInterestId) // events related to that point of interest
        var resultAssociatedEvents = []
        for (const singleEvent of eventsRelatedToThatPoi){
            var tempEvent = await models.EventMedia.findAll()
            tempEvent = tempEvent.filter(el => el.eventId == singleEvent.id)
            tempEvent.sort(function (a, b) {
                return a.order - b.order;
            })
            var eventRelatedMediaList = []
            for (const el of tempEvent){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                eventRelatedMediaList.push(temp2) // array eventRelatedMediaList is filled with images and video related to every event related to the initial point of interest
            }
            resultAssociatedEvents.push({
                name: singleEvent.name,
                dateBegin: singleEvent.dateBegin.toLocaleDateString(),
                dateEnd: singleEvent.dateEnd.toLocaleDateString(),
                date_s: singleEvent.date_s,
                location: singleEvent.location,
                price: singleEvent.price,
                description: singleEvent.description,
                imagesUrl: eventRelatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: eventRelatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: eventRelatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: eventRelatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: singleEvent.shortDescription,
                id: singleEvent.id,
            })
        } // this is resultAssociatedEvents, the second result obtained by this api
        var tempPoiIti = await models.PoiIti.findAll() // now we are going to find itineraries involving the point of interest
        tempPoiIti = tempPoiIti.filter(el => el.poiId == pointOfInterestId)
        var associatedItineraryList = []
        for (const el of tempPoiIti){
            const specificItinerary = await models.Itinerary.findOne({ where: { id: el.itineraryId } })
            associatedItineraryList.push(specificItinerary)
        } // array associatedItineraryList is filled with itineraries associated to the initial point of interest
        var resultItinerariesInvolvingPoi = []
        for (const el of associatedItineraryList){ // for each itinerary associated to the initial point of interest
            const associatedImage = await models.Media.findOne({ where: { id: el.image } }) // The image of the specific itinerary
            resultItinerariesInvolvingPoi.push({
                id: el.id,
                name: el.name,
                duration: el.duration,
                length: el.length,
                description: el.description,
                map: el.map,
                shortDescription: el.shortDescription,
                imageUrl: associatedImage.url,
                imageAlternative: associatedImage.alternative,
            })
        } // this is resultItinerariesInvolvingPoi, the second result obtained by this api
        const result = [resultPointOfInterest, resultAssociatedEvents, resultItinerariesInvolvingPoi]
        return res.json(result)
    })

    // This api is used to obtain useful information used in a page of topic point of itinerary:
    // the info of a specific itinerary and the info of the related points of interest
    app.get('/itineraryAndAssociatedPointOfInterest/:id', async (req, res) => {
        const itineraryId = +req.params.id // id of the itinerary you are interested in
        const findSpecificItinerary = await models.Itinerary.findOne({ where: { id: itineraryId } })
        const associatedImage = await models.Media.findOne({ where: { id: findSpecificItinerary.image } }) // The image of the itinerary
        const resultItinerary = {
            id: findSpecificItinerary.id,
            name: findSpecificItinerary.name,
            duration: findSpecificItinerary.duration,
            length: findSpecificItinerary.length,
            description: findSpecificItinerary.description,
            map: findSpecificItinerary.map,
            shortDescription: findSpecificItinerary.shortDescription,
            imageUrl: associatedImage.url,
            imageAlternative: associatedImage.alternative,
        } // this is the resultItinerary, the first result obtained by this api
        var tempPoiIti = await models.PoiIti.findAll() // now we are going to find the points of interest involving this itinerary
        tempPoiIti = tempPoiIti.filter(el => el.itineraryId == itineraryId) // filtering points of interest
        tempPoiIti.sort(function (a, b) { // points of interests are ordered
            return a.order - b.order;
        })
        var resultPointsOfInterest = [] // this array will be filled with the result of points of interest
        for (const singlePointOfInterest of tempPoiIti){ // for each effective point of interest
            const foundPointOfInterest = await models.PointOfInterest.findOne({ where: { id: singlePointOfInterest.poiId } })
            var relatedMediaPointOfInterest = await models.PoiMedia.findAll()
            relatedMediaPointOfInterest = relatedMediaPointOfInterest.filter(el => el.poiId == singlePointOfInterest.poiId)
            relatedMediaPointOfInterest.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaList = []
            for (const el of relatedMediaPointOfInterest){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                relatedMediaList.push(temp2)
            } // array relatedMediaList is filled with images and video related to the point of interest (for each point of interest)
            resultPointsOfInterest.push({
                name: foundPointOfInterest.name,
                location: foundPointOfInterest.location,
                times: foundPointOfInterest.times,
                price: foundPointOfInterest.price,
                description: foundPointOfInterest.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: foundPointOfInterest.shortDescription,
                id: foundPointOfInterest.id,
            }) // this is the resultPointsOfInterest, the second result obtained by this api
        }
        const result = [resultItinerary, resultPointsOfInterest]
        return res.json(result)
    })

    // This api is used to obtain the list of services of a type
    app.get('/service/:type', async (req, res) => {
        const type = +req.params.type
        const result = await models.Service.findOne({ where: { id: type } })
        return res.json(result)
    })

    // This api is used to obtain the list of events (eventually filtered by season)
    app.get("/events/:season", async (req, res) => {
        const allEvents = await models.Event.findAll()
        const filteredEvents = [] // this array will be filled events
        for (const singleEvent of allEvents) { // for each event
            var relatedMediaEvent = await models.EventMedia.findAll()
            relatedMediaEvent = relatedMediaEvent.filter(el => el.eventId == singleEvent.id)
            relatedMediaEvent.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaList = []
            for (const el of relatedMediaEvent){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                relatedMediaList.push(temp2)
            } // array relatedMediaList is filled with images and video related to event
            filteredEvents.push({
                name: singleEvent.name,
                realDateLocalVar: singleEvent.dateBegin,
                dateBegin: singleEvent.dateBegin.toLocaleDateString(),
                dateEnd: singleEvent.dateEnd.toLocaleDateString(),
                date_s: singleEvent.date_s,
                location: singleEvent.location,
                price: singleEvent.price,
                description: singleEvent.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: singleEvent.shortDescription,
                id: singleEvent.id,
            }) // array filteredEvents is filled with all events (and then will be filtered in case we apply a filer for season)
        }
        filteredEvents.sort(function (a, b) {
            return a.realDateLocalVar - b.realDateLocalVar;
        }) // event are ordered by date
        if(req.params.season == "winter"){
            return res.json(filteredEvents.filter(x => (parseInt(x.dateBegin.split("/")[1]) >= 10 ||  parseInt(x.dateBegin.split("/")[1])<=3) || (parseInt(x.dateEnd.split("/")[1]) >= 10 ||  parseInt(x.dateEnd.split("/")[1])<=3)))
        }else if(req.params.season == "summer"){
            return res.json(filteredEvents.filter(x => (parseInt(x.dateBegin.split("/")[1]) >= 4 &&  parseInt(x.dateBegin.split("/")[1])<=9) || (parseInt(x.dateEnd.split("/")[1]) >= 4 &&  parseInt(x.dateEnd.split("/")[1])<=9)))
        }else if(req.params.season == "all"){
            return res.json(filteredEvents)
        }
    })

    // This api is used to obtain the list of points of interest
    app.get("/pointOfInterest", async (req, res) => {
        const allPointsOfInterest = await models.PointOfInterest.findAll()
        const resultAllPointsOfInterest = []
        for (const singlePointOfInterest of allPointsOfInterest) {
            var relatedMediaPointOfinterest = await models.PoiMedia.findAll()
            relatedMediaPointOfinterest = relatedMediaPointOfinterest.filter(el => el.poiId == singlePointOfInterest.id)
            relatedMediaPointOfinterest.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaList = []
            for (const el of relatedMediaPointOfinterest){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                relatedMediaList.push(temp2)
            } // array relatedMediaList is filled with images and video related to point of interest
            resultAllPointsOfInterest.push({
                name: singlePointOfInterest.name,
                location: singlePointOfInterest.location,
                times: singlePointOfInterest.times,
                price: singlePointOfInterest.price,
                description: singlePointOfInterest.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: singlePointOfInterest.shortDescription,
                id: singlePointOfInterest.id,
            }) // resultAllPointsOfInterest is the final array with all points of interest
        }
        return res.json(resultAllPointsOfInterest)
    })

    // This api is used to obtain the list of all itineraries
    app.get("/itineraries", async (req, res) => {
        const allItineraries = await models.Itinerary.findAll()
        const resultItineraries = []
        for (const singleItinerary of allItineraries) {
            const associatedImage = await models.Media.findOne({ where: { id: singleItinerary.image } }) // The image of the itinerary
            resultItineraries.push({
                id: singleItinerary.id,
                name: singleItinerary.name,
                duration: singleItinerary.duration,
                length: singleItinerary.length,
                description: singleItinerary.description,
                map: singleItinerary.map,
                shortDescription: singleItinerary.shortDescription,
                imageUrl: associatedImage.url,
                imageAlternative: associatedImage.alternative,
            })
        } // resultItineraries is the final array with all itineraries
        return res.json(resultItineraries)
    })

    // This api is used to obtain the list of all kind of services
    app.get("/services", async (req, res) => {
        const allServices = await models.Service.findAll()
        const resultServices = []
        for (const singleService of allServices) {
            var addElement = true
            for (const el of resultServices) { // checking if a new kind of service isn't been already added
                if (el.type == singleService.type)
                    addElement = false;
                if (!addElement)
                    break
            }
            if (addElement) {
                resultServices.push({ // array resultServices is filled with new kind of services
                    type: singleService.type,
                })
            }
        }
        return res.json(resultServices) // resultServices is the final array with all kind of services
    })

    // This api is used to obtain the list of services of a certain type
    app.get("/services/:type", async (req, res) => {
        const allServices = await models.Service.findAll()
        const filteredServices = []
        for (const element of allServices) {
            if (element.type == req.params.type) {
                filteredServices.push({
                    type: element.type,
                    name: element.name,
                    address: element.address,
                    times: element.times,
                }) // filteredServices is the final array with the required services
            }
        }
        return res.json(filteredServices)
    })
}

runMainApi()

export default app
