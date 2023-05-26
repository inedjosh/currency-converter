declare module 'african-currency-to-crypto-conversion' {
  export interface ConvertCurrencyOptions {
    currency: string;
    coin: string;
    amount: number;
  }

  export interface ConvertCurrencyResult {
    // Define the properties of the result object
    // based on the expected output from the conversion
    // function in the package.
    // For example, if the conversion function returns a number,
    // you can define the result type as number.
    convertedAmount: number;
  }

  export function convertCurrency(
    options: ConvertCurrencyOptions
  ): Promise<ConvertCurrencyResult>;
}
