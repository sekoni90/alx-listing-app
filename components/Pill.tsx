// components/Pill.tsx
interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
      {label}
    </button>
  );
};

export default Pill;