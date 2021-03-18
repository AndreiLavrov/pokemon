import React from "react";

import styles from "./pokemon.module.css";

const Pokemon = ({ data, active, index, listener }) => {
  return (
    <div
      className={`${styles.pokemon} ${styles[active ? "active" : ""]}`}
      key={`${data.url}-${data.name}`}
      // TODO:
      onClick={() => listener(index)}
    >
      <h3>{data.name}</h3>

      {active && (
        <div>
          <div>
            <h4>abilities</h4>
            <ul>
              {data.abilities &&
                data.abilities.map((abilityItem) => (
                  <li>ability - {abilityItem.ability.name}</li>
                ))}
            </ul>
          </div>
          <div>base_experience - {data.base_experience}</div>
          <div>height - {data.height}</div>
          <div>weight - {data.weight}</div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
