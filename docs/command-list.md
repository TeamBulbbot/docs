---
id: command-list
title: Command List
---

:::info note
- Bulbbot's default prefix is `!` unless you've changed it yourself using the `!configure` command. You can check Bulbbot's prefix in your server by mentioning `@Bulbbot#1439`
- Bulbbot also offers commands via Discords slash commands `/`, for more info see [this article about it](slash-commands)
- Arguments such as `User` or `Member` can be parsed **multiple ways**, either as a mention `@KlukCZ#6589` or User ID `439396770695479297`
- The `Time` argument must be parsed as a standard moment time (`1h`, `30m` etc.)
:::
  
### Bot
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| about | `bot` | 0 | Returns some useful information about the bot | about |  |
| commands |  | 0 | Return a list of all available commands to Bulbbot | commands |  |
| github | `code`, `sourcecode` | 0 | Return a link to the github repository | github |  |
| help |  | 0 | Gets useful information about a given command | help &lt;command&gt; [subcommand...] | `command:string` |
| invite | `support` | 0 | Returns the invite link for the bot and the support guild | invite |  |
| license |  | 0 | Returns the license file for the Github repo for the bot | license |  |
| ping |  | 0 | Return the Websocket and API latency | ping |  |
| privacypolicy |  | 0 | Returns the privacy policy for the bot | privacypolicy |  |
| badges |  | 0 | Returns the amount of badges in the server | badges |  |


### Configuration
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| configure mute_role | `muterole` | 75 | No description provided | configure mute_role &lt;role&gt; | `role:Role` |
| configure timezone | `zone`, `tz` | 75 | No description provided | configure timezone &lt;zone&gt; | `timezone:string` |
| configure prefix |  | 75 | No description provided | configure prefix &lt;prefix&gt; | `prefix:string` |
| configure logging | `log`, `logs` | 75 | No description provided | configure logging &lt;part&gt; &lt;channel&gt; | `part:string`, `channel:Channel` |
| configure auto_role | `autorole` | 75 | No description provided | configure auto_role &lt;role&gt; | `role:Role` |
| configure override create |  | 75 |  No description provided  | configure override create &lt;part&gt; &lt;name&gt; &lt;clearance&gt; | `part:string`, `name:string`, `clearance:number` |
| configure override disable |  | 75 |  No description provided  | configure override disable &lt;command&gt; | `command:string` |
| configure override edit |  | 75 |  No description provided  | configure override edit &lt;part&gt; &lt;name&gt; &lt;clearance&gt; | `part:string`, `name:string`, `clearance:number` |
| configure override enable |  | 75 |  No description provided  | configure override enable &lt;command&gt; | `command:string` |
| configure override list |  | 75 |  No description provided  | configure override list | `command:string` |
| configure override delete | `remove`, `rm` | 75 |  No description provided  | configure override delete &lt;part&gt; &lt;name&gt; | `part:string`, `name:string` |
| configure override | `overide` | 75 | No description provided | configure override &lt;action&gt; | `action:string` |
| configure automod enable |  | 75 |  No description provided  | configure automod enable |  |
| configure automod settings |  | 75 |  No description provided  | configure automod settings |  |
| configure automod add |  | 75 |  No description provided  | configure automod add &lt;part&gt; &lt;item&gt; [items...] | `part:string`, `item:string` |
| configure automod disable |  | 75 |  No description provided  | configure automod disable [part] |  |
| configure automod remove | `rm` | 75 |  No description provided  | configure automod remove &lt;part&gt; &lt;item&gt; [items...] | `part:string`, `item:string` |
| configure automod punishment | `punish` | 75 |  No description provided  | configure automod punishment &lt;part&gt; &lt;punishment&gt; | `part:string`, `punishment:string` |
| configure automod limit |  | 75 |  No description provided  | configure automod limit &lt;part&gt; &lt;limit&gt; &lt;timeout&gt; | `part:string`, `limit:number`, `timeout:number` |
| configure automod | `am` | 75 | No description provided | configure automod &lt;action&gt; | `action:string` |
| configure actions_on_info |  | 75 | No description provided | configure actions_on_info &lt;true|false&gt; | `enabled:boolean` |
| configure language |  | 75 | No description provided | configure language &lt;language&gt; | `language:string` |
| configure roles_on_leave | `rolesonleave` | 75 | No description provided | configure roles_on_leave &lt;true|false&gt; | `enabled:boolean` |
| settings |  | 75 | Get the settings for the guild | settings |  |
| setup |  | 75 | Configures the bot in your guild | setup [part] |  |


### Information
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| charinfo |  | 0 | Returns information about the characters provided | charinfo &lt;characters&gt; | `characters:string` |
| inviteinfo | `inv` | 0 | Returns some useful info about a guild from the invite link | inviteinfo &lt;invitecode&gt; | `invitecode:string` |
| server | `server` | 50 | Returns some useful information about the current Guild | server |  |
| userinfo | `whois`, `info`, `user` | 50 | Returns some useful info about a user | userinfo [user] |  |


