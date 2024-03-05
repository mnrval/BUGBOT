let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `https://storage.itsrose.life/vn-database/desah.mp3`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(desah|Desah)$/i;
handler.command = new RegExp();

export default handler;