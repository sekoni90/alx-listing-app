const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} StayEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
