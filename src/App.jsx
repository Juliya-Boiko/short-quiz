import { useState, useEffect } from "react";
import { initState } from "helpers/initState";
import { getCorrect } from "helpers/getCorrect";
import { getLength } from "helpers/getLength";
import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Results } from "./components/Results/Results";
import { Container } from "components/common/Container.styled";
import { Overlay } from "components/common/Overlay.styled";

export const App = () => {
  const [cardData, setCardData] = useState(initState);
  const { number, userChoise, correct } = cardData;

  useEffect(() => {
    if (number !== null && number <= getLength()) {
        setCardData((prevState) => {
          return {
            ...prevState,
            correct: getCorrect(number),
          }
        });
    }
  }, [number]);
  
  const startHandler = () => {
    setCardData((prevState) => {
      return {
        ...prevState,
        number: 1,
      }
    });
  };

  const changeHandler = (e) => {
    setCardData((prevState) => {
      return {
        ...prevState,
        userChoise: e.target.value,
        statusCheck: true,
      }
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (userChoise === correct) {
      setCardData((prevState) => {
        return {
          ...prevState,
          statusCheck: false,
          statusNext: true,
          total: prevState.total + 1,
        }
      });
    } else {
      setCardData((prevState) => {
        return {
          ...prevState,
          statusCheck: false,
          statusNext: true
        }
      });
    }
    const formElements = e.target.elements["answer"];
    formElements.forEach(elem => elem.checked = false);
  };

  const nextHandler = () => {
    setCardData((prevState) => {
      return {
        ...prevState,
        correct: '',
        userChoise: '',
        statusCheck: false,
        statusNext: false,
        number: prevState.number + 1,
      }
    });
  };

  const resetHandler = () => {
    setCardData(initState);
  };

  return (
    <Container>
      <Overlay>
        {number === null && <Hero onStart={startHandler} />}
        {number !== null && number <= getLength() && <Header number={number} />}
        {number !== null && number <= getLength() && <Card data={cardData} onChange={changeHandler} onSubmit={submitHandler} onNext={nextHandler} />}
        {number > getLength() && <Results data={cardData} onReset={resetHandler} />}
      </Overlay>
    </Container>
  );
};