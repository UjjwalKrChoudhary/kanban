import React from 'react';
import './Card.css';
import { FaExclamationCircle } from 'react-icons/fa';
import avatar from '../../assets/logo192.png';
import { todo,inprogress,backlog,done,cancelled} from '../../assets/images';

const statusIcon ={
  "Todo" : todo,
  "In progress" : inprogress,
  "Backlog" : backlog,
  "Done" : done,
  "Canceled" : cancelled,
}
const Card = ({ cardData = {} }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{cardData.id}</span>
        <img className="card-avatar" src={avatar} alt="User Avatar" />
      </div>
      <div className="title">
        <img src={statusIcon[cardData.status]} className="icon-title" alt="icon" />
        <h2 className="card-title">{cardData.title}</h2>
      </div>
      <div className="card-footer">
        <FaExclamationCircle className="icon" />
        {cardData.tag.map((t, idx) => (
          <span key={idx} className="feature-request">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
