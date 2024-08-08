import { useTranslations } from "next-intl";

const Terms = () => {
  const t = useTranslations("terms")

  return (
    <section className="bg-[url('/images/bg-hero.png')] bg-no-repeat term text-tuna py-10 md:py-20">
      <h1 className="font-bold text-4xl sm:text-[45px] relative sm:mb-6 text-black text-center">
        {t('title')}
      </h1>
      <div className="shadow-container container py-10 mx-auto rounded-[8px] p-10">
        <h4>1. Acceptance of Terms</h4>
        <br />
        <p>
          By creating an account or using the App, you accept and agree to be
          bound by these Terms and our Privacy Policy. If you are using the App
          on behalf of an organization, you agree to these Terms on behalf of
          that organization and affirm that you have the authority to do so.
        </p>
        <br />
        <br />
        <h4>2. Account Registration</h4>
        <br />
        <ul>
          <li>
            <strong>Eligibility:</strong> You must be at least 18 years old to
            use the App.
          </li>
          <li>
            <strong>Account Information:</strong> You agree to provide accurate,
            current, and complete information during the registration process
            and to update such information to keep it accurate, current, and
            complete.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for
            safeguarding your password and for any activities or actions under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </li>
        </ul>
        <br />
        <br />
        <h4>3. Use of the App</h4>
        <br />
        <ul>
          <li>
            <strong>License:</strong> We grant you a limited, non-exclusive,
            non-transferable, and revocable license to use the App in accordance
            with these Terms.
          </li>
          <li>
            <strong>Restrictions:</strong> You agree not to use the App for any
            unlawful purpose or in any way that could damage, disable,
            overburden, or impair the App.
          </li>
          <li>
            <strong>Prohibited Conduct:</strong> You agree not to:
            <ul>
              <li>Use the App to engage in any illegal activities.</li>
              <li>
                Interfere with or disrupt the App or servers or networks
                connected to the App.
              </li>
              <li>
                Use any data mining, robots, or similar data gathering or
                extraction methods.
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <br />
        <h4>4. Booking and Payments</h4>
        <br />
        <ul>
          <li>
            <strong>Bookings:</strong> You can book sports facilities through
            the App. All bookings are subject to availability and the terms of
            the facility.
          </li>
          <li>
            <strong>Payments:</strong> Payments for bookings must be made
            through the App. We use third-party payment processors, and by
            making a payment, you agree to their terms and conditions.
          </li>
          <li>
            <strong>Cancellation and Refunds:</strong> Cancellation and refund
            policies may vary depending on the facility&apos;s terms. Please
            review the specific terms at the time of booking.
          </li>
        </ul>
        <br />
        <br />
        <h4>5. Content</h4>
        <br />
        <ul>
          <li>
            <strong>Your Content:</strong> You retain all rights to any content
            you submit, post, or display on or through the App. By submitting
            content, you grant us a worldwide, non-exclusive, royalty-free
            license to use, copy, modify, and display such content.
          </li>
          <li>
            <strong>Prohibited Content:</strong> You agree not to post any
            content that is unlawful, defamatory, or infringes on the rights of
            others.
          </li>
        </ul>
        <br />
        <br />
        <h4>6. Intellectual Property</h4>
        <br />
        <ul>
          <li>
            <strong>Ownership:</strong> We and our licensors retain all rights,
            title, and interest in and to the App, including all intellectual
            property rights.
          </li>
          <li>
            <strong>Feedback:</strong> If you provide us with any feedback or
            suggestions regarding the App, you grant us the right to use such
            feedback without any obligation to you.
          </li>
        </ul>
        <br />
        <br />
        <h4>7. Merchants and Advertising</h4>
        <br />
        <ul>
          <li>
            <strong>Merchant Use:</strong> If you are a merchant using the App,
            you may have the opportunity to place advertising banners at your
            store or facility through the App.
          </li>
          <li>
            <strong>Banner Placement:</strong> All banner placements must comply
            with our guidelines and policies. We reserve the right to approve or
            reject any banner content at our discretion.
          </li>
          <li>
            <strong>Advertising Content:</strong> You are responsible for
            ensuring that all advertising content is lawful and does not
            infringe on the rights of any third parties. You agree to indemnify
            and hold us harmless from any claims arising from your advertising
            content.
          </li>
        </ul>
        <br />
        <br />
        <h4>8. Termination</h4>
        <br />
        <ul>
          <li>
            <strong>Termination by You:</strong> You may terminate your account
            at any time by contacting us.
          </li>
          <li>
            <strong>Termination by Us:</strong> We may terminate or suspend your
            account or access to the App at any time, without prior notice or
            liability, for any reason, including if you breach these Terms.
          </li>
        </ul>
        <br />
        <br />
        <h4>9. Disclaimer of Warranties</h4>
        <br />
        <p>
          The App is provided on an &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; basis. We make no warranties, express or implied,
          regarding the App&apos;s operation or availability.
        </p>
        <br />
        <br />
        <h4>10. Limitation of Liability</h4>
        <br />
        <p>
          To the fullest extent permitted by law, in no event shall we be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or in connection with your use of the App.
        </p>
        <br />
        <br />
        <h4>11. Governing Law</h4>
        <br />
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Country/State], without regard to its conflict of law
          principles.
        </p>
        <br />
        <br />
        <h4>12. Changes to Terms</h4>
        <br />
        <p>
          We may modify these Terms at any time. We will notify you of any
          changes by posting the new Terms on this page. You are advised to
          review these Terms periodically for any changes.
        </p>
        <br />
        <br />
        <h4>13. Contact Us</h4>
        <br />
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>Email: hisport.app@gmail.com</p>
        <br />
        <p>Effective Date: 20/6/2024</p>
      </div>
    </section>
  );
};

export default Terms;
