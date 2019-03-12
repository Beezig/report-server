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

const colors = require("./colors.js")

const Discord = require("discord.js")
const hook = new Discord.WebhookClient(process.env.ERROR_HOOK_ID, process.env.ERROR_HOOK_KEY)


module.exports = err => {
    let embed = {
        color: colors.ERROR,
        title: "[Bot Server] Uncaught exception thrown",
        description: err.stack.substring(0, 1999)
    }

    hook.send("", { embeds: [embed] })
}