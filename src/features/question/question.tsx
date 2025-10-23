import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../ui/header/header";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { questions } from "./utils";
import { useRef } from "react";
import Button from "../../ui/button/button";
import { v4 as uuidv4 } from "uuid";
import Input from "../../ui/input/input";

const Question = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);

  const [answers, setAnswers] = useLocalStorage<{
    question_answers: { [key: string]: string }[];
  }>("questions", {
    question_answers: [],
  });

  const currentNum = location.state?.num ?? answers.question_answers.length + 1;
  const questionIndex = currentNum - 1;

  const currentQuestion = questions[questionIndex];

  const handleSubmit = () => {
    if (!ref.current?.value) return;

    const newEntry = { answer: ref.current.value };
    const newAnswers = [...answers.question_answers, newEntry];

    setAnswers({ ...answers, question_answers: newAnswers });
    ref.current.value = "";
    if (currentNum >= questions.length) {
      navigate("/email");
    } else {
      navigate(`/question/${uuidv4()}`, { state: { num: currentNum + 1 } });
    }
  };

  return (
    <section>
      <Header>Question: {currentNum}</Header>

      <p>{currentQuestion}</p>

      <Input ref={ref} />

      <Button onClick={handleSubmit}>Submit</Button>
    </section>
  );
};

export default Question;
