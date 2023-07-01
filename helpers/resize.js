const Jimp = require("jimp");

async function resize(pathToImage) {
  const image = await Jimp.read(pathToImage);
  image
    .resize(250, 250, function (err) {
      if (err) throw err;
    })
    .write(pathToImage);
}

module.exports = resize;
