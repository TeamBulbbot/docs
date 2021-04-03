---
id: getting-started
title: Getting Started
---

This guide will take you through a quick and simple way to add & set up BulbBot in your server!

### 1. Adding the bot to your server

You can find the invite link for BulbBot [here](https://discord.com/oauth2/authorize?client_id=755149065137815623&scope=bot&permissions=1573252311).

![Invite](https://cdn.klukcz.me/img/nvwwkIET.gif)

### 2. Configuring BulbBot's prefix

By default, BulbBot will listen to `!` as it's prefix. We recognize that a wide variety of other bots also use `!` as their prefix, which could interfere with using BulbBot. You can change BulbBot's prefix in your server using the `!configure prefix <prefix>` command.

:::tip
You can ping BulbBot and it'll respond with what its prefix is in your server!
:::

![Prefix](https://cdn.klukcz.me/img/BynPfK8e.gif)

### 3. Configuring logging

BulbBot comes with powerful logging features that allow you to log any actions in your server, from your Moderators taking actions on misbehavior, to role and channel updates, to even violations detected using BulbBot's AutoMod. You can configure logging channels using the `!configure <type> <channel>` command.
**Available logging types:** `mod_action`, `automod`, `messagelogs`, `rolelogs`, `memberlogs`, `channel` and `joinleave`

![Logging](https://cdn.klukcz.me/img/FfeLB0RD.gif)

### 4. Configuring the muted role

Dealing with spammers, trolls, and other problematic users joining your server can be a daunting task. At times, you or your Moderators might want to mute troublesome users to prevent them from causing more problems in your server. You can configure the muted role using the `!configure mute_role <role>` command.

![Mute_role](https://cdn.klukcz.me/img/lTxkFMM7.gif)

Aaand you're done! :tada: You've just set up BulbBot's basic configuration in your server. There are of course many, many more configurable features BulbBot offers like Clearance Levels, Command and Role overrides, AutoMod, and much more. The guides and documentation for all of our features can also be found on this site!
