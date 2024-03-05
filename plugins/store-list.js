import fs from 'fs'
let handler = async (m, { conn, text, command, usedPrefix, isOwner }) => {
  let image = await fs.readFileSync('./tumnil/2.jpg')
  let store = global.db.data.store || {}
  global.fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}

  switch (command) {
    case 'store': case 'list':
      let caption = ''
      for (let category in store) {
        caption += `• *${category.toUpperCase()}*\n`
        for (let list of store[category]) {
          caption += `  ◦ ${list}\n`
        }
        caption += '\n'
      }
   await conn.sendMessage(m.chat, { video: { url: `https://telegra.ph/file/7e65afb2b72653c37d87d.mp4` }, mimetype: `video/mp4`, fileLength: 9, caption: caption, gifPlayback: true, gifAttribution: 2 }, {quoted: fkontak})
      break
      
    case 'addcategory':
      if (!isOwner) return conn.reply(m.chat, 'Maaf, hanya owner yang dapat menggunakan perintah ini', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}addcategory <nama category>`, m)
      store[text.toLowerCase()] = []
      global.db.data.store = store
      conn.reply(m.chat, 'Kategori telah berhasil ditambahkan', m)
      break
      
    case 'delcategory':
      if (!isOwner) return conn.reply(m.chat, 'Maaf, hanya owner yang dapat menggunakan perintah ini', m)
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}delcategory <nama category>`, m)
      if (!store[text.toLowerCase()]) return conn.reply(m.chat, 'Category not found', m)
      delete store[text.toLowerCase()]
      global.db.data.store = store
      conn.reply(m.chat, 'Kategori telah berhasil dihapus', m)
      break
      
    case 'addlist': case 'addstore':
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}addlist <nama list> | <nama category>`, m)
      let [list, category] = text.split("|").map(v => v.trim())
      if (!(category && list)) return conn.reply(m.chat, `Contoh: ${usedPrefix}addlist <nama list> | <nama list>`, m)
      if (!store[category.toLowerCase()]) store[category.toLowerCase()] = []
      store[category.toLowerCase()].push(list)
      global.db.data.store = store
      conn.reply(m.chat, 'Daftar telah berhasil ditambahkan', m)
      break
      
    case 'dellist': case 'delstore':
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}dellist <nama list>`, m)
      for (let category in store) {
        let index = store[category].findIndex(list => list.toLowerCase() === text.toLowerCase())
        if (index !== -1) {
          store[category].splice(index, 1)
          global.db.data.store = store
          conn.reply(m.chat, 'List telah berhasil dihapus', m)
          return
        }
      }
      conn.reply(m.chat, 'List tidak ditemukan', m)
      break
  }
}

handler.help = ['store', 'list', 'addcategory <category name>', 'delcategory <category name>', 'addlist <list name> | <category name>', 'addstore <list name> | <category name>', 'delstore <list name>', 'dellist <list name>']
handler.tags = ['store']
handler.command = /^(store|list|addcategory|delcategory|addlist|addstore|delstore|dellist)$/i
handler.rowner = true

export default handler