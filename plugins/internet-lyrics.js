import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  m.reply(wait)
  let res = await Lirik(text)
  conn.sendFile(m.chat, res.thumb, 'lirik.jpg', res.lirik, m)
  } 
handler.help = ['liriklagu']
handler.tags = ['search']
handler.command = /^(liriklagu)$/i
handler.limit = true

export default handler

async function Lirik(judul) { 
   return new Promise(async (resolve, reject) => { 
     try { 
       const { data } = await axios.get('https://www.musixmatch.com/search/' + judul), 
         $ = cheerio.load(data), 
         hasil = {}, 
         limk = 'https://www.musixmatch.com', 
         link = limk + $('div.media-card-body > div > h2').find('a').attr('href'); 
       await axios.get(link).then(({ data }) => { 
         const $$ = cheerio.load(data) 
         hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src') 
         $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) { 
           hasil.lirik = $$(b).find('span > p > span').text() + '\n' + $$(b).find('span > div > p > span').text() 
         }) 
       }) 
       resolve(hasil) 
     } catch (err) { 
       console.error(err) 
     } 
   }) 
 }