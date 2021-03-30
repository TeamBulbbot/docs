---
id: clearance
title: Clearance
---

Instead of the traditional Trusted, Moderator and Administrator roles most other bots use for gating commands, BulbBot uses a **clearance system** that assignes each role and command a clearance value. This in theory with the ability to edit and change these clearance levels allows you to gate commands with **100** override.

## 0. Before you begin

Before you begin configurating and changing these clearance values values please note that the `@everyone` role has a clearance level of `0` by default. This allows anyone with the `@everyone` role or any other role that does not have any special permissions to use commands that by default have a clearance level of `0`. Anyone with a role that has the `ADMINISTRATOR` permission grated will **automatically** be assigned a clearance value of `75`. The Server Owner will be granted a clearance level of `100` by default and is the only one that can use all BulbBot commands regardless of the command or role overrides.

**Please note:** Some command are also affected by Discord's default permissions as well. This means that if a role has a clearance level of less than `50` but has the `BAN_MEMBERS` permission granted it'll be able to access any commands that require this permissions i.e `!ban`

You can read through our \<link to commands list when ready\> for more information about what clearance level each command has.

### 1. The basics

BulbBot assigns each command a certain clearance level by default. These default clearance levels can either be `0`, `25`, `50` or `75` and sort our commands into **4** categories, commands that anyone can use, commands that only Trusted users can use, Moderator commands and Administrator commands. You can edit commands and roles to have whatever clearance level you choose however if you only want to have a Moderator and an Administrator role you will never need to edit role clearanes.

### 2. Editing role and command permissions

Now that you made sure you need to edit the role or command clearance levels you can do so using the `!override` command. You can add a custom clearance level to roles using `!override add role <role> <clearance>` or `!override add command <command_name> <clearance>` for commands. These overrides can also be edited using `!override edit <override> <name> <clearance>` or deleted using `!override delete <override> <name>`.

![Clearance](https://cdn.klukcz.me/img/dCg1Yi4Z.gif)

**Tip:** If you need to disable or enable command completely you can do so using `!override enable <command>` or `!override disable <command>`. Disabled commands will not trigger in your server until you re-enable them.

### 3. Checking command overrides

If you ever forget about a command or role override you created or want to check on all the overrides you've created you can do so using the `!override list` command

![Override_list](https://cdn.klukcz.me/img/DylEwNyF.png)
