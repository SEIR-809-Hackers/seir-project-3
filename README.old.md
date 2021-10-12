# seir-project-3

a) Description:

ParkPass is a full-stack application that allows a user to search through a database of national parks and save them. When saved, a park will be added to a user’s page and displayed as a card. Users can then check off if they’ve hiked at the selected park and add a review of their experience, which can be created, edited, and deleted. 


b) Brief Example:

You begin your park adventure by clicking the explore button, which will take you to a list of natural parks in the US, you can click a Park from the list and add it to your personal pass, but in order to do this, you need first to sign up, of course in the “sing up button” and then login. Then in your “My Park Pass” can see your parks, and click if you have haiked, and you can also delete a park from your Pass.


c) List of Features / User Stories:

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





d) List of Technologies Used:
    -React
    -bootstrap
    -Toast Notifications 
    -JavaScript 
    -CSS
    -HTML
    

e) Installation Instructions / Getting Started:

   First, we install the basic backend application, then we split into two different groups, 1 with FrontEnd, the other   one with BackEnd, We organize the FrontEnd into 3 different folders of components. We also did some files  .json to     test our components and connections, then we connect it with the National Parks API & our own API. by seeding our       database.
   
   All data about the parks were accessed from the National Park Service (NPS) API at https://www.nps.gov/subjects/developer/api-documentation.htm, using the following: [ Base URL: developer.nps.gov/api/v1 ]


The list of parks visible in the app were seeded used a router.get function, routing to the '/parks' endpoint of the base url list above.
Another router.get allows us to display the parks.
In order for users to create (generate) their own wish list of parks (ParkPass) to visit we used a router.post.
To update the user's ParkPass we used router.patch and router.put functions.
In order to delete parks from the ParkPass we used a router.delete function.

f) Contribution Guidelines:
  Please visit our GitHub page at : https://github.com/SEIR-809-Hackers/seir-project-3


---A link to the project's main repository
---A link to the project's issue tracker
