import { lazy } from "react";

export const Question = lazy(() => import("./features/question/question"));
export const Email = lazy(() => import("./features/email/email"));
export const Result = lazy(() => import("./features/result/result"));
export const NotFound = lazy(() => import("./components/not-found/not-found"));
