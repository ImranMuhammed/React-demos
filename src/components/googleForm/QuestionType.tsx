import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { MenuItem, Select } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { FeedbackQuestion } from "../models/feedback";
import { Question_Type } from "./data";

const useStyles = makeStyles(() =>
  createStyles({
    iconText: {
      display: "flex",
      alignItems: "center",
      marginRight: "0.5rem",
      "& svg": {
        marginRight: "0.5rem",
      },
    },
  })
);

interface Props {
  question: FeedbackQuestion;
  handleChangeQuestionType: (event: any, questionId: string) => void;
}

export default function QuestionType({
  question,
  handleChangeQuestionType,
}: Props) {
  const classes = useStyles();
  return (
    <Select
      value={question.type}
      onChange={(e) => handleChangeQuestionType(e, question.id)}
      style={{ width: "100%", margin: "0 0.5rem" }}
    >
      <MenuItem value={Question_Type.MCQ}>
        <div className={classes.iconText}>
          <RadioButtonCheckedIcon style={{ marginRight: "1rem" }} />
          {Question_Type.MCQ}
        </div>
      </MenuItem>
      <MenuItem value={Question_Type.CHECK_BOX}>
        <div className={classes.iconText}>
          <CheckBoxIcon style={{ marginRight: "1rem" }} />
          {Question_Type.CHECK_BOX}
        </div>
      </MenuItem>
      <MenuItem value={Question_Type.SHORT_ANSWER}>
        <div className={classes.iconText}>
          <ShortTextIcon style={{ marginRight: "1rem" }} />
          {Question_Type.SHORT_ANSWER}
        </div>
      </MenuItem>
    </Select>
  );
}
