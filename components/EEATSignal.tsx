'use client';

interface EEATSignalProps {
  source?: string;
  lastUpdated?: string;
  method?: string;
  colorScheme?: 'purple' | 'red' | 'green' | 'blue' | 'rose' | 'teal' | 'cyan' | 'orange' | 'pink' | 'indigo' | 'amber';
}

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-800' },
  red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-800' },
  green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-800' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-500', text: 'text-rose-800' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-800' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-800' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-800' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-500', text: 'text-pink-800' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-500', text: 'text-indigo-800' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-800' },
};

export default function EEATSignal({
  source = 'Nootropios',
  lastUpdated,
  method = 'Analyse basée sur les études cliniques et méta-analyses publiées',
  colorScheme = 'purple',
}: EEATSignalProps) {
  const now = new Date();
  const dateStr = lastUpdated || `${now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;
  const colors = colorMap[colorScheme] || colorMap.purple;

  return (
    <div className={`${colors.bg} border-l-4 ${colors.border} p-4 rounded-r-lg mb-8`}>
      <p className={`text-sm ${colors.text}`}>
        <strong>Source :</strong> {source} | <strong>Mis à jour :</strong> {dateStr} | <strong>Méthode :</strong> {method}
      </p>
    </div>
  );
}
