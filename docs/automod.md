---
id: automod
title: AutoMod
---

This article will walk you through setting up, configuring and using BulbBot AutoMod™️ in your server.

## AutoMod Logging
---
AutoMod has its own special log type which will log all censored messages in a channel you selected. You can configure this channel using `!configure automod <channel>`

:::caution note
AutoMod will **not** log or cache messages until you enable it with `!automod enable`
:::

Once enabled, AutoMod will delete, log and action on any messages violating our checks. These messages will log in your desired channel.

![AutoMod_Logging](https://cdn.klukcz.me/img/R0y76rXe.png)

## AutoMod Censoring
---
BulbBot AutoMod currently offers `6` censoring options `messages`, `mentions`, `words`, `words_token`, `websites` and `invites`.

These censoring options are divided into two categories. `messages` and `mentions` can only use **limits** while `websites`, `words` and `invites` can only use **blacklists and whitelists**. 

### Limits
---
:::caution note
Messages containing user mentions are cached in the AutoMod cache for `15 seconds` while messages not containing mentions are only cached for `10 seconds`.
:::

Once you set up mention or message limits BulbBot will cache all messages and messages containing mentions respectively. You can
set up mention or message limits using the `!am limit mentions <limit>` or `!am limit messages <limit>` commands. Once a user has
violated these checks the configured action will trigger and BulbBot will log the check violation in your automod channel.

![Mentions](https://cdn.klukcz.me/img/HwPKwUAX.png)

### Words/Words_token
---
BulbBot censoring allows you to set up two different checks for swear words `words` and `words_token`.
`words` only checks for standalone words while `words` checks for the token anywhere in the message.
You can configure them using `!am words add <word>` or `!am words_token add <word>`.

![Words](https://cdn.klukcz.me/img/IH9xyN7M.png)

:::tip note
Both `words` and `words_token` use the **same** configured punishment from `words`
:::

### Invites
---
The **invites** check will check all messages for Discord invites and will action on and delete messages that contain any invites that are not whitelisted.
You can whitelist invites using the `!am add invites <invite>` command.

:::note tip
We recommend using the full invite link (i.e https://discord.gg/invite/bulbbot) to make sure everything works correctly
:::

![Invites](https://cdn.klukcz.me/img/ZR4TmAMD.png)
### Websites
---
The **website** check will check all messages for any websites and will action on and delete messages that violate this check unless the message contains a whitelisted website.
You can whitelist websites using the `!am add website <website>` command.

![Websites](https://cdn.klukcz.me/img/CrEpLwOB.png)
## AutoMod Punishments
---
BulbBot currently allows you to configure **4** different automod actions.
* `LOG` - Deletes and logs the censored content in your logging channel
* `WARN` - Warns the user, deletes and logs the censored content in your logging channel
* `KICK` - Kicks the user, deletes and logs the censored content in your logging channel
* `BAN` - Cleanbans the user and logs the censored content in your logging channel

You can configure them using the `!am punishment <check> <action>` command. Let's set the auto response for `mentions` to ban as an example:

![Punishments](https://cdn.klukcz.me/img/A5eSqFfM.png)
