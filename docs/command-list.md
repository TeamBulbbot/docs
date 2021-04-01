---
id: command-list
title: Command List
---

:::info note
- BulbBot's default prefix is `!` unless you've changed it yourself using the `!configure` command. You can check BulbBot's prefix in your server by mentioning `@Bulbbot#9083`
- Arguments such as `User` or `Member` can be parsed **multiple ways**, either as a mention `@KlukCZ#6589` or User ID `439396770695479297`
- The `Time` argument must be parsed as a standard moment time (`1h`, `30m` etc.)
:::
  
### Bot
---
|    Command    |       Aliases        | Default Clearance |                        Description                        |      Usage      |    Arguments     |
| :-----------: | :------------------: | :---------------: | :-------------------------------------------------------: | :-------------: | :--------------: |
|    github     | `code`, `sourcecode` |         0         |          Return a link to the github repository           |     !github     |       N/A        |
|     help      |         N/A          |         0         |       Gets useful information about a given command       | !help &lt;command&gt; | `command:string` |
|    invite     |      `support`       |         0         | Returns the invite link for the bot and the support guild |     !invite     |       N/A        |
|    license    |         N/A          |         0         | Returns the license file for the Github repo for the bot  |    !license     |       N/A        |
|     ping      |         N/A          |         0         |           Return the Websocket and API latency            |      !ping      |       N/A        |
| privacypolicy |         N/A          |         0         |          Returns the privacy policy for the bot           | !privacypolicy  |       N/A        |
|    uptime     |         N/A          |         0         |           Return the current uptime of the bot            |     !uptime     |       N/A        |

### Configuration
---
|  Command  |              Aliases               | Default Clearance |             Description              |       Usage        |    Arguments     |
| :-------: | :--------------------------------: | :---------------: | :----------------------------------: | :----------------: | :--------------: |
|  automod  |                `am`                |        75         | Configure the automod in your server | !automod &lt;action&gt;  | `action:string`  |
| configure | `cfg`, `conf`, `config`, `setting` |        75         |   Configure the bot in your server   | !configure &lt;part&gt;  | `setting:string` |
| override  |                `ov`                |        75         |     Configure command overrides      | !override &lt;action&gt; | `action:Action`  |
| settings  |            `overrides`             |        75         |    Get the settings for the guild    |     !settings      |       N/A        |

## Information
---
|    Command    |         Aliases         | Default Clearance |                         Description                         |          Usage           |      Arguments      |
| :-----------: | :---------------------: | :---------------: | :---------------------------------------------------------: | :----------------------: | :-----------------: |
|    badges     |           N/A           |         0         |         Returns the amount of badges in the server          |         !badges          |         N/A         |
|   charinfo    |           N/A           |         0         |      Returns information about the characters provided      |  !charinfo &lt;characters&gt;  | `characters:string` |
| discordstatus |        `dstatus`        |         0         |      Gets the latest information about Discord status       |      !discordstatus      |         N/A         |
|  inviteinfo   |          `inv`          |         0         | Returns some useful info about a guild from the invite link | !inviteinfo &lt;invitecode&gt; | `invitecode:string` |
|  serverinfo   |        `server`         |        50         |   Returns some useful information about the current Guild   |       !serverinfo        |         N/A         |
|   userinfo    | `whois`, `info`, `user` |        50         |            Returns some useful info about a user            |     !userinfo [user]     |         N/A         |

## Miscellaneous
---
|  Command  | Aliases | Default Clearance |                 Description                  |         Usage          |      Arguments      |
| :-------: | :-----: | :---------------: | :------------------------------------------: | :--------------------: | :-----------------: |
|  avatar   |   N/A   |         0         |         Gets a users avatar picture          |     !avatar [user]     |     `user:User`     |
|   jumbo   |   N/A   |         0         | Sends a bigger version of the given emote(s) |     !jumbo &lt;emote&gt;     |    `emote:Emote`    |
|  search   |   N/A   |         0         |  Search the current guild for a given query  |    !search &lt;query&gt;     |   `query:string`    |
| snowflake |   N/A   |         0         |   Gets information about a given snowflake   | !snowflake &lt;snowflake&gt; | `snowflake:integer` |

