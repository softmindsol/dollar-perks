import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/features/users/user.service";
import postimage from "../../assets/images/postimage.png";
import thumbnail from "../../assets/images/thumbnail.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="mt-5">
        <h2 className="lg:text-[46.4px] text-[28.8px] font-bold text-black lg:leading-[48px] font-anton">
          14 Benefits Seniors Are Entitled to But Often Forget to Claim
        </h2>
        <div className="flex items-center gap-2 mt-8">
          <div className="w-14 h-14 border rounded-full">
            <img src={postimage} alt="Post Image" />
          </div>
          <div className="text-[#999999] text-sm">
            <p className="font-medium ">
              Published 4 weeks ago on December 10, 2025
            </p>
            <p>
              By <span className="font-semibold text-black">DollerPerks</span>
            </p>
          </div>
        </div>

        <img src={thumbnail} alt="Thumbnail" className="mt-5" />
        <div className="flex items-center justify-center">
          <p className="text-[#abb8c3] text-xs text-center border-b border-dotted w-max my-3">
            Advertiser Disclosure
          </p>
        </div>
        <div className="lg:text-lg text-black font-bellarius flex flex-col gap-4">
          <p>
            Whether you’re prepping for retirement, living it up already, or
            just looking for savvy ways to save more, you’re in the right spot.
          </p>
          <p>
            Dollarperk’s editors are here to help you make the most of your
            money, from uncovering hidden discounts and little-known government
            subsidies to maximizing programs like Social Security.
          </p>
          <p>
            We cut through the clutter to bring you tools and tips that leave
            more cash in your wallet—because, let’s face it, every penny counts.
            But don’t wait—some of these benefits could change or disappear
            faster than you think! So grab your coffee, and let’s get started.
          </p>
        </div>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            1. Make Sure You Get Your Well Deserved Discounts From Retailers
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              <span className="font-bold">Amazon:</span> While Amazon doesn’t
              offer a specific senior discount, seniors who qualify for
              government assistance programs like Medicaid, SNAP, or SSI can get
              a discounted Prime membership through Prime Access
            </p>
            <p>
              <span className="font-bold">Walgreens:</span> Every Tuesday is
              Senior Day, where you get 20% off regular-priced items.
            </p>
            <p>
              <span className="font-bold">Michaels:</span> Michaels has a 10%
              senior discount every day on most in-store purchases for customers
              55 and older who register for their rewards program.
            </p>
            <p>
              <span className="font-bold">Rite Aid:</span> Snag 10% off on
              wellness+ purchases every day, plus exclusive offers during Senior
              Days.
            </p>
            <p>
              <span className="font-bold">Banana Republic Factory</span>{" "}
              locations sometimes host special “Senior Days” with 10%–15%
              discounts. It varies by location, so be sure to check with your
              local store.
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            2. The United States seniors can save $1,025 on car insurance
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              You might not even realize it, but your car insurance company is
              probably overcharging you. In fact, they’re kind of counting on
              you not noticing. Luckily, this problem is easy to fix.
            </p>
            <p>
              This company called{" "}
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/1"
              >
                FinanceBuzz
              </Link>{" "}
              shows you all your options at once — seniors who do this save up
              to $1,025 per year.
            </p>
            <p>Here's how to quickly qualify:</p>
            <ul className="list-disc list-inside ml-2">
              <li>Click the link below and start by inserting your zip code</li>
              <li>Answer a few questions about your car</li>
              <li>Choose the best offer and lock in your rate</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/1"
              >
                Find out how much you can save on your auto insurance
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] tex-lg font-black text-black lg:leading-[40px] font-bellarius">
            3. Borrow from your home equity with this new program
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              You can now tap into the equity you’ve worked hard to build in
              your home, without any hassle or expensive fees, whether you are
              tackling short term debt or looking to make home improvements.
            </p>
            <p>
              That’s right, with
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/2"
              >
                LendingTree’s New Program
              </Link>{" "}
              seniors unlock equity funds without affecting their mortgages. It
              works more like a credit card — giving you access to funds when
              you need them and letting you pay back only what you use.
            </p>
            <p>Get started with these easy steps:</p>
            <ul className="list-disc list-inside ml-2">
              <li>Check out LendingTree’s HELOC calculator</li>
              <li>Tell them a bit about your home</li>
              <li>Lock in your rate today</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/1"
              >
                700+ Credit Score: Calculate how much you’re eligible to access
                today
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            4. Pay less on food & entertainment
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              <span className="font-bold">Phone Plan:</span> T-Mobile’s senior
              plans start at $60 per month for two lines and include unlimited
              talk, text, and data
            </p>
            <p>
              <span className="font-bold">Applebee's:</span> Ready to enjoy some
              comfort food and cheerful vibes? Applebee’s offers up to 10-15%
              off for seniors
            </p>
            <p>
              <span className="font-bold">IHOP + Denny’s:</span> Have a special
              “55+ menu” with smaller portions at lower prices. Plus, AARP
              members enjoy an extra 10% off their meal — sweet deal for your
              sweet tooth.
            </p>
            <p>
              <span className="font-bold">AMC Theatres:</span> Most locations
              offer discounted tickets for seniors, typically saving you 30-50%
              on movie admission.
            </p>
            <p>
              <span className="font-bold">AARP:</span> Offering seniors plenty
              of discounts on Airfare, Hotels, Cruises and Rental Cars,
              Restaurant & Meal Deliveries. You can Get 25% off your AARP
              membership, making it just $15 the first year by using this link.
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            5. Credit Card Debt: Pay no interest into 2027 with this no annual
            fee card
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              If you’re struggling to pay down high interest debt (or you’re
              planning a major purchase this year), this might be the exact
              thing you need. There’s a card that allows you to{" "}
              <span className="font-bold">
                completely pause credit card interest into 2027
              </span>{" "}
              … and the best part is that it could be easier than you think.
            </p>
            <p>
              It’s an extremely powerful card that gives you 0% intro APR for an
              astounding 15 months on purchases and balance transfers. That’s
              right — you can now finance large purchases you’ve been sitting on
              without paying massive interest. Or, transfer crippling high
              interest debt to this card and let your payments go directly to
              paying down your balance, without piling on additional interest
              charges —{" "}
              <span className="font-bold">all with no annual fee.</span>
            </p>
            <p>
              But it doesn’t end there. This card also lets you earn 5% cash
              back on everyday purchases at different places you shop each
              quarter like grocery stores, restaurants, gas stations, and more,
              up to the quarterly maximum when you activate. Plus, it will match
              all the cash back you’ve earned at the end of your first year.
              This practically doubles its value at the end of your first year.
            </p>
            <p>
              Dollarperk’s editors have done their research and have chosen the
              best card in category, so you don’t have to do the work.
            </p>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/3"
              >
                Claim this life changing card today!
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] tex-lg font-black text-black lg:leading-[40px] font-bellarius">
            6. Overpaying for bathroom renovation? The United States residents
            can save a fortune on walk in showers
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              A walk-in shower helps you stay in your home longer by making
              bathing safer and easier. With features like low-step entry &
              non-slip surfaces, it’s more than just a shower — it’s a way to
              stay independent and avoid accidents.
            </p>
            <p>
              What many seniors don’t know is that walk-in showers may qualify
              for financial assistance or tax breaks, but these benefits are
              often overlooked. This upgrade isn’t just about comfort, it can
              save you money while keeping you safe and is much cheaper than
              walk in tubs.
            </p>
            <p>You might be eligible if you check these 3 boxes:</p>
            <ul className="list-disc list-inside ml-2">
              <li>You own your home.</li>
              <li>Your bathroom hasn’t been remodeled for 5+ years.</li>
              <li>Your ZIP code qualifies.</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/4"
              >
                Complete this short questionnaire to see if you qualify today
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            7. Be aware of travel & accommodation discounts
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              <span className="font-bold">
                National Park Service Senior Pass:
              </span>{" "}
              For a one-time fee of $80, U.S. citizens or permanent residents
              aged 62 and older can obtain a lifetime Senior Pass. This pass
              grants access to over 2,000 federal recreation sites, including
              national parks and wildlife refuges.
            </p>
            <p>
              <span className="font-bold">Amtrak Senior Discounts:</span> 10%
              discount on most rail fares to travelers aged 65 and older.
            </p>
            <p>
              <span className="font-bold">Greyhound Senior Discount:</span> 5%
              discount on fares for passengers aged 62 and older. This discount
              is available on cross-border routes.
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] tex-lg font-black text-black lg:leading-[40px] font-bellarius">
            8. Home Insurance: Save potentially $1,000 or more on home insurance
            in United States
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              Most people don’t even think twice about what they pay for home
              insurance. Huge mistake. Especially if you want more money in
              retirement. If you live in United States and you haven’t checked
              rates recently, you could save potentially $1,000s.
            </p>
            <p>
              <Link to="https://get.dollarperks.net/click/5">
                This tool
              </Link>{" "}
              is actively helping homeowners score huge savings on better home
              insurance. They bring top insurance providers together to compete
              for your business, potentially giving you a better deal. This
              could drive the cost down for you by orders of magnitude.
            </p>
            <p>
              You could slash the cost of home insurance by tapping into
              potential discounts and incentives most homeowners probably don’t
              even know exist.
            </p>
            <p>You might be eligible if you check these 3 boxes:</p>
            <ul className="list-disc list-inside ml-2">
              <li>You own your home.</li>
              <li>You are willing to switch providers to save money.</li>
              <li>Your ZIP code qualifies.</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/5"
              >
                Complete this short questionnaire to see if you qualify
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] tex-lg font-black text-black lg:leading-[40px] font-bellarius">
            9. This credit card debt relief program eliminates 40-60% of what
            you owe
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              If credit card payments are destroying your retirement, you’re not
              alone. This IRS-approved debt relief program has eliminated $5+
              billion in debt.
            </p>
            <p>
              Make sure to mention if you have additional debt in the following
              categories: Personal loans, private student loans, payday loans,
              some unpaid bills & unsecured medical debt.
            </p>
            <p>
              <Link to="https://get.dollarperks.net/click/6">
                National Debt Relief
              </Link>{" "}
              negotiates directly with your creditors to slash 40-60% of your
              total balance. You pay the reduced amount over 12-48 months, then
              you’re free. No bankruptcy needed.
            </p>
            <p>Here is how to qualify:</p>
            <ul className="list-disc list-inside ml-2">
              <li>
                {" "}
                <span className="font-bold">$15,000+</span> in credit card debt
              </li>
              <li>Struggling with monthly payments</li>
              <li>Have a steady income</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/6"
              >
                Take this short questionnaire to find out if you’re eligible for
                debt relie
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] tex-lg font-black text-black lg:leading-[40px] font-bellarius">
            10. The United States residents could save a fortune on new windows
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              Old windows drive up your home’s electric bill. But if you live in
              The United States and your windows are 5+ years old, you could
              save $1,000s.
            </p>
            <p>
              WindowsUSA is actively helping seniors{" "}
              <span className="font-bold">
                score huge savings on new windows
              </span>
              . They bring top local vendors into a bidding war for your
              business, providing the best deals without sacrificing quality.
              This can drive the cost down for you by orders of magnitude.
            </p>
            <p>
              Slash the cost of new windows by tapping into hidden rebates,
              unlisted discounts, and local incentives most homeowners don’t
              even know exist.
            </p>
            <p className="font-bold">
              You might be eligible if you check these 3 boxes:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li> Own your home</li>
              <li>Have windows that are 5+ years old</li>
              <li>Live in an eligible zip code</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/7"
              >
                Complete this short questionnaire to see if you qualify
              </Link>{" "}
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            11. Weight Loss: Save as much as 80% on weight loss meds
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              If you’re finally ready to lose weight, FDA-approved GLP-1s — like
              Semaglutide & Tirzepatide — burn fat fast. The best company we
              recommend is ranked #1 on Forbes Health, called{" "}
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/8"
              >
                MyStart gets them to you 80% cheaper!
              </Link>
            </p>
            <p>
              It might sound crazy, but MyStart operates on a cash-only basis
              and does not accept insurance. This is how they’re able to provide{" "}
              <span className="font-bold">up to 80% off the typical cost </span>{" "}
              of weight-loss medications like Ozempic and Zepbound. (You can pay
              via credit cards, including Visa and Mastercard.)
            </p>
            <p>
              Skip the surgeries, diets, and expensive costs of weight loss. Get
              real results with GLP-1s at 80% less than name brands! Plus, get
              access to U.S.-based doctors 24/7 when you go through MyStart. No
              insurance is required and there are no hidden fees.
            </p>
            <p>
              Dr. Ritu Chopra (from the show “The Doctors”) says this is the
              future of weight loss. Join now before prices go up! You could
              qualify in 5-minutes or less. DollarPerk’s readers are now getting
              $120 off and free shipping.
            </p>
            <Link
              className="text-blue-500 underline"
              to="https://get.dollarperks.net/click/8"
            >
              Complete this short quiz to get up to 80% off weight loss
              medications starting at ($6/day)
            </Link>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] tex-lg font-black text-black lg:leading-[40px] font-bellarius">
            12. This plan protects select The United States homes from many
            expensive appliance and home repairs (lock in your ultra-low rate)
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              Sounds crazy. And maybe you’re not even sure if this is real. But
              … you’re probably curious anyway. If you live in The United States
              and own your home,{" "}
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/9"
              >
                Choice Home Warranty
              </Link>{" "}
              could make it so{" "}
              <span className="font-bold">
                you don’t have to pay $1,000s on home repairs anymore.
              </span>
            </p>
            <p>
              They’ve been around since 2008 (so you know they’re legit) and
              they offer affordable plans to cover appliances and systems in
              your home that could break down. Just make your claim online or
              give them a call. Their team is available 24 hours a day, 7 days a
              week.3
            </p>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/9"
              >
                Choose a plan here
              </Link>{" "}
              and you could still lock in their ultra-low 2025 rates for a
              limited time. You could tap into immense savings for nearly any
              system or appliance in your home that’s covered.
            </p>
            <p className="font-bold">
              Not everyone is eligible for this plan so here’s how to check:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li>Click the link below and enter your zip code.</li>
              <li>Answer a few simple questions.</li>
              <li>See if your home qualifies and lock in your rate.</li>
            </ul>
            <p>
              <Link
                className="text-blue-500 underline"
                to="https://get.dollarperks.net/click/9"
              >
                Choose a plan here and and see if you’re eligible for $50 off
                and 1 month free
              </Link>{" "}
            </p>
            <p>
              <span className="font-bold">P.S.</span> We negotiated a special
              deal for DollarPerks’ readers who sign up using the link above.
              Use it this week to get $50 off and 1 month free. We don’t know
              how long it will last, so take advantage of it today before it
              disappears.
            </p>
          </div>
        </section>
        <section className="lg:py-5 py-3">
          <h2 className="lg:text-[28.4px] text-lg font-black text-black lg:leading-[40px] font-bellarius">
            13. Interest: Stop getting ripped off by credit card companies
          </h2>
          <div className="lg:text-lg  text-black font-vollkorn flex flex-col gap-4 mt-3">
            <p>
              If you have credit card debt, you know that paying your bill each
              month is anxiety-inducing … and sometimes close to impossible with
              what you have in the bank.
            </p>
            <p>
              If that’s you, a company called{" "}
              <span className="font-bold">LendingTree </span> wants to help.They
              can match you with loan providers that could help you pay off your
              debt quickly.
            </p>
            <p>
              <span className="font-bold">Think about it this way:</span> For
              example, $25,000 in credit card debt at 25% APR will cost you
              $518.83 every single month in interest alone. But, with lower
              rates available through their lenders, you’d only potentially pay
              $144.03 interest.
            </p>
            <p>
              That’s over <span className="font-bold">$350</span> a month you’d
              get to keep for yourself in this scenario! Even better, you don’t
              need a perfect credit score, and checking for loans won’t affect
              your credit.
            </p>
            <p>
              Truthfully, this company exists to help you get ahead in life.
              Highly rated on TrustPilot with more than 15,000 verified reviews,
              and you can see your options in a matter of minutes. It’s
              certainly worth a shot if you’re feeling suffocated by debt.
            </p>
            <Link
              className="text-blue-500 underline"
              to="https://get.dollarperks.net/click/10"
            >
              See if your $25K+ credit card debt is eligible for options with
              LendingTree
            </Link>
          </div>
        </section>
        <section className="text-black text-[17px] font-vollkorn">
          <h2 className="font-bold border-b border-black border-dashed w-fit text-lg">
            Advertiser Disclosure
          </h2>
          <p className="italic text-[17px] font-normal py-6">
            Companies mentioned in this article have not been reviewed, approved
            or endorsed by included advertisers. Opinions are ours alone.
          </p>
          <p className="italic text-[17px] font-normal py-3">
            *Clients who are able to stay with the program and get all their
            debt settled realize approximate savings of 46% before fees, or 25%
            including our fees, over 24 to 48 months. All claims are based on
            enrolled debts. Not all debts are eligible for enrollment. Not all
            clients complete our program for various reasons, including their
            ability to save sufficient funds. Estimates based on prior results,
            which will vary based on specific circumstances. We do not guarantee
            that your debts will be lowered by a specific amount or percentage
            or that you will be debt-free within a specific period of time. We
            do not assume consumer debt, make monthly payments to creditors or
            provide tax, bankruptcy, accounting or legal advice or credit repair
            services. Not available in all states. Please contact a tax
            professional to discuss tax consequences of settlement. Please
            consult with a bankruptcy attorney for more information on
            bankruptcy. Depending on your state, we may be available to
            recommend a local tax professional and/or bankruptcy attorney. Read
            and understand all program materials prior to enrollment, including
            potential adverse impact on credit rating.”
          </p>
          <p className="py-2">
            <span className="font-bold">Important Disclosures:</span> This
            website does not constitute an offer or solicitation to lend. The
            operator of this website is NOT A LENDER, does not make loan or
            credit decisions, and does not broker loans. The operator of this
            website is not an agent or representative of any lender. We are a
            lead generator. This website’s aim is to provide lenders with
            information about prospective consumer borrowers. We are compensated
            by lenders for this service.
          </p>
          <p className="py-2">
            Information about loans: Not all lenders can provide loan amounts up
            to the maximum amount that is advertised. The maximum amount you may
            borrow from any lender is determined by the lender based on its own
            policies, which can vary, and on your creditworthiness. The time to
            receive loan proceeds varies among lenders, and in some
            circumstances faxing of loan request form materials and other
            documents may be required. Submitting your information online does
            not guarantee that you will be approved for a loan.
          </p>
          <p className="py-2">
            Every lender has its own terms and conditions and renewal policy,
            which may differ from lender to lender. You should review your
            lender’s terms and renewal policy before signing the loan agreement.
            Late payments of loans may result in additional fees or collection
            activities, or both.
          </p>
          <p className="py-3">
            By using this website or services, you represent and warrant that
            you are at least 18 years old, that you are a resident of the United
            States, and that you are not a resident of any state where the loan
            you are applying for is illegal.
          </p>
        </section>
        <div className="flex items-center gap-4 my-6">
          <img src={postimage} />
          <div>
            <h2 className="font-bold">Dollar Perk</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
