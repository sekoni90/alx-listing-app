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