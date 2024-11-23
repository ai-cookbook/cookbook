import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { cardData } from '../data/cards';

export default function Cards() {
  const [filter, setFilter] = useState('Все');

  const filteredCards = filter === 'Все' ? cardData : cardData.filter(card => card.category === filter);

  return (
    <Layout title="Docusaurus Site Showcase" description="List of websites people are building with Docusaurus">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Docusaurus Site Showcase</h1>
        <p>List of websites people are building with Docusaurus</p>
        <div style={{ margin: '20px 0' }}>
          <button>Добавить ваш сайт</button>
        </div>
        <div>
          <h2>Фильтры</h2>
          <p>{filteredCards.length} сайтов</p>
          <div>
            <button onClick={() => setFilter('Все')}>Все</button>
            <button onClick={() => setFilter('Избранное')}>Избранное ❤️</button>
            <button onClick={() => setFilter('Открытый код')}>Открытый код 🌐</button>
            <button onClick={() => setFilter('Продукт')}>Продукт 🛠️</button>
            {/* Добавьте другие фильтры по необходимости */}
          </div>
        </div>
        <h2>Наши любимые ❤️</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {filteredCards.map((card, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '20px',
              margin: '10px',
              width: '200px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}