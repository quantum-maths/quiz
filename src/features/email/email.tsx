import { useRef, useState } from "react";
import Header from "../../ui/header/header";
import Input from "../../ui/input/input";
import Button from "../../ui/button/button";
import Helper from "../../ui/helper/helper";
import "./style.css";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [_, setEmail] = useLocalStorage<{
    email: string;
  }>("questions", {
    email: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (): void => {
    const email = ref.current?.value || "";

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);

    setEmail((prevState) => ({ ...prevState, email }));

    navigate("/quiz/result");
  };

  return (
    <section>
      <Header>Enter your email address:</Header>
      <div className="input-container">
        <Input ref={ref} />
        {error && <Helper>{error}</Helper>}
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </section>
  );
};

export default Email;
