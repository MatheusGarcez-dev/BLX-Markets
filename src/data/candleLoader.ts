/** Candle geometry from Uiverse (bilal_9731) — body/wick as % of chart height */
export const CANDLE_LOADER_DATA = [
  { b: 7.1, h: 18.93, wb: 0, wh: 31.95, delay: 0 },
  { b: 26.04, h: 2.37, wb: 19.41, wh: 14.91, delay: 0.065 },
  { b: 28.64, h: 4.5, wb: 16.92, wh: 21.66, delay: 0.13 },
  { b: 31.42, h: 3.43, wb: 19.76, wh: 27.93, delay: 0.195 },
  { b: 31.42, h: 15.44, wb: 27.43, wh: 28.07, delay: 0.26 },
  { b: 46.54, h: 0.28, wb: 43.43, wh: 24.38, delay: 0.325 },
  { b: 35.86, h: 8.7, wb: 29.7, wh: 24.5, delay: 0.39 },
  { b: 11.67, h: 24.19, wb: 5.33, wh: 31.83, delay: 0.455 },
  { b: 11.83, h: 15.1, wb: 7.93, wh: 24.97, delay: 0.52 },
  { b: 27.81, h: 12.04, wb: 27.69, wh: 28.17, delay: 0.585 },
  { b: 39.85, h: 28.25, wb: 39.53, wh: 28.58, delay: 0.65 },
  { b: 70.8, h: 6.27, wb: 60.96, wh: 24.84, delay: 0.715 },
  { b: 75.8, h: 2.71, wb: 68.38, wh: 31.62, delay: 0.78 },
  { b: 67.23, h: 8.71, wb: 64.8, wh: 24.97, delay: 0.845 },
  { b: 67.81, h: 7.85, wb: 57.54, wh: 27.55, delay: 0.91 },
  { b: 70.08, h: 6.14, wb: 55.68, wh: 21.83, delay: 0.975 },
  { b: 66.39, h: 3.69, wb: 58.11, wh: 26.11, delay: 1.04 },
  { b: 64.8, h: 9.78, wb: 45.47, wh: 29.61, delay: 1.105 },
] as const

export type CandleDirection = 'bull' | 'bear'

export function getCandleDirections(): CandleDirection[] {
  return CANDLE_LOADER_DATA.map((candle, i) => {
    if (i === 0) return 'bull'
    const prev = CANDLE_LOADER_DATA[i - 1]
    return candle.b >= prev.b ? 'bull' : 'bear'
  })
}
