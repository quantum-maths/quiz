import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { Navigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const Protected = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const [answers] = useLocalStorage<{
      email: string;
      question_answers: { [key: string]: string }[];
    }>("questions", {
      email: "",
      question_answers: [],
    });

    const { pathname } = useLocation();

    if (answers.question_answers.length === 0) {
      if (!pathname.startsWith("/quiz/question")) {
        return <Navigate to={`/quiz/question/${uuidv4()}`} replace />;
      }
    }

    if (answers.question_answers.length === 1) {
      if (!pathname.startsWith("/quiz/question")) {
        return <Navigate to={`/quiz/question/${uuidv4()}`} replace />;
      }
    }

    if (answers.question_answers.length >= 2 && !answers.email) {
      if (pathname !== "/quiz/email") {
        return <Navigate to="/quiz/email" replace />;
      }
    }

    if (answers.email) {
      if (pathname !== "/quiz/result") {
        return <Navigate to="/quiz/result" replace />;
      }
    }

    return <WrappedComponent {...props} />;
  };
};
