const Discord = require(`discord.js-self`)
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const client = new Discord.Client()
client.login('ODczMjQ1MTkzODA0MDcwOTIz.GxIuT9.TnzIJ4kuao-5jXOljMaHhogUnUo6qTfJemUF6U')
const channel = client.channels.cache.get('914103791958253628');
console.log(channel)
client.on('ready',() => {
  
  setInterval(() => {  client.channels.cache.get(`914103791958253628`).send(makeid(9))}, 3000)
})
