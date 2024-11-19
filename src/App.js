import React from 'react';
import { GroupingProvider } from './contexts/GroupingContext';
import { TicketDataProvider } from './contexts/TicketDataContext';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import Navbar from './components/Navbar/Navbar';
import './App.css'
function App() {
  return (
    <TicketDataProvider>
      <GroupingProvider>
        <Navbar/>
        <KanbanBoard />
      </GroupingProvider>
    </TicketDataProvider>
  );
}

export default App;
