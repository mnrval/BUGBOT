import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan teks.\nContoh: *.neon RifalModzYT';

  m.reply('Tunggu sebentar...');

  let text = encodeURIComponent(args.join(' '));
  let apiUrl = `https://api-fgmods.ddns.net/api/textpro/neon?text=${text}&apikey=${global.fg}`;

  let res = await fetch(apiUrl);
  let buffer = await res.buffer();

  await conn.sendFile(m.chat, buffer, 'neon.jpg', '', m, false, {
    mimetype: 'image/jpeg',
    thumbnail: buffer,
  });
};

handler.help = ['neon'];
handler.tags = ['image'];
handler.command = /^(neon)$/i;
handler.limit = true;

export default handler;