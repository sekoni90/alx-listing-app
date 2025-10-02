// interfaces/index.ts

export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// Add more interfaces below as the project grows
// interfaces/index.js
interface Address {
  state: string;
  city: string;
  country: string;
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export default PropertyProps;