
const Footer = () => {
  return (
    <footer className="py-6 mt-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} BMT Gaming Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
