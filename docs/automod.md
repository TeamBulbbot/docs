---
id: automod
title: AutoMod
---

This article will walk you through setting up, configuring and using Bulbbot automod™️ in your server.

## Auto Mod Logging
---
Automod has its own special log type which will log all censored messages in a channel you selected. You can configure this channel using `!configure logging automod <channel>`

:::caution note
Automod will **not** log or cache messages until you enable it with `!configure automod enable`
:::

Once enabled, AutoMod will delete, log and action on any messages violating our checks. These messages will log in your desired channel.

![AutoMod_Logging](./assets/Configuration/Automod.png)

## Auto Mod Censoring
---
Bulbbot AutoMod currently offers `6` censoring options `messages`, `mentions`, `words`, `words_token`, `websites` and `invites`.

These censoring options are divided into two categories. `messages` and `mentions` can only use **limits** while `websites`, `words` and `invites` can only use **blacklists and whitelists**. 

To view all of your automod configuration use the `!configure automod settings` command.

### Limits
---
:::caution note
Messages containing user mentions are cached in the Automod cache for `15 seconds` while messages not containing mentions are only cached for `10 seconds`.
:::

Once you set up mention or message limits Bulbbot will cache all messages and messages containing mentions respectively. You can
set up mention or message limits using the `!configure automod limit mentions <limit>` or `!configure automod limit messages <limit>` commands. Once a user has
violated these checks the configured action will trigger and Bulbbot will log the check violation in your automod channel.


### Words/Words_token
---
Bulbbot censoring allows you to set up two different checks for swear words `words` and `words_token`.
`words` only checks for standalone words while `words` checks for the token anywhere in the message.
You can configure them using `!configure automod words add <word>` or `!configure automod words_token add <word>`.



:::tip note
Both `words` and `words_token` use the **same** configured punishment from `words`
:::

### Invites
---
The **invites** check will check all messages for Discord invites and will action on and delete messages that contain any invites that are not whitelisted.
You can whitelist invites using the `!configure automod add invites <invite>` command.

:::note tip
We recommend using the full invite link (i.e https://discord.gg/invite/WgEtVqyNFZ) to make sure everything works correctly
:::
### Websites
---
The **website** check will check all messages for any websites and will action on and delete messages that violate this check unless the message contains a whitelisted website.
You can whitelist websites using the `!configure automod add website <website>` command.

## AutoMod Punishments
---
Bulbbot currently allows you to configure **4** different automod actions.
* `LOG` - Deletes and logs the censored content in your logging channel
* `WARN` - Warns the user, deletes and logs the censored content in your logging channel
* `KICK` - Kicks the user, deletes and logs the censored content in your logging channel
* `BAN` - Cleanbans the user and logs the censored content in your logging channel

You can configure them using the `!configure automod punishment <check> <action>` command. Let's set the auto response for `mentions` to ban as an example:


