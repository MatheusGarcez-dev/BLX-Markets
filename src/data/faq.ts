export type FaqItem = { q: string; a: string }
export type FaqCategory = { title: string; items: FaqItem[] }

export const faqCategories: FaqCategory[] = [
  {
    title: 'Hedge Funds & Trading',
    items: [
      {
        q: 'What are hedge funds?',
        a: 'Hedge funds are investment vehicles that use diverse strategies to pursue returns across market conditions. At BLX Markets, we combine market access with structured approaches aligned to your account type.',
      },
      {
        q: 'Who can invest?',
        a: 'Eligibility depends on your jurisdiction, account type, and compliance review. We do not offer services to residents of restricted countries listed in our risk disclosure.',
      },
      {
        q: 'What are the main risks?',
        a: 'Our products are traded on margin and involve a high level of risk, including the possible loss of all capital. Past performance is not indicative of future results.',
      },
      {
        q: 'What is the role of Forex?',
        a: 'Forex provides liquidity and diversification within multi-asset strategies. It is highly volatile and may not be suitable for all investors.',
      },
    ],
  },
  {
    title: 'Account Types',
    items: [
      {
        q: 'What account types are available?',
        a: 'BLX Exclusive, BLX Prime, BLX Funds, and BLX Hedge — each designed for different capital levels and strategy requirements. See our Account Types page for minimum deposits.',
      },
      {
        q: 'What are Prime accounts?',
        a: 'Prime accounts connect to enhanced liquidity and automation-ready infrastructure, subject to minimum funding requirements.',
      },
      {
        q: 'What documentation is required?',
        a: 'Standard KYC includes proof of identity, proof of address, and compliance questionnaires. Additional documents may be requested depending on your profile.',
      },
      {
        q: 'Are there multi-currency accounts?',
        a: 'Contact our support team to confirm available base currencies and funding options for your region.',
      },
    ],
  },
  {
    title: 'Deposits & Withdrawals',
    items: [
      {
        q: 'What is the minimum initial deposit?',
        a: 'Minimums vary by account type, starting from €500 for BLX Hedge up to €10,000 for BLX Exclusive. See Account Types for details.',
      },
      {
        q: 'How are deposits made?',
        a: 'We support card and e-wallet methods including Visa, Skrill, Neteller, Perfect Money, and Paytrust, subject to availability in your region.',
      },
      {
        q: 'Are deposits guaranteed?',
        a: 'No. Trading on margin carries significant risk. Deposits are not bank deposits and are not protected as such.',
      },
      {
        q: 'How long do withdrawals take?',
        a: 'Processing times depend on the method and compliance status. Most requests are reviewed within 1–5 business days after approval.',
      },
      {
        q: 'Crypto deposits',
        a: 'Crypto funding may be available through approved channels. Contact support@blxmarkets.com for current options in your jurisdiction.',
      },
    ],
  },
]
