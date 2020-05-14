# Hooks Practice Project

## Intro

This is a project I created initially for students to practice writing servers. Other students wanted to practice with hooks, so I modified the project. Now we're practicing with hooks instead of endpoints. Let's take a look at what the project already has in it starting with the server folder.

### Server
- the ```db.json``` file just has an array of Disney movies
- our ```controller.js``` contains the methods that will run at our specified endpoints
    - the ```movies``` variable will hold our JSON array for us
    - the ```globalId``` will keep track of new ID's for us since this is a database-less project
    - review the methods just to familiarize yourself with what you should be expecting when you call these methods
- the index.js of course contains our main server code, just a simple express server

### Src
This is where we will be working, should look pretty familiar as well except App and all of the Component files are incomplete. Note that the styling is provided using a style object in each file.

### Public
This is just a standard React App public folder with a favicon, manifest, and html file.

### Other Files
- now is the time to run ```npm i``` if you haven't already
- you should have a ```.gitignore```, ```package-lock.json```, ```package.json```, & this README.
- go into the ```package.json``` and make sure the ```main``` and ```proxy``` keys are set up correctly (they should be, one can never be too careful though. Also, this is where you would change the proxy if you wanted to run your server on a different port. Don't forget to change it in the server/index.js too if you do.)

## Directions

### Step 1 - Set up the get functionality

App.js
- we will need a place to store the movies, so let's set that up using the useState hook
- next we will need to make a request to our server, so write a function that will get the movies from our back end and set them to our component's state (meaning the variable that you destructured off of useState)
- call your new function in a useEffect hook
- if you want to make sure everything is working, you can log your movies to the console
- now that we have that all working, let's display the movies in the MoviesList component, this means that we will need to import and render the MoviesList component in App.js and pass our movies to it as a prop (you'll have to name this prop 'movies' for it to work with the provided setup)
- if your steps have worked up till now, then you should see some movie covers in your app (remember to run both nodemon and npm start)
- you'll see some edit and delete buttons that don't work yet, we'll get to those, but first we are going make a way to add new movies


### Step 2 - Add a movie

App.js 

- write a function that will make an axios call to create a movie, remember that this function will need to take in some info so it can send that info on the body of the request
- import the Adder component and display it above the movies list
- pass the function (that adds a movie) you just wrote down to Adder

Adder.js

- you'll see that there are three input fields, we'll need to follow these next steps for all three. the inputs are for a new movie's title, rating and picture. these direction's will be written using title, but then you will need to repeat them for the second two input fields.

#### Inputs 

- using the useState hook, create a variable that will store our new movie's title and the function that will set that title
- on the first input, add a value attribute and set it equal to the state variable where you're storing the title
- then add an onChange attribute and write a function (that will take e as an argument) in there that will call the function that sets the title to e.target.value

Back to our other directions...

- once you've done that for all three inputs, we should be capturing all the user inputs correctly (you can check this by console logging your state variables if you want)
- now we need to write a function to handle when the form is submitted, remember in functional components, we can just write more functions inside and reference them in onClicks or onSubmits or whatever else -- just don't forget your function keyword or const keyword 
- your submit function should take in e and call ```e.preventDefault()``` 
- it should also call the function that creates a movie that we passed down on props (so make sure that you are passing props into your Component function)
- then you can also clear the variables storing the inputs, as in set them to empty strings. becuase we added the value attribute to our inputs, when we set the variables back to empty strings, the input fields will clear
- make sure that you put this function as the value of an onSubmit attribute on your opening form tag
- if everything went well, then you should now be able to add a new movie

### Step 3 - delete a movie

App.js

- write a function that will make the axios call to delete a movie, this function will need to take in an id so that it can send it on the endpoint params
- pass this function down to the MoviesList component 

MoviesList.js

- on line 4, we are destructuring movies directly off props, we can do the same thing with the function that deletes a movie. so whatever you named that prop, you can add in after movies in that object destructuring on line 4 and now you'll have access to it just by name instead of props.whateverName
- now that you've destructured the delete function, pass that down to the Movie component, which is being called in the return of the map callback

Movie.js

- you'll see that Movie also has the direct destructuring off of props thing, so you can destructure the delete function up there on line 3 again
- also, we are passing down movie as a prop, which is just the individual movie object for each movie in the list. i would recommend console logging it so that you can see what exactly you're working with
- let's give the button that says delete on it the functionality to delete in the onClick by writing a function that calls the delete function and passes in the movie's id (hint: you'll need to get that id off the movie prop, also to be on the safe side, force the id to be a number)
- your movies should be delete-able now!

### Step 4 - editing a movie

- the idea of the edit button that you can see on each movie card is that it will make the EditMovie component appear, which is a another form, but first we will need a function that updates a movie in the back end

App.js

- write a function that will make the axios call to update a movie in the "database", remember that this will need to take in both a body and an id
- we are going to pass this down many levels, so prepare yourself
- pass your update function down to MoviesList

MoviesList.js

- destructure that update function directly off of props
- send it down to Movie as a prop

Movie.js

- destructure that update function off of props *again* 
- now we have access to it in Movie, and we are going to eventually pass it to EditMovie, but first we are going to dp our fancy conditional rendering to even get EditMovie to show up
- we are going to use useState to keep track of whether a variable (you can call it edit) is true or false. when you initialize it, set it to false, that way we won't automatically be in edit mode
- on the button that says edit, write an onClick function that will call the setEdit function from state and set it to true
- import EditMovie at the top, we about to put it in the ternary
- now we're going to write a ternary in our JSX, so after that comment, escape your JSX and set yourself up a ternary that checks if edit (from state) is true and if it is, will show EditMovie, if it's false, it should show all the stuff in the fragment. roughly like this: 
```
{
    edit
    ?
    <EditMovie/>
    :
    <></>
}
```
- also now that we are rendering EditMovie, we can pass it a few props, namely the setEdit function (from state), the update function that we destructured off props and the movie info that was sent on props too

EditMovie.js

- now that we passed the movie object down, we can take it off props, as well as those two functions (setEdit and the update) 
- to separate things out, at the top of your function you can also destructure title, rating, imageURL, id off of movie (or props.movie if you didn't destructure)
- we'll allow for users to change the title, image or rating, so we've got three inputs ready for that. if we're going to change those, then we will need to use the useState hooks to hold values for them. if you already destructured those properties, then you'll need to use new variable names in the useState hook. like if you destructured 'title', then you would want something like 'newTitle' on state. 
- also, the initial value should be set to the property you pulled off movie for the corresponding variable -- ```const [newRating, setRating] = useState(rating)```
- now, set up the input fields like we did in the Adder -- give them a value of the variable you want them to match to on state and write an onClick function that calls the function to set the state to ```e.target.value```
- write a function that you will call in the onSubmit of the form. you should define e as a parameter and inside the function call e.preventDefault(). also, call your update function and pass in the id and the info from state as the body. we also passed down setEdit -- invoke that passing in false as an argument, which will set the state of edit in Movie.js to false so the form goes away

## You're done!

Your app should work now, if you'd like to check, you can see a completed version [here](https://github.com/rileyeh/hooks-practice-complete)