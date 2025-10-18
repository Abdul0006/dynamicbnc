'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text-primary p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6 text-text-secondary">{"We're sorry, but an unexpected error occurred."}</p>
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Go Home
        </button>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-secondary text-white rounded-md hover:opacity-90 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}