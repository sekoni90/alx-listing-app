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

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; // percentage as string or empty
}