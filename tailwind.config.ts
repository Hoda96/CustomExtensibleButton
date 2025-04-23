/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{ts,tsx}',
      './stories/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          blue: {
            100: '#DBEAFE',
            500: '#3B82F6',
            600: '#2563EB',
          },
          green: {
            100: '#D1FAE5',
            500: '#10B981',
            600: '#059669',
          },
          red: {
            100: '#FEE2E2',
            500: '#EF4444',
            600: '#DC2626',
          },
          gray: {
            100: '#F3F4F6',
            500: '#6B7280',
            600: '#4B5563',
          },
        },
      },
    },
    safelist: [
      'bg-blue-500', 'bg-blue-600', 'bg-blue-100',
      'bg-green-500', 'bg-green-600', 'bg-green-100',
      'bg-red-500', 'bg-red-600', 'bg-red-100',
      'bg-gray-500', 'bg-gray-600', 'bg-gray-100',
      'border-blue-500', 'border-green-500', 'border-red-500', 'border-gray-500',
      'text-blue-500', 'text-green-500', 'text-red-500', 'text-gray-500',
    ],
    plugins: [],
  };