## Moderation
---
|    Command     |           Aliases           | Default Clearance |                            Description                             |                     Usage                      |              Arguments               |
| :------------: | :-------------------------: | :---------------: | :----------------------------------------------------------------: | :--------------------------------------------: | :----------------------------------: |
|      ban       |     `terminate`, `yeet`     |        50         |              Bans or forcebans a user from the guild               |              !ban &lt;user&gt; [reason]              |             `user:User`              |
|     deafen     |             N/A             |        50         |     Deafens a member from a Voice Channel they're connected to     |            !deafen &lt;user&gt; [reason]             |             `user:User`              |
|   infraction   |            `inf`            |        50         |                          Infraction Desc                           |              !infraction &lt;action&gt;              |           `action:string`            |
|      kick      |             N/A             |        50         |                    Kicks a user from the guild                     |            !kick &lt;member&gt; [reason]             |           `member:Member`            |
|    lockdown    |             N/A             |        50         |                  Locks/unlocks a selected channel                  |           !lockdown &lt;channel&gt; &lt;lock&gt;           |  `channel:Channel`, `lock:boolean`   |
|    multiban    |           `mban`            |        50         |           Bans or forcebans multiple people from a guild           |     !multiban &lt;user&gt; &lt;user2&gt;.... [reason]      |             `user:User`              |
|   multikick    |           `mkick`           |        50         |                 Kicks multiple people from a guild                 |   !multikick &lt;member&gt; &lt;member2&gt;.... [reason]   |           `member:Member`            |
|   multiunban   |          `munban`           |        50         |                Unbans multiple people from a guild                 |     !multiunban &lt;user&gt; &lt;user2&gt;... [reason]     |             `user:User`              |
| multivoicekick |          `mvckick`          |        50         | Kicks multiple members from the Voice Channel they're connected to | !multivoicekick &lt;member&gt; &lt;member2&gt;... [reason] |           `member:Member`            |
|   multiwarn    |           `mwarn`           |        50         |                   Warns multiple selected users                    |   !multiwarn &lt;member&gt; &lt;member2&gt;... [reason]    |             `user:User`              |
|      mute      |         `tempmute`          |        50         |                      Mutes the selected user                       |       !mute &lt;member&gt; &lt;duration&gt; [reason]       | `member:Member`, `duration:Duration` |
|     purge      |            clear            |        50         |                    Purges messages from a chat                     |                !purge &lt;amount&gt;                 |           `amount:integer`           |
|    slowmode    |             N/A             |        50         |              Sets a slowmode to the selected channel               |         !slowmode [channel] &lt;duration&gt;         |         `duration:Duration`          |
|    softban     |         `cleanban`          |        50         |               Bans and unbans a user from the guild                |            !softban &lt;user&gt; [reason]            |             `user:User`              |
|    tempban     | `tempterminate`, `tempyeet` |        50         |        Temporarily bans or forcebans a user from the guild         |      !tempban &lt;user&gt; &lt;duration&gt; [reason]       |   `user:User`, `duration:Duration`   |
|     unban      |          `pardon`           |        50         |                    Unban a user from the guild                     |             !unban &lt;user&gt; [reason]             |             `user:User`              |
|    undeafen    |             N/A             |        50         |    Undeafens a member from a Voice Channel they're connected to    |           !undeafen &lt;user&gt; [reason]            |           `member:Member`            |
|     unmute     |             N/A             |        50         |                      Unutes the selected user                      |           !unmute &lt;member&gt; [reason]            |           `member:Member`            |
|  verification  |             N/A             |        75         |               Changes the server verification level                |             !verification &lt;level&gt;              |             `level:int`              |
|   voicekick    |          `vckick`           |        50         |     Kicks a member from the Voice Channel they're connected to     |          !voicekick &lt;member&gt; [reason]          |           `member:Member`            |
|      warn      |             N/A             |        50         |                  Warns the selected guild member                   |            !warn &lt;member&gt; [reason]             |           `member:Member`            |
