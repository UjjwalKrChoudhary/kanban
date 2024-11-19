import React, { useContext, useEffect, useState } from 'react';
import './KanbanBoard.css';
import Section from '../DragableSection/Section';
import { TicketDataContext } from '../../contexts/TicketDataContext';
import { GroupingContext } from '../../contexts/GroupingContext';

const KanbanBoard = () => {
  const { tickets } = useContext(TicketDataContext);
  const { groupBy, sortBy } = useContext(GroupingContext);
  const [sortedGroupedTickets, setSortedGroupedTickets] = useState([]);

  useEffect(() => {
    const groupedTickets = tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy] || 'Unassigned';
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});

    const sortedTickets = Object.entries(groupedTickets).map(([group, tickets]) => {
      const sortedGroup = [...tickets].sort((a, b) => {
        if (sortBy.toLowerCase() === 'priority') {
          return b.priority - a.priority; // Descending priority
        } else if (sortBy.toLowerCase() === 'title') {
          return a.title.localeCompare(b.title); // Ascending title
        }
        return 0;
      });

      return [group, sortedGroup];
    });

    console.log(sortedTickets);
    setSortedGroupedTickets(sortedTickets);
  }, [tickets, groupBy, sortBy]); // Re-run effect when `tickets`, `groupBy`, or `sortBy` changes

  return (
    <div className="KanbanBoard">
      {sortedGroupedTickets.map(([group, tickets]) => (
        <Section key={group} title={group} cardData={tickets} />
      ))}
    </div>
  );
};

export default KanbanBoard;
