import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedTextContainer = styled.div`
  display: inline-block;
  padding: 0 1rem;
  min-height: 10rem;
  
`;

const AnimatedChar = styled.span<{ delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: ${(props) => props.delay}s;
  color:black;
  font-size: 2rem;
`;

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [animatedText, setAnimatedText] = useState<string[]>([]);

  useEffect(() => {
    const chars = text.split('');
    let index = 0;

    const interval = setInterval(() => {
      if (index < chars.length) {
        setAnimatedText((prev) => [...prev, chars[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // 글자가 하나씩 보여지는 간격 조절

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <AnimatedTextContainer>
      {animatedText.map((char, index) => (
        <AnimatedChar key={index} delay={index * 0.1}>
          {char}
        </AnimatedChar>
      ))}
    </AnimatedTextContainer>
  );
};

export default AnimatedText;
