export function HomePage() {
  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
          Home
        </h1>
        <p className="text-gray-600">Welcome to Great Grants</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-6 border border-[#9810FA]">
          <h3 className="text-lg font-semibold text-[#9810FA] mb-2">Active Applications</h3>
          <p className="text-4xl font-bold text-gray-900">12</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Funding Requested</h3>
          <p className="text-4xl font-bold text-gray-900">$2.4M</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Rate</h3>
          <p className="text-4xl font-bold text-gray-900">68%</p>
        </div>
      </div>
    </div>
  );
}