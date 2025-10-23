import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import Button from "../../ui/button/button";
import Header from "../../ui/header/header";
import Paragraph from "../../ui/paragraph/paragraph";

const Result = () => {
  const navigate = useNavigate();
  const [results, setResults] = useLocalStorage<{
    email: string;
    question_answers: { [key: string]: string }[];
  }>("questions", {
    email: "",
    question_answers: [],
  });

  const handleSubmit = (): void => {
    setResults({
      email: "",
      question_answers: [],
    });
    navigate("/");
  };

  return (
    <section>
      <Header>Submitted information</Header>
      <Paragraph>e-mail: {results.email}</Paragraph>
      {results.question_answers.map(({ answer }, index) => (
        <Paragraph key={index}>
          Answer to question {index + 1}: {answer}
        </Paragraph>
      ))}
      <Button onClick={handleSubmit}>Try Again</Button>
    </section>
  );
};

export default Result;
