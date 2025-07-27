import React from 'react';
import styles from './GameStyles.module.scss';

const InputDisplay = ({ input }) => (
  <div className={styles.inputLine}>
    {Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className={styles.charBox}>
        {input[idx] || ''}
      </div>
    ))}
  </div>
);

export default InputDisplay;
