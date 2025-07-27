import React, { useEffect, useState } from 'react';
import styles from './GameStyles.module.scss';
import { generateDigitPassword } from './utils';
import InputDisplay from './InputDisplay';
import AttemptsDisplay from './AttemptsDisplay';
import MessageHint from './MessageHint';

const DigitPuzzleGame = () => {
  const [password, setPassword] = useState('');
  const [encodedHint, setEncodedHint] = useState('');
  const [shiftHint, setShiftHint] = useState(0);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [message, setMessage] = useState('');
  const maxAttempts = 6;

  useEffect(() => {
    const { encoded, raw, shift } = generateDigitPassword();
    setPassword(raw);
    setEncodedHint(encoded);
    setShiftHint(shift);
  }, []);

  const handleKeyDown = (e) => {
    if (message) return;

    if (e.key >= '0' && e.key <= '9' && input.length < 6) {
      setInput((prev) => prev + e.key);
    } else if (e.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key === 'Enter' && input.length === 6) {
      const result = input.split('').map((char, idx) => {
        if (char === password[idx]) return 'correct';
        else if (password.includes(char)) return 'present';
        else return 'absent';
      });

      const newAttempt = input.split('').map((char, idx) => ({
        value: char,
        status: result[idx],
      }));

      const updatedAttempts = [...attempts, newAttempt];
      setAttempts(updatedAttempts);
      setInput('');

      if (input === password) {
        setMessage('✔ ACCESS GRANTED — You cracked the digits!');
      } else if (updatedAttempts.length >= maxAttempts) {
        setMessage(`✖ ACCESS DENIED — The correct code was: ${password}`);
      }
    }
  };

  const handleReset = () => {
    const { encoded, raw, shift } = generateDigitPassword();
    setPassword(raw);
    setEncodedHint(encoded);
    setShiftHint(shift);
    setInput('');
    setAttempts([]);
    setMessage('');
  };

  return (
    <div className={styles.terminal} tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={styles.title}>💻 Digit Decryption Challenge</div>
      <MessageHint shiftHint={shiftHint} encodedHint={encodedHint} />
      <InputDisplay input={input} />
      <AttemptsDisplay attempts={attempts} />

      {message && <div className={styles.message}>{message}</div>}
      {message && (
        <button className={styles.resetButton} onClick={handleReset}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default DigitPuzzleGame;
