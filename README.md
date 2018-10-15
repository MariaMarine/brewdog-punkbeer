# BrewDog PunkBeer

## Contributors: 
Team LMN (team 8 @ [Telerik Academy Alpha JavaScript August 2018](https://gitlab.com/TelerikAcademy/alpha-js-aug-18))

Team leader: [Nikola](https://gitlab.com/nizlatinov)

Team members: [Lubo](https://my.telerikacademy.com/Users/Lubo777), [Maria](https://my.telerikacademy.com/Users/maria.marinova), [Nikola](https://my.telerikacademy.com/Users/nizlatinov)

## Project Description:
A single page web application serving as an online catalogue that lists detailed information about all of BrewDog brewery's products

## Project Features:
 ### Homepage 
 
 ### All beers page

 ### Filter by criteria:
 - alcohol by volume (a set of predefined ranges of value, i.e: normal (ABV <= 6), strong (ABV 6.1-10), magical (ABV >= 10.1));
 - colour intensity/EBC (a set of predefined ranges of value, i.e: pale (EBC <= 19), amber/brown (EBC 20-49), dark (EBC >= 50))
 - hoppyness/IBU (a set of predefined ranges of value, i.e: mild (IBU <= 19), hoppy (IBU 20-59), super hoppy (IBU >= 60)
 - beer name/keyword (displays beers matching search criteria);

 ### Filter criteria can be combined (optional):
  i.e: selecting 'strong' and 'pale' filters returns **all** matches for ABV 6.1 - 10 && EBC <= 19

 ### Clear filter(s): 
 users can clear filter criteria

 ### Single Product View: 
 clicking on a product displays detailed information about the product (+ optional: product can be added to favourites)

 ### (Optional: a favourites page)
 users can add products to favourites from *single product view* and then view/delete them via a *favourites* icon

## Built with:
 - [Punk API](https://punkapi.com/documentation/v2)
 - [jQuery](https://jquery.com/)
 - [Bootstrap](http://getbootstrap.com/)
 - [Webpack](https://webpack.js.org/)
 - [Infinite Scroll](https://infinite-scroll.com)

## Trello:
[Board](https://trello.com/b/L5dDFDv1/brewdog-punkbeer)