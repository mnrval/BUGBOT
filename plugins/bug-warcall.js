import moment from 'moment-timezone'

let handler = async (m, { conn, text, isOwner, usedPrefix, command, args }) => {
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
if (!text) throw `Contoh : ${usedPrefix + command} Open BO 1 Jam 50k Full Mulus`
let call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: 
`${text}`
}}
//👇🏼 bagian client ubah sesuai module export script kalian sendiri
conn.relayMessage(m.chat, call, {})
}
handler.help = ["warcall *<khusus group>*"]
handler.tags = ["bugs"]
handler.command = /^(warcall)$/i
handler.group = true
handler.premium = true
handler.rowner = true
export default handler