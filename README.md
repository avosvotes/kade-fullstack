# Fullstack exercise

This is an exercise about fullstack web development.

We expect you to have some prerequisites on :

- javascript
- React
- Express.js
- JWT

You should also have installed:

- node.js
- Yarn

## Context

Avosvotes is a french startup that is tending to encourage citizen participation through a next-generation dematerialized voting solution. Avosvotes is therefore developing a citizen consultation platform with two specificities, security (thanks to the blockchain) and the implementation of a know your customer (KYC) process with machine learning algorithm. 

For this exercice, we will develop a small secure voting web application. This application will allow citizens to fetch their personal ID informations once they have authenticated themselves. Furthermore, a super administrator will be able to fetch the voting history to count the votes.

WARNING: Citizen's personal ID information and voting history are extremely critical and confidential. A citizen must not be able to read or obtain another citizen's personal ID information, and no one except the super administrator can get the voting history.

Your goal here is to prove that you are capable to build and maintain a fullstack app in Javascript.
You should be particularly careful about security and data privacy.

## Your task

In this repository you will find a server and a React app.

- __Fork__ the project on your personal repository
- Push your __result Commit__ on your personal _fullstack exercise_ repository
- A minimum of __one__ commit for each part of the complete exercise
- Please use the __commit format__ described below:
    - #{exercise part number} {action verb infinitive form} {action} 
    - Exemple: "#1 Add token verification"
- Once you __finish__ the _fullstack exercise_ or time delay is complete, make a __pull request__
- Be careful to correctly __comment__ all the modification you will make on the source code
- During the exercise you will find some questions:
    - Write all your answer in the __report.md__ file
    - You must __argue__ your answer in __english__.
    - Finally, do not forget to give us your __feedback__ on this test in the _Feedback candidate_ section of the report.md file. You can write your feedback in english or in french as you wish.

### 1) I want to fetch my personnal ID information

Use the _database.js_ (kade-fullstack/server/src/) file from the server to interact with the database. The database is two simple json file _users.json_ (contains citizens personal informations) and _votes.json_ (contains the votes history). 

Thanks to the database.js functions, make one or more endpoints to communicate the information to the frontend. The ID of the connected user is in the token.

On the frontend side, print the obtained data (user informations and the votes) in the way that seems most appropriate to you. Organize the react depending on the given data.

__WARNING:__ A citizen must not be able to access the personal data of another one.

### 2) It is time to count the votes

Know, we would like to add a new functionality that allows a super administrator (super user) to access the full votes history, once authentified. 

It is necessary to obtain an admin token through the path /admin. There is a user of uid "admin" in the database.

You have to creat an endpoint only available for the super administrator and reject other users. One the front side, print a summary of the votes by ballot.

Here is the voting ballot data structure:

```json
{
    id: string, // Vote id (unique for each vote)
    uid: string, // Voter id
    vote: string, // Ballot id
    value: number, // Voting value
}
```

### 3) App of liberty

Good work! You add all the main functionalities. However, the platform still can be enriched and improved.

Here is an exhaustive list of ideas that can be implemented to improve the platform:
- Develop a function library on the frontend side to display all information well to users and the administror.
- Develop a security middleware

__NOTE:__ You are free to add your own functionality ideas. If you do so, please carefully explain them in the report.md file. It is not obliged to develop all these new functionalities. Only implemented functionalities will be evaluated. However, please consider at least 2 hours of work to try this exercise part.
