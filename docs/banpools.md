---
id: banpools
title: Banpools / Crossbanning
---

:::caution note
Banpools and crossbanning is a **premium** only command currently. For more information about premium take a look at our article about it over [here](./about-premium.md)

:::


## What are banpools and crossbanning?
Banpools are organized groups of servers that share banning system togheter. Meaning that if a user is crossbanned in one server they will be banned in all other severs that are connect via banpools. 

Let's take a quick example:  
- Alice and Bob are friend and often face similare bad people  
- Alice creates a banpool with the name `bad-people-club`  
- Alice creates an invite and invites Bob to join the pool (the 2 servers are now connect to each other)  
- Bob crossbans a user in his server as he suspects that they will also join Alices server 
- The user gets banned in both Bob's and Alices server, easy and simple



## How to use it?
The proccess is split up into 2 parts. 
- First you need to create a banpool
- Secondly you need to use the new ban command `crossban`


Let's hope in and we will guide you thrugh the proccess

### Banpool Create
First of all we need to create a new banpool. We do this by using the command `!banpool create <pool name>`, here you will specify the name of the banpool you want to create.   

**OBS:** These names are globally unique and 2 banpools of the same name **can't** exist. 

![BanpoolCreate](./assets/Banpool_Create.png)

### Banpool Invite
Now when we got our new banpool we want to invite our friends to join it, so we are going to use the command `!banpool invite <pool name>`, this is will generate single use invite code that expires after 15 minutes to your banpool. Then they just entre the `!banpool join <code>` command in their server and you guys are fully linked togheter.

![BanpoolInvite](./assets/Banpool_Invite.gif)

### Banpool Join
Just enter the code you friend gave you (or if they were very kind they gave you the entire command)
![BanpoolJoin](./assets/Banpool_Join.gif)

### Crossban
Now you and the servers that have joined the banpool is fully connected and ready to rock togheter. Using the new banning command `!crossban <user> <reason>` you are able to ban the user from all of the servers that are connected. 
![Crossban](./assets/Crossban.gif)

### Banpool Leave
If you want leave a banpool, run the `!banpool leave <pool name>` command and you will leave it. But if you accidently leave just ask you friend for a new invite and you will be back again.
![BanpoolLeave](./assets/Banpool_Leave.gif)

### Banpool Remove
As the creator of a banpool you have the ability to run the following 2 commands. `!banpool remove <serverId>` removes the server from the banpool.
![BanpoolRemove](./assets/Banpool_Remove.gif)


### Banpool Info
The other creator only command we have is `!banpool info <pool name>` which returns a list of all the data from the banpool and also which servers are connected to the pool currently.
![BanpoolInfo](./assets/Banpool_Info.png)