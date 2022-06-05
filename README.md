# Hypermedia-Project

 Repository for Hypermedia Applications project - Polimi 04/2022
 Group SoftMath: 10612772 - Carlo Ambrogi --- 10582405 - Sebastian Castellano --- 10573185 - Andrea De Bettin --- 10571386 - Lorenzo Guerrieri
 VisitMantova

# A presentation and contribution of each group member

aaaaa bbbbb ccccc dddddddd

# How the application has been organized

VisitMantova is a web application for an touristic center of Mantova. Are you going to visit Mantova? In VisitMantova you can find easly whitch are the next events in Mantova, witch are the most interesting point of interest to visit in Mantova, some itineraries, and you can even find a list of services in Mantova (restaurants, supermarkets, ecc).
This web application has been written using Nuxt, a framework that permits to create both server and client of the web application (througt NodeJS) using JavaScript. The main advantage of this framework is to create some tamplates of components so that same components are reusable in different pages of the website.
We organized the application in this way: we inizialized a PostGres database to store all useful data about events, points of interest, and other useful things, we created some apis witch are used by the pages to retrive all data to be visualized in the pages, we created also some useful components (such as cards to visualize previews of events, points of interest, ecc or such as the footer or the header) and used them more times in pages, we created some layouts to be able to decide more easly for example witch pages have the header only and witch also the footer, we used a lot of css to define the style of lables, images and other elements in the pages (to decide also fonts, distance from margins, position, and other aestetich things), and we used also JavaScript not only to write the apis but also to manage the passage of different variables between pages and components / templates.

# Best practicies of the framework used

We took advantage of the famework defining reusable components. We created an header with landmark links that appears in any page of our website VisitMantova, we created also a footer that appears in most pages of the website.
We created some cards: the CardEvent component to visualize essential info about an event (image, name, date, short description) and we used it, not only in the events page list, but also in the summer / winter events page; the CardItinerary component to visualize essential info about an event (image, name, duration, lenght, short description) and it is used in a point of interest page to visualize whitch itineraries are involving that point of interest; in analogue way we created CardPoi to visualize essential info about a point of interest (image, name, price, short description) and this component is used in point of interest list page.  aaaaaaaa CardService CardSingleService EventSideCard HomePageTemplate ItinerarySideCard PoiSideCard PrevNextSelector SlideShow TitleBanner

as abourt pages we created ....

quale render side qq ....

