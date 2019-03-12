// Copyright (C) 2019 Beezig (RoccoDev, ItsNiklass)
// 
// This file is part of "Bot/Reports server (Beezig)".
// 
// "Bot/Reports server (Beezig)" is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// "Bot/Reports server (Beezig)" is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with "Bot/Reports server (Beezig)".  If not, see <http://www.gnu.org/licenses/>.

/* Eris is our Discord framework */
const Eris = require("eris")

/* Retrieve the token from environment */
const token = process.env.BOT_TOKEN

/* Init bot */
const bot = new Eris(token)
bot.on("error", require("../utils/errors.js"))
bot.connect()

/* Our route function */
module.exports = (req, res) => {
    let match_id = req.params.id

    let guild_id = process.env.BOT_GUILD_ID
    let guild = bot.guilds.get(guild_id)

    let members = guild.members

    let member_found = members.find(m => m.id === match_id)

    res.sendStatus(member_found ? 302 : 404)
}
