export default async (models) => {
    const eventList = [
        {
            name: "event1",
            date: new Date(2018, 11, 24),
            location: "location1",
            price: 1,
            description: "description1",
            images: ["https://www.rockon.it/wp-content/uploads/2021/08/mantova-live.jpg","https://www.ojeventi.it/wp-content/uploads/2018/07/unnamed-min.jpg"],
            videos: ["video1","video2"],
            shortDescription: "short description 1",
            poiId: 1,
        },
        {
            name: "event2",
            date: new Date(2019, 11, 24),
            location: "location2",
            price: 2,
            description: "description2",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description 2",
            poiId: 1,
        },
    ]
    const pointOfInterestList = [
        {
            name: "point of interest 1",
            location: "location1",
            times: "00:00 - 23:59",
            price: 15,
            description: "description1",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description 1",
        },
        {
            name: "point of interest 2",
            location: "loc2",
            times: "00:00 - 23:59",
            price: 15,
            description: "description2",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description 2",
        },
    ]
    await models.PointOfInterest.bulkCreate(pointOfInterestList)
    await models.Event.bulkCreate(eventList)
}
