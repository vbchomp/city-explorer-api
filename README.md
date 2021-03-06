# Project Name

**Author**: Heather Bisgaard
**Version**: 1.0.5 (increment the patch/fix version number if you make more commits past your first submission)
[**Heroku Deployed Site**:](https://city-explorer-api-hbisgaard.herokuapp.com/)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
Node JS server that connects a weather json file, takes the name of a city from a request, and returns the three days of weather data for the chosen city.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
1. Create .env file. Make this file to hold you API keys. If they are for the back end server app, you will need to type the variable for the key. Then the = and paste the key in. See the SAMPLE.env file for an example. Then enter .env in your .gitignore file.

2. You will need to create a server component and 'npm i' all the node js components like dotenv, cors, and express.

3. You will need to question your sanity and wonder why in the hell you signed up for something that makes you want pull your hair out one strand at a time.

4. You will need to create endpoints for your APIs.

5. Your server cache would get reset when your server restarts, when you clear your cache, when you redeploy.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Axios, LocationIQ, Weather API, MovieDB, GitHub, Netlify, Heroku, Trello..

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

- Connor Boyce, Software Developer, [CityExplorerUML](data/CityExplorerApiUML.png)
- Ryan Gallaway, Instructor
- Kristian Esvelt, TA
- JP Jones, Instructor, helped me refactor and get my weather component working after discovering that I did not have to create a new city API in the City Explorer API repo.
- Willem Jacobs, Software Developer, helped me try to figure out why heroku deployment was not working.
- Fizzo Pannosch, Grading TA, helped with the heroku debacle.
- Chance Harmon and Hexx King, TAs, helped figure out how to refactor for cache storage on server since I had set up my getMovies component a little too compactly. I did not know how to divide up my axios.get callback into an if, else statement to allow for the cache to conditionally go through the movies to see if they were in storage yet or not.

## Time Estimates

Name of feature: Setup

Estimate of time needed to complete:

Start time:

Finish time:

Actual time needed to complete:

---

Name of feature:

Estimate of time needed to complete:

Start time:

Finish time:

Actual time needed to complete:
