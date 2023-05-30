const axios = require("axios");
const cron = require("node-cron");
const { getCoinPrice, getRates } = require("./requests");
const {
  getEquivalentsFromJSONFileAndCalculateEquivalent,
  isCurrencyAllowed,
  writeEquivalentToJSON,
  isCoinAllowed,
  errorResponse,
} = require("./utils");

// Calculate the interval duration in minutes
const totalMinutesInDay = 24 * 60;
const intervalDuration = Math.floor(totalMinutesInDay / 1);

let executionCounter = 0;
async function getExchangeRate() {
  if (executionCounter >= 1) {
    //Maximum number of executions reached for the day
    return;
  }

  try {
    //get Rates
    const rates = await getRates();

    // write to json file.
    writeEquivalentToJSON(rates);

    // Increment the execution counter
    executionCounter++;
  } catch (error) {
    //return error response;
    return "Something went wrong...";
  }
}

// Schedule the function to run 1 times a day with evenly spaced intervals
cron.schedule("0 8 * * *", getExchangeRate);

async function convertCurrency({ currency, coin, amount }) {
  let calculatedEquivalent;

  const coinToLower = coin.toLowerCase();
  //check if currecy supplied is in the list of currencies
  const currencyIsAllowed = isCurrencyAllowed(currency);
  const coinIsAllowed = isCoinAllowed(coinToLower);

  if (!currencyIsAllowed) {
    errorResponse("Please choose available currencies only");
  }

  if (!coinIsAllowed) {
    errorResponse("Please choose available coin only");
  }

  //get the USD equivalent from json file
  calculatedEquivalent = await getEquivalentsFromJSONFileAndCalculateEquivalent(
    amount
  );

  try {
    // get the USD equivalent of the coin supplied
    const response = await getCoinPrice(coinToLower);

    const conversionRate = response[coinToLower];
    const convertedAmount = calculatedEquivalent[currency] * conversionRate;

    return { data: { amount: convertedAmount }, status: true };
  } catch (err) {
    errorResponse("Error fetching currency data from CoinGecko API");
  }
}

module.exports = { convertCurrency };
