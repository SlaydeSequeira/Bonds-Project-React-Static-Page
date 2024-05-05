import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch, faArrowLeft, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

const PAGE_SIZE = 5;

const App3 = () => {
  const [expanded, setExpanded] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const topics = [
    {
      title: 'Debt/Equity',
      content:
        'Debt refers to borrowed capital that must be repaid with interest, while equity represents ownership in a company. Debt carries an obligation to repay, but it often provides fixed returns. Equity can offer variable returns and ownership rights but comes with higher risk. Understanding the balance between debt and equity is crucial for analyzing a company\'s financial health.',
    },
    {
      title: 'Bond/NCD',
      content:
        'Bonds and Non-Convertible Debentures (NCDs) are fixed-income securities issued by various entities to raise capital. Bonds typically have longer maturities and are often government-backed, while NCDs are issued by corporations and generally have shorter terms. Both offer fixed returns but differ in terms of risk, duration, and issuer type.',
    },
    {
      title: 'Coupon/Yield',
      content:
        'The coupon rate is the fixed annual interest rate paid on a bond, expressed as a percentage of the bond\'s face value. Yield, however, reflects the actual rate of return, accounting for factors like the bond\'s current market price and frequency of coupon payments. Yield can fluctuate with market conditions, while the coupon rate remains constant.',
    },
    {
      title: 'Yield/Effective Yield',
      content:
        'Yield refers to the income return on an investment, usually bonds or stocks, often calculated as an annual percentage. Effective yield, however, takes into account factors like compounding and reinvestment of returns. This distinction helps investors understand the true rate of return over time, especially when reinvesting coupon payments.',
    },
    {
      title: 'Investment Grade/Speculative Grade',
      content:
        'Investment-grade bonds are rated as low risk by credit rating agencies, typically issued by stable companies or governments. Speculative-grade bonds, also known as junk bonds, have a higher risk of default and are issued by less stable entities. Speculative-grade bonds offer higher returns to compensate for the increased risk, while investment-grade bonds are considered safer investments.',
    },
    {
      title: 'Credit Rating',
      content:
        'Credit ratings are assessments provided by credit rating agencies (like Standard & Poor\'s, Moody\'s, or Fitch) to evaluate the creditworthiness of a bond issuer. High credit ratings (such as AAA) indicate low risk, while lower credit ratings (such as B or below) suggest higher risk. Investors use credit ratings to assess bond risk and determine appropriate investment strategies.',
    },
    {
      title: 'Payment Frequency',
      content:
        'Payment frequency refers to how often interest payments are made on a bond or other financial instrument. Common frequencies include annually, semi-annually, quarterly, or monthly. The frequency impacts the bond\'s cash flow for investors and can affect the bond\'s price on the secondary market.',
    },
    {
      title: 'Convertible/Non-convertible Bond',
      content:
        'Convertible bonds can be converted into a predetermined number of shares of the issuing company, offering the flexibility to switch from bondholder to shareholder. Non-convertible bonds do not offer this option and remain purely debt instruments. Convertible bonds are typically attractive when a company\'s stock price is expected to rise.',
    },
    {
      title: 'Secured/Unsecured Bond',
      content:
        'Secured bonds are backed by specific collateral, providing bondholders with additional security in case of default. Unsecured bonds do not have collateral backing, making them riskier but typically offering higher yields to compensate for the increased risk.',
    },
    {
      title: 'Senior/Subordinated Bond',
      content:
        'Senior bonds have a higher claim on assets and earnings in the event of bankruptcy or liquidation, providing more protection for bondholders. Subordinated bonds, or junior bonds, have a lower priority, with senior bondholders getting paid first. Subordinated bonds usually offer higher yields due to their increased risk.',
    },
    {
      title: 'Physical/Demat Mode',
      content:
        'Bonds and other securities can be held in physical form (as paper certificates) or in dematerialized (demat) mode, where ownership records are kept electronically. Demat mode offers greater security, reduces the risk of loss or damage to certificates, and is more convenient for investors.',
    },
    {
      title: 'Private Placement/Public Issue',
      content:
        'A private placement involves issuing bonds or securities to a select group of investors, usually institutions or high-net-worth individuals. This approach is typically faster and has fewer regulatory requirements. A public issue, open to the general public, requires more extensive disclosures and compliance with regulations.',
    },
    {
      title: 'Tax-free/Taxable Bonds',
      content:
        'Tax-free bonds offer investors the benefit of not having to pay taxes on interest income, often issued by government entities for public projects. Taxable bonds, however, do not offer this benefit, with interest income subject to taxation. The tax status can impact an investor\'s choice between the two.',
    },
    {
      title: 'Listed/Unlisted Securities',
      content:
        'Listed securities are traded on public exchanges, providing liquidity and price transparency. They are subject to exchange regulations. Unlisted securities are not traded on exchanges, which can make them less liquid and more challenging to buy or sell, though they may offer unique investment opportunities.',
    },
    {
      title: 'Basis of Allotment',
      content:
        'The basis of allotment refers to the method used to distribute securities among investors when demand exceeds supply. It could involve proportionate allotment, lottery, or other mechanisms, depending on the issuer\'s guidelines and regulatory requirements. This affects who receives shares or bonds in oversubscribed issues.',
    },
    {
      title: 'Institutional/Non-institutional/Retail',
      content:
        'Institutional investors are large organizations like mutual funds, pension funds, or insurance companies. Non-institutional investors generally refer to high-net-worth individuals or private entities. Retail investors are individual investors who typically invest smaller amounts. This classification helps determine different segments of the investor market.',
    },
    {
      title: 'Yield Curve',
      content:
        'The yield curve is a graph plotting the interest rates of bonds with different maturities. A normal yield curve slopes upward, indicating that longer-term bonds generally have higher yields. An inverted yield curve slopes downward, suggesting that shorter-term bonds have higher yields, often signaling a potential economic downturn.',
    },
    {
      title: 'Downgrade',
      content:
        'A downgrade occurs when a credit rating agency lowers its rating for a bond or issuer, indicating increased risk of default. This can lead to a drop in bond prices, higher yields, and reduced investor confidence in the issuer\'s financial stability. Downgrades can significantly affect bondholders and issuers.',
    },
    {
      title: 'Default',
      content:
        'Default occurs when a bond issuer fails to meet its obligations, such as missing interest payments or failing to repay the principal at maturity. Default can result in significant financial losses for bondholders and often leads to legal proceedings to recover funds. Default risk is a key consideration for bond investors.',
    },
    {
      title: 'Fixed/Floating Coupon',
      content:
        'A fixed coupon bond pays a constant interest rate throughout its term, providing stability and predictability for investors. A floating coupon bond has a variable interest rate that changes based on a benchmark, like LIBOR or SOFR. Floating coupons can offer exposure to interest rate fluctuations, providing flexibility in changing markets.',
    },
    {
      title: 'Zero Coupon',
      content:
        'Zero-coupon bonds do not pay periodic interest. Instead, they are issued at a discount to face value and mature at face value, with the difference representing the bond\'s return. These bonds can be attractive for long-term investors seeking a lump-sum payment at maturity.',
    },
    {
      title: 'Cumulative Coupon',
      content:
        'Cumulative coupon bonds accumulate unpaid interest over time. If the issuer misses a coupon payment, the accrued interest is added to subsequent payments, ensuring bondholders eventually receive all due interest. This structure can benefit bondholders in case of issuer cash flow issues.',
    },
    {
      title: 'Capital Appreciation',
      content:
        'Capital appreciation refers to the increase in value of an asset over time. In the context of bonds, capital appreciation can occur if the bond\'s market price rises above its purchase price. This allows investors to realize a gain when selling it on the secondary market, providing another source of return besides coupon payments.',
    },
    {
      title: 'Redemption Premium',
      content:
        'A redemption premium is an additional amount paid to bondholders when a bond is redeemed before its scheduled maturity. This premium compensates bondholders for the early redemption, which may lead to the loss of future interest income. Redemption premiums are typically used when an issuer seeks to refinance its debt at a lower cost.',
    },
    {
      title: 'Step-up Coupon',
      content:
        'A step-up coupon bond features an interest rate that increases at predetermined intervals during the bond\'s term. This structure attracts investors seeking bonds with increasing returns over time, offering a hedge against inflation and other factors that might affect fixed-rate returns.',
    },
    {
      title: 'Discount to Face Value',
      content:
        'Bonds issued at a discount to their face value are sold for less than their nominal value, providing an immediate return to investors. These bonds are typically redeemed at face value, offering a built-in gain when held to maturity. This discount can occur due to market conditions, credit risk, or issuer-specific factors.',
    },
    {
      title: 'Capital Gains Tax',
      content:
        'Capital gains tax is levied on the profit made from the sale of an asset or investment, such as bonds, stocks, or real estate. The tax rate can vary depending on the duration of the investment and jurisdiction. Long-term capital gains often have lower tax rates compared to short-term capital gains, affecting the overall returns on bonds and other securities.',
    },
    {
      title: 'Interest Income',
      content:
        'Interest income is the revenue earned from holding interest-bearing securities like bonds. It is generally subject to income tax, but the rate can vary depending on the security type and the investor\'s tax bracket. Bonds with higher interest income can be attractive for investors seeking stable cash flow and a steady return on their investments.',
    },
    {
      title: 'Dividend',
      content:
        'Dividends are periodic payments made by a company to its shareholders from its profits. Although more common with stocks, some bonds can also pay dividends if they are convertible into shares or linked to company performance. Dividends can be a source of passive income for investors, providing additional returns beyond fixed interest payments.',
    },
    {
      title: 'Bullet/Staggered Redemption',
      content:
        'Bullet redemption refers to bonds that are repaid in a single lump sum at maturity, providing simplicity and predictability. Staggered redemption involves repaying the bond in multiple installments over time, offering flexibility for issuers with more complex cash flow needs. Investors need to understand these structures when assessing bond risk and return.',
    },
  ];
  

  // Total number of pages
  const totalPages = Math.ceil(topics.length / PAGE_SIZE);

  // Slice the topics list based on the current page and the page size
  const getTopicsForPage = (page) => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return topics.slice(startIndex, startIndex + PAGE_SIZE);
  };

  const toggleExpand = (index) => {
    const topicIndex = (currentPage - 1) * PAGE_SIZE + index;
    const updated = expanded.includes(topicIndex)
      ? expanded.filter((exp) => exp !== topicIndex)
      : [...expanded, topicIndex];
    
    // Toggle between different display values for smooth animations
    const content = document.querySelector(`#topic-content-${topicIndex}`);
    if (content) {
      content.style.animation = expanded.includes(topicIndex) ? 'slideUp 0.3s' : 'slideDown 0.3s';
      setTimeout(() => {
        content.style.display = expanded.includes(topicIndex) ? 'none' : 'block';
      }, 300); // Match animation duration
    }
  
    setExpanded(updated);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="nav-bar-title">SimplyBond</div>
        <div className="nav-bar-sub-title">Welcome</div>
        <ul>
          <li>Domain Concepts</li>
          <li>Market Infrastructure</li>
          <li>News Room</li>
          <li>Miscellaneous</li>
        </ul>
      </div>

      <div className="main-content">
        <div>
          <div className="tabs">
            <button>Visit Website</button>
            <button>Blog</button>
            <button>Contacts</button>
          </div>
          <hr />
          <h4 style={{ fontWeight: 200 }}>Home/Knowledge Base</h4>
          <h1>Welcome to SimplyBond Knowledge Base</h1>
          <p>This is your one-stop resource for understanding various bond and financial concepts.</p>

          <div className="topic-list">
  {getTopicsForPage(currentPage).map((topic, index) => (
    <div key={index} className="topic">
      <button
        className="topic-button"
        onClick={() => toggleExpand(index)}
        aria-expanded={expanded.includes((currentPage - 1) * PAGE_SIZE + index)}
      >
        {topic.title}
      </button>
      <div
        id={`topic-content-${(currentPage - 1) * PAGE_SIZE + index}`}
        className="topic-content"
        style={{
          display: expanded.includes((currentPage - 1) * PAGE_SIZE + index) ? 'block' : 'none',
        }}
      >
        {topic.content}
      </div>
    </div>
  ))}
</div>;
          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

      </div>

      <div className="right-side">
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div> 
    </div>
  );
};

export default App3;
