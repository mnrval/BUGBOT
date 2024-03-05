/* Recode 𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻 */
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import {
    xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"
import { pickRandom } from '../lib/other-function.js'

const defaultMenu = {
before: `ʜᴀɪ ᴋᴀᴋ *%name*🤗,
Kenalin Aku ${namabot}, Aku adalah sebuah Bot WhatsApp yang bisa membantu anda dan mencari informasi di WhatsApp, anda bisa bermain game bersama teman-teman anda dengan fitur yang ada di bot ini, *Terimakasih!.*

*乂  I N F O - U S E R*
   *Name : %name*
   *Status : %prems*
   *Limit : %limit*
   *Money : %money*
   *Role : %role*
   *Level : %level%* [ _%xp4levelup Xp For Levelup_ ]
   *Exp : %exp / %maxexp*
   *Total Xp : %totalexp*
   
*乂  I N F O - B O T*
   *Nama Owner : ${global.author}*
   *Nama Bot : ${namabot}*
   *Uptime :* %muptime
   *Platform : %platform*
   *Mode : %mode*
   *Database : %rtotalreg dari %totalreg*
   
*乂  L I S T - M E N U*
   *.menulist*
   *.allmenu*

*Note:* _Jika Menemukan Bug Pada Bot Ini Silahkan Ketik *.report* Untuk Melaporkan Kepadanya Owner._
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
    
    let spas = "                "
    let spas2 = "         "
    let mojis = "╰╴"
    let index = 0
    let ktnya = ["Kamu nanya?",
        "No spam...",
        "Thanks..",
        "Menampilkan...",
        "Tunggu...",
        "Proses...",
        "Loading...",
        "Bertanya..",
        "Hooh..."
    ]
    let ktx = ktnya.getRandom()
    let tags = {
    }
    try {
        // DEFAULT MENU
        let dash = global.dashmenu
        let m1 = global.dmenut
        let m2 = global.dmenub
        let m3 = global.dmenuf
        let m4 = global.dmenub2

        // COMMAND MENU
        let cc = global.cmenut
        let c1 = global.cmenuh
        let c2 = global.cmenub
        let c3 = global.cmenuf
        let c4 = global.cmenua

        // LOGO L P
        let lprem = global.lopr
        let llim = global.lolm
        let tag = `@${m.sender.split("@")[0]}`

        /* Gobal */
        let glb = global.db.data.users
        let usrs = glb[m.sender]

        /* Hiasan List */
        let spas = "                "
        let spas2 = "         "
        let mojis = "╰╴"
        let index = 0
        let ktnya = ["Kamu nanya?", "No spam...", "Thanks..", "Menampilkan...", "Tunggu...", "Proses...", "Loading...", "Bertanya..", "Hooh..."]
        let ktx = ktnya.getRandom()

        /* TIME ZONE */
        let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
        let wibh = moment.tz("Asia/Makassar").format("HH")
        let wibm = moment.tz("Asia/Makassar").format("mm")
        let wibs = moment.tz("Asia/Makassar").format("ss")
        let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
        let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

        /* Info Menu */
        let mode = global.opts["self"] ? "Private" : "Publik"
        let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
        let {
            age,
            exp,
            limit,
            level,
            role,
            registered,
            money
        } = glb[m.sender]
        let {
            min,
            xp,
            max
        } = xpRange(level, global.multiplier)
        let name = await conn.getName(m.sender)
        let premium = glb[m.sender].premiumTime
        let prems = `${premium > 0 ? "Premium": "Fremium"}`
        let platform = os.platform()

        //-----------TIME---------
        let ucpn = `${ucapan()}`
        let d = new Date(new Date + 3600000)
        let locale = "id"
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: "long"
        })
        let date = d.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
        let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send("uptime")
            _muptime = await new Promise(resolve => {
                process.once("message", resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)

        //---------------------
        let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
        let totalreg = Object.keys(glb).length
        let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: "customPrefix" in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        for (let plugin of help)
            if (plugin && "tags" in plugin)
                for (let tag of plugin.tags)
                    if (!(tag in tags) && tag) tags[tag] = tag
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before ].join()
          let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
        let replace = {
            "%": "%",
            p: _p,
            uptime,
            muptime,
            me: conn.getName(conn.user.jid),
            npmname: _package.name,
            npmdesc: _package.description,
            version: _package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp,
            github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
            tag,
            dash,
            m1,
            m2,
            m3,
            m4,
            cc,
            c1,
            c2,
            c3,
            c4,
            lprem,
            llim,
            ucpn,
            platform,
            wita,
            mode,
            _p,
            money,
            age,
            tag,
            name,
            prems,
            level,
            limit,
            name,
            weton,
            week,
            date,
            dateIslamic,
            time,
            totalreg,
            totalfeatures,
            rtotalreg,
            role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
        const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")

let p1 = './tumnil/1.jpg'
let p2 = './tumnil/2.jpg'
let p3 = './tumnil/3.jpg'
let p4 = './tumnil/4.jpg'
let p5 = './tumnil/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
let arc = pickRandom(global.AraChu2)
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}
let sound = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54'].getRandom()
let rifal = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/"+ sound +".mp3"

await conn.sendMessage(m.chat, {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
 showAdAttribution: true,
 title: `Hai Kak ${name}\n${ucapan()}`,
 body: `Perintah Yang Di Kirim Jam ${wib} WIB`,
 mediaType: 1,
 thumbnailUrl: sig,
 renderLargerThumbnail: true,
 thumbnail: fs.readFileSync(prn),
 thumbnailUrl: arc,
 sourceUrl: sig }}}, { quoted: m });
 await conn.sendFile(m.chat, rifal, '', null, fkontak, true, { ptt: true });
 conn.sendMessage(m.chat, { react: { text: "✅", key: m.key }})
        // Biasa
    } catch (e) {
        await conn.reply(m.chat, "Maaf, menu sedang error", m)
        throw e
    }
}
handler.help = handler.command = ['menu','help']
handler.tags = ['info']
handler.register = true
export default handler
//----------- FUNCTION -------

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *Tahun 🗓️*\n", mo, " *Bulan 🌙*\n", d, " *Hari ☀️*\n", h, " *Jam 🕐*\n", m, " *Menit ⏰*\n", s, " *Detik ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
    const time = moment.tz("Asia/Makassar").format("HH")
    let res = "Selamat Dini Hari ☀️"
    if (time >= 4) {
        res = "Selamat Pagi 🌄"
    }
    if (time >= 10) {
        res = "Selamat Siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌙"
    }
    return res
}