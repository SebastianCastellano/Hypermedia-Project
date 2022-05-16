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
        date: DataTypes.DATE,
        location: DataTypes.STRING,
        price: DataTypes.INTEGER,
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
        price: DataTypes.INTEGER,
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
        description: DataTypes.STRING,
        map: DataTypes.STRING,
        shortDescription: DataTypes.STRING,
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
}

async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/event/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id } })
        var temp = await models.EventMedia.findAll()
        temp = temp.filter(el => el.eventId == id)
        temp.sort(function (a, b) {
            return a.order - b.order;
        })
        var relatedMediaList = []
        for (const el of temp){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            relatedMediaList.push(temp2)
        }
        return res.json({
            name: result.name,
            date: result.date.toLocaleDateString(),
            location: result.location,
            price: result.price,
            description: result.description,
            imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: result.shortDescription,
            id: result.id,
        })
    })

    app.get('/eventAndAssociatedPointOfInterest/:id', async (req, res) => {
        const id1 = +req.params.id
        const result1 = await models.Event.findOne({ where: { id: id1 } })
        var temp = await models.EventMedia.findAll()
        temp = temp.filter(el => el.eventId == id1)
        temp.sort(function (a, b) {
            return a.order - b.order;
        })
        var relatedMediaList = []
        for (const el of temp){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            relatedMediaList.push(temp2)
        }
        const result1Ver = {
            name: result1.name,
            date: result1.date.toLocaleDateString(),
            location: result1.location,
            price: result1.price,
            description: result1.description,
            imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: result1.shortDescription,
            id: result1.id,
        }
        const id2 = result1.poiId
        const result2 = await models.PointOfInterest.findOne({ where: { id: id2 } })
        var tempi = await models.PoiMedia.findAll()
        tempi = tempi.filter(el => el.poiId == id2)
        tempi.sort(function (a, b) {
            return a.order - b.order;
        })
        var relatedMediaListi = []
        for (const el of tempi){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            relatedMediaListi.push(temp2)
        }
        const result1Ve2 = {
            name: result2.name,
            location: result2.location,
            times: result2.times,
            price: result2.price,
            description: result2.description,
            imagesUrl: relatedMediaListi.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: relatedMediaListi.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: relatedMediaListi.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: relatedMediaListi.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: result2.shortDescription,
            id: result2.id,
        }
        const result = [result1Ver, result1Ve2]
        return res.json(result)
    })

    app.get('/pointOfInterest/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.PointOfInterest.findOne({ where: { id } })
        var temp = await models.PoiMedia.findAll()
        temp = temp.filter(el => el.poiId == id)
        temp.sort(function (a, b) {
            return a.order - b.order;
        })
        var relatedMediaList = []
        for (const el of temp){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            relatedMediaList.push(temp2)
        }
        return res.json({
            name: result.name,
            location: result.location,
            times: result.times,
            price: result.price,
            description: result.description,
            imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: result.shortDescription,
            id: result.id,
        })
    })

    app.get('/pointOfInterestAndAssociatedEventsAndAssociatedItineraries/:id', async (req, res) => {
        const id1 = +req.params.id
        const result1 = await models.PointOfInterest.findOne({ where: { id: id1 } })
        var temp = await models.PoiMedia.findAll()
        temp = temp.filter(el => el.poiId == id1)
        temp.sort(function (a, b) {
            return a.order - b.order;
        })
        var relatedMediaList = []
        for (const el of temp){
            const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
            relatedMediaList.push(temp2)
        }
        const result1Ver = {
            name: result1.name,
            location: result1.location,
            times: result1.times,
            price: result1.price,
            description: result1.description,
            imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
            imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
            videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
            videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
            shortDescription: result1.shortDescription,
            id: result1.id,
        }
        const result2temp = await models.Event.findAll()
        const result2 = result2temp.filter(el => el.poiId == id1)
        const result2Ver = []
        for (const eee of result2){
            var tempi = await models.EventMedia.findAll()
            tempi = tempi.filter(el => el.EventId == eee.id)
            tempi.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaListi = []
            for (const el of tempi){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                relatedMediaListi.push(temp2)
            }
            result2Ver.push({
                name: eee.name,
                date: eee.date.toLocaleDateString(),
                location: eee.location,
                price: eee.price,
                description: eee.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: eee.shortDescription,
                id: eee.id,
            })
        }
        var result3Temp = await models.PoiIti.findAll()
        result3Temp = result3Temp.filter(el => el.poiId == id1)
        var result3 = []
        for (const el of result3Temp){
            const temp = await models.Itinerary.findOne({ where: { id: el.itineraryId } })
            result3.push(temp)
        }
        const result = [result1Ver, result2Ver, result3]
        return res.json(result)
    })

    app.get('/itinerary/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({ where: { id } })
        return res.json(result)
    })

    app.get('/itineraryAndAssociatedPointOfInterest/:id', async (req, res) => {
        const id1 = +req.params.id
        const result1 = await models.Itinerary.findOne({ where: { id: id1 } })
        var result2Temp = await models.PoiIti.findAll()
        result2Temp = result2Temp.filter(el => el.itineraryId == id1)
        result2Temp.sort(function (a, b) {
            return a.order - b.order;
        })
        var result2 = []
        for (const el of result2Temp){
            const tempi = await models.PointOfInterest.findOne({ where: { id: el.poiId } })
            var temp = await models.PoiMedia.findAll()
            temp = temp.filter(elx => elx.poiId == el.poiId)
            temp.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaList = []
            for (const elx of temp){
                const temp2 = await models.Media.findOne({ where: { id: elx.mediumId } })
                relatedMediaList.push(temp2)
            }
            result2.push({
                name: tempi.name,
                location: tempi.location,
                times: tempi.times,
                price: tempi.price,
                description: tempi.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: tempi.shortDescription,
                id: tempi.id,
            })
        }
        const result = [result1, result2]
        return res.json(result)
    })

    app.get('/service/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Service.findOne({ where: { id } })
        return res.json(result)
    })

    app.get("/events", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            var temp = await models.EventMedia.findAll()
            temp = temp.filter(el => el.eventId == element.id)
            temp.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaList = []
            for (const el of temp){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                relatedMediaList.push(temp2)
            }
            filtered.push({
                name: element.name,
                date: element.date.toLocaleDateString(),
                location: element.location,
                price: element.price,
                description: element.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: element.shortDescription,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get("/pointOfInterest", async (req, res) => {
        const result = await models.PointOfInterest.findAll()
        const filtered = []
        for (const element of result) {
            var temp = await models.PoiMedia.findAll()
            temp = temp.filter(el => el.poiId == element.id)
            temp.sort(function (a, b) {
                return a.order - b.order;
            })
            var relatedMediaList = []
            for (const el of temp){
                const temp2 = await models.Media.findOne({ where: { id: el.mediumId } })
                relatedMediaList.push(temp2)
            }
            filtered.push({
                name: element.name,
                location: element.location,
                times: element.times,
                price: element.price,
                description: element.description,
                imagesUrl: relatedMediaList.filter(x => x.type == "i").map(x => x.url),
                imagesAlternative: relatedMediaList.filter(x => x.type == "i").map(x => x.alternative),
                videosUrl: relatedMediaList.filter(x => x.type == "v").map(x => x.url),
                videosAlternative: relatedMediaList.filter(x => x.type == "v").map(x => x.alternative),
                shortDescription: element.shortDescription,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get("/itineraries", async (req, res) => {
        const result = await models.Itinerary.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                duration: element.duration,
                length: element.length,
                description: element.description,
                map: element.map,
                shortDescription: element.shortDescription,
            })
        }
        return res.json(filtered)
    })

    app.get("/services", async (req, res) => {
        const result = await models.Service.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                type: element.type,
                name: element.name,
                address: element.address,
                times: element.times,
            })
        }
        return res.json(filtered)
    })

    app.get("/servicesUnique", async (req, res) => {
        const result = await models.Service.findAll()
        const filtered = []
        for (const element of result) {
            var addElem = true
            for (const el of filtered) {
                if (el.type == element.type)
                    addElem = false;
                if (!addElem)
                    break
            }
            if (addElem) {
                filtered.push({
                    type: element.type,
                })
            }
        }
        return res.json(filtered)
    })

    app.get("/services/:type", async (req, res) => {
        const result = await models.Service.findAll()
        const filtered = []
        for (const element of result) {
            if (element.type == req.params.type) {
                filtered.push({
                    type: element.type,
                    name: element.name,
                    address: element.address,
                    times: element.times,
                })
            }
        }
        return res.json(filtered)
    })

    /*
    // HTTP POST apio that will push (and therefore create) a new element in 
    // our fake database 
    app.post("/cats", (req, res) => {
        const { body } = req
        catList.push(body)
        return res.sendStatus(200)
    })
    */
}

runMainApi()

export default app
