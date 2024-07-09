---
id: setup-dev-rs
title: Setup development environment (Rust)
sidebar_position: 2
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::caution note

The code for Bulbbot is fully open sourced and we allow the community to contribute to the codebase.  
Please note that **you may not host your own version of Bulbbot publicly and or provide support for the bot in any way.**
You are however allowed to host a private version of the bot that can be used in private servers.

**We also offer **no** support for selfhosting the bot. You're on your own here, so proceed at your own risk!**
:::


## Prerequisites

- [Rust (>1.74.1)](https://www.rust-lang.org/tools/install)
- [PostgreSQL](https://www.postgresql.org/download/)
- [diesel_cli](https://github.com/diesel-rs/diesel/blob/master/diesel_cli/README.md)
- [Git](https://git-scm.com/downloads)
- [RabbitMQ](https://www.rabbitmq.com/docs/platforms)

### Installing and running RabbitMQ Docker (recommended)

(Windows Step) Install [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)
```shell
$ docker run --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
``` 
**Optional flags:** 
- `-it`: [Interactive window](https://stackoverflow.com/a/48368594)
- `--rm`: [Tells docker that the container should automatically be removed after we close docker](https://stackoverflow.com/a/49726371)

Now going to http://localhost:15672 will bring you the management window where you can monitor the queues.
> **Default username:** guest  
> **Default password:** guest  


### Getting a Discord token

1. First go to https://discord.com/developers/applications (sign into with your Discord account if needed)
2. Press "New Application"
3. Give your application a name (in my case `Cool Bot Name`)
4. Copy the application id (in my case `892043097758912593`)
5. Head over to the "Bot" settings
6. Press "Add Bot"
7. Press "Yes, do it!"
8. Copy the bot token **KEEP THIS SAFE** (for example `ODkyMDQzMDk3NzU4OTEyNTkz.Totally.Real.Token`, this is your Discord bot token)
9. Scroll down to "Privileged Gateway Intents"
10. Toggle the "Server Members Intent" and "Message Content Intent"
11. The bot can then be added to your server with the url  
    https://discord.com/oauth2/authorize?client_id=APPLICATION_ID&permissions=261955644663&scope=bot+applications.commands

![Gif on how to get the bot token](../assets/Community/Get_Bot_Token.gif)

### Download the code

```shell
$ git clone https://github.com/TeamBulbbot/bulbbot-rs.git
```

## Service setup
During each of these services will we assume you are the root of the project the "bulbbot-rs" folder.

### [bulbbot.Gateway](https://github.com/TeamBulbbot/bulbbot-rs/tree/master/bulbbot.Gateway)
```shell
$ cd bulbbot.Gateway
```

Copy the env file
```shell
$ cp .env.example .env    
$ vim .env                
```
*bulbbot-rs/bulbbot.Gateway/.env*
```shell
ENVIRONMENT=development

DISCORD_TOKEN=

RABBIT_MQ_URL=localhost:5672
RABBIT_MQ_USERNAME=guest
RABBIT_MQ_PASSWORD=guest

SERVER_PORT=8080

ZIPKIN_URL=                 # optional, cannot be left empty should be valid http url like http://localhost
```

After this we should be ready to run the service
```shell
$ cargo run
```

### [bulbbot.GatewayHandler](https://github.com/TeamBulbbot/bulbbot-rs/tree/master/bulbbot.GatewayHandler)
```shell
$ cd bulbbot.GatewayHandler
```

Copy the env file
```shell
$ cp .env.example .env    
$ vim .env                
```
*bulbbot-rs/bulbbot.GatewaHandler/.env*
```shell
ENVIRONMENT=development

RABBIT_MQ_URL=localhost:5672
RABBIT_MQ_USERNAME=guest
RABBIT_MQ_PASSWORD=guest

SERVER_PORT=8080

ZIPKIN_URL=                 # optional, cannot be left empty should be valid http url like http://localhost
```

After this we should be ready to run the service
```shell
$ cargo run
```

### [bulbbot.MessageService](https://github.com/TeamBulbbot/bulbbot-rs/tree/master/bulbbot.MessageService)
```shell
$ cd bulbbot.MessageService
```

Copy the env file
```shell
$ cp .env.example .env    
$ vim .env                
```
*bulbbot-rs/bulbbot.MessageService/.env*
```shell
ENVIRONMENT=development

SERVER_PORT=3521

DATABASE_URL=postgresql://USERNAME:PASSWORD@DB_HOST:5432/dev-message-service

ZIPKIN_URL=                 # optional, cannot be left empty should be valid http url like http://localhost
```

Creating the database and tables
```shell
$ diesel database setup
```

After this we should be ready to run the service
```shell
$ cargo run
```

### [bulbbot.GuildService](https://github.com/TeamBulbbot/bulbbot-rs/tree/master/bulbbot.GuildService)
```shell
$ cd bulbbot.GuildService
```

Copy the env file
```shell
$ cp .env.example .env    
$ vim .env                
```
*bulbbot-rs/bulbbot.GuildService/.env*
```shell
ENVIRONMENT=development

SERVER_PORT=4614

DATABASE_URL=postgresql://USERNAME:PASSWORD@DB_HOST:5432/dev-guild-service

ZIPKIN_URL=                 # optional, cannot be left empty should be valid http url like http://localhost
```

Creating the database and tables
```shell
$ diesel database setup
```

After this we should be ready to run the service
```shell
$ cargo run
```