import React, { useState, useContext } from "react";
import DraggableSection from "./DraggableSection";
import "./Card.css";
import { add, done, dot, todo, inprogress, backlog, cancelled, p0, p1, p2, p3, p4, user } from "../../assets/images";
import { GroupingContext } from "../../contexts/GroupingContext";
import { TicketDataContext } from "../../contexts/TicketDataContext";

const statusIcon = {
  p1, p2, p3, p4,
  "Todo": todo,
  "In progress": inprogress,
  "Backlog": backlog,
  "Done": done,
  "Canceled": cancelled,
  "Unassigned": p0,
  "pUnassigned": p0,
};

const priorityName = {
   "Unassigned" : "No Priority",
   "1" : "Low",
    "2" : "Medium",
    "3" : "High",
    "4" : "Urgent"
}

const Section = ({ title, cardData = [] }) => {
  const [cards, setCards] = useState(cardData);
  const { groupBy } = useContext(GroupingContext);
  const { users } = useContext(TicketDataContext);

  const findUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user.name : "Unknown User";
  };

  return (
    <div className="section">
      <div className="section-heading">
        <div className="heading-left">
          {groupBy === "userId" ? (
            <img src={user} className="icon-title" alt="icon" />
          ) : groupBy === "priority" ? (
            <img src={statusIcon[`p${title}`]} className="icon-title" alt="icon" />
          ) : (
            <img src={statusIcon[title]} className="icon-title" alt="icon" />
          )}

          {groupBy === "userId" ? (
            <span className="heading-title">{findUser(title)}</span>
          ) :groupBy === "priority"?(
            <span className="heading-title">{priorityName[title]}</span>
          ): (
            <span className="heading-title">{title}</span>
          )}
          <span className="heading-count">{cardData.length}</span>
        </div>
        <div className="heading-right">
          <img src={add} className="icon-title" alt="icon" />
          <img src={dot} className="icon-title" alt="icon" />
        </div>
      </div>
      <DraggableSection cards={cardData} setCards={setCards} />
    </div>
  );
};

export default Section;
