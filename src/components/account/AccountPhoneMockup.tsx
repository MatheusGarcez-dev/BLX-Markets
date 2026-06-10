import { useMemo } from 'react'
import { accountPhonePositions } from '../../data/accountPhone'
import { tvDarkChartColors } from '../../lib/tradingview'
import { TradingViewEmbed } from '../tradingview/TradingViewEmbed'

export function AccountPhoneMockup() {
  const chartConfig = useMemo(
    () => ({
      symbol: 'FX:EURUSD',
      width: '100%',
      height: '100%',
      locale: 'en',
      dateRange: '1D',
      colorTheme: 'dark',
      isTransparent: true,
      autosize: true,
      chartOnly: true,
      ...tvDarkChartColors,
    }),
    [],
  )

  return (
    <div
      className="account-phone"
      role="img"
      aria-label="Mobile trading terminal with open positions and live chart"
    >
      <div className="account-phone__frame">
        <div className="account-phone__island" />
        <div className="account-phone__screen">
          <header className="account-phone__bar">
            <span className="account-phone__brand">BLX Terminal</span>
            <span className="account-phone__live">
              <span className="account-phone__live-dot" />
              Live
            </span>
          </header>

          <div className="account-phone__equity">
            <p className="account-phone__label">Equity</p>
            <p className="account-phone__value">€ 48,291.40</p>
            <p className="account-phone__pnl">
              Today <span className="text-[#4ade80]">+€ 192.02</span>
            </p>
          </div>

          <div className="account-phone__chart">
            <TradingViewEmbed
              widget="miniSymbol"
              config={chartConfig}
              height={108}
              showAttribution={false}
              className="account-phone__chart-embed"
            />
          </div>

          <div className="account-phone__positions">
            <p className="account-phone__section-title">Open positions</p>
            <ul className="account-phone__list">
              {accountPhonePositions.map((pos) => (
                <li key={pos.symbol} className="account-phone__row">
                  <div>
                    <p className="account-phone__sym">{pos.symbol}</p>
                    <p className="account-phone__meta">
                      <span
                        className={
                          pos.side === 'Buy'
                            ? 'text-[#4ade80]'
                            : 'text-[#f87171]'
                        }
                      >
                        {pos.side}
                      </span>
                      {' · '}
                      {pos.volume} lots
                    </p>
                  </div>
                  <span
                    className={`account-phone__row-pnl font-mono text-xs ${
                      pos.positive ? 'text-[#4ade80]' : 'text-[#f87171]'
                    }`}
                  >
                    {pos.pnl}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="account-phone__tabs">
            <span className="account-phone__tab account-phone__tab--active">Positions</span>
            <span className="account-phone__tab">Orders</span>
            <span className="account-phone__tab">History</span>
          </nav>
        </div>
      </div>
    </div>
  )
}
