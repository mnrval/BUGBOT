import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let naruto = 'https://telegra.ph/file/7b3d044ec7aef3fa0e785.jpg'
let pp = await conn.profilePictureUrl(who).catch(_ => naruto)
let name = await conn.getName(who)
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}

if (command == 'voice1') {
let vr = 6
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/A_Flea/ltaf_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice2') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Abominable_Snowman/ltas_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice3') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Angus_McRory/ltam_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice4') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Angus_McRory/ltam_0${(10, 12).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice5') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Banty_Rooster/ltbt_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice6') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Banty_Rooster/ltbt_0${(10, 19).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice7') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Barney/ltba_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice8') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Barnyard_Dog/ltdg_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice9') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Barnyard_Dog/ltdg_0${(10, 24).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice10') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Beaky_Buzzard/ltbk_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice11') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Beaky_Buzzard/ltbk_0${(10, 22).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice12') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Benny/ltby_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice13') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Big_Bad_Wolf/ltbw_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice14') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Blacque_Jacque_Shellaque/ltbj_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice15') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Blacque_Jacque_Shellaque/ltbj_00${(10, 11).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice16') {
let vr = 7
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bruno_Bear/ltbr_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice17') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice18') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_0${(10, 99).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice19') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_${(100, 388).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice20') {
let vr = 6
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Cat_and_Dog/ltct_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice21') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Cecil_Turtle/ltcc_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice22') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Cecil_Turtle/ltcc_00${(10, 12).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice23') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Charlie_Dog/ltcd_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice24') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Claude_Cat/ltcl_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice25') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Colonel_and_Belvedere/ltco_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice26') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Count_Bloodcount/ltcb_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice27') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Count_Bloodcount/ltcb_0${(10, 11).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice28') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice29') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_0${(10, 99).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice30') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_${(100, 223).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice31') {
let vr = 5
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Dumb_dog/ltdm_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice32') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Elmer_Fudd/ltef_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice33') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Elmer_Fudd/ltef_0${(10, 32).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice34') {
let vr = 6
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Evil_Scientist/ltes_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice35') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/FX/ltfx_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice36') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/FX/ltfx_0${(10, 99).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice37') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/FX/ltfx_${(100, 131).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice38') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Foghorn_Leghorn/ltfl_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice39') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Foghorn_Leghorn/ltfl_0${(10, 91).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice40') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Genie/ltge_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice41') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Genie/ltge_0${(10, 10).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice42') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Granny/ltgr_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice43') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Granny/ltgr_0${(10, 20).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice44') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Gremlin/ltgm_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice45') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Hassan/lths_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice46') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Henery_Hawk/lthh_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice47') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Henery_Hawk/lthh_0${(10, 24).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice48') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Honeymousers/lthm_001.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice49') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/House_Detective_at_Spinster_Arms/ltdt_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice50') {
let vr = 4
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Hubie_and_Bert/lthb_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice51') {
let vr = 2
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Little_Rooster/ltlr_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice52') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Mac_and_Tosh/ltmt_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice53') {
let vr = 10
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Mac_and_Tosh/ltmt_0${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice54') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Marvin_The_Martian/ltmm_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice55') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Marvin_The_Martian/ltmm_0${(10, 22).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice56') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Michigan_J_Frog/ltmj_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice57') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Michigan_J_Frog/ltmj_0${(10, 10).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice58') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice59') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_0${(10, 99).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice60') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_${(100, 139).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice61') {
let vr = 4
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Monty/ltmt_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice62') {
let vr = 7
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Mugsy/ltmg_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice63') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Music/ltmu_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice64') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Music/ltmu_0${(10, 81).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice65') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Nasty_Canasta/ltnc_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice66') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Nasty_Canasta/ltnc_0${(10, 12).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice67') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pappy_and_Elvis/ltpe_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice68') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pepe_Le_Pew/ltlp_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice69') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pepe_Le_Pew/ltlp_0${(10, 15).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice70') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pete_Puma/ltpu_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice71') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pete_Puma/ltpu_0${(10, 27).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice72') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Porky_Pig/ltpp_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice73') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Porky_Pig/ltpp_0${(10, 30).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice74') {
let vr = 4
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Prissy/ltpr_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice75') {
let vr = 2
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Ralph_Wolf_and_Sam_Sheepdog/ltrs_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice76') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Red_Riding_Hood/ltrh_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice77') {
let vr = 7
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Road_Runner/ltrr_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice78') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Rocky/ltrk_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice79') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Rocky/ltrk_0${(10, 23).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice80') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sargeant/ltsa_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice81') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sheriff_of_Nottingham/ltsn_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice82') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Speedy_Gonzales/ltsg_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice83') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Speedy_Gonzales/ltsg_0${(10, 17).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice84') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Spike/ltsp_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice85') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sylvester/ltsy_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice86') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sylvester/ltsy_0${(10, 62).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice87') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tasmanian_Devil/lttd_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice88') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tasmanian_Devil/lttd_0${(10, 14).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice89') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/The_Three_Bears/lt3b_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice90') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/The_Three_Bears/lt3b_0${(10, 33).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice91') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tweety/lttw_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice92') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tweety/lttw_0${(10, 49).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice93') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Wile_E_Coyote/ltwc_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice94') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Wile_E_Coyote/ltwc_0${(10, 21).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice95') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Witch_Hazel/ltwh_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice96') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Witch_Hazel/ltwh_0${(10, 25).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice97') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Yosemite_Sam/ltys_00${vr}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
if (command == 'voice98') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Yosemite_Sam/ltys_0${(10, 88).getRandom()}.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ara') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/ara-ara.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ganbare') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/ganbare-ganbare-senpai.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'konichiwa') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/hashira-konichiwa.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'nani') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/nani.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'rikka') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/rikka-ow.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ultra') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/ultra-instinct.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ahh') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai-ah.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'yemete') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'yuno') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/yuno-yukki.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
}
handler.help = ['yuno', 'yemete', 'ahh', 'ultra', 'rikka', 'nani', 'konichiwa', 'ganbare', 'ara', 'voice1', 'voice2', 'voice3', 'voice4', 'voice5', 'voice6', 'voice7', 'voice8', 'voice9', 'voice10', 'voice11', 'voice12', 'voice13', 'voice14', 'voice15', 'voice16', 'voice17', 'voice18', 'voice19', 'voice20', 'voice21', 'voice22', 'voice23', 'voice24', 'voice25', 'voice26', 'voice27', 'voice28', 'voice29', 'voice30', 'voice31', 'voice32', 'voice33', 'voice34', 'voice35', 'voice36', 'voice37', 'voice38', 'voice39', 'voice40', 'voice41', 'voice42', 'voice43', 'voice44', 'voice45', 'voice46', 'voice47', 'voice48', 'voice49', 'voice50', 'voice51', 'voice52', 'voice53', 'voice54', 'voice55', 'voice56', 'voice57', 'voice58', 'voice59', 'voice60', 'voice61', 'voice62', 'voice63', 'voice64', 'voice65', 'voice66', 'voice67', 'voice68', 'voice69', 'voice70', 'voice71', 'voice72', 'voice73', 'voice74', 'voice75', 'voice76', 'voice77', 'voice78', 'voice79', 'voice80', 'voice81', 'voice82', 'voice83', 'voice84', 'voice85', 'voice86', 'voice87', 'voice88', 'voice89', 'voice90', 'voice91', 'voice92', 'voice93', 'voice94', 'voice95', 'voice96', 'voice97', 'voice98']
handler.command = ['yuno', 'yemete', 'ahh', 'ultra', 'rikka', 'nani', 'konichiwa', 'ganbare', 'ara', 'voice1', 'voice2', 'voice3', 'voice4', 'voice5', 'voice6', 'voice7', 'voice8', 'voice9', 'voice10', 'voice11', 'voice12', 'voice13', 'voice14', 'voice15', 'voice16', 'voice17', 'voice18', 'voice19', 'voice20', 'voice21', 'voice22', 'voice23', 'voice24', 'voice25', 'voice26', 'voice27', 'voice28', 'voice29', 'voice30', 'voice31', 'voice32', 'voice33', 'voice34', 'voice35', 'voice36', 'voice37', 'voice38', 'voice39', 'voice40', 'voice41', 'voice42', 'voice43', 'voice44', 'voice45', 'voice46', 'voice47', 'voice48', 'voice49', 'voice50', 'voice51', 'voice52', 'voice53', 'voice54', 'voice55', 'voice56', 'voice57', 'voice58', 'voice59', 'voice60', 'voice61', 'voice62', 'voice63', 'voice64', 'voice65', 'voice66', 'voice67', 'voice68', 'voice69', 'voice70', 'voice71', 'voice72', 'voice73', 'voice74', 'voice75', 'voice76', 'voice77', 'voice78', 'voice79', 'voice80', 'voice81', 'voice82', 'voice83', 'voice84', 'voice85', 'voice86', 'voice87', 'voice88', 'voice89', 'voice90', 'voice91', 'voice92', 'voice93', 'voice94', 'voice95', 'voice96', 'voice97', 'voice98']
handler.tags = ['audio']
handler.vip = true
handler.premium = true

export default handler