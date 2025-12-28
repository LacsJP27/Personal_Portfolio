import { useState, useEffect } from 'react';

const useTypewriter = (phrases, speed = 100, pauseDuration = 2000, backspaceSpeed = 50) => {
  const [index, setIndex] = useState(0); // Current phrase index
  const [subIndex, setSubIndex] = useState(0); // Current character index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // 1. If we finished typing the full phrase
    if (subIndex === phrases[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    // 2. If we finished backspacing the full phrase
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length); // Loop back to start
      return;
    }

    // 3. The actual typing/deleting logic
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? backspaceSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, phrases, speed, backspaceSpeed, pauseDuration]);

  // Return the substring based on our current subIndex
  return phrases[index].substring(0, subIndex);
};

const Typewriter = ({ phrases }) => {
  const displayText = useTypewriter(phrases);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '1.5rem' }}>
      <span>{displayText}</span>
      <span className="blinking-cursor">|</span>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Typewriter;