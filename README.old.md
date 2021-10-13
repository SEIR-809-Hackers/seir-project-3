# ParkPass

## Description:

ParkPass is a full-stack application that allows a user to search through a database of national parks and save them. When saved, a park will be added to a user’s page and displayed as a card. Users can then check off if they’ve hiked at the selected park. 


# Brief Example:

You begin your park adventure by clicking the explore button, which will take you to a list of natural parks in the US, you can click a Park from the list and add it to your personal pass, but in order to do this, you need first to sign up, of course in the “sing up button” and then login. Then in your “My Park Pass” can see your parks, and click if you have haiked, and you can also delete a park from your Pass.

## Motivation 
We hope this site can get people back outside where they can once again explore nature. National parks are vital to the health and ecosystem of many communitites and we hope this site can spread a little love for them.

## Link To Deployed App:
https://parkpassadventure.netlify.app/

## Tech Frame Used
- Built with React v17.0

## Technologies
- Visual Studio Code Version 1.60.1
- React
- bootstrap
-Toast Notifications 
-JavaScript 
-CSS
-HTML

## Installation Instructions
Note: This app was created using Visual Studio Code Version 1.60.1. 
Fork and clone the repo using either SSH or HTTPS in a directory of your choice.

In terminal:

```
$ git clone [SSH/HTTPS KEY]
```
This is a react app and will require that relevant dependencies are downloaded. Move into the repo directory (named seir-project-3)

```
$ cd ./seir-project-3
````
and run npm install to download relevant dependencies:

```
$ npm install
```
Once dependencies are installed, open the app in your IDE of choice (this example uses Visual Studio Code terminal command). Then start the app with 'npm start': 

```
$ code . 
$ npm start
```
To view main files, open the src directory. App.js contains the main code for the app and relevant components can be found in the components folder. 

## Note on API Used
This site used the following API to seed the initial data used in the backend server: https://www.nps.gov/subjects/developer/api-documentation.htm

The list of parks visible in the app were seeded used a router.get function, routing to the '/parks' endpoint of the base url list above.
Another router.get allows us to display the parks.
In order for users to create (generate) their own wish list of parks (ParkPass) to visit we used a router.post.
To update the user's ParkPass we used router.patch and router.put functions.
In order to delete parks from the ParkPass we used a router.delete function.


## List of Features / User Stories:

--MVP: 
* As a user, I would like to be able to see a list of national parks, with a brief description on the location so I can browse the collection. (Complete)
* As a user, I would like to be able to use my ParkPass to add parks that I would like to hike at. (Complete)
* As a user, I would like to mark off parks I have hiked at. (Complete)

--Bronze: 
* As a user, I would like to be able to get information on the campgrounds within the park in order to better plan my trip. 
* As a user, I would like to be able to get a list of recommended activities to do within the park (astronomy, hiking, wildlife watching, etc.) in order to better understand what type of events each destination offers.  (Complete)

--Silver: 
* As a user, I would like to get a “Things To Do” List for specific things I can do at the park and add these to my own Activities list for better planning. 

--Gold:
* As a user, I would like to be able to log in to my own personal PassPark account so that I can have a personal profile.(complete) 
* As a user, I would like to be able to track my miles hiked and have a graph display the data.
* As a user, I would like to be able to see live footage of the campgrounds in order to virtually experience what it would like to be there. 
* As a user, I would like to be able to provide reviews for the parks I’ve hiked.



## Contribution Guidelines
Please provide feedback as I'd love to improve!
- Report a bug
- Submit a fix
- Propose new features

### All Change Happens with Github Pull Requests
1. Fork the repo and create a new branch.
2. Any additional API's should be added to the documentation.
3. Make sure your code is tested.
5. Run num run lint for style unification!
4. Issue the pull request.

### Report bugs via Issue
1. Provide a description of the bug.
2. How it was produced and steps to reproduce. (Be thorough!)
3. Expected behavior and what actually happened.
4. Notes: Any errors you received that you think may be useful.

