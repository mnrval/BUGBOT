import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let res = await WikiMedia(text)
  res = res.map((v) => `*Title:* ${v.title}\n*Source:* ${v.source}\n*Image:* ${v.image}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  let loadd = [
 '▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%',
 '██▒▒▒▒▒▒▒▒▒▒▒ 10%',
 '████▒▒▒▒▒▒▒▒▒ 30%',
 '███████▒▒▒▒▒▒ 50%',
 '██████████▒▒▒ 70%',
 '█████████████ 100%',
 `${res}`
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Bentar_'})

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  }
handler.help = ['wikimedia']
handler.tags = ['search']
handler.command = /^(wikimedia)$/i
handler.limit = true

export default handler

async function WikiMedia(search) { 
   return new Promise(async (resolve, reject) => { 
     try { 
       const { data } = await axios.get(`https://commons.wikimedia.org/w/index.php?search=${search}&title=Special:MediaSearch&go=Go&type=image`) 
       const $ = cheerio.load(data) 
       const hasil = [] 
       $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) { 
         hasil.push({ 
           title: $(b).find('img').attr('alt'), 
           source: $(b).attr('href'), 
           image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src') 
         }) 
       }) 
       if (hasil.every(x => x === undefined)) return resolve({ developer: '@Zeltoria', mess: 'no result found' }) 
       resolve(hasil) 
     } catch (err) { 
       console.error(err) 
     } 
   }) 
 }