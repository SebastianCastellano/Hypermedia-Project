# Hypermedia-Project

 Repository for Hypermedia Applications project - Polimi 04/2022
 
 Group SoftMath: 10612772 - Carlo Ambrogi --- 10582405 - Sebastian Castellano --- 10573185 - Andrea De Bettin --- 10571386 - Lorenzo Guerrieri
 
 VisitMantova

# A presentation and contribution of each group member

aaaaa bbbbb ccccc dddddddd

# How the application has been organized

VisitMantova is a web application for a touristic center of Mantova. Are you going to visit Mantova? In VisitMantova you can find easly which are the next events in Mantova, witch are the most interesting point of interest to visit in Mantova, some itineraries, and you can even find a list of services in Mantova (restaurants, supermarkets, etc).

This web application has been written using Nuxt, a framework that permits to create both server and client of the web application (througt NodeJS) using JavaScript. The main advantage of this framework is to create some tamplates of components so that same components are reusable in different pages of the website.

We organized the application in this way: we inizialized a PostGres database to store all useful data about events, points of interest, and other useful things, we created some apis witch are used by the pages to retrive all data to be visualized in the pages, we created also some useful components (such as cards to visualize previews of events, points of interest, etc or such as the footer or the header) and used them more times in pages, we created some layouts to be able to decide more easly for example witch pages have the header only and witch also the footer, we used a lot of css to define the style of lables, images and other elements in the pages (to decide also fonts, distance from margins, position, and other aestetich stuffs), and we used also JavaScript not only to write the apis but also to manage the passage of different variables between pages and components / templates.

# Best practicies of the framework used

We took advantage of the famework defining reusable components. We created an header with landmark links that appears in any page of our website VisitMantova, we created also a footer that appears in most pages of the website.

We created some cards: the CardEvent component to visualize essential info about an event (image, name, date, short description) and we used it, not only in the events page list, but also in the summer / winter events page; the ItinerarySideCard component to visualize essential info about an itinerary (image, name, duration, lenght, short description) and it is used, not only in the itinerary list page, but also in a point of interest page to visualize which itineraries are involving that point of interest; in analogue way we created CardPoi to visualize essential info about a point of interest (image, name, price, short description) and this component is used in point of interest list page; we created CardService to show a name of a type of service and this component is used in the services list page; we created CardSingleService to visualize a card of a specific service (showing essential info about it: name, address, opening times) and this component is used in service type list pages where are shown all services of a certain type; we created EventSideCard to visualize essential info about an event (image, name, date, short description) and we used it in point of interest pages to show all events in that point of interest; finally we created PoiSideCard to show essential info about a point of interest (image, name, short description) and we used it in an event page (to visualize the point of interest where the event is hosted) and in an itinerary page (to visualize the points of interest belonging to the itinerary).

In general we decided to create different cards (for events, points of interest, etc) because cards are very versatile to represent some small pices of information at the border of a page or grouped toghether, moroever cards we created are beautiful to see and the content in a card is in harmony with the size of the card.

Not only cards but, as we said, we created a footer and an header; header (with all landmark voices to navigate easly in the website) that became a dropdown menu in a smartphone device or if you resize the window to optimize the space; moreover we created other components: the HomePageTemplate for the home page, the PrevNextSelector which is a selector to go to the next or the previous event (ordered by date), the SlideShow to visualize a gallery of images (used in an event or in a point of interest page) and TitleBanner, a component used in an event page or in a point of interest page to visualize the name of the event / point of interest a slideshow with the images of the event / point of interest (integrating the SlideShow component), and other essential info about (for example, in case of the event, when the event is, where the event is, the price).

As about pages we created the index page, witch is the home page, and it is divided in different sections and you can navigate in this sections by scrolling or by using internal structural links; then we created the about Mantova page where there is written for example why visit Mantova; then we created contact us page to contact the VistiMantova tourism office and this page is organized with a view with contact info and a background with an image; then we created the event list page, a page to see a list of events (with an event card for each event), where there are also two group link to filter events and go to the summer event page or to the winter event page; then in analogue way we created the point of interest page, a page to see a list of points of interest (with a card for each point of interest); and same thing for itinerary list page (a page to see a list of itineraries); we created also a service list page to see a list of types of services; then we created the event page, whitch is a page to view the details of an event, and in this page there are a selector to go to the previous / next event, a title banner with a slideshow of images related to the event a box with essential info about the event (the name of the event, the date, the place, etc), a description about the event and on the side there is a card with the point of interest where the event is hosted (and you can click on it to view details about the point of interest); then in analogue way we created a point of interest page to view detailed info about a point of interest with a title banner as an event page (and so with also a slideshow), a description of the point of interest and on the side there are listed both events taking place in that point of interest and intineraries involving it; then we created an itinerary page where there are detailed info about the itinerary (accompanied by a title, an image, and other info such as the lenght of the itinerary) whith a description, a map of the itinerary and on the side there is a list of the points of interest (with point of interest cards) belonging to the itinerary; finally we created a service type page to visualize all services of a certain type.

When we designed pages we took care about responsibility: we designed all pages to adapt the content to all window size so that the website is flawless both on desktop and on tablet / smartphone, enfact pages in the website is reactive and change the behaviour according to orientation of the device or to the size of the window of the browser. ......................

ottimizzazioni per prendere punti (specificando essere per rendere le pagine)

quale render side qq ....

altre ottimizzazioni per prendere punti
