import React from 'react';
import { Filter } from 'lucide-react';
import { FilterState } from '../types';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <select
          className="rounded-md border-gray-300 shadow-sm px-4 py-2 bg-white"
          value={filters.industry}
          onChange={(e) => onFilterChange('industry', e.target.value)}
        >
          <option value="">All Industries</option>
          <option value="Technology">Technology</option>
          <option value="Financial Services">Financial Services</option>
          <option value="Retail">Retail</option>
          <option value="Healthcare">Healthcare</option>
        </select>

        <select
          className="rounded-md border-gray-300 shadow-sm px-4 py-2 bg-white"
          value={filters.companySize}
          onChange={(e) => onFilterChange('companySize', e.target.value)}
        >
          <option value="">All Company Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        <select
          className="rounded-md border-gray-300 shadow-sm px-4 py-2 bg-white"
          value={filters.complexity}
          onChange={(e) => onFilterChange('complexity', e.target.value)}
        >
          <option value="">All Complexity Levels</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
  );
}