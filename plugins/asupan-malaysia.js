let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'malaysia.jpg', '_*Nih Kak Random Malaysianya :3*_', m)
}
handler.help = ['malaysia']
handler.tags = ['random']
handler.command = /^(malaysia)$/i
handler.limit = true
handler.register = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg",
"https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg",
"https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg",
"https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg",
"https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg",
"https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg",
"https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg",
"https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg",
"https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg",
"https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg",
"https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg",
"https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg",
"https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg",
"https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg",
"https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg",
"https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg",
"https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg",
"https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg",
"https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg",
"https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg",
"https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg",
"https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg"
]
