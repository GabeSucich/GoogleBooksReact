# Google Books

This application allows users to utilize the vast array of data held by google books to search and save for books of interest. After querying books by title or author, users can sift through and save results, creating a list of saved books to be read in the future.

This application is a Mongoose-Express-React-Node (MERN) full-stack application. On the back-end, an express server listens for requests, and interacts with the mongodb database or the google books API to serve the user with results. React's stateful nature facilitates a clean and simple setup of the DOM which is dynamic and responsive to the user input.


## Contents

* [Installing](#installing)
* [Built With](#built-with)
* [Application Functionality](#application-functionality)
* [Deployed Application](https://immense-everglades-13293.herokuapp.com/)
* [Developer Information](#gabriel-sucich)

## Installing

To access code for use or development, clone the Github repository onto your local machine using:

```
git clone https://github.com/GabeSucich/GoogleBooksReact.git
```

To download the necessary dependencies, navigate into the cloned directory and enter the following in terminal:

```
npm install
```

To being running the react app on your local machine, navigate into the cloned repository and run:
```
npm start
``` 


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://mongoosejs.com/docs/)
* [Bootstrap](https://getbootstrap.com/)
* [React](https://reactjs.org/)

## Application Functionality

On the 'Search' page, users can:

* Search for new books, a feature which utilizes the google books API.
* View the search results enlarged on the section at the page's top.
* Save any of the search results.

On the 'Saved' pgae, users can:

* View any saved books enlarged at the top of the page.
* Delete books from the saved page


<img src="markdown/app.gif" width="85%">

#### See the [deployed link](https://immense-everglades-13293.herokuapp.com/) here

***

### Gabriel Sucich

<img src="markdown/profile.png" width="35%">

- [Portfolio](https://gabesucich.github.io/Portfolio2/)
- [Github](https://github.com/GabeSucich)
- [LinkedIn](www.linkedin.com/in/gabriel-sucich-6a28a71a8)
