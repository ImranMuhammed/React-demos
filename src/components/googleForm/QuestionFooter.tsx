import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { FeedbackQuestion } from "../models/feedback";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
  })
);

interface Props {
  isActive: boolean;
  question: FeedbackQuestion;
  handleDeleteQuestion: (event: any, questionId: string) => void;
  handleChangeQuestionRequired: (event: any, questionId: string) => void;
}

export default function QuestionFooter({
  isActive,
  question,
  handleDeleteQuestion,
  handleChangeQuestionRequired,
}: Props) {
  const classes = useStyles();
  return (
    <div
      className={classes.footer}
      style={{ display: isActive ? "flex" : "none" }}
    >
      <IconButton
        onClick={(e) => handleDeleteQuestion(e, question.id)}
        style={{ marginRight: "2rem" }}
      >
        <DeleteIcon />
      </IconButton>
      <FormControlLabel
        control={
          <Switch
            color="secondary"
            onChange={(e) => handleChangeQuestionRequired(e, question.id)}
          />
        }
        label="Required"
      />
    </div>
  );
}
