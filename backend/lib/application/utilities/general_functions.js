const moment = require('moment-timezone')
const bcrypt = require('bcrypt')
exports.generateTimestampUnix = async () => {
    const moment = require('moment-timezone');
    let timestamp = await moment.tz("America/Bogota").unix();
    return parseInt(timestamp);
}

exports.comparePassword = async(passwordToCompare,  password) => {
    return await bcrypt.compare(passwordToCompare, password)
}

exports.encryptPassword  = async (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (genSaltErr, salt) => {
        if (genSaltErr) return reject(genSaltErr);

        bcrypt.hash(password, salt, (hashErr, hash) => {
          if (hashErr) return reject(hashErr);
          resolve(hash);
        });
      });
    });
  };