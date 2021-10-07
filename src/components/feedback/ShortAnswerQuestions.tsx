import { InputLabel, TextField } from "@mui/material";
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
      textAlign: "left",
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

export default function ShortAnswerQuestions({
  question,
  handleAnswerChange,
}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.question}>
      <InputLabel style={{ marginBottom: "1rem" }}>
        {question.question}{" "}
        {question.required && (
          <span style={{ color: "#f00", marginLeft: "0.5rem" }}>*</span>
        )}
      </InputLabel>
      <TextField
        variant="standard"
        fullWidth
        required={question.required}
        placeholder="Type here"
        InputProps={{ style: { paddingLeft: "0.5rem" } }}
        value={question.answer}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleAnswerChange(e, question.id)
        }
      />
    </div>
  );
}
