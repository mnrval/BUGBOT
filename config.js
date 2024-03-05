import { pickRandom} from './lib/other-function.js'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'
import fs from "fs"
import moment from 'moment-timezone'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
//TIME
global.waktu = `${date}`
global.namabot = '𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫'
global.v = 'Subscribe Youtube 𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻'   
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ TIME: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
// Sticker WM
global.packname = `☂ 𝑩𝒚 𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻`
global.author = `𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻`

/* ===========Hiasan=========== */
let htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
let pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.eror = "_Maaf Error!,\nCommand Sedang Maintenance_"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = htjava + "═══『"
global.dmenub = "║" + pmenus
global.dmenub2 = "║" + pmenus
global.dmenuf = htjava + "═══════════════" + htjava
global.cmenut = htjava + "═══『"
global.cmenuh = "』═══" + htjava
global.cmenub = "║" + pmenus
global.cmenuf = htjava + "═══════════════" + htjava
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"])

//--------[WATERMARK]
global.wm = '𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫' //Main WM
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 ꒱ ‧₊˚꒷︶꒷꒥꒷\n'
global.wm3 = '𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻'
global.md = '𝑩𝒚 𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻'
//-----[OWNER]
global.nomorown = '6283853305641'
global.owner = [
['6283853305641', '𝑹𝒊𝒇𝒂𝒍𝑴𝒐𝒅𝒛𝒀𝑻', true], // global owner 0
['6283853305641'], // global owner 1
['6283853305641'], // global owner 2
['6283853305641'] // global owner 3
]
global.mods = ['6283853305641'] // Want some help?
global.prems = ['6283853305641'] // Premium user has unlimited limit

// =================={[(API CPANEL)]}==================

global.domain = 'https://admin.renzdev.biz.id' // Isi Domain Lu
global.apikey2 = 'ptla_Bak0TBe1r9G7ul85VCRMRicxNzReRdsANLlRRRbI1QJ' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_6HbnPhaXTdBkBlEHN6VsEG7bPM8ZaSdKYtuOkv4hM23' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

// =================={[(API KEYS)]}==================
global.org = '4SVXAlaZC9Ix9LK5O33M7qeZ'
global.openai = 'UWDxn1Vpch2WWkMJ5JbiT3BlbkFJaEkc5PvkWPeg0HnlKEw1'
global.APIs = {
can: 'https://pnggilajacn.my.id',
xteam: 'https://api.xteam.xyz', 
nrtm: 'https://fg-nrtm.ddns.net',
bg: 'http://bochil.ddns.net',
lol : 'https://api.lolhuman.xyz' , 
fgmods: 'https://api-fgmods.ddns.net',
violetics : 'https://violetics.pw',
}
global.APIKeys = {
'https://pnggilajacn.my.id': 'ItsukaChan',
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://violetics.pw': 'beta',
'https://api.lolhuman.xyz': 'ichanZx',
}
global.cn = 'ItsukaChan'
global.fg = 'fg-dylux'
global.lolkey = 'ichanZx'
global.lolkeysapi = [ 'ichanZx' ]
global.lol = 'ichanZx'
global.rose = 'Rk-EMRKE8MYHNV3_Trial'
global.wait = ' *_Proses Ayang!..._* '
///==================/thumbnail 
global.thumb = 'https://telegra.ph/file/5017096ec44fe534cedc1.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/625273ee8385d12b92eee.jpg'
global.thumbbc = 'https://telegra.ph/file/66cb6fd8cd187ce47e881.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/9ea7108dc9b4c243e48e4.mp4'
global.thumblvlup = 'https://telegra.ph/file/750b9441950f178f90af9.jpg'
global.footer = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ ฅ˘ Freya-MD ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
/*============== SOCIAL ==============*/
global.sig = 'https://facebook.com/groups/1064598221344055/' //Link Instagrammu
global.sgh = 'https://facebook.com/groups/1064598221344055/' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/FHgxehyvkaiHQJLfZyVuDi'
global.sdc = 'https://facebook.com/groups/1064598221344055/' //Isi Pake Link Discordmu Kalo Gada Biarin aja
global.snh = 'https://facebook.com/groups/1064598221344055/' //Hmmm, Ini boleh kalian isi terserah :v
//global.logo = ImgMountain()
global.sfb = 'https://facebook.com/groups/1064598221344055/'
global.syt = 'https://youtube.com/@RifalModzYT'
//====== Url Template Buttons ======//
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "https://youtube.com/@RifalModzYT"
//========== callButtons ==========//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+6283853305641'
global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
global.monitor = "u1931038-1f70a77eef5964be82e7d606" // Ambil di https://uptimerobot.com
global.multiplier = 69 // The higher, The harder levelup
/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.htjava = '⫹⫺' 
global.fgig = 'https://facebook.com/groups/1064598221344055/'
global.docs = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// =============={[(END)]}=================
global.ppbot = ['https://telegra.ph/file/5017096ec44fe534cedc1.jpg','https://telegra.ph/file/750b9441950f178f90af9.jpg','https://telegra.ph/file/625273ee8385d12b92eee.jpg','https://telegra.ph/file/66cb6fd8cd187ce47e881.jpg','https://telegra.ph/file/b05c80ea35efd322be687.jpg']
// ================={[(THUMBNAIL)]}===========
global.hwaifu = ['https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg']
//===[THUMBNAIL MENU]===
global.thumbnailUrl= ['https://telegra.ph/file/b05c80ea35efd322be687.jpg','https://telegra.ph/file/66cb6fd8cd187ce47e881.jpg','https://telegra.ph/file/625273ee8385d12b92eee.jpg','https://telegra.ph/file/750b9441950f178f90af9.jpg','https://telegra.ph/file/5017096ec44fe534cedc1.jpg']
global.Pallmenu = ['https://telegra.ph/file/b05c80ea35efd322be687.jpg','https://telegra.ph/file/66cb6fd8cd187ce47e881.jpg','https://telegra.ph/file/625273ee8385d12b92eee.jpg','https://telegra.ph/file/750b9441950f178f90af9.jpg','https://telegra.ph/file/5017096ec44fe534cedc1.jpg']
global.AraChu2 = ['https://telegra.ph/file/5017096ec44fe534cedc1.jpg','https://telegra.ph/file/750b9441950f178f90af9.jpg','https://telegra.ph/file/625273ee8385d12b92eee.jpg','https://telegra.ph/file/66cb6fd8cd187ce47e881.jpg','https://telegra.ph/file/b05c80ea35efd322be687.jpg']
global.fla = pickRandom(ImgLogoFlam())
/* Img Flamming */
function ImgLogoFlam() {
    let Flam = [
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
    return Flam
}

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            Fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            griffin: "🦒",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}


//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
//=========/===
