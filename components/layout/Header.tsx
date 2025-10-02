import Link from "next/link";

interface ButtonProps {
  buttonLabel: string;
  className: string;
}

const CustomButton = ({ buttonLabel, className }: ButtonProps) => {
  return (
    <button className={className}>
      {buttonLabel}
    </button>
  );
};

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          StayEase
        </Link>
        <div className="flex gap-4 items-center">
          <input
            type="search"
            placeholder="Search properties..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CustomButton buttonLabel="Rooms" className="bg-blue-500 px-4 py-2 text-white rounded-lg" />
          <CustomButton buttonLabel="Mansion" className="bg-blue-500 px-4 py-2 text-white rounded-lg" />
          <CustomButton buttonLabel="Countryside" className="bg-blue-500 px-4 py-2 text-white rounded-lg" />
          <CustomButton buttonLabel="Sign In" className="bg-red-500 px-4 py-2 text-white rounded-lg" />
          <CustomButton buttonLabel="Sign Up" className="bg-green-500 px-4 py-2 text-white rounded-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
