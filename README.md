# currency-converter

African Currency to Cryptocurrency Conversion Package Documentation

# Introduction

The African Currency to Cryptocurrency Conversion Package is a library that allows you to convert various African currencies to popular cryptocurrencies. It provides an easy-to-use interface for fetching exchange rates and performing conversions between African currencies and cryptocurrencies.

# Features

#### Perform conversions: Convert African currency amounts to their equivalent values in cryptocurrencies.

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
const { convertCurrency } = require("african-currency-to-crypto-conversion");
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

#### The convertCurrency function takes an object as an argument with the following properties:

### currency: The source African currency code (e.g., "NGN").

### coin: The target cryptocurrency code (e.g., "BTC").

### amount: The amount to convert from the African currency to the cryptocurrency.

### The function returns a Promise that resolves to the converted amount in the target cryptocurrency.

# Conclusion

The African Currency to Cryptocurrency Conversion Package simplifies the process of converting African currencies to popular cryptocurrencies. With its intuitive API, you can easily perform currency conversions in your applications by providing the source currency, target cryptocurrency, and the amount to convert.
