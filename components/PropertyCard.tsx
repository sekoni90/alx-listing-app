// components/PropertyCard.tsx
import Image from "next/image";

interface PropertyCardProps {
  property: any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={property.image} alt={property.name} width={300} height={200} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.name}</h2>
        <p className="text-gray-600 mb-2">${property.price} per night</p>
        <p className="text-gray-600 mb-2">Rating: {property.rating}/5</p>
      </div>
    </div>
  );
};

export default PropertyCard;
