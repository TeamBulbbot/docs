---
id: command-list
title: Command List
sidebar_position: 1
---
		
:::info note
- Bulbbot's default prefix is `!` unless you've changed it yourself using the `!configure` command. You can check Bulbbot's prefix in your server by mentioning `@Bulbbot#1439`
- Bulbbot also offers commands via Discords slash commands `/`, for more info see [this article about it](slash-commands)
- Arguments such as `User` or `Member` can be parsed **multiple ways**, either as a mention `@KlukCZ#6589` or User ID `439396770695479297`
- The `Time` argument must be parsed as a standard moment time (`1h`, `30m` etc.)
:::

## Emoji explanation
| Emoji | Description              |
| :---: | :----------------------: |
| 💰    | Command is premium only  |
| 👑    | Command is owner only    |

## Command List


| Command | Description | Options |
| :-----: | :---------: | :-----: |
|  about | Returns some useful information about the bot |  |
|  github | Return a link to the GitHub repository |  |
|  invite | Returns the invite link for the bot and the support server |  |
|  license | Returns the license file for the Github repo for the bot |  |
|  ping | Returns the API and WebSocket latency. |  |
|  privacypolicy | Returns the privacy policy for the bot |  |
|  uptime | Shows the bot's uptime. |  |
| 💰  banpool create | Create a banpool | `name` |
| 💰  banpool invite | Generates an invite code for the specified banpool. | `name` |
| 💰  banpool list | List all banpools |  |
| 💰  banpool delete | Delete a banpool | `name` |
| 💰  banpool remove | Remove a selected guild from a banpool | `guild_id` `name` |
| 💰  banpool info | Get information about a banpool | `name` |
| 💰  banpool leave | Leave a banpool. | `name` |
| 💰  banpool join | Join a banpool using a generated invite code | `code` |
| 💰  banpool | Manage banpools |  |
|  configure | Configure the bot. |  |
| 👑  messageclear | Clears the selected amount of messages from our message database | `days` |
|  settings | Get the current settings for the server |  |
|  channelinfo | Returns some useful info about a channel | `channel` |
|  charinfo | Returns information about the characters provided | `characters` |
|  inviteinfo | Returns information about the characters provided | `invite` |
|  messageinfo | Returns some useful information about a message | `message_link` |
|  roleinfo | Returns some useful info about a role | `role` |
|  serverinfo | Returns some useful information about the current server |  |
|  userinfo | Returns some useful info about a user | `user` |
|  avatar | Gets a users avatar picture | `user` |
|  id | Parse out the Discord id from any text | `text` |
|  jumbo | Sends a bigger version of the given emoji(s) | `emoji` |
|  permissions | Gets permission names from a permission BitField | `permissions` |
|  remind set | Sets a reminder for you to do something in the future. | `duration` `message` |
|  remind list | Lists all of your reminders. |  |
|  remind delete | Delete a reminder. | `id` |
|  remind | Reminds you of something in the future. |  |
|  snowflake | Get information about a snowflake. | `snowflake` |
|  archive user | Retrieve all archived messages from a user | `user` `amount` |
|  archive channel | Receive the archive of a channel | `channel` |
|  archive | Archive commands |  |
|  ban | Bans the selected user from the server | `user` `clean` `reason` |
| 💰  crossban | Crossban a user across multiple servers | `user` `reason` |
|  deafen | Deafens a member from a Voice Channel they're connected to | `member` `reason` |
|  infraction search | Search for infractions by user | `user` `page` |
|  infraction info | Get info about an infraction | `id` |
|  infraction claim | Claim responsibility over an infraction | `id` |
|  infraction delete | Delete an infraction | `id` |
|  infraction update | Update the reason of an infraction. | `id` `reason` |
|  infraction modsearch | Search for infractions by moderator | `moderator` `page` |
|  infraction offendersearch | Search for infractions by offender. | `offender` `page` |
|  infraction | Manage infractions. |  |
|  kick | Kicks the selected user from the server | `member` `clean` `reason` |
|  lockdown | Locks/unlocks the selected channel | `channel` `lock` |
|  mute | Mutes the selected user | `member` `duration` `reason` |
|  nickname | Change the nickname of a user. | `member` `nickname` `reason` |
|  prune | Prune users from the server | `days` `roles` `reason` |
|  purge all | Purge all messages from a channel. | `amount` |
|  purge user | Purge messages from a user. | `member` `amount` |
|  purge bots | Purges bot messages from the current channel. | `amount` |
|  purge contains | Purges messages containing the query. | `query` `amount` |
|  purge embeds | Purge messages with embeds. | `amount` |
|  purge emojis | Purge messages containing emojis. | `amount` |
|  purge images | Purge all images from a channel. | `amount` |
|  purge until | Purge messages from a channel until a certain message. | `message` |
|  purge between | Purge messages from a channel between two messages. | `message1` `message2` |
|  purge | Purge messages from a channel. |  |
|  slowmode | Set the slowmode for a channel. | `channel` `duration` |
|  tempban | Bans a user for a specified amount of time | `member` `duration` `reason` |
|  unban | Unbans a user from the server. | `user` `reason` |
|  undeafen | Undeafens a member from a Voice Channel they're connected to | `member` `reason` |
|  unmute | Unmutes the specified user. | `member` `reason` |
|  verification | Set the verification level of the server | `level` |
|  warn | Warns the selected server member | `member` `reason` |
