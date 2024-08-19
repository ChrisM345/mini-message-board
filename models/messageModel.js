// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

exports.getMessages = () => messages;
exports.addMessageData = (text, user) => messages.push({ text: text, user: user, added: new Date() });
exports.getMessageData = (index) => messages[index];