### Miscellaneous
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| uptime |  | 0 | No description provided | uptime |  |
| avatar |  | 0 | Gets a users avatar picture | avatar [user] | `user:User` |
| jumbo |  | 0 | Sends a bigger version of the given emote(s) | jumbo &lt;emote&gt; | `emote:Emote` |
| permissions | `perms` | 0 | Gets permission names from a permission integer | permissions &lt;permissions&gt; | `permissions:integer` |
| remind remove | `yeet`, `delete` | 0 | No description provided | remind remove &lt;id&gt; | `id:number` |
| remind list |  | 0 | No description provided | remind list |  |
| remind set | `add` | 0 | No description provided | remind set &lt;duration&gt; &lt;reason&gt; | `duration:Duration`, `reason:String` |
| snowflake |  | 0 | Gets information about a given snowflake | snowflake &lt;snowflake&gt; | `snowflake:integer` |


### Moderation
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| ban | `terminate`, `yeet` | 50 | Bans or forcebans a user from the guild | ban &lt;user&gt; [reason] | `user:User` |
| cleanban |  | 50 | Bans a user and removes all their messages from the guild | cleanban &lt;member&gt; [reason] | `member:Member` |
| deafen |  | 50 | Deafens a member from a Voice Channel they're connected to | deafen &lt;user&gt; [reason] | `user:User` |
| infraction search |  | 50 | No description provided | infraction search &lt;user&gt; [page] | `user:User`, `page:number` |
| infraction info |  | 50 | No description provided | infraction info &lt;id&gt; | `id:number` |
| infraction claim |  | 50 | No description provided | infraction claim &lt;infraction&gt; | `infraction:int` |
| infraction update |  | 50 | No description provided | infraction update &lt;infraction&gt; &lt;reason&gt; | `infraction:int`, `reason:string` |
| infraction modsearch | `msearch` | 50 | No description provided | infraction modsearch &lt;user&gt; | `user:User` |
| infraction offendersearch | `osearch` | 50 | No description provided | infraction offendersearch &lt;user&gt; | `user:User` |
| infraction delete | `del`, `remove` | 50 | No description provided | infraction delete &lt;infraction&gt; | `infraction:int` |
| kick |  | 50 | Kicks a user from the guild | kick &lt;member&gt; [reason] | `member:Member` |
| lockdown |  | 50 | Locks/unlocks a selected channel | lockdown &lt;channel&gt; &lt;true|false&gt; | `channel:Channel`, `lock:boolean` |
| multiban | `mban` | 50 | Bans or forcebans multiple people from a guild | multiban &lt;user&gt; &lt;user2&gt;.... [reason] | `user:User` |
| multikick | `mkick` | 50 | Kicks multiple people from a guild | multikick &lt;member&gt; &lt;member2&gt;.... [reason] | `member:Member` |
| multiunban | `munban` | 50 | Unbans multiple people from a guild | multiunban &lt;user&gt; &lt;user2&gt;... [reason] | `user:User` |
| multiwarn | `mwarn` | 50 | Warns multiple selected users | multiwarn &lt;member&gt; &lt;member2&gt;... [reason] | `user:User` |
| mute | `tempmute` | 50 | Mutes the selected user | mute &lt;member&gt; &lt;duration&gt; [reason] | `member:Member`, `duration:Duration` |
| nickname | `nick` | 50 | Nicknames a user from the current server | nickname &lt;member&gt; [nickname] [reason] | `member:Member` |
| purge all |  | 50 | No description provided | purge all &lt;number&gt; | `amount:int` |
| purge embeds |  | 50 | No description provided | purge embeds &lt;number&gt; | `amount:int` |
| purge images |  | 50 | No description provided | purge images &lt;number&gt; | `amount:int` |
| purge bots |  | 50 | No description provided | purge bots &lt;number&gt; | `amount:int` |
| purge emojis |  | 50 | No description provided | purge emojis &lt;number&gt; | `amount:int` |
| purge user |  | 50 | No description provided | purge user &lt;member&gt; &lt;amount&gt; | `member:Member`, `amount:int` |
| purge contains |  | 50 | No description provided | purge contains &lt;query&gt; &lt;amount&gt; | `query:string`, `amount:int` |
| purge between |  | 50 | No description provided | purge between &lt;context1&gt; &lt;context2&gt; | `message1:Snowflake`, `message2:Snowflake` |
| slowmode |  | 50 | Sets a slowmode to the selected channel | slowmode &lt;duration&gt; [channel] | `duration:Duration` |
| softban | `cleankick` | 50 | Bans and unbans a user from the guild | softban &lt;member&gt; [reason] | `member:Member` |
| tempban | `tempyeet` | 50 | Temporarily bans the selected user from the server | tempban &lt;member&gt; [reason] | `member:Member` |
| unban | `pardon` | 50 | Unban a user from the guild | unban &lt;user&gt; [reason] | `user:User` |
| undeafen |  | 50 | Undeafens a member from a Voice Channel they're connected to | undeafen &lt;user&gt; [reason] | `member:Member` |
| unmute |  | 50 | Unutes the selected user | unmute &lt;member&gt; [reason] | `member:Member` |
| verification |  | 75 | Changes the server verification level | verification |  |
| warn |  | 50 | Warns the selected guild member | warn &lt;member&gt; [reason] | `member:Member` |


