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

/* DEPENDENCY MANAGEMENT */

/* We use Express.js as our server software */
const express = require("express")
const app = express()

/* We use body-parser to accept JSON input in POST requests */
const body_parser = require("body-parser")
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())


/* ERROR CONTROL */

const error_handler = require("./utils/errors.js")

process.on("uncaughtException", error_handler)
app.use((err, _req, _res, next) => {
    if (err) {
        error_handler(err)
    }
    next()
})

/* SERVER INITIALIZATION */

/* We listen on port 80 (HTTP).
Our server host, WeDeploy, takes care of the SSL stuff. */
const port = 80
app.listen(port)


/* SERVER ROUTES */

/* The bot's route */
app.get("/check/:id", require("./bot/bot.js"))



