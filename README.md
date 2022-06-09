# Hypermedia-Project

 Repository for Hypermedia Applications project - Polimi 14/06/2022
 
 Group SoftMath:  
 10612772 - Carlo Ambrogi  
 10582405 - Sebastian Castellano  
 10573185 - Andrea De Bettin  
 10571386 - Lorenzo Guerrieri  
 
 VisitMantova website  

# A presentation and contribution of each group member

Carlo Ambrogi: Computer science engineering, 1st year of master degree  
Sebastian Castellano: Mathematical engineering, 2nd year of master degree  
Andrea De Bettin: Mathematical engineering, 2nd year of master degree  
Lorenzo Guerrieri: Computer science engineering, 2nd year of master degree  


Carlo Ambrogi: I mainly dealt with the creation of the apis, the creation of some pages of the website, the footer, the design of the database, commenting the code, some paragraphs in the report, the UX diagram and the abstract pages.  

Sebastian Castellano: I mainly dealt with the deployment of the website online, the SEO optimizations, the header, various graphic parts of the website such as the cards or the alignment of the elements and some fixes of various errors.   

Andrea De Bettin: I mainly dealt with the research of the data to insert in the website, the design part, the cards, most of the design report, some pages of the website and in particular the CSS.  

Lorenzo Guerrieri: I mainly dealt with the wireframes, the header, the structural links on the home page, the selector to navigate between events, the slideshows, the responsiveness, the layout of some pages and the final revision of the cards.
For more info, check commits on this GitHub repository!  


Each member of the group took care of the entire project and we worked in harmony by putting together and enhancing our skills; we talked often while we did the project and we helped each other!  

# How the application has been organized

VisitMantova is a web application for a touristic center of Mantova. Are you planning to visit Mantova? In VisitMantova you can easily find which are the next events in Mantova, which are the most interesting points of interest to visit in Mantova, some beautiful itineraries, and you can even find a list of services in Mantova (restaurants, supermarkets, etc).

This web application has been written using Nuxt, a framework that permits to create both server and client of the web application (througt NodeJS) using JavaScript. The main advantage of using this framework is to create some templates of components so that the same components are reusable in different pages of the website.

We organized the application in the following way:  

we initialized a PostGres database to store all the data related to events, points of interest, and other useful things. 

We created some apis which are used by the pages to retrieve the data to be visualized in the pages, we created also some useful components (such as cards to visualize previews of events, points of interest, etc or such as the footer and the header) to use in multiple instances throughout the website.  

We created some layouts to be able to decide more easily for example which pages have the header only and which also the footer, we used css to define the style of lables, images and other elements in the pages (to decide also fonts, distance from margins, position and other aesthetic matters), and we also used JavaScript to write the apis but also to manage the use of different variables between pages and components/templates.

To render our website we adopted server side rendering (ssr). Having excluded client side rendering, not suited in our opinion, we were torn between ssr and static deployment mainly due to concerns regarding the frequency of update of the contents of the website.   Sticking with ssr we mantain the flexibility of updating in medias res the content of our pages (inserting new events, modifying existing content to keep up with the real world, e.g. if a monument closes for renovation).  
The other approach, with static deployment, would have been to collect modifications to be applied once in a specified interval of time (e.g., every two weeks).

# Best practices of the framework used

We took advantage of the framework defining reusable components. We created an header with landmark links that appears in every page of our website VisitMantova, we created also a footer that appears in most pages of the website.

We created some cards:  
the CardEvent component to visualize essential info about an event (image, name, date, short description) which we used in the events page list, but also in the summer/winter events page;  

the ItinerarySideCard component to visualize essential info about an itinerary (image, name, duration, length, short description) which we used in the itinerary list page, but also in a point of interest page to visualize which itineraries are involving that point of interest;  

similarly, we created CardPoi to visualize essential info about a point of interest (image, name, price, short description) and this component is used in point of interest list page; we created CardService to show a name of a type of service and this component is used in the services list page;  

we created CardSingleService to visualize a card of a specific service (showing essential info about it: name, address, opening times) and this component is used in service type list pages where all services of a certain type are shown;  

we created EventSideCard to visualize essential info about an event (image, name, date, short description) and we used it in point of interest pages to show all events in that point of interest; 

finally we created PoiSideCard to show essential info about a point of interest (image, name, short description) and we used it in the event pages (to visualize the point of interest where the event is hosted) and in the itinerary pages (to visualize the points of interest belonging to the itinerary).

In general we decided to create different cards (for events, points of interest, etc) because cards are very versatile to represent some brief preview of information at the border of a page or grouped together, moreover the cards are aesthetically pleasing and their content is in harmony with their size.


Apart from cards, we also created a footer and an header; header (with all the landmarks to easily navigate the website) which becomes a dropdown menu in a smartphone device or if you resize the window to a smaller width.   
Moreover we created other components: the HomePageTemplate for the home page, the PrevNextSelector which is a selector to go to the next or the previous event (ordered by date), the SlideShow to visualize a gallery of images (used in an event or in a point of interest page) and TitleBanner, a component used in an event page or in a point of interest page to visualize the name of the event/point of interest, a slideshow with the images of the event/point of interest (integrating the SlideShow component), and other essential info (for example, in case of the event, when the event will take place, where the event is organized, the price).

As about pages we created:
the index page, which is the home page, and it is divided in different sections and you can navigate in this sections by scrolling or by using internal structural links; then we created the about Mantova page where there is written for example why you should visit Mantova; then we created contact us page to contact the VisitMantova tourism office and this page is organized with a view with contact info and a background with an image; then we created the event list page, a page to see a list of events (with an event card for each event), where there are also two group link to filter events and go to the summer event page or to the winter event page; then in analogue way we created the point of interest page, a page to see a list of points of interest (with a card for each point of interest); and same thing for itinerary list page (a page to see a list of itineraries); we created also a service list page to see a list of types of services; then we created the event page, which is a page to view the details of an event, and in this page there are a selector to go to the previous / next event, a title banner with a slideshow of images related to the event a box with essential info about the event (the name of the event, the date, the place, etc), a description about the event and on the side there is a card with the point of interest where the event is hosted (and you can click on it to view details about the point of interest); then in analogue way we created a point of interest page to view detailed info about a point of interest with a title banner as an event page (and so with also a slideshow), a description of the point of interest and on the side there are listed both events taking place in that point of interest and intineraries involving it; then we created an itinerary page where there are detailed info about the itinerary (accompanied by a title, an image, and other info such as the lenght of the itinerary) whith a description, a map of the itinerary and on the side there is a list of the points of interest (with point of interest cards) belonging to the itinerary; finally we created a service type page to visualize all services of a certain type.

When we designed pages we made sure to make them responsive: we designed all pages to adapt the content to all window sizes so that the website is flawless both on desktop and on tablet or smartphone.  
Indeed pages in the website are reactive and change the behaviour according to orientation of the device or to the size of the window of the browser.  
For example the header becames automatically a dropdown menu in mobile device or if the window width of the browser is reduced.  
Also event list page, point of interest page, itinerary page are all optimized and if you reduce the window width, automatically the number of columns adapts too.  
Another example can be found in an event page or a point of interest page or even an itinerary page, where if you reduce the size of the window, the elements are moved to optimize the layout of the page.  
A last example is the contact us page where the size of the background and the size of the box with contact info are reactive to the size of the window, for example if you reduce the length of the window the box remains centered in the page and if you continue to reduce the size of the window the box reduces its dimensions as well.  

When designing our website we took care of the correct technical implementation of the pages, the accessibility and SEO as well.
