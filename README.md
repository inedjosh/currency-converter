# currency-converter

African Currency to Cryptocurrency Conversion Package Documentation

# Introduction

The African Currency to Cryptocurrency Conversion Package is a library that allows you to convert various African currencies to popular cryptocurrencies. It provides an easy-to-use interface for fetching exchange rates and performing conversions between African currencies and cryptocurrencies.

# Features

#### Perform conversions: Convert African currency amounts to their equivalent values in cryptocurrencies.

####  Get Dollar Equivalent Prices Data: This feature retrieves the prices of various African currencies and their equivalent values in dollars. It returns an object containing the prices and a status indicator.

####  Get Dollar Equivalent Price for a Currency: This feature retrieves the equivalent price in dollars for a specific African currency. It accepts a currency code as a parameter and returns an object containing the price and a status indicator.

#### Supported African currencies: The package supports the following African currencies:

### NGN (Nigerian Naira)

### GHS (Ghanaian Cedi)

### ZAR (South African Rand)

### KES (Kenyan Shilling)

### TZS (Tanzanian Shilling)

### ETB (Ethiopian Birr)

### ZWL (Zimbabwean Dollar)

### CFA (West African CFA Franc)

### BWP (Botswana Pula)

### RWF (Rwandan Franc)

### EGP (Egyptian Pound)

#### Supported cryptocurrencies: The package supports the following cryptocurrencies:

### BTC (Bitcoin)

### ETH (Ethereum)

### BNB (Binance Coin)

### XRP (Ripple)

### LTC (Litecoin)

### DOT (Polkadot)

### LINK (Chainlink)

### Installation

### To install the African Currency to Cryptocurrency Conversion Package, follow these steps:

Ensure you have Node.js installed on your system.

### 1. Open a terminal or command prompt.

### 2. Navigate to your project directory.

### 3. Run the following command:

#

```bash

npm install african-currency-to-crypto-conversion

```

## Usage

To use the African Currency to Cryptocurrency Conversion Package in your project, follow these steps:

# Import the package into your code:

```javascript
const { convertCurrency, 
 getDollarEquivalentsData,
  getDollarEquivalent, } = require("african-currency-to-crypto-conversion");

  //using the import module

import {
  convertCurrency,
  getDollarEquivalentsData,
  getDollarEquivalent,
} from 'african-currency-crypto-conversion';


// Perform a currency conversion:
const convert = async () => {
  try {
    const res = await convertCurrency({
      currency: "NGN",
      coin: "BTC",
      amount: 10000,
    });
    console.log(res);
    /**
  { 
    data: 
 { amount: 0.0008119749 },
  status: true 
  }
 ***/
  } catch (error) {
    //handle error
    console.log(error);
    /**
    {
    message: 'something went wrong...',
    status: false, 
    statusCode: 400
  };
    ***/
  }
};

convert();
```

To get  Dollar Equivalent Price for a Currency

```javascript
const {  
  getDollarEquivalent, } = require("african-currency-to-crypto-conversion");

  //using the import module

import { 
  getDollarEquivalent,
} from 'african-currency-crypto-conversion';


// Perform a currency conversion:
const getPrice = async () => {
  try {
    const price = await getDollarEquivalent("NGN");
    console.log(price);
  } catch (error) {
    console.log(error);
  }
};

//sample response

// {
//   "data": {
//     "price": 464.5105287036787
//   },
//   "status": true
// }

getPrice();
```

### Parameters
currency (String): The currency code for which you want to retrieve the equivalent price.

### To get Dollar Equivalent Prices Data


```javascript
const { 
 getDollarEquivalentsData,
   } = require("african-currency-to-crypto-conversion");

  //using the import module

import {
  getDollarEquivalentsData,
} from 'african-currency-crypto-conversion';


// Perform a currency conversion:
const getPrices = async () => {
  try {
    const prices = await getDollarEquivalentsData();
    console.log(prices);
  } catch (error) {
    console.log(error);
  }
};

//sample response

// {
//   "data": {
//     "prices": {
//       "NGN": 464.5105287036787,
//       "GHS": 11.148273847842228,
//       "ZAR": 19.73319520513807,
//       "KES": 138.49673234277282,
//       "TZS": 2364.77689191065,
//       "ETB": 54.592450710313685,
//       "ZWL": 321.99957424965,
//       "BWP": 13.771257472757101,
//       "RWF": 1126.4573853711433,
//       "EGP": 30.9034972084006
//     }
//   },
//   "status": true
// }

getPrices();


convert();
```

#### The convertCurrency function takes an object as an argument with the following properties:

### currency: The source African currency code (e.g., "NGN").

### coin: The target cryptocurrency code (e.g., "BTC").

### amount: The amount to convert from the African currency to the cryptocurrency.

### The function returns a Promise that resolves to the converted amount in the target cryptocurrency.

# Conclusion

The African Currency to Cryptocurrency Conversion Package simplifies the process of converting African currencies to popular cryptocurrencies. With its intuitive API, you can easily perform currency conversions in your applications by providing the source currency, target cryptocurrency, and the amount to convert.
