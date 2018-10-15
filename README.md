# BrewDog PunkBeer

## Contributors: 
Team LMN (team 8 @ [Telerik Academy Alpha JavaScript August 2018](https://gitlab.com/TelerikAcademy/alpha-js-aug-18))

Team leader: [Nikola](https://gitlab.com/nizlatinov)

Team members: [Lubo](https://my.telerikacademy.com/Users/Lubo777), [Maria](https://my.telerikacademy.com/Users/maria.marinova), [Nikola](https://my.telerikacademy.com/Users/nizlatinov)

## Project Description:
A single page web application serving as an online catalogue that lists detailed information about all of BrewDog brewery's products

## Project Features:
 ### Logo Bar
 Display logo
 When clicked displays homepage view
 
 ### Navigation Bar
 Displays a number of links to views on the page: 
 - Home
 - Beer Catalogue
 - Random Beer
 - About
 - search (when clicked shows inputs for filters as a form within Navigation Bar)
 - favorites
 
 ### Homepage 

 Displays initial homepage view
 
 ### Display Multiple beers (either catalogue of all beers of filtered beers)
 Display a list of products with some basic information
 Each element in the list is a link to a view with detailed information about the product
 Products are loaded 20 at a time implementing 'infinite scroll' effect
 
 ### Single Product View: 
 clicking on a product displays detailed information about the product
 product can be added to favourites or removed from favorites
 
 ### Random Beer page
 Displays a single product view of a random beer
 
 ### Favorites page
 Displays all added favorites 
 Users can add products to favourites from *single product view* or *random beer page* and then view/delete them via a *favourites* icon

 ### Filter by criteria:
 - alcohol by volume (a set of predefined ranges of value, i.e: normal (ABV <= 6), strong (ABV 6.1-10), magical (ABV >= 10.1));
 - colour intensity/EBC (a set of predefined ranges of value, i.e: pale (EBC <= 19), amber/brown (EBC 20-49), dark (EBC >= 50))
 - hoppyness/IBU (a set of predefined ranges of value, i.e: mild (IBU <= 19), hoppy (IBU 20-59), super hoppy (IBU >= 60)
 - beer name (displays beers matching search criteria);

 ### Filter criteria can be combined:
  i.e: selecting 'strong' and 'pale' filters returns **all** matches for ABV 6.1 - 10 && EBC <= 19

 ### Clear filter(s): 
 users can clear filter criteria



## Built with:
 - [Punk API](https://punkapi.com/documentation/v2)
 - [jQuery](https://jquery.com/)
 - [Bootstrap](http://getbootstrap.com/)
 - [Webpack](https://webpack.js.org/)
 - [Infinite Scroll](https://infinite-scroll.com)
 - [Babel](https://babeljs.io/)

## Trello:
[Board](https://trello.com/b/L5dDFDv1/brewdog-punkbeer)