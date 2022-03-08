---
id: command-list
title: Command List
---

:::info note
- Bulbbot offers only commands via Discords slash commands `/`, for more info see [this article about it](slash-commands)
- Arguments such as `User` or `Member` can be parsed **multiple ways**, either as a mention `@KlukCZ#6589` or User ID `439396770695479297`
- The `Time` argument must be parsed as a standard moment time (`1h`, `30m` etc.)
:::
  
### Bot
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| about | `bot` | 0 | Returns some useful information about the bot | about |  |
| commands |  | 0 | Returns a list of all available commands to Bulbbot | commands |  |
| github | `code`, `sourcecode` | 0 | Returns a link to the github repository | github |  |
| help |  | 0 | Gets useful information about a given command | help &lt;command&gt; [subcommand...] | `command:String` |
| invite | `support` | 0 | Returns the invite link for the bot and the support server | invite |  |
| license |  | 0 | Returns the license file for the Github repo for the bot | license |  |
| ping |  | 0 | Returns the Websocket and API latency | ping |  |
| privacypolicy |  | 0 | Returns the privacy policy for the bot | privacypolicy |  |
| uptime |  | 0 | Shows the bot's uptime. | uptime |  |


### Configuration
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| banpool create |  | 100 | Create a new banpool. | banpool create &lt;pool name&gt; | `pool name:String` |
| banpool delete | `del` | 100 | Delete a banpool. | banpool delete &lt;pool name&gt; | `pool name:String` |
| banpool invite | `inv` | 100 | Generates an invite code for the specified ban pool. | banpool invite &lt;pool name&gt; | `pool name:String` |
| banpool join |  | 100 | Join a banpool. | banpool join &lt;code&gt; | `code:String` |
| banpool leave |  | 100 | Manage banpools. | banpool leave &lt;pool name&gt; | `pool name:String` |
| banpool remove | `kick` | 100 | Removes a guild from a banpool. | banpool remove &lt;guildId&gt; &lt;poolname&gt; | `guildId:Snowflake`, `pool name:String` |
| banpool info |  | 100 | Get information about a banpool. | banpool info &lt;pool name&gt; | `pool name:String` |
| banpool list |  | 100 | Manage banpools. | banpool list |  |
| configure timezone | `zone`, `tz` | 75 | Sets the timezone for the server. | configure timezone &lt;zone&gt; | `timezone:String` |
| configure prefix |  | 75 | Sets the prefix for the bot. | configure prefix &lt;prefix&gt; | `prefix:String` |
| configure logging | `log`, `logs` | 75 | Configure the logging of a part of the bot. | configure logging &lt;part&gt; &lt;channel&gt; | `part:String`, `channel:ChannelText` |
| configure auto_role | `autorole` | 75 | Sets the role that will be given to users when they join the server. | configure auto_role &lt;role&gt; | `role:Role` |
| configure override create |  | 75 |  Creates a new override for the specified part.  | configure override create &lt;part&gt; &lt;name&gt; &lt;clearance&gt; | `part:String`, `name:String`, `clearance:Number` |
| configure override disable |  | 75 |  Disables a command  | configure override disable &lt;command&gt; | `command:String` |
| configure override edit |  | 75 |  Updates a clearance level.  | configure override edit &lt;part&gt; &lt;name&gt; &lt;clearance&gt; | `part:String`, `name:String`, `clearance:Number` |
| configure override enable |  | 75 |  Enables a command  | configure override enable &lt;command&gt; | `command:String` |
| configure override list |  | 75 |  Lists all overrides for the current server.  | configure override list | `command:String` |
| configure override delete | `remove`, `rm` | 75 |  Removes an override.  | configure override delete &lt;part&gt; &lt;name&gt; | `part:String`, `name:String` |
| configure override | `overide` | 75 | Configure the override system. | configure override &lt;action&gt; | `action:String` |
| configure automod enable |  | 75 |  Enables automod in this server.  | configure automod enable |  |
| configure automod settings |  | 75 |  List of settings for the the automod system  | configure automod settings |  |
| configure automod add |  | 75 |  Adds items to the specified part of the automod list.  | configure automod add &lt;part&gt; &lt;item&gt; [items...] | `part:String`, `item:String` |
| configure automod disable |  | 75 |  Disables automod for a part of the message.  | configure automod disable [part] |  |
| configure automod remove | `rm` | 75 |  Removes items from the specified part of the automod list.  | configure automod remove &lt;part&gt; &lt;item&gt; [items...] | `part:String`, `item:String` |
| configure automod punishment | `punish` | 75 |  Sets the punishment for a part of the automod system.  | configure automod punishment &lt;part&gt; &lt;punishment&gt; | `part:String`, `punishment:String` |
| configure automod limit |  | 75 |  Sets the limit and timeout for a part of the automod system.  | configure automod limit &lt;part&gt; &lt;limit&gt; &lt;timeout&gt; | `part:String`, `limit:Number`, `timeout:Number` |
| configure automod | `am` | 75 | Configure the automod in your server | configure automod &lt;action&gt; | `action:String` |
| configure actions_on_info |  | 75 | Sets whether or not to the info command should show moderation actions | configure actions_on_info &lt;true|false&gt; | `enabled:Boolean` |
| configure language |  | 75 | Sets the language for the bot. | configure language &lt;language&gt; | `language:String` |
| configure roles_on_leave | `rolesonleave` | 75 | Enable or disable the if roles should be logged on the leave message | configure roles_on_leave &lt;true|false&gt; | `enabled:Boolean` |
| configure quick_reasons add |  | 75 |  Adds a reason to the quick reasons list.  | configure quick_reasons add &lt;reason&gt; | `reason:String` |
| configure quick_reasons remove | `delete`, `del` | 75 |  Removes a quick reason from the list.  | configure quick_reasons remove &lt;reason&gt; | `reason:String` |
| configure quick_reasons | `quickreasons` | 75 | Configure quick reasons. | configure quick_reasons | `action:String` |
| messageclear |  | 100 | clears X amount of messages from the database in the server | messageclear &lt;days&gt; | `days:Number` |
| settings |  | 75 | Get the settings for the server | settings |  |
| setup |  | 75 | Configures the bot in your guild | setup [part] |  |


