---
id: automod
title: Auto Moderation
---

This article will walk you through setting up, configuring, and using Bulbbot automod™️ in your server.

## Auto Moderation Logging
---
Automod has its own special log type which will log all censored messages in a channel you select. You can configure this channel using `!configure`

:::caution note
Automod will **not** log or cache messages until you enable it with `!configure`
:::

Once enabled, AutoMod will delete, log and action on any messages violating our checks. These messages will log in your desired channel.

![AutoMod_Logging](../assets/Configuration/Automod.png)

## Auto Moderation Censoring
---
Bulbbot AutoMod currently offers `7` censoring options `messages`, `mentions`, `words`, `words_token`, `websites`, `avatars` ([more info here](../moderating/avatar-banning.md)) and `invites`.

These censoring options are divided into two categories. `messages` and `mentions` can only use **limits** while `websites`, `words` and `invites` can only use **blacklists and whitelists**. 

### Limits
---
:::caution note
Messages containing user mentions are cached in the Automod cache for `15 seconds` while messages that do not contain mentions are only cached for `10 seconds`.
:::

Once you set up mention or message limits Bulbbot will cache all messages and messages containing mentions respectively. Once a user has
violated these checks the configured action will trigger and Bulbbot will log the check violation in your automod channel.


### Words/Words_token
---
Bulbbot censoring allows you to set up two different checks for swear words `words` and `words_token`.
`words` only checks for standalone words while `words_token` checks for the word token anywhere in the message.

:::tip note
Both `words` and `words_token` use the **same** configured punishment from `words`
:::

### Invites
---
The **invites** check will check all messages for Discord invites and will action on and delete messages that contain any invites that are not whitelisted.

:::note tip
We recommend using the full invite link (i.e https://discord.gg/invite/WgEtVqyNFZ) to make sure everything works correctly
:::
### Websites
---
The **website** check will check all messages for any websites and will action on and delete messages that violate this check unless the message contains a whitelisted website.

## Auto Moderation Punishments
---
Bulbbot currently allows you to configure **4** different automod actions.
* `LOG` - Deletes and logs the censored content in your logging channel
* `WARN` - Warns the user, deletes and logs the censored content in your logging channel
* `KICK` - Kicks the user, deletes and logs the censored content in your logging channel
* `BAN` - Cleanbans the user and logs the censored content in your logging channel
