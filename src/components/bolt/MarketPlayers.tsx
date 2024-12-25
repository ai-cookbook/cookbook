import React from 'react';
import type { MarketPlayer } from '@site/src/types/useCase';

interface MarketPlayersProps {
  players: MarketPlayer[];
}

export function MarketPlayers({ players }: MarketPlayersProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Ключевые игроки
      </h4>
      <div className="flex flex-wrap gap-2">
        {players.map((player) => (
          <div
            key={player.name}
            className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
            title={player.description}
          >
            <img
              src={player.logo}
              alt={`${player.name} logo`}
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {player.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}