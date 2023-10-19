import React from "react";

//Пакет classnames
import * as classnames from "classnames";

//Стили
import styles from "./planCard.module.scss";

function PlanCard(props) {
  const cardTitle = classnames(styles.card__title, props.theme.card__title);
  const cardPrice = classnames(styles.card__price, props.theme.card__price);
  const card = classnames(
    styles.card,
    {
      [styles.selected]: props.isSelected,
    },
  );
  return (
    <div className={ card }>
      <div className={styles.card__body}>
        <div className={ cardTitle }>
          <h2>{props.name}</h2>
        </div>
        <div className={ cardPrice }>
          <p>руб</p>
          <p className={styles.card__priceBig}>{props.price}</p>
          <p className={styles.card__priceBottom}>/мес</p>
        </div>
        <div className={styles.card__speed}>
          <p className={styles.card__text}>до {props.speed} Мбит/сек</p>
        </div>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.card__text}>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export { PlanCard };