/** Símbolos alinhados à watchlist BLX no TradingView (atualize se mudar a lista pública). */
export const TRADINGVIEW_WATCHLIST_URL =
  'https://www.tradingview.com/watchlists/334218777/'

export type MarketSymbol = { s: string; d: string }

export const marketTabs: { title: string; symbols: MarketSymbol[] }[] = [
  {
    title: 'Forex',
    symbols: [
      { s: 'FX:EURUSD', d: 'EUR/USD' },
      { s: 'FX:GBPUSD', d: 'GBP/USD' },
      { s: 'FX:USDJPY', d: 'USD/JPY' },
      { s: 'FX:AUDUSD', d: 'AUD/USD' },
      { s: 'FX:USDCAD', d: 'USD/CAD' },
      { s: 'FX:EURGBP', d: 'EUR/GBP' },
    ],
  },
  {
    title: 'Indices',
    symbols: [
      { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
      { s: 'FOREXCOM:NSXUSD', d: 'NASDAQ 100' },
      { s: 'FOREXCOM:DJI', d: 'Dow Jones' },
      { s: 'FOREXCOM:DE40', d: 'DAX' },
      { s: 'FOREXCOM:UK100', d: 'FTSE 100' },
      { s: 'FOREXCOM:JP225', d: 'Nikkei 225' },
    ],
  },
  {
    title: 'Metals & energy',
    symbols: [
      { s: 'TVC:GOLD', d: 'Gold' },
      { s: 'OANDA:XAGUSD', d: 'Silver' },
      { s: 'TVC:USOIL', d: 'WTI Crude' },
      { s: 'TVC:UKOIL', d: 'Brent' },
    ],
  },
  {
    title: 'Crypto',
    symbols: [
      { s: 'BITSTAMP:BTCUSD', d: 'Bitcoin' },
      { s: 'BITSTAMP:ETHUSD', d: 'Ethereum' },
      { s: 'COINBASE:SOLUSD', d: 'Solana' },
      { s: 'BINANCE:BNBUSD', d: 'BNB' },
      { s: 'COINBASE:XRPUSD', d: 'XRP' },
    ],
  },
]

export const tickerSymbols = marketTabs.flatMap((tab) =>
  tab.symbols.map((sym) => ({ proName: sym.s, title: sym.d })),
)

export const chartWatchlist = marketTabs.flatMap((tab) => tab.symbols.map((sym) => sym.s))

export const heroSymbolOverview = [
  ['Gold', 'TVC:GOLD'],
  ['S&P 500', 'FOREXCOM:SPXUSD'],
  ['Bitcoin', 'BITSTAMP:BTCUSD'],
  ['Ethereum', 'BITSTAMP:ETHUSD'],
  ['EUR/USD', 'FX:EURUSD|FX'],
] as const

export const assetClassCharts: { title: string; symbol: string; label: string }[] = [
  { title: 'Cryptocurrency', symbol: 'BITSTAMP:BTCUSD', label: 'BTC/USD' },
  { title: 'CFD Indices', symbol: 'FOREXCOM:SPXUSD', label: 'S&P 500' },
  { title: 'Precious Metals', symbol: 'TVC:GOLD', label: 'Gold' },
  { title: 'Currency Pairs', symbol: 'FX:GBPUSD', label: 'GBP/USD' },
]
