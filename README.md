# Birdnest

## About
A preassignment coding excercise as described [here](https://assignments.reaktor.com/birdnest/).

The birdnest app shows a table of pilots who have flown their drones too close to the bird nest, in the No Drone Zone. The information is persisted for ten minutes after the drone was last seen by the equipment (I took this to mean when it was last seen on the whole 500mx500m perimeter).

### Technology choices
For the frontend, I chose to use React, since it has the state variable that makes it easy to re-render components when data changes. For the backend I chose Node and Express, because I have experience in these and I want to grow my skills and knowledge with them.

### Key takeaways
- Learning to use Server-Sent Events to send a stream of data to a client

## Demo
The demo of the app can be viewed here: https://birdnest-lamppu.vercel.app/ <br>
The server is running on: https://birdnest-hyl2.onrender.com/

## To-do
With this project, I felt like I fell a little short on time, so here is what I would improve:
- [ ] write thorough tests
- [ ] make the app more scalable by returning the list of table headers also from the server, so it would be easy to add information to the table if needed
- [ ] currently I am making changes to the same Map on the server in multiple different modules, so there is quite some room for error, so I would need to research what would be a better way of moving the data around

