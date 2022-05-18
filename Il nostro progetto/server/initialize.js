export default async (models) => {
    const mediaList = [
        {
            url: "https://www.rockon.it/wp-content/uploads/2021/08/mantova-live.jpg",
            alternative: "immagine1",
            type: "i",
        },
        {
            url: "https://www.ojeventi.it/wp-content/uploads/2018/07/unnamed-min.jpg",
            alternative: "immagine2",
            type: "i",
        },
        {
            url: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            alternative: "Image for a map of an itinerary",
            type: "i",
        },
        {
            url: "https://www.youtube.com/embed/VGQXWalNsk0",
            alternative: "video1",
            type: "v",
        },
        {
            url: "https://www.youtube.com/embed/VGQXWalNsk0",
            alternative: "video2",
            type: "v",
        },
    ]
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
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
            poiId: 1,
        },
        {
            name: "NameEvent2",
            date: new Date(2002, 1, 2), //notice that the month is 0 indexed -> 0 is January, 1 is February, ..., 11 is December
            location: "Location Event 2",
            price: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur, velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
            poiId: 1,
        },
    ]
    const eventmediaList = [
        {
            eventId: 1,
            mediumId: 1,
            order: 1,
        },
        {
            eventId: 1,
            mediumId: 2,
            order: 2,
        },
        {
            eventId: 1,
            mediumId: 4,
            order: 3,
        },
        {
            eventId: 1,
            mediumId: 5,
            order: 4,
        },
        {
            eventId: 2,
            mediumId: 1,
            order: 1,
        },
        {
            eventId: 2,
            mediumId: 2,
            order: 2,
        },
        {
            eventId: 2,
            mediumId: 4,
            order: 4,
        },
        {
            eventId: 2,
            mediumId: 5,
            order: 5,
        },
    ]
    const pointOfInterestList = [
        {
            name: "NamePoi1",
            location: "locationPoi1",
            times: "00:00 - 23:59",
            price: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur, velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
        },
        {
            name: "NamePoi2",
            location: "locationPoi2",
            times: "00:00 - 23:59",
            price: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien sodales eros auctor finibus nec eget tortor. Quisque at odio sit amet neque lacinia molestie at nec purus. Curabitur pretium ante lectus, sit amet imperdiet nulla faucibus quis. Sed bibendum vel tortor sit amet finibus. Maecenas tincidunt ipsum sit amet accumsan tincidunt. Vivamus id neque non urna malesuada gravida at luctus tellus. Curabitur elementum nisl neque, ut dignissim nunc imperdiet vel. Suspendisse porta, odio nec congue consectetur, velit mauris gravida magna, ac fermentum diam augue a elit. Sed sodales augue sed mi consequat interdum. Duis nec finibus orci. Nunc eget dapibus eros. Phasellus id augue lobortis, tincidunt nulla sit amet, eleifend erat. Sed sit amet odio purus. Morbi ultricies rhoncus justo in ornare. Sed at sapien et lacus placerat dapibus ac in nulla. Nulla facilisi. Duis odio mauris, efficitur ut purus sed, posuere auctor tellus. Donec sit amet pulvinar mauris. Nam eu turpis ac nibh posuere porttitor. Pellentesque mauris leo, pretium id pulvinar non, imperdiet porttitor justo. Phasellus dapibus orci eu eleifend aliquet. Vivamus sit amet nisi ut leo euismod laoreet a id arcu. Sed tincidunt dolor eget eleifend lacinia. Vestibulum vulputate quis massa id dictum. Phasellus sollicitudin rhoncus.",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel.",
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
            mediumId: 4,
            order: 4,
        },
        {
            poiId: 1,
            mediumId: 5,
            order: 5,
        },
        {
            poiId: 2,
            mediumId: 1,
            order: 1,
        },
        {
            poiId: 2,
            mediumId: 2,
            order: 2,
        },
        {
            poiId: 2,
            mediumId: 4,
            order: 4,
        },
        {
            poiId: 2,
            mediumId: 5,
            order: 5,
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
            map: Buffer.from('<iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d2813.462025469062!2d10.791154415389093!3d45.15749312909849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x4781d418e54b26d3%3A0x5a4df8c711f9b9e7!2sBasilica%20di%20Sant&#39;Andrea%2C%20Piazza%20Andrea%20Mantegna%2C%201%2C%2046100%20Mantova%20MN!3m2!1d45.1588911!2d10.7943879!4m5!1s0x4781d5aef203ee67%3A0x22e3d205bed7665!2sCampanile%20di%20San%20Domenico%2C%20Lungorio%20IV%20Novembre%2C%20Mantova%2C%20MN!3m2!1d45.156095199999996!2d10.7925507!4m5!1s0x4781d41852acf4a7%3A0x20623bbdea8e31ca!2sPiazza%20delle%20Erbe!3m2!1d45.1585381!2d10.7948262!5e0!3m2!1sit!2sit!4v1652873044565!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>').toString('base64'),
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
            map: Buffer.from('<iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d2813.462025469062!2d10.791154415389093!3d45.15749312909849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x4781d418e54b26d3%3A0x5a4df8c711f9b9e7!2sBasilica%20di%20Sant&#39;Andrea%2C%20Piazza%20Andrea%20Mantegna%2C%201%2C%2046100%20Mantova%20MN!3m2!1d45.1588911!2d10.7943879!4m5!1s0x4781d5aef203ee67%3A0x22e3d205bed7665!2sCampanile%20di%20San%20Domenico%2C%20Lungorio%20IV%20Novembre%2C%20Mantova%2C%20MN!3m2!1d45.156095199999996!2d10.7925507!4m5!1s0x4781d41852acf4a7%3A0x20623bbdea8e31ca!2sPiazza%20delle%20Erbe!3m2!1d45.1585381!2d10.7948262!5e0!3m2!1sit!2sit!4v1652873044565!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>').toString('base64'),
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
        {
            itineraryId: 2,
            poiId: 2,
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
