import React, { createContext, useState, useEffect } from "react";

export const GroupingContext = createContext();

export const GroupingProvider = ({ children }) => {
  const [groupBy, setGroupBy] = useState(
    () => localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    () => localStorage.getItem("sortBy") || "priority"
  );

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const updateGrouping = (newGroupBy) => {
    setGroupBy(newGroupBy);
  };

  const updateSorting = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <GroupingContext.Provider
      value={{ groupBy, sortBy, updateGrouping, updateSorting }}
    >
      {children}
    </GroupingContext.Provider>
  );
};