### Information
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| channelinfo |  | 50 | Returns some useful info about a channel | channelinfo [channel] |  |
| charinfo |  | 0 | Returns information about the characters provided | charinfo &lt;characters&gt; | `characters:String` |
| inviteinfo | `inv` | 0 | Returns some useful info about a server from the invite link | inviteinfo &lt;invitecode&gt; | `invitecode:String` |
| messageinfo |  | 50 | Returns some useful info about a message | messageinfo &lt;channel-message&gt; | `channel-message:Snowflake` |
| roleinfo |  | 50 | Returns some useful info about a role | roleinfo &lt;role&gt; | `role:Role` |
| server |  | 50 | Returns some useful information about the current server | server |  |
| userinfo | `whois`, `info`, `user` | 50 | Returns some useful info about a user | userinfo [user] |  |


### Miscellaneous
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| avatar |  | 0 | Gets a users avatar picture | avatar [user] | `user:User` |
| id |  | 0 | Parse out the Discord id from any text | id &lt;text&gt; | `text:String` |
| jumbo |  | 0 | Sends a bigger version of the given emote(s) | jumbo &lt;emote&gt; | `emote:Emoji` |
| permissions | `perms` | 0 | Gets permission names from a permission integer | permissions &lt;permissions&gt; | `permissions:Number` |
| remind remove | `yeet`, `delete` | 0 | Removes a reminder by its ID. | remind remove &lt;id&gt; | `id:number` |
| remind list |  | 0 | Lists all of your reminders. | remind list |  |
| remind set | `add` | 0 | Sets a reminder for the specified duration. | remind set &lt;duration&gt; &lt;reason&gt; | `duration:Time`, `reason:String` |
| snowflake |  | 0 | Gets information about a given snowflake | snowflake &lt;snowflake&gt; | `snowflake:Snowflake` |


