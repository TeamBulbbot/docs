---
id: getting-started
title: Getting Started
---

This guide will take you through a quick and simple way to add and set up BulbBot in your server!

### 1. Adding the bot to your server

You can find the invite link for BulbBot [here](https://discord.com/oauth2/authorize?client_id=755149065137815623&scope=bot&permissions=1573252311)

![Invite](https://cdn.klukcz.me/img/nvwwkIET.gif)

### 2. Configuring BulbBot's prefix

By default, BulbBot will listen to `!` as it's prefix. There is however a vast amount of bots that also use `!` as their prefix, and they might interfere with BulbBot. You can change BulbBot's prefix in your server using the `!configure prefix <prefix>` command.

:::tip
You can ping BulbBot, and it'll respond and tell you what is its prefix in your server!
:::

![Prefix](https://cdn.klukcz.me/img/BynPfK8e.gif)

### 3. Configuring logging

BulbBot comes with powerful logging features that allow you to log any actions in your server from your Moderators taking actions on misbehavior to role and channel updates or even AutoMod violations that BulbBot detected. You can configure the logging channel and type using the `!configure <type> <channel>` command.
**Available logging types:** `mod_action`, `automod`, `messagelogs`, `rolelogs`, `memberlogs`, `channel` and `joinleave`

![Logging](https://cdn.klukcz.me/img/FfeLB0RD.gif)

### 4. Configuring the muted role

Dealing with spammers, trolls and other bad users joining your server can be a very daunting task, and at times you or your Moderators might want to prevent these users from causing more problems in your server by muting them. You can configure the muted role using the `!configure mute_role <role>` command.

![Mute_role](https://cdn.klukcz.me/img/lTxkFMM7.gif)

Aaand you're done! :tada: You just set up BulbBot's basic configuration in your server. There are of course many, many more configurable features BulbBot offers like Clearance Levels, Command and Role overrides, AutoMod and many more. The guide and documentation for all of them can also be found here!
