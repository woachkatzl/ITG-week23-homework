import React from 'react';
import { planData } from './domain/plan-data/data';
import { PlanCard } from './presentation/plan-card';

//Стили
import styles from './assets/styles/global.module.scss';

function App() {
  return (
    <React.Fragment>
      {planData.map((plan, index) => <PlanCard
        key={index}
        name={plan.name}
        price={plan.price}
        speed={plan.speed}
      />)}
    </React.Fragment>
  );
}

export { App };