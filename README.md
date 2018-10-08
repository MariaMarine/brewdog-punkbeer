# BrewDog PunkBeer

## Contributors: 
Team LMN (team 8 @ [Telerik Academy Alpha JavaScript August 2018](https://gitlab.com/TelerikAcademy/alpha-js-aug-18))

Team leader: [Nikola](https://gitlab.com/nizlatinov)

Team members: [Lubo](https://gitlab.com/Lubo777), [Maria](https://gitlab.com/Marinova), [Nikola](https://gitlab.com/nizlatinov)

## Project Description:
A single page web application serving as an online catalogue that lists detailed informatation about all of BrewDog brewery's products

## Project Features:
 ### Landing state: 
 showcases a pre-selection of highlighted beers (+ optional: random beer) 

 ### Search by name/keyword: 
 displays **all** beers matching search criteria; if filters were previously applied, those are disregarded

 ### Filter by criteria:
    - alcohol by volume (a set of predefined ranges of value, i.e: normal (ABV <= 6), strong (ABV 6.1-10), magical (ABV >= 10.1));
    - colour intensity/EBC (a set of predefined ranges of value, i.e: pale (EBC <= 19), amber/brown (EBC 20-49), dark (EBC >= 50))
    - hoppyness/IBU (a set of predefined ranges of value, i.e: mild (IBU <= 19), hoppy (IBU 20-59), super hoppy (IBU >= 60)

 ### Filter criteria can be combined 
  i.e: selecting 'strong' and 'pale' filters returns **all** matches for ABV 6.1 - 10 && EBC <= 19

 ### Nº of results per state:
  default = 25; users can change the number of matches that are displayed simultaneously 

 ### Clear filter(s): 
 users can clear one or more filter criteria

 ### Single Product View: 
 clicking on a product (in landing state or after applying filters) displays a 'pop-up/overlay' with detailed information about the product that can be closed (+ optional: product can be added to favourites)

 ### (Optional: a Favourites 'pop-up/overlay' state)
 users can add products to favourites from *single product view* and then view/delete them via a *favourites* icon

 ### (Optional: select more than one set of values per filter criteria)
 i.e: 'hoppy' && 'super hoppy' returns all matches for IBU >=20

## Built with:
 - [Punk API] (https://punkapi.com/documentation/v2)
 - [jQuery] (https://jquery.com/)
 - [Bootstrap] (http://getbootstrap.com/)
 - [Webpack] (https://webpack.js.org/)

## Trello:
[Board] (https://trello.com/b/L5dDFDv1/brewdog-punkbeer)