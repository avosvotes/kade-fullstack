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

AVosVotes (tl: ToYourVotes) is a french startup that is aiming to encourage citizen participation through a next-generation dematerialized voting solution. AVosvotes is therefore developing a citizen consultation platform with two specificities: Security (thanks to the blockchain) and Scalability with the implementation of a Know Your Customer (KYC) process with machine learning algorithm.

For this exercice, you will develop a small secure voting web application. This application will allow citizens to fetch their personal ID informations once they have authenticated themselves. Furthermore, a super administrator will be able to fetch the voting history to count the votes.

WARNING: Citizen's personal ID information and voting history are extremely critical and confidential. A citizen must not be able to read or obtain another citizen's personal ID information, and no one except the super administrator can get the voting history.

Your goal here is to prove that you are capable to build and maintain a fullstack app in Javascript.
You should be particularly careful about security and data privacy.

## Your task

In this repository you will find a server and a React app.

- __Fork__ the project on your personal repository
- Push your __result Commit__ on your personal _fullstack exercise_ repository
- A minimum of __one__ commit for each part of the complete exercise is required to be considered valid
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

On the frontend side, use react to display the information for a user. You have to get them from the backend, and display them in a way that makes sense according to the data you receive.

### 2) It is time to count the votes

Now, we would like to add a new feature that allows a super administrator (super user) to access the full votes history, once authentified. 

It is necessary to obtain an admin token through the path /admin. There is a user of uid "admin" in the database.

You have to create an endpoint only available for the super administrator and reject other users. One the front side, print a summary of the votes by ballot.

Here is the voting ballot data structure:

```javascript
{
    id: string, //Vote id (unique for each vote)
    uid: string, // Voter id
    vote: string, // Ballot id
    value: number, // Voting value
}
```

### 3) Blockchain integration

The strength of the Avosvotes app lies in it's use of the Tezos blockchain. Indeed, this is an important aspect of the tools designed by the company! It greatly improves the security and monitoring of ballots organized via the platform you may be working on. In this context, a question deserves consideration : 

How would you see the integration of a blockchain to secure the voting process ? By that, we are waiting for your vision around the use of this technology for vote registration.

We do not expect a detailed answer within the associated part in the __report.md__ file, knowing that this is an open question.. 


### 4) App of liberty

Good work! You add all the main features. However, the platform still can be enriched and improved.

Here is an non-exhaustive list of ideas that can be implemented to improve the platform:
- Develop a function library on the frontend side to display all information well to users and the administror.
- Develop a security middleware

__NOTE:__ Feel free to add your own feature ideas. If you do so, please carefully explain them in the report.md file. It is not required to develop all these new features. Only implemented features will be evaluated. 2 hours are a minimum to try to complete this part. Otherwise, be precise on what you did, and how you proceed.
