import React from 'react';
import { plants } from '../data';
import PlantCard from '../components/PlantCard';

export default function ProductsPage() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '20px' }}>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plants.filter(p => p.category === cat).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
