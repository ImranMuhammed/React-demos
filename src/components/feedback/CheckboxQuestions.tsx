import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
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
  handleCheckboxAnswerChange: (event: any, questionId: string) => void;
}

export default function CheckboxQuestions({
  question,
  handleCheckboxAnswerChange,
}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.question}>
      <FormControl component="fieldset">
        <FormLabel component="legend" color="primary">
          {question.question}
          {question.required && (
            <span style={{ color: "#f00", marginLeft: "0.5rem" }}>*</span>
          )}
        </FormLabel>
        {question.options?.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.id}
              control={
                <Checkbox
                  checked={question.answer.includes(option.id)}
                  color="primary"
                  required={question.required && question.answer.length === 0}
                />
              }
              label={option.value}
              onChange={(event) =>
                handleCheckboxAnswerChange(event, question.id)
              }
            />
          );
        })}
      </FormControl>
    </div>
  );
}
