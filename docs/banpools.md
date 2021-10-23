---
id: banpools
title: Banpools / Crossbanning
---

:::caution note
Banpools and crossbanning is a **premium** only command currently. For more information about premium take a look at our article about it over [here](./about-premium.md)

:::


## What are banpools and crossbanning?
Banpools are organized groups of servers that share banning system together. Meaning that if a user is cross-banned in one server they will be banned in all other severs that are connected via banpools. 

Let's take a quick example:  
- Alice and Bob are friend and often face similar bad people  
- Alice creates a banpool with the name `bad-people-club`  
- Alice creates an invite and invites Bob to join the pool (the 2 servers are now connect to each other)  
- Bob crossbans a user in his server as he suspects that they will also join Alice's server 
- The user gets banned in both Bob's and Alice's server, easy and simple



## How to use it?
The process is split up into 2 parts. 
- First you need to create a banpool
- Secondly you need to use the new ban command `crossban`


Let's hope in, and we will guide you through the process

### Banpool Create
First we need to create a new banpool. We do this by using the command `!banpool create <pool name>`, here you will specify the name of the banpool you want to create.   

**OBS:** These names are globally unique and 2 banpools of the same name **can't** exist. 

![BanpoolCreate](./assets/BanpoolCreate.png)

### Banpool Invite
Now when we got our new banpool we want to invite our friends to join it, so we are going to use the command `!banpool invite <pool name>`, this is will generate single use invite code that expires after 15 minutes to your banpool. Then they just entre the `!banpool join <code>` command in their server and you guys are fully linked together.

![BanpoolInvite](./assets/Banpool-Invite.gif)

### Banpool Join
Just enter the code you friend gave you (or if they were very kind they gave you the entire command)
![BanpoolJoin](./assets/BanpoolJoin.gif)

### Crossban
Now you and the servers that have joined the banpool is fully connected and ready to rock together. Using the new banning command `!crossban <user> <reason>` you are able to ban the user from all the servers that are connected. 
![Crossban](./assets/Crossban.gif)

### Banpool Leave
If you want leave a banpool, run the `!banpool leave <pool name>` command, and you will leave it. But if you accidentally leave just ask you friend for a new invite, and you will be back again.
![BanpoolLeave](./assets/BanpoolLeave.gif)

### Banpool Remove
As the creator of a banpool you have the ability to run the following 2 commands. `!banpool remove <serverId>` removes the server from the banpool.
![BanpoolRemove](./assets/BanpoolRemove.gif)


### Banpool Info
The other creator only command we have is `!banpool info <pool name>` which returns a list of all the data from the banpool and also which servers are connected to the pool currently.
![BanpoolInfo](./assets/BanpoolInfo.png)