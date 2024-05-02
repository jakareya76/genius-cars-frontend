import footerLogo from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="container py-16 mx-auto footer">
        <aside>
          <img src={footerLogo} alt="logo" className="w-[100px] mb-4" />
          <p className="max-w-xs">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
