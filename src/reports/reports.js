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

const Discord = require("discord.js")
const request = require("request")

const hook_id = process.env.REPORTS_HOOK_ID
const hook_key = process.env.REPORTS_HOOK_KEY
const mod_role = process.env.REPORTS_MOD_ROLE

const hook = new Discord.WebhookClient(hook_id, hook_key)

module.exports = (req, res) => {
    let sender = req.body.sender
    let reason = req.body.reason
    let target = req.body.destination

    /* Instantly release connection to the client */
    res.sendStatus(200)

    let targets = ""
    target.split(",").forEach(player => {
        targets += `\`${player}\`, `
    })
    targets = targets.trim()

    let field_targets = {
        name: "Reported Player(s)",
        value: targets.substring(0, targets.length - 1),
        inline: false
    }

    reason = reason.replace(/,/g, ", ")

    let field_reason = {
        name: "Reason",
        value: reason,
        inline: false
    }

    let fields = [field_targets, field_reason]

    let embed = {
        fields: fields,
        color: require("../utils/colors.js").REPORT_NEW,
        footer: {
            text: "Powered by Beezig",
            icon_url: "https://cdn.discordapp.com/icons/346695724253184014/b6c64a02092ce9090b5530092da3014d.png"
        }
    }

    let message = `\`${sender}\` is looking for a <@&${mod_role}>`

    hook.send(message, {
        embeds: [embed]
    }).catch(require("../utils/errors.js"))

    var url = `https://app-beezigmainserver.wedeploy.io/announceReport?users=${targets}&reason=${reason}`
    request({
        url: url,
        json: true
    })
}