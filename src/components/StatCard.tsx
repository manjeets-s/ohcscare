interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">{value}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}
