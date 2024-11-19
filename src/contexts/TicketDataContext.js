import React, { createContext, useState, useEffect } from "react";

// Create context
export const TicketDataContext = createContext();

// Create a provider component
export const TicketDataProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading state
        setError(null);   // Reset any previous errors

        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Assuming `tickets` and `users` are part of the API response
        setTickets(data.tickets || []); 
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchData();
  }, []);

  return (
    <TicketDataContext.Provider value={{ tickets, users, loading, error }}>
      {children}
    </TicketDataContext.Provider>
  );
};
