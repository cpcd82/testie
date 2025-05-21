
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
// Fix: Import PersonalityProfile from ../types
import { ResultChartScore, PersonalityProfile } from '../types';
import { WORLDS_DATA } from '../constants';

interface ResultChartProps {
  scores: ResultChartScore[];
  profile: PersonalityProfile;
}

const ResultChart: React.FC<ResultChartProps> = ({ scores, profile }) => {
  const world = WORLDS_DATA[profile.worldId];
  // Tailwind doesn't work directly with Recharts fill, so we use hex. Extract from Tailwind bg color.
  // Example: bg-pink-500 -> #EC4899. This needs manual mapping or a utility.
  // For simplicity, let's use avatarColor for bars.
  const barColor = profile.avatarColor;

  return (
    <div className="mt-6 bg-slate-800 p-4 rounded-lg shadow-xl">
      <h4 className="text-xl font-semibold mb-4 text-center text-gray-100">Tus Puntuaciones Clave</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={scores} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis dataKey="name" tick={{ fill: '#A0AEC0', fontSize: 12 }} />
            <YAxis domain={[0, 100]} tick={{ fill: '#A0AEC0', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '0.5rem' }}
              labelStyle={{ color: '#E2E8F0', fontWeight: 'bold' }}
              itemStyle={{ color: barColor }}
            />
            <Legend wrapperStyle={{ color: '#A0AEC0', paddingTop: '10px' }} />
            <Bar dataKey="value" name="Puntuación" radius={[4, 4, 0, 0]}>
              {scores.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultChart;