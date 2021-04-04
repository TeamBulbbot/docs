---
id: automod
title: AutoMod
---

:::caution note
This article is under construction
:::

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

### Words/Words_token
---

## AutoMod Punishments
---

## AutoMod Limits
---
