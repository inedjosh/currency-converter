const { default: axios } = require("axios");

async function getRates() {
  const rates = await axios.get(
    "http://api.exchangeratesapi.io/v1/latest?access_key=17a535ae0f8006ce709daeada9c6bb61&base=EUR&symbols=NGN,GHS,ZAR,KES,USD,TZS,ETB,ZWL,CFA,BWP,RWF,EGP"
  );

  return rates.data.rates;
}

async function getCoinPrice(coin) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=${coin}`
  );
  return response.data.usd;
}

module.exports = { getRates, getCoinPrice };
