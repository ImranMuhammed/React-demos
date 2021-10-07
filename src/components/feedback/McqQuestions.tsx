import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ChangeEvent } from "react";
import { FeedbackQuestion } from "../models/feedback";

const useStyles = makeStyles(() =>
  createStyles({
    question: {
      boxSizing: "border-box",
      width: "100%",
      border: "1px solid #d9d9d9",
      padding: "1rem 1rem 1rem 1rem",
      borderRadius: "10px",
      marginBottom: "2rem",
      background: "#FFFFFF",
    },
  })
);

interface Props {
  question: FeedbackQuestion;
  handleAnswerChange: (
    event: ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => void;
}

export default function McqQuestions({ question, handleAnswerChange }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.question}>
      <Typography variant="subtitle1" color="textPrimary" align="left">
        {question.question}
        {question.required && <span style={{ color: "#f00" }}>*</span>}
      </Typography>
      <RadioGroup
        aria-label="correct_answer"
        name="selectedAnswer"
        value={question.answer}
        onChange={(_e: ChangeEvent<HTMLInputElement>) =>
          handleAnswerChange(_e, question.id)
        }
      >
        {question.options &&
          question.options.map((choice) => {
            return (
              <FormControlLabel
                key={choice.id}
                style={{ margin: "0.1rem 0" }}
                label={
                  <Typography variant="body1" align="left" color="textPrimary">
                    {choice.value}
                  </Typography>
                }
                value={choice.id}
                control={
                  <Radio
                    checked={question.answer === choice.id}
                    required
                    color="primary"
                  />
                }
              />
            );
          })}
      </RadioGroup>
    </div>
  );
}
