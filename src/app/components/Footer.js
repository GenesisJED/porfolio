import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 max-w-[1280px] mx-auto">
        <Link
          href="#"
          className="font-headline text-2xl font-bold italic text-primary mb-4 md:mb-0 hover:opacity-80 transition-all duration-300"
        >
          GE
        </Link>
        <p className="font-mono text-sm text-primary/70 text-center md:text-left mb-4 md:mb-0">
          © 2024 Genesis. Built with Precision and Care.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/g%C3%A9nesis-e-602b151b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-primary hover:text-primary-container transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/GenesisJED"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-primary hover:text-primary-container transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
