// Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, period, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(text.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === text.length) {
          setIsDeleting(true);
          setTypingSpeed(period);
        } else {
          setTypingSpeed(200 - Math.random() * 100);
        }
      } else {
        setDisplayedText(text.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(100);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, charIndex, text, typingSpeed, period]);

  return (
    <span className={className}>
      <span className="wrap">{displayedText}</span>
    </span>
  );
};

Typewriter.defaultProps = {
  period: 2000,
  className: '',
};

export default Typewriter;
