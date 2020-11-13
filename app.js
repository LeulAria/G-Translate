const TeleBot = require('telebot');
const axios = require('axios')
require('dotenv').config()

// init
const bot = new TeleBot({
    token: process.env.TELEGRAM_TOKEN
})

bot.on(["/start", "/hello"], (msg) => {
    console.log(msg);
    bot.sendMessage(msg.from.id, `Hello ${msg.chat.username}`);
})

bot.on('text', async (msg) => {
    const text = msg.text.split(',').map((s) => s.trim());
    const textToTrans = text[0];
    const from = text[1] || 'en';
    const to = text[2] || 'am';

    const res = await axios.get(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${from}|${to}&q=${textToTrans}!&mt=1&onlyprivate=0&de=a@b.c`, {
        headers: {
            "x-rapidapi-key": process.env.RAPID_API_KEY,
            "x-rapidapi-host": process.env.RAPID_API_HOST
        }
    })

    msg.reply.text(res.data.responseData.translatedText)
})

bot.start();