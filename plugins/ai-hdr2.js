import axios from "axios";
import uploadImage from '../lib/uploadImage.js'

const handler = async (m, { conn, text }) => {
	const q = m.quoted ? m.quoted : m;

	// cara loh detek mimetype nya
	const mime = (q.msg || q).mimetype || "";

	if (!/image\/(jpe?g|png)/.test(mime)) {
		return m.reply(`Mime ${mime} tidak support`);
	}

	// Ada gak fungsi download image nya?
	const imageBuffer = await q.download(); // buffer yah

	// Upload pake module loh 
	const url = await uploadImage(imageBuffer);

	// Kalo udah di upload, tinggal kirim ke API kesayangan

	const { data } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/image/unblur",
			params: {
				url,
				json: true,
			},
			headers: {
				// Jangan lupa nil apikey nya
				authorization: global.rose,
			},
		})
		.catch((e) => e?.response); // catch nil biar gak throw error

	// ini isi data nya nil, json yah
	/*
    {
        "status": true,
        "result": {
            "mimetype": "image/jpg",
            "base64Image": "base64_encoding"
        }
    }
    */
	const { status, message, result } = data;

	if (!status) {
		// gagal nih
		return m.reply(message);
	}

	// Berhasil dong

	const image = Buffer.from(result.base64Image, "base64");
	// kirim gambar ke user deh
	await conn.sendMessage(
		m.chat,
		{
			image,
			caption: "Done Kak",
		},
		{ quoted: m }
	);
};

handler.help = ["hdr2"];
handler.tags = ["ai"];
handler.command = ["hdr2"];
handler.limit = true
export default handler;