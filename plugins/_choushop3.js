let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  
  const caption = `
*DIAMOND VIALOGIN CHOURKSTORE*

Price:
•55💎  RM5.80
•565 💎	 RM38.90
•1155 💎	 RM76.30
•1430 💎	 RM89.00
•1765 💎	 RM119.20
•2975 💎	 RM269.55
•3540 💎	 RM225.20
•4130 💎	 RM270
•5015 💎	 RM323.40
•6000 💎	 RM380.80
•7155 💎	 RM438.20
•8040 💎	 RM490.80
•8975 💎	 RM550.40
•10130 💎	 RM630.70
•12055 💎	 RM740.90

Proses 4/5Jam
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/80b4eb0e326ec45af25ed.jpg' }, caption: caption }, {quoted: m })
}
handler.command = /^(dm|diamond)$/i
handler.tags = ['info']
handler.help = ['dm', 'diamond']

handler.register = false
export default handler