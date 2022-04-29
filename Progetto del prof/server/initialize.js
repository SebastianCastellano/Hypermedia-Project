export default async (models) => {
    const eventList = [
        {
            name: "event1",
            date: new Date(2018, 11, 24),
            location: "loc1",
            price: 15,
            description: "descriptiooooonnnnn",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description",
        },
        {
            name: "event2",
            date: new Date(2019, 11, 24),
            location: "loc1",
            price: 15,
            description: "descriptiooooonnnnn",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description",
        },
    ]
    const pointOfInterestList = [
        {
            name: "event1",
            location: "loc1",
            times: "00:00 - 23:59",
            price: 15,
            description: "descriptiooooonnnnn",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description",
        },
        {
            name: "event2",
            location: "loc1",
            times: "00:00 - 23:59",
            price: 15,
            description: "descriptiooooonnnnn",
            images: ["https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["video1","video2"],
            shortDescription: "short description",
        },
    ]
    await models.Event.bulkCreate(eventList)
    await models.PointOfInterest.bulkCreate(pointOfInterestList)
}
