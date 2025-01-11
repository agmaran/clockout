import React from 'react';

interface FooterProps {
  companyName: string;
  copyrightYear: number;
  contactEmail: string;
  termsOfServiceLink: string;
  privacyPolicyLink: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  copyrightYear,
  contactEmail,
  termsOfServiceLink,
  privacyPolicyLink,
}) => {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/markets">Markets</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/more">More</a></li>
        </ul>
      </nav>
      <div className="contact">
        <p>Contact us: {contactEmail}</p>
      </div>
      <p className="copyright">&copy; {copyrightYear} {companyName}. All rights reserved.</p>
      <p>
        <a href={termsOfServiceLink}>Terms of Service</a> | <a href={privacyPolicyLink}>Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;