### Moderation
---
|    Command        |         Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-------------:   | :--------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
| archive channel |  | 50 | Archive commands | archive channel &lt;channel&gt; [amount] | `channel:ChannelText`, `amount:Number` |
| archive user |  | 50 | Archive commands | archive user &lt;user&gt; [amount] | `user:User`, `amount:Number` |
| ban | `terminate`, `yeet` | 50 | Bans or forcebans a user from the server | ban &lt;user&gt; [reason] | `user:User` |
| cleanban |  | 50 | Bans a user and removes all their messages from the server | cleanban &lt;member&gt; [reason] | `member:Member`, `reason:String` |
| crossban | `poolban` | 75 | Crossban a user across multiple servers | crossban &lt;user&gt; &lt;reason&gt; | `user:User`, `reason:String` |
| deafen |  | 50 | Deafens a member from a Voice Channel they're connected to | deafen &lt;user&gt; [reason] | `user:User`, `reason:String` |
| infraction search |  | 50 | Search for infractions of a user. | infraction search &lt;user&gt; [page] | `user:User`, `page:Number` |
| infraction info |  | 50 | Get information about an infraction. | infraction info &lt;id&gt; | `id:Number` |
| infraction claim |  | 50 | Claims an infraction. | infraction claim &lt;infraction&gt; | `infraction:Number` |
| infraction update |  | 50 | Updates the reason of an infraction. | infraction update &lt;infraction&gt; &lt;reason&gt; | `infraction:Number`, `reason:String` |
| infraction modsearch | `msearch` | 50 | Search for moderation infractions of a user. | infraction modsearch &lt;user&gt; | `user:User` |
| infraction offendersearch | `osearch` | 50 | Search for offender infractions of a user. | infraction offendersearch &lt;user&gt; | `user:User` |
| infraction delete | `del`, `remove` | 50 | Delete an infraction. | infraction delete &lt;infraction&gt; | `infraction:Number` |
| kick |  | 50 | Kicks a user from the server | kick &lt;member&gt; [reason] | `member:Member` |
| lockdown |  | 50 | Locks/unlocks a selected channel | lockdown &lt;channel&gt; &lt;true|false&gt; | `channel:ChannelText`, `lock:Boolean` |
| multiban | `mban` | 50 | Bans or forcebans multiple people from a server | multiban &lt;user&gt; &lt;user2&gt;.... [reason] | `user:User` |
| multikick | `mkick` | 50 | Kicks multiple people from a server | multikick &lt;member&gt; &lt;member2&gt;.... [reason] | `member:Member` |
| multiunban | `munban` | 50 | Unbans multiple people from a server | multiunban &lt;user&gt; &lt;user2&gt;... [reason] | `user:User` |
| multiwarn | `mwarn` | 50 | Warns multiple selected users | multiwarn &lt;member&gt; &lt;member2&gt;... [reason] | `user:User` |
| mute | `tempmute` | 50 | Mutes the selected user | mute &lt;member&gt; &lt;duration&gt; [reason] | `member:Member`, `duration:Time` |
| nickname | `nick` | 50 | Nicknames a user from the current server | nickname &lt;member&gt; [nickname] [reason] | `member:Member` |
| prune |  | 50 | Prune users from the server | prune &lt;days&gt; [roles]... [reason] | `days:Number` |
| purge all |  | 50 | Purges all messages in the current channel. | purge all &lt;number&gt; | `amount:Number` |
| purge embeds |  | 50 | Purges messages with embeds. | purge embeds &lt;number&gt; | `amount:Number` |
| purge images |  | 50 | Purges messages with attachments in the channel. | purge images &lt;number&gt; | `amount:Number` |
| purge bots |  | 50 | Purges bot messages from the current channel. | purge bots &lt;number&gt; | `amount:Number` |
| purge emojis |  | 50 | Purges messages with custom emojis. | purge emojis &lt;number&gt; | `amount:Number` |
| purge user |  | 50 | Purges a users messages from the current channel. | purge user &lt;member&gt; &lt;amount&gt; | `member:Member`, `amount:Number` |
| purge contains |  | 50 | Purges messages containing the query. | purge contains &lt;query&gt; &lt;amount&gt; | `query:String`, `amount:Number` |
| purge between |  | 50 | Purges messages between two messages. | purge between &lt;context1&gt; &lt;context2&gt; | `message1:Snowflake`, `message2:Snowflake` |
| purge until |  | 50 | Purges messages until a message | purge until &lt;message&gt; | `message:Snowflake` |
| slowmode |  | 50 | Sets a slowmode to the selected channel | slowmode &lt;duration&gt; [channel] | `duration:Time` |
| softban | `cleankick` | 50 | Bans and unbans a user from the server | softban &lt;member&gt; [reason] | `member:Member` |
| tempban | `tempyeet` | 50 | Temporarily bans the selected user from the server | tempban &lt;member&gt; [reason] | `member:Member` |
| unban | `pardon` | 50 | Unban a user from the server | unban &lt;user&gt; [reason] | `user:User` |
| undeafen |  | 50 | Undeafens a member from a Voice Channel they're connected to | undeafen &lt;user&gt; [reason] | `member:Member` |
| unmute |  | 50 | Unutes the selected user | unmute &lt;member&gt; [reason] | `member:Member` |
| verification |  | 75 | Changes the server verification level | verification |  |
| warn |  | 50 | Warns the selected server member | warn &lt;member&gt; [reason] | `member:Member` |





