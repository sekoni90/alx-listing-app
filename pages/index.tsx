import React from "react";
import Card from "@/components/common/Card";
import { DEFAULT_IMAGE, APP_NAME, UI } from "@/constants";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="max-w-5xl w-full">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{APP_NAME}</h1>
          <p className="text-sm text-gray-600">A simple listing page demo</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Villa Ocean Breeze"
            description="A cozy villa near the beach — 3 beds, 2 baths."
            imageUrl={DEFAULT_IMAGE}
            primaryLabel={UI.primaryAction}
            onPrimaryClick={() => alert("Book Now clicked")}
          />

          <Card
            title="City Apartment"
            description="Central apartment with city view."
            imageUrl={DEFAULT_IMAGE}
            primaryLabel={UI.detailsAction}
            onPrimaryClick={() => alert("Details clicked")}
          />
</section>
      </main>
    </div>
  );
};

export default Home;