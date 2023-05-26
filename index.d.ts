declare module 'african-currency-to-crypto-conversion' {
  export interface ConvertCurrencyOptions {
    currency: string;
    coin: string;
    amount: number;
  }

  export interface ConvertCurrencyResult {
    convertedAmount: number;
  }

  export function convertCurrency(
    options: ConvertCurrencyOptions
  ): Promise<ConvertCurrencyResult>;
}
