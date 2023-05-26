const axios = require("axios");
const cron = require("node-cron");
const { getCoinPrice, getRates } = require("./requests");
const {
  getEquivalentsFromJSONFileAndCalculateEquivalent,
  isCurrencyAllowed,
  writeEquivalentToJSON,
  isCoinAllowed,
} = require("./utils");

// Calculate the interval duration in minutes
const totalMinutesInDay = 24 * 60;
const intervalDuration = Math.floor(totalMinutesInDay / 3);

let executionCounter = 0;
async function getExchnageRate() {
  if (executionCounter >= 5) {
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

// Schedule the function to run 5 times a day with evenly spaced intervals
cron.schedule(`*/${intervalDuration} * * * *`, getExchnageRate);

async function convertCurrency({ currency, coin, amount }) {
  let calculatedEquivalent;

  //check if currecy supplied is in the list of currencies
  const currencyIsAllowed = isCurrencyAllowed(currency);
  const coinIsAllowed = isCoinAllowed(coin);

  if (!currencyIsAllowed) {
    return "Please choose available currencies only";
  }

  if (!coinIsAllowed) {
    return "Please choose available coin only";
  }

  //get the USD equivalent from json file
  calculatedEquivalent = await getEquivalentsFromJSONFileAndCalculateEquivalent(
    amount
  );

  try {
    // get the USD equivalent of the coin supplied
    const response = await getCoinPrice(coin);
    console.log(response);
    const conversionRate = response[coin];
    const convertedAmount = calculatedEquivalent[currency] * conversionRate;

    return { amount: convertedAmount };
  } catch (error) {
    return "Error fetching currency data from CoinGecko API";
  }
}

module.exports = { convertCurrency };
