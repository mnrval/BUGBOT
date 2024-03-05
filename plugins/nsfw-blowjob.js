let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${global.lolkey}`}, caption: 'Lari Ada Wibu, Sange Ama Anime🗿🖕' }, m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob|bj)$/i
handler.premium = true
handler.register = true
handler.limit = 5
export default handler