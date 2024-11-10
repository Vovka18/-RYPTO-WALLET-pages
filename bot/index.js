const TelegramBot = require('node-telegram-bot-api');

const token = '7654538117:AAEw9CCZ2-ilm8-Brn581MhrjrLTwTV5dzs';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'site', {
    reply_markup: {
        inline_keyboard: [
            [{text:"open site", web_app: {url: "https://9n3kpmft-3000.euw.devtunnels.ms/"}}]
        ]
    }
  });
});