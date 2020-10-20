![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Pokemon Express REST

Let's build a Pokemon app using all the 7 RESTful routes we learned so far.

When a user goes to the `/pokemons` route they will see an "index" page with the names of each pokemon.
When a user clicks on the name of the pokemon, they will be taken to that pokemon's "show" page, and will see the pokemon's name and image.

<br>

# The 7 RESTful routes
| Method | Path | Action | Description |
|-|-|-|-|
| **GET** | /pokemons | Index | List of pokemons |
| **GET** | /pokemons/:id | Show | Show info about 1 pokemon |
| **GET** | /pokemons/new | New | Show form to enter new pokemon info |
| **POST** | /pokemons | Create | Create pokemon on server |
| **GET** | /pokemons/:id/edit | Edit | Get a form already filled in for user to change |
| **PUT/PATH** | /pokemons/:id | Update | Update pokemon's data on server |
| **DELETE** | /pokemons| Destroy | Remove pokemon from server |


<br>

# Set up

- Fork and clone this repo.

- Go inside the folder you just cloned

- Create a `models` directory, and inside of that, a file called `pokemon.js`.

- Inside of this file, put the following array of pokemons objects. This is your "database" for this lab.

```js
const pokemons = [ 
  {
    name: "Bulbasaur", 
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    name: "Ivysaur", 
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
  },
  {
    name: "Venusaur", 
    img: "http://img.pokemondb.net/artwork/venusaur.jpg"
  },
  {
    name: "Charmander", 
    img: "http://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    name: "Charizard", 
    img: "http://img.pokemondb.net/artwork/charizard.jpg"
  },
  {
    name: "Squirtle", 
    img: "http://img.pokemondb.net/artwork/squirtle.jpg"
  },
  {
    name: "Wartortle", 
    img: "http://img.pokemondb.net/artwork/wartortle.jpg"
  }
];
```

- Create an express app that listens on port 3000. You can refer back to old code and lessons but **TYPE IT OUT.  DO NOT PASTE.** 

- Set up your "database" in so that it can be exported to your `server.js` and then be required by your `server.js`

- Create an "index" route at `GET /pokemons` that will `res.send(pokemons)`, which will display your pokemons data as json in the browser.


&#x1F534; **Commit:** "Server set up and can see json in the browser at GET /pokemons"

<br>

# Requirements
## PART 1# - Set up your "index" view

- Instead of displaying json at your `/pokemons` route, you should render an `index.ejs` file that displays a list of all the pokemons. let's create a unordered list `<ul>` with class name `pokemons` and put each pokemon inside of as a list item `<li>`. 

&#x1F534; **Commit:** "Index template rendered at GET /pokemons"

<br>

## PART 2# - Set up your "show" route

- Inside your `server.js`, add the show route at `GET /pokemons/:id`

- This route should render a template called `show.ejs` which displays the information of a specific pokemon according to their index (`/:id`) in the pokemons array. For example, `/pokemons/0` should display the 0-indexed pokemon's info.

&#x1F534; **Commit:** "Show page shows details for one pokemon"

<br>

## PART 3# - Link your `index.ejs` to your `show.ejs`
Inside your `index.ejs`,
- for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemons/index`, where **index** is the array position of the `pokemon` in the data array. This should be set dynamically in the loop in your `index.ejs` template.
- Clicking the link should take the user to to your show route for that pokemon, and the pokemon at the index number corresponding to the pokemon's array position should be displayed.

&#x1F534; **Commit.** "Added links on index page"

<br>

## PART 4# - Set up your "new" route

- Users should be able to add a new pokemon into the array using a form on 
a `new.ejs` page by requesting `GET /pokemons/new` with their browser.

&#x1F534; **Commit.** "It shows a form for users to enter new pokemon"

<br>

## PART 5# - Create new Pokemon

- That form should hit a route Creation should be handled via a route at `POST /pokemons`. (Remember: body-parser!!!).  After the pokemon is created, user should be redirected to the index.

&#x1F534; **Commit.** "Submitting the form actually creates a pokemon"

<br>

## PART 6# - Delete Pokemon

- Users should be able to delete a pokemon using a button provided on the show and index pages. (Remember: method-override!!!) After the pokemon is deleted, user should be redirected to the index page.

&#x1F534; **Commit.** "User can delete a pokemon"

<br>

## PART 7# - Edit Pokemon

- Users should be able to edit an individual pokemon on an `edit.ejs` page accessed from the `GET /pokemons/:id/edit` route. Users should be able to click an "(edit)" link on either the index or show route (or both!) to access this page.

&#x1F534; **Commit.** "User can see a form to edit a pokemon with data already populated"

<br>

## PART 8# - Update pokemon

The updating should be handled via a PUT request to the `/pokemons/:id` route. After the pokemon is updated, user should be redirected to either the index or the show page, you decide which you like better.

&#x1F534; **Commit.** "User can update the info for a pokemon"

<br>

**:tada: You're done! Push and make a pull request.:tada:**

<br>

# Hungry for more?

## Partials

here it is some docs:
  - [express-ejs-layouts](https://github.com/soarez/express-ejs-layouts)
  - [EJS include](https://ejs.co/#docs)

Sites should be _navigable_. Users do not want to type in URLs to access different parts of your site, and you shouldn't waste time with that either.

- Now that you have enough of a site to be meaningful, create `header.ejs` and `footer.ejs` partials.  The header should include everything up through the opening `<body>` tag.  The footer should probably start with the closing`</body>` tag.

- Replace the opening html in each template with your `header.ejs` and replace the closing html with your `footer.ejs`

Your site will look the same, but it is much DRYer now and easier to modify. Check to make sure it _still_ looks right, if so, then...

&#x1F534; **Commit.** "Set up partials"

<br>

## Nav

Put a `<nav>` in the header with links to the things users would want to be able to do at any time (like: seeing index and adding an item).  Isn't that nice that you only had to add that in one place?

&#x1F534; **Commit.** "Added navigation links"

<br>

## Style your app

- Set up your app to be able to use CSS like we did in class. Remember: you need to set up the `express.static()` middleware. (Also remember that you don't need to npm install anything for this particular middleware because its part of express. But for others you do.)

- Add some style to your app

&#x1F534; **Commit:** "Set up static files so we can add CSS"

<br>

## Pick a differrent Font

- Choose a google font and use it to style your pokemon's name etc.

&#x1F534; **Commit:** "Using different font"

<br>

## Learn more about Pseudo Selectors to become a CSS Genius
  - [pseudo selector links](https://www.youtube.com/watch?v=YMZGPqNDn_s&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=17) ~ 5 minutes
  - [pseudo selector children](https://www.youtube.com/watch?v=tMCahu7H-fA&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=18) ~ 4 minutes
  - [pseudo selector n-th child](https://www.youtube.com/watch?v=yFmwjX9oGt8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=19) ~ 3 minutes
  - [pseudo selector sibling status and `not()`](https://www.youtube.com/watch?v=XyXUjEP9m-8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=20) ~ 5 minutes
  - a little glitchy, but [See just how deeply nerdy some people get about CSS](https://css-tricks.com/roman-empire-made-pure-css-connect-4-possible/)


