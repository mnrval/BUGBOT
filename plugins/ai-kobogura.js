const { Gura } = await (await import('../lib/kobogura.js'));

let handler = async (m, { conn, usedPrefix, command }) => {
try {
    let q = m.quoted ? m.quoted : m;
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
    let chat = global.db.data.chats[m.chat]
    if (!/video|audio/.test(mime)) throw `Reply Video/Vn Nya`
    conn.reply(m.chat, "```Sedang di proses, Mungkin memerlukan waktu beberapa menit...```", m);
    let media = await q.download?.();
    if (!media) throw "Can't download media";
    let audio = await Gura(media);
    if (!audio.base64) throw "Can't convert media to audio";
    conn.sendFile(m.chat, audio.base64, "", "", m);
} catch (e) {
throw e
}
};
handler.help = ['kobogura'];
handler.tags = ['ai'];
handler.command = /^(kobogura)$/i;

export default handler;