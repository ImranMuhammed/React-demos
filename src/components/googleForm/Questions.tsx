import { Divider, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { FeedbackQuestion } from "../models/feedback";
import QuestionFooter from "./QuestionFooter";
import QuestionOptions from "./QuestionOptions";
import QuestionType from "./QuestionType";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "10px",
      padding: "1rem",
      background: "#FFFFFF",
      marginRight: "1rem",
      marginBottom: "1rem",
      overflowX: "hidden",
      border: "1px solid #d9d9d9",
      "& .MuiDivider-root": {
        margin: "1rem 0",
      },
    },
    container: {
      boxSizing: "border-box",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "flex-start",
    },
    question: {
      flex: 0.7,
      "&>.MuiTextField-root": {
        marginBottom: "1rem",
      },
    },
    questionType: {
      flex: 0.3,
    },
    iconText: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      marginRight: "0.5rem",
      "& svg": {
        marginRight: "0.5rem",
      },
    },
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
  handleChangeQuestion: (event: any, questionId: string) => void;
  handleAddQuestion: (event: any) => void;
  handleDeleteQuestion: (event: any, questionId: string) => void;
  handleAddOption: (event: any, questionId: string) => void;
  handleChangeOption: (
    event: any,
    questionId: string,
    optionId: string
  ) => void;
  handleDeleteOption: (
    event: any,
    questionId: string,
    optionId: string
  ) => void;
  handleChangeQuestionType: (event: any, questionId: string) => void;
  handleChangeQuestionRequired: (event: any, questionId: string) => void;
}

export default function Questions({
  isActive,
  question,
  handleDeleteOption,
  handleAddOption,
  handleChangeOption,
  handleChangeQuestion,
  handleDeleteQuestion,
  handleChangeQuestionType,
  handleChangeQuestionRequired,
}: Props) {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ borderLeft: isActive ? "10px solid #1976d2" : "none" }}
    >
      <div
        className={classes.container}
        style={{ display: isActive ? "flex" : "block" }}
      >
        <div className={classes.question}>
          <TextField
            fullWidth
            variant="filled"
            multiline
            required
            placeholder="Question"
            value={question.question}
            onChange={(e) => handleChangeQuestion(e, question.id)}
            InputProps={{
              disableUnderline: !isActive ? true : false,
              style: {
                padding: "0 0.5rem 0.5rem 0.5rem",
                minHeight: "3.5rem",
              },
            }}
          />
        </div>

        {isActive && (
          <div className={classes.questionType}>
            <QuestionType
              question={question}
              handleChangeQuestionType={handleChangeQuestionType}
            />
          </div>
        )}
      </div>
      <div>
        <QuestionOptions
          isActive={isActive}
          question={question}
          handleAddOption={handleAddOption}
          handleChangeOption={handleChangeOption}
          handleDeleteOption={handleDeleteOption}
        />
      </div>

      <Divider style={{ display: isActive ? "flex" : "none" }} />

      <QuestionFooter
        isActive={isActive}
        question={question}
        handleChangeQuestionRequired={handleChangeQuestionRequired}
        handleDeleteQuestion={handleDeleteQuestion}
      />
    </div>
  );
}
