Programming Exercise: Address Book
---

This is a version of the Address Book programming exercise (original found [here](https://github.com/philidem/address-book-exercise)
that uses Ember.js to provide a rich client framework already configured to ease getting started.

## Dependencies
You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)

## Setup
1. Clone the repository and `cd` into it
2. Install Dependencies
```bash
npm install
```

## Run the servers
The api and the client are run from two different web servers, each will need to be running from its own terminal process

```bash
npm run start-api
```

```bash
npm run start-client
```

## URL Endpoints
The api server runs by default on port 8080. It provides a data url at /api/people. This endpoint is proxied by the
client server so it can be referenced as if it were part of the same system.
**People Data:**
http://localhost:8080/api/people

## Goals
- Fork this repo
- Create a simple address book web application and use the given static
  HTML mockup (`mockup/index.html`) as a starting point or as inspiration.
- Your client application should fetch people data from the api source.
- Renders the names of all people from the people data in the left panel
  in alphabetical order.
- When a person's name is clicked in the left panel, render the full profile in the right panel.
- Update the `README.md` with any instructions for running the web application.
- When you are done, send a pull request with your changes.

### Bonus Points
- Add image URLs to the people data and render these photos in the profile
- Make it possible to change sort order of people shown in directory panel
- Expand on the flexibility of the people data and how its rendered to the user (be creative!)

### Additional Notes
- If you have any questions then [open an issue](https://github.com/ericlifka/address-book-exercise/issues)
- This version of the exercise is meant to be done with Ember.js, for a more open ended one see [here](https://github.com/philidem/address-book-exercise)
- Feel free to add any libraries to the client or server apps that you'd like to utilize.
- Feel free to modify `data/people.json` with any changes that you see fit.
- Feel free to add additional routes to the express app by modifying `api/app.js`
- Your address book does not need to use the exact same CSS or HTML as provided by the mockup.