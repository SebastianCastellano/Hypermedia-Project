const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    const Event = database.define("event", {
        name: DataTypes.STRING,
        date: DataTypes.DATE,
        location: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.STRING,
        images: DataTypes.ARRAY(DataTypes.STRING),
        videos: DataTypes.ARRAY(DataTypes.STRING),
        shortDescription: DataTypes.STRING,
    })

    const PointOfInterest = database.define("poi", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        times: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.STRING,
        images: DataTypes.ARRAY(DataTypes.STRING),
        videos: DataTypes.ARRAY(DataTypes.STRING),
        shortDescription: DataTypes.STRING,
    })
    
    await database.sync({ force: true })
    return {
        Event, PointOfInterest
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
        return res.json(result)
    })

    app.get('/pointOfInterest/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.PointOfInterest.findOne({ where: { id } })
        return res.json(result)
    })

    // HTTP GET api that returns all the events in our fake database
    app.get("/events", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                date: element.date.toLocaleDateString(),
                location: element.location,
                price: element.price,
                description: element.description,
                images: element.images,
                videos: element.videos,
                shortDescription: element.shortDescription,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns all the point of interest in our fake database
    app.get("/pointOfInterest", async (req, res) => {
        const result = await models.PointOfInterest.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                location: element.location,
                times: element.times,
                price: element.price,
                description: element.description,
                images: element.images,
                videos: element.videos,
                shortDescription: element.shortDescription,
                id: element.id,
            })
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
