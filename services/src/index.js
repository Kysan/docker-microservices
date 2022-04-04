const { service } = process.env;
console.log(`loading service ${service}...`);
// charge le service donné
require(`./${service}`);
