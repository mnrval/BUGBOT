let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'indonesia.jpg', '_*Nih Kak Random Indonesianya :3*_', m)
}
handler.command = /^(indonesia)$/i
handler.tags = ['random']
handler.help = ['indonesia']
handler.limit = true
handler.register = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://preview.redd.it/qdiz81fgkax91.jpg?width=1080&format=pjpg&auto=webp&s=ddc1c9d63aa4bc68307a8569a849da6910c4c540",
"https://preview.redd.it/5cuzc2xhkax91.jpg?width=769&format=pjpg&auto=webp&s=9482beceadeb618ce038bc5d2b3abec82b0b053f",
"https://preview.redd.it/582yxyvjkax91.jpg?width=960&crop=smart&auto=webp&s=baa318ca6df8f711190884a98b6a356590b02eb9",
"https://preview.redd.it/86syjtmlkax91.jpg?width=640&crop=smart&auto=webp&s=6bb77579e838a2c89f94359ed624e101db93d1ba",
"https://preview.redd.it/sh1zc1knkax91.jpg?width=800&format=pjpg&auto=webp&s=bf410d213036c79ddbc0ef905dab2c65172ead69",
"https://preview.redd.it/2a42vkxrkax91.jpg?width=640&crop=smart&auto=webp&s=36d619c4b67094ece984f6b0c339c77c7aea8039",
"https://preview.redd.it/dtv6ukttkax91.jpg?width=960&crop=smart&auto=webp&s=936083d2515475d894bb4e226bdb60ba6cddd1e1",
"https://preview.redd.it/vx0fnfrvkax91.jpg?width=935&format=pjpg&auto=webp&s=f5c3cc980260fed3423c54067907217638b52a65",
"https://preview.redd.it/b86ho75ykax91.jpg?width=640&crop=smart&auto=webp&s=27166615adee8f0b7bcb44360035480a50cecbfe",
"https://preview.redd.it/9oam2fs2lax91.jpg?width=640&crop=smart&auto=webp&s=63c87b879ad296f11f62e461be320679612123fa",
"https://preview.redd.it/l1yfkit0lax91.jpg?width=640&crop=smart&auto=webp&s=6b18fa8fa2cc222bb3ef1fe06c30bf824d5bfe8d",
"https://preview.redd.it/d496tqu4lax91.jpg?width=960&crop=smart&auto=webp&s=83cfef3d6620bbba09861e92a8947e89d6b0baf0",
"https://preview.redd.it/dng2p1u6lax91.jpg?width=960&crop=smart&auto=webp&s=a32f0295eb52c26125e1b7e8b9eff686c229af8a",
"https://preview.redd.it/xh4nzc89lax91.jpg?width=960&crop=smart&auto=webp&s=a8fb5e016c2977c5c0366c3611955dec244239b7",
"https://preview.redd.it/bttmm17blax91.jpg?width=960&crop=smart&auto=webp&s=a5bb23a6be82e4e76bf4eab07db2db01836446ca",
"https://preview.redd.it/ncev88ydlax91.jpg?width=960&crop=smart&auto=webp&s=516a1f333f2dcd485f2dc6a98a64ac015f1ab7e2",
"https://preview.redd.it/kjxtae0glax91.jpg?width=864&format=pjpg&auto=webp&s=0594b5e14afed6169a7ffcb68f8c49553b85344f",
"https://preview.redd.it/ugjp3f4o7ax91.jpg?width=1024&format=pjpg&auto=webp&s=06594e4c17ec1ebf07448b5740cc37413763bf83",
"https://preview.redd.it/3txnddfr7ax91.jpg?width=1024&format=pjpg&auto=webp&s=bc7d1201ab2b2f9d29d2c4f6bc064c1388e0d929",
"https://preview.redd.it/gbms32et7ax91.jpg?width=1080&format=pjpg&auto=webp&s=ab09b4ec57dc261efe8451863ad72c512bb1dd6b",
"https://preview.redd.it/t54sfnhw7ax91.jpg?width=640&format=pjpg&auto=webp&s=94f279b209dd63c81b6f19e4c183afc3b533879b",
"https://preview.redd.it/qobugid28ax91.jpg?width=1024&format=pjpg&auto=webp&s=13257c1fa83ff592099e7c5693c3307237b1bd32",
"https://preview.redd.it/qr9wg5y48ax91.jpg?width=1024&format=pjpg&auto=webp&s=832faac97a1b339a38f9d9d0a1fc63790dc5055a",
"https://preview.redd.it/49x3sbxc8ax91.jpg?width=1024&format=pjpg&auto=webp&s=e4b6b7e4950c4bdf3bec879eaa5735146515010f",
"https://preview.redd.it/ydvor2wi8ax91.jpg?width=1080&format=pjpg&auto=webp&s=18b1c0950d22022d072e9f71b59a542a22e2af60",
"https://preview.redd.it/psunpkem8ax91.jpg?width=1024&format=pjpg&auto=webp&s=a799805d683d283fba0b65488db5805667796d4a",
"https://preview.redd.it/q6vc1duwfax91.jpg?width=1024&format=pjpg&auto=webp&s=6b34ddbc8c6494e8ebcd29d24fa8cd334da5bd10",
"https://preview.redd.it/sk0kvirzfax91.jpg?width=765&format=pjpg&auto=webp&s=a9f9ab3e3c1968347dd76e3e8605a6dcd064490a",
"https://preview.redd.it/2escqrp2gax91.jpg?width=800&format=pjpg&auto=webp&s=d03a6b29f7ef48c9ab3fd4bc76ea9da689c5290b",
"https://preview.redd.it/njnhswh5gax91.jpg?width=1024&format=pjpg&auto=webp&s=3c6b9634475eb05c0159e229edddd19da6c11579",
"https://preview.redd.it/9yjit643hax91.jpg?width=1080&format=pjpg&auto=webp&s=5876a9bebe7ff9279116ad23a9cff9f4734efad1",
"https://preview.redd.it/gi8m8076hax91.jpg?width=1080&format=pjpg&auto=webp&s=4894cc7e32586d0ae2d7b4c8019f12810a52e217",
"https://preview.redd.it/frmqggqahax91.jpg?width=1024&format=pjpg&auto=webp&s=1adfdbd7ab11ee9766264bef3b2953663543171f",
"https://preview.redd.it/q3qx16aehax91.jpg?width=1080&format=pjpg&auto=webp&s=9fabd8401c685d441d392f10910625743892d546",
"https://preview.redd.it/ziy1agkghax91.jpg?width=899&format=pjpg&auto=webp&s=b00c242c52ef1fa90b6c06eb226ef56ab9175d8e",
"https://preview.redd.it/oeex80gjhax91.jpg?width=1024&format=pjpg&auto=webp&s=559572ba87b9973957c00769fb36ccdad1238318",
"https://preview.redd.it/7kzxzk0ilax91.jpg?width=960&crop=smart&auto=webp&s=85ac9129d4726d5b9c97ce0b1360156b1c0247ba"
]
