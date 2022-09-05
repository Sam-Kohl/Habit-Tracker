# Habit Tracker
A full stack application that allows a user to add, select, and delete a "Habit" they would like to track.
They can track the amount that they did or did not do the habit by using the "score" feature when a habit is selected.

**Link to project:**   (TO BE REVISED LATER)



## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, EJS, MongoDB

I used Node.js and Express to create a server which listens for specific requests and accesses a mongoDB database cluster to retrieve a document, add a document, update a document in several ways, or delete a document.

The server then sends the client HTML rendred using EJS to populate the client side with information from the database. 



## Optimizations

Make everything look prettier using aspects of an html template / More CSS rules.

Make the scores more easily read and understood by the user. 

## Lessons Learned:

The "focus" selection feature in this app was a lot of fun learning and exploring the ins and outs of. I decided to let the "score" of a habit only to be editable if the habit is selected, hiding the thumps up/down score buttons when not focused, which caused some issues with the delete functionality of a habit. This lead to a lot of learning about what is and isn't considered a child-node of a parent and how to use short-circuit evalutation of a variable to circumnavigate the changing of the child-nodes index when adding the thumbs up/down buttons before the habit text.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

(TO BE REVISED LATER)


