<!--
 Copyright (C) 2019 Beezig (RoccoDev, ItsNiklass)
 
 This file is part of "Bot/Reports server (Beezig)".
 
 "Bot/Reports server (Beezig)" is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 "Bot/Reports server (Beezig)" is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with "Bot/Reports server (Beezig)".  If not, see <http://www.gnu.org/licenses/>.
-->

# Reports server (Beezig)
This is Beezig's report server.  

## Routes
It receives report requests via `POST /report`.
* Go [here](https://github.com/Beezig/Beezig/blob/master/src/eu/beezig/core/command/ReportCommand.java#L81) for Beezig's implementation.

It also receives Discord requests via `GET /check/:id`.  
These requests can be used to check if a user is a member of the Beezig Discord guild.  
* `id` is the Discord user ID of the player.
* [Implementation](https://github.com/Beezig/Beezig/blob/master/src/eu/beezig/core/utils/rpc/DiscordUtils.java#L35)

## Environment
* `BOT_TOKEN`: Discord bot token to use.
* `BOT_GUILD_ID`: The guild ID the bot should use when checking if a player is a member.
* `REPORTS_HOOK_ID`: Discord webhook ID to send reports.
* `REPORTS_HOOK_KEY`: The webhook's secret key.
* `REPORTS_MOD_ROLE`: The moderator role that will be pinged.
* `ERROR_HOOK_ID`: Webhook ID for error reporting.
* `ERROR_HOOK_KEY`: Webhook key for error reporting.