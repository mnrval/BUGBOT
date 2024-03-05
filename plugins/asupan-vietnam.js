let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'thailand.jpg', '_*Nih Kak Random Thailandnya :3*_', m)
}
handler.help = ['vietnam']
handler.tags = ['random', 'premium']
handler.command = /^(vietnam)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://i.postimg.cc/L4qZCk0w/p-1962nyvh11.jpg",
"https://i.postimg.cc/ncB9ZFx1/p-1962o8k741.jpg",
"https://i.postimg.cc/MGKny1Qs/p-1962wlno91.jpg",
"https://i.postimg.cc/NMKLnYbm/p-1962yw2d21.jpg",
"https://i.postimg.cc/mrXtVh3T/p-1962z7kwy1.jpg"
]
