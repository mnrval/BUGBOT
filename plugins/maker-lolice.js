let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let image = API('https://some-random-api.com', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    })
    conn.sendFile(m.chat, image, false, 'Nih Bang Dah jadi', m, false)
}

handler.help = ['lolice']
handler.tags = ['maker']
handler.command = /^(lolice)$/i

export default handler