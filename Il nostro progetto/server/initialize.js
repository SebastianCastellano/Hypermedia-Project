export default async (models) => {
    const eventList = [
        {
            name: "NameEvent1",
            date: new Date(2001, 0, 1), //notice that the month is 0 indexed -> 0 is January, 1 is February, ..., 11 is December
            location: "Location Event 1",
            price: 1,
            description: "Description Event 1",
            images: ["https://www.rockon.it/wp-content/uploads/2021/08/mantova-live.jpg","https://www.ojeventi.it/wp-content/uploads/2018/07/unnamed-min.jpg"],
            videos: ["video1Event1","video2Event2"],
            shortDescription: "Short description event 1",
            poiId: 1,
        },
        {
            name: "NameEvent2",
            date: new Date(2002, 1, 2), //notice that the month is 0 indexed -> 0 is January, 1 is February, ..., 11 is December
            location: "Location Event 2",
            price: 2,
            description: "Description Event 2",
            images: ["https://www.womblab.com/wp-content/uploads/2016/02/eventmanagement.jpg","https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1Event2","video2Event2"],
            shortDescription: "Short description event 2",
            poiId: 1,
        },
    ]
    const pointOfInterestList = [
        {
            name: "NamePoi1",
            location: "locationPoi1",
            times: "00:00 - 23:59",
            price: 1,
            description: "descriptionPoi1",
            images: ["https://www.luoghidiinteresse.it/wp-content/uploads/14-Mantova-Piazza-Erbe-e-SantAndrea-696x473.jpg","https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description Poi 1",
        },
        {
            name: "NamePoi2",
            location: "locationPoi2",
            times: "00:00 - 23:59",
            price: 2,
            description: "descriptionPoi2",
            images: ["https://siviaggia.it/wp-content/uploads/sites/2/2017/09/cosa-vedere-a-mantova-virgilio.jpg","https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description Poi 2",
        },
    ]
    const itineraryList = [
        {
            name: "NameIt1",
            duration: "DurationIt1",
            length: "LengthIt1",
            description: "DescriptionIt1",
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "shortDescriptionIt1",
        },
        {
            name: "NameIt2",
            duration: "DurationIt2",
            length: "LengthIt2",
            description: "DescriptionIt2",
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "shortDescriptionIt2",
        },
    ]
    const serviceList = [
        {
            type: "pharmacy",
            name: "NamePharmacy1",
            address: "address1",
            times: "24h/24",
        },
        {
            type: "pharmacy",
            name: "NamePharmacy2",
            address: "address2",
            times: "24h/24 lun-ven",
        },
    ]
    await models.PointOfInterest.bulkCreate(pointOfInterestList)
    await models.Event.bulkCreate(eventList)
    await models.Itinerary.bulkCreate(itineraryList)
    await models.Service.bulkCreate(serviceList)
}
