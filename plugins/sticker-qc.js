import { sticker } from '../lib/sticker.js'
import axios from 'axios'
import moment from "moment-timezone"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Teksnya mana?\n\nContoh : .qc RifalModzYT"
   if (!text) return m.reply('Teksnya mana?')
   if (text.length > 10000) return m.reply('Maximal 10000 karakter!')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
    let d = new Date(new Date + 3600000)
        let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
        let locale = "id"
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: "long" })
        let date = d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })
        let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", { day: "numeric", month: "long", year: "numeric" }).format(d)
        let time = d.toLocaleTimeString(locale, { hour: "numeric", minute: "numeric", second: "numeric" })
        
   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#f2f4f6",
      "width": 512,
      "height": 800,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, `${wm}\n\nSticker Di Buat Pada : ${date}\nPada Jam : ${wib}\n\n${packname}`)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '𝑩𝒚 𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻', m)
}

handler.help = ['qc','quotely']
handler.tags = ['sticker']
handler.command = /^(qc|quotely)$/i

export default handler