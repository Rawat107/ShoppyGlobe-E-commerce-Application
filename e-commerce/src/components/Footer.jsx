// deprecated but useful
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-white py-6 mt-12 fix">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Vaibhav Rawat. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/Rawat107" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-300 transition"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/vr107" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://twitter.com/vaibhavrawat495" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-300 transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
