import React, { useState } from 'react';
import TableUI from '../../components/ui/Table';
import UseColor from '../../constants/Color';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const App: React.FC = () => {
  const Color = UseColor();
  const queryClient = new QueryClient();

  return (  
    <QueryClientProvider client={queryClient}>
      <h1 className='text-4xl p-6 font-medium' style={{ fontFamily: "'Poppins', sans-serif", color : Color.text}}>Employee List</h1>
      <TableUI/>
    </QueryClientProvider>
  );
};

export default App;