export interface MarketPlayer {
  name: string;
  product: string;
  description: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  adoptionRate: number;
  yearOverYearGrowth: number;
  category: string;
  trend: 'rising' | 'stable' | 'falling';
  marketPlayers: MarketPlayer[];
} 