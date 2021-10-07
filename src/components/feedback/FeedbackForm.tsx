import { Button, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { ChangeEvent, useState } from "react";
import { Question_Type } from "../googleForm/data";
import { FeedbackQuestion } from "../models/feedback";
import CheckboxQuestions from "./CheckboxQuestions";
import { feedbackQuestions } from "./feedbackQuestions";
import McqQuestions from "./McqQuestions";
import ShortAnswerQuestions from "./ShortAnswerQuestions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxSizing: "border-box",
      width: "60%",
      margin: "auto",
      padding: "3rem 0",
    },
    header: {
      boxSizing: "border-box",
      borderTop: "10px solid #522d6d",
      width: "100%",
      border: "1px solid #d9d9d9",
      padding: "1rem 1rem 1rem 1rem",
      borderRadius: "10px",
      marginBottom: "2rem",
      background: "#FFFFFF",
    },
    button: {
      width: "100%",
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      root: {
        width: "100%",
        padding: "2rem 1rem",
      },
    },
  })
);

export default function FeedbackForm() {
  const classes = useStyles();
  const [responses, setResponses] =
    useState<FeedbackQuestion[]>(feedbackQuestions);

  const handleAnswerChange = (
    event: ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => {
    let responses_list = [...responses];
    responses_list.forEach((question) => {
      if (question.id === questionId) {
        question.answer = event.target.value;
      }
    });
    setResponses(responses_list);
  };

  const handleCheckboxAnswerChange = (event: any, questionId: string) => {
    let responses_list = [...responses];
    const checked = event.target.checked;
    const value = event.target.value;
    responses_list.forEach((question) => {
      if (question.id === questionId) {
        let answers = question.answer as string[];
        answers = checked
          ? [...answers, value]
          : answers.filter((answer) => answer !== value);
        question.answer = answers;
      }
    });
    setResponses(responses_list);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Responses=", responses);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.header}>
          <Typography variant="h4" color="primary" align="left">
            Feedback Title Session Feedback Form
          </Typography>
          <Typography variant="body2" color="textPrimary" align="left">
            This is the description regarding the form
          </Typography>
        </div>
        <div>
          {responses.map((question) => {
            return question.type === Question_Type.MCQ ? (
              <McqQuestions
                key={question.id}
                question={question}
                handleAnswerChange={handleAnswerChange}
              />
            ) : question.type === Question_Type.CHECK_BOX ? (
              <CheckboxQuestions
                key={question.id}
                question={question}
                handleCheckboxAnswerChange={handleCheckboxAnswerChange}
              />
            ) : question.type === Question_Type.SHORT_ANSWER ? (
              <ShortAnswerQuestions
                key={question.id}
                question={question}
                handleAnswerChange={handleAnswerChange}
              />
            ) : null;
          })}
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="primary" type="submit">
            Submit feedback
          </Button>
        </div>
      </form>
    </div>
  );
}
