export default async (models) => {
    const eventList = [
        {
            name: "NameEvent1",
            date: new Date(2001, 0, 1), //notice that the month is 0 indexed -> 0 is January, 1 is February, ..., 11 is December
            location: "Location Event 1",
            price: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            images: ["https://www.rockon.it/wp-content/uploads/2021/08/mantova-live.jpg","https://www.ojeventi.it/wp-content/uploads/2018/07/unnamed-min.jpg"],
            videos: ["https://www.youtube.com/embed/VGQXWalNsk0", "https://www.youtube.com/embed/VGQXWalNsk0"],
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
            poiId: 1,
        },
        {
            name: "NameEvent2",
            date: new Date(2002, 1, 2), //notice that the month is 0 indexed -> 0 is January, 1 is February, ..., 11 is December
            location: "Location Event 2",
            price: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur, velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            images: ["https://www.womblab.com/wp-content/uploads/2016/02/eventmanagement.jpg","https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["https://www.youtube.com/embed/VGQXWalNsk0","https://www.youtube.com/embed/VGQXWalNsk0"],
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
            poiId: 1,
        },
    ]
    const pointOfInterestList = [
        {
            name: "NamePoi1",
            location: "locationPoi1",
            times: "00:00 - 23:59",
            price: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur, velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            images: ["https://www.luoghidiinteresse.it/wp-content/uploads/14-Mantova-Piazza-Erbe-e-SantAndrea-696x473.jpg","https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["https://www.youtube.com/embed/VGQXWalNsk0","https://www.youtube.com/embed/VGQXWalNsk0"],
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
        },
        {
            name: "NamePoi2",
            location: "locationPoi2",
            times: "00:00 - 23:59",
            price: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur, velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            images: ["https://siviaggia.it/wp-content/uploads/sites/2/2017/09/cosa-vedere-a-mantova-virgilio.jpg","https://fs.i3lab.group/hypermedia/cats/siberian.jpg","secondaimmagine"],
            videos: ["https://www.youtube.com/embed/VGQXWalNsk0","https://www.youtube.com/embed/VGQXWalNsk0"],
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
        },
    ]
    const itineraryList = [
        {
            name: "NameIt1",
            duration: "DurationIt1",
            length: "LengthIt1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "shortDescriptionIt1",
        },
        {
            name: "NameIt2",
            duration: "DurationIt2",
            length: "LengthIt2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. \
            Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur,\
            velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. \
            Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            map: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            shortDescription: "shortDescriptionIt2",
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
            name: "NameSupermarket2",
            address: "address2",
            times: "24h/24 lun-ven",
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
            itineraryId: 2,
            poiId: 2,
            order: 1,
        },
    ]
    await models.PointOfInterest.bulkCreate(pointOfInterestList)
    await models.Event.bulkCreate(eventList)
    await models.Itinerary.bulkCreate(itineraryList)
    await models.Service.bulkCreate(serviceList)
    await models.PoiIti.bulkCreate(poiitiList)
}
