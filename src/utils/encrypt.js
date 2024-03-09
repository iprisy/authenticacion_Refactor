const bcrypt = require("bcrypt");
//creo una clase que permita utilizar la libería para encriptación
const createHash = async (psw) => {
    //nos crea un password hasheado
  const salt = await bcrypt.genSalt(); //robustez del algoritmo de hasheo. Por defecto 10
  return await bcrypt.hashSync(psw, salt);
};

const isValidPasswd = async (psw, encryptedPsw) => {
    //nos devuelve un booleano 
  const isValid = await bcrypt.compareSync(psw, encryptedPsw) //si el password no hasheado es igual a la bd
  return isValid
};

module.exports = {
  createHash,
  isValidPasswd,
};