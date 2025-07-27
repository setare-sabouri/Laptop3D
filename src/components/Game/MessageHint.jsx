import React from 'react';
import styles from './GameStyles.module.scss';

const MessageHint = ({ shiftHint, encodedHint }) => (
  <>
    <div className={styles.message}>
      Hint: The correct code was encrypted with Caesar shift of{' '}
      {shiftHint > 0 ? `+${shiftHint}` : shiftHint}.
    </div>
    <div className={styles.message}>
      Encrypted digits: <strong>{encodedHint}</strong>
    </div>
  </>
);

export default MessageHint;
