import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}

switch (command) {
case 'ambilsc1': {
let aku1 = 'https://www.mediafire.com/file/cku38uri67q16ov/Free1.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku1)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor2
case 'ambilsc2': {
let aku2 = 'https://www.mediafire.com/file/zm56k87hqst54cq/Free2.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku2)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor3
case 'ambilsc3': {
let aku3 = 'https://www.mediafire.com/file/f4a7sxq6lmdhpwd/Free3.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku3)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor4
case 'ambilsc4': {
let aku4 = 'https://www.mediafire.com/file/n0d2o3u98q0anw9/Free4.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku4)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor5
case 'ambilsc5': {
let aku5 = 'https://www.mediafire.com/file/g01n99speif85bj/Free5.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku5)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor6
case 'ambilsc6': {
let aku6 = 'https://www.mediafire.com/file/m4tgdftzm9t2nji/Free6.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku6)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor7
case 'ambilsc7': {
let aku7 = 'https://www.mediafire.com/file/x6th6u4nh8ad8wv/Scv7.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku7)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomo8
case 'ambilsc8': {
let aku8 = 'https://www.mediafire.com/file/k13jxfbeimrrtjn/Sc+Gratis+By+Rafathar.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku8)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor9
case 'ambilsc9': {
let aku9 = 'https://www.mediafire.com/file/b4qcuinhpkmg5n8/Sc+Gratis.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku9)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor10
case 'ambilsc10': {
let aku10 = 'https://www.mediafire.com/file/0xy68my2nju4rx0/Pw+Cari+Sendiri,+Gush+Chat+Gw.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku10)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor11
case 'ambilsc11': {
let aku11 = 'https://www.mediafire.com/file/lv7zxaijoonpexd/Sc+Hw21_No+Enc.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku11)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }
}}}

handler.help = ['ambilsc1', 'ambilsc2', 'ambilsc3', 'ambilsc4', 'ambilsc5', 'ambilsc6', 'ambilsc7', 'ambilsc8', 'ambilsc9', 'ambilsc10', 'ambilsc11']
handler.tags = ['ambilsc']
handler.command = ['ambilsc1', 'ambilsc2', 'ambilsc3', 'ambilsc4', 'ambilsc5', 'ambilsc6', 'ambilsc7', 'ambilsc8', 'ambilsc9', 'ambilsc10', 'ambilsc11']
handler.rowner = true
export default handler