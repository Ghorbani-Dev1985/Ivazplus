'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';


const ReactQueryProvider = ({ children }) => {
  // State
  const [queryClientStore] = useState(
    () => new QueryClient()
  );
  // Return Provider
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;