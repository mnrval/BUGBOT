let handler = async (m, { conn, text, usedPrefix, command }) => {
const deleteMessage = { delete: { remoteJid: m.key.remoteJid, fromMe: false, id: m.key.id, participant: [m.sender] } };
await conn.sendMessage(m.chat, deleteMessage);
conn.sendMessage(m.chat, {text: 'Papepape, Hayhyhaihi,\nPunya agama ngak?, klo punya Salam dulu\nDasar ngak punya akhlak (×),\nIngat salam bukan PapeHayhi. -_'},{quoted: m, ephemeralExpiration: global.ephemeral})
}

handler.customPrefix = /^(p|hay|hy|hi|hai)$/i
handler.command = new RegExp
export default handler