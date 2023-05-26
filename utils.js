const fs = require("fs");
const path = require("path");

const packageDir = __dirname; // Get the package directory

const filePath = path.join(packageDir, "convertedAmounts.json");

function convertToLocalCurrenciesEquivalentToDollar(exchangeRates, amount) {
  const convertedAmounts = {};

  for (const currency in exchangeRates) {
    if (currency !== "USD") {
      const euroEquivalent = amount / exchangeRates[currency]; // Convert local currency to Euro
      const usdEquivalent = euroEquivalent * exchangeRates.USD; // Convert Euro to USD
      convertedAmounts[currency] = usdEquivalent.toFixed(2);
    }
  }

  return convertedAmounts;
}

function writeEquivalentToJSON(exchangeRates) {
  fs.writeFile(filePath, JSON.stringify(exchangeRates), (err) => {
    if (err) {
      console.error("Error writing converted amounts to file:", err);
    } else {
      console.log(
        "Converted amounts have been written to convertedAmounts.json"
      );
    }
  });
}

function readEquivalentFromJson() {
  return new Promise((resolve, reject) => {
    // Read the converted amounts from the JSON file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        //Error reading converted amounts from file
        reject(err);
      } else {
        const retrievedConvertedAmounts = JSON.parse(data);
        resolve(retrievedConvertedAmounts);
      }
    });
  });
}

async function getEquivalentsFromJSONFileAndCalculateEquivalent(
  conversionAmount
) {
  console.log(conversionAmount);
  let calculatedEquivalent;

  return readEquivalentFromJson()
    .then((retrievedConvertedAmounts) => {
      // Use the retrieved converted amounts

      calculatedEquivalent = convertToLocalCurrenciesEquivalentToDollar(
        retrievedConvertedAmounts,
        conversionAmount
      );
      console.log(calculatedEquivalent);
      return calculatedEquivalent;
    })

    .catch((error) => {
      // Handle error
      console.error(error);
    });

  //   return calculatedEquivalent;
}

const currencies = [
  "NGN",
  "GHS",
  "ZAR",
  "KES",
  "TZS",
  "ETB",
  "ZWL",
  "CFA",
  "BWP",
  "RWF",
  "EGP",
];

const coins = [
   "btc",
  "eth",
  "bnb",
  "xrp",
  "ltc",
  "dot", 
"link"
]

function isCurrencyAllowed(currency) {
  if (!currencies.includes(currency)) {
    return false;
  }
  return true;
}

function isCoinAllowed(coin) {
  if (!coins.includes(coin)) {
    
     return false;
  }
  return true;
}

module.exports = {
  getEquivalentsFromJSONFileAndCalculateEquivalent,
  isCurrencyAllowed,
  convertToLocalCurrenciesEquivalentToDollar,
  writeEquivalentToJSON,
  readEquivalentFromJson,
  isCoinAllowed
};