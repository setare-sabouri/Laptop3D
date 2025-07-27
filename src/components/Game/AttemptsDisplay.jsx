import React from 'react';
import styles from './GameStyles.module.scss';

const AttemptsDisplay = ({ attempts }) => (
  <div className={styles.attempts}>
    {attempts.map((attempt, aIdx) => (
      <div key={aIdx} className={styles.attemptRow}>
        {attempt.map((char, i) => (
          <div
            key={i}
            className={`${styles.charBox} ${styles[char.status]}`}
          >
            {char.value}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default AttemptsDisplay;
