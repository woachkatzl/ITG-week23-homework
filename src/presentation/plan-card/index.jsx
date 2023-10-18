import React from 'react';
import styles from './planCard.module.scss';

function PlanCard(props) {
  return (
    <div className="card">
      <div className="card__footer">
        <h2 className="card__title">{props.name}</h2>
      </div>
      <div className="card__body">
        <div className="card__price">
          <p className="card__price--small">руб</p>
          <p className="card__price">{props.price}</p>
          <p className="card__price--small">/мес</p>
        </div>
        <div className="card__speed">
          <p className="card__text">до {props.speed} Мбит/сек</p>
        </div>
      </div>
      <div className="card__footer">
        <p className="card__text">Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export { PlanCard };