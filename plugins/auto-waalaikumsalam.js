let handler = async (m, { conn }) => {
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`
conn.sendFile(m.chat, `${salam.getRandom()}`, "salam.mp3", null, m, true, { type: "audioMessage", ptt: true, });
await conn.reply(m.chat, caption, m)
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m|assalamu'alaikum)$/i
handler.command = new RegExp

export default handler

const salam = [
"./vn/salam.mp3",
"./vn/salam1.mp3"
]