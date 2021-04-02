---
id: argument-types
title: Argument Types
---

### String
Any `text` or a unicode `character`

### Integer
Any non-decimal number from `0` to `9007199254740991`

### Boolean
A value that can either be `false` or `true`

### User
A `User ID` or a user mention that can uniquely identify a user.
* `439396770695479297`
* `@KlukCZ#6589`

### Member
A `Member ID` or a member mention that can uniquely identify a guild member.
* `439396770695479297`
* `@KlukCZ#6589`

:::caution note
A User object is any valid **Discord user**, while the Member object is any valid **guild member**. Trying to parse a non-guild user as Member will result in an error
:::

### Channel
A `Channel ID` or a channel mention that can uniquely identify a valid guild channel.
* `743855098073186435`
* `#general`

### Role
A `Role ID` or a role mention that can uniquely identify a valid guild role.
* `742095496142913587`
* `@Bulb Developers`

:::caution note
Attempting to parse a role higher that the `Bulbbot` role as the Role object will result in an error!
:::

### Emoji
An `ID` or a `Unicode emoji`
* `<:Bulbbot:800037459987529758>`
* `❤️`

### Duration
Any `parse` duration that can resolve into milliseconds.
* s `seconds`
* m `minutes`
* h `hours`
* d `days`
* w `weeks`
* mo `months`
* y `years`