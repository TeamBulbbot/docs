---
id: infractions
title: Infractions
---

This article will guide you through what infractions and how we use them with Bulbbot.

## What are infractions?
Infractions is the way you can keep track of what is happening without having to memories every single mod action that has happend on your server. Think of it like a large notepad of what is going on in your server.

An infraction is a number that is assigned to every single mod action that happen, for example say BadUser#0000 was banned the bot will then return a number let's say in this case its 140, that would the infraction number assinged to the ban of BadUser#0000 in your server. To note this number increments on global level.

In the following example the user who was banned has the infraction id of `8413` assinged to that ban (the infraction id also shows in the log if you have mod logging enabled on your server).
![Showing a ban with the infraction id of 8413](./assets/infractions-inf-id.png)

## How to view infractions?
There is a couple of ways to search infractions in your server. So let's start and go through all of them.

`!info [User]` The user info command will show the total amount of infractions a user has.  
![Userinfo command with 25 infractions](./assets/infraction-userinfo.png)

`!infraction search <user> [page]` The best way to get a list of all of the infraction a user has (to note will display a max of 25 infraction on each search use the page paramater to view more)
![Infraction search command](./assets/infraction-search.gif)

`!infraction modsearch <user>` To view what infractions a moderator has given use this command
![Infraction mod search command](./assets/infraction-modsearch.gif)

## Other infraction commands
`!infraction delete <infraction>` To delete an infraction from a user  
`!infraction claim <infraction>` To change the moderator to yourself on a infraction  
`!infraction update <infraction> <reason>` Update the reasoning for the infraction  
`!infraction offendersearch <user>` Search the user for infractionds  
