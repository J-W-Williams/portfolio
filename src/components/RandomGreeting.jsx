import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const GreetingComponent = (messages) => {
 
  const greetingMessages = messages.greetingMessages;
 
  const [shuffleMessage, setShuffleMessage] = useState("integrator");
  const [isMessageVisible, setMessageVisible] = useState(true); 
  
  // let greetingIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetingMessages.length);

      setShuffleMessage(greetingMessages[randomIndex]);
 
      setMessageVisible(true);

      setTimeout(() => {
        setMessageVisible(false);
      }, 1000);
    }, (2000)); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <RandomMessage $visible={isMessageVisible}>
      {shuffleMessage}
    </RandomMessage>
  );
};


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const RandomMessage = styled.div`
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 1s ease-in-out;
`;

export default GreetingComponent;
