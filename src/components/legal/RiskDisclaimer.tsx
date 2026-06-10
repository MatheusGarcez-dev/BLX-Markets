import { companyLegal } from '../../data/content'

export function RiskDisclaimer({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`risk-disclaimer space-y-4 text-xs leading-relaxed ${compact ? '' : 'max-w-none'}`}
    >
      <p>
        {companyLegal.name} is a company incorporated in Saint Lucia, with registration number{' '}
        {companyLegal.reg} and registered office at {companyLegal.address}.
      </p>
      <p className="text-neutral-600">–</p>
      <p>
        <strong className="text-neutral-400">Risk Warning:</strong> Our products are traded on margin and
        involve a high level of risk and may result in the loss of all your capital. These products may not
        be suitable for everyone and you should ensure that you understand the risks involved.
      </p>
      <p>
        The information contained in this website, and the products and services offered, are not intended
        for distribution to residents of Australia, or to any person in any country or jurisdiction where
        such distribution or use would be contrary to local law or regulation. BLX Markets does not offer
        its services to residents of certain jurisdictions such as the USA, Cuba, Sudan, Syria and North
        Korea.
      </p>
      {!compact && (
        <p>
          The foreign exchange market is highly volatile and can result in significant gains, but also
          substantial losses. Forex trading is not suitable for all investors. There are no guarantees of
          profit. Education and risk awareness are essential. Consider your risk tolerance before engaging
          in Forex trading.
        </p>
      )}
    </div>
  )
}
