import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import {
  Divider,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Choice, FeedbackQuestion } from "../models/feedback";
import { Question_Type } from "./data";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "10px",
      padding: "1rem",
      background:"#FFFFFF",
      marginRight:"1rem",
      marginBottom:"1rem",
      border:"1px solid #d9d9d9",
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
  isActive:boolean
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
    <div className={classes.root} style={{borderLeft:isActive?"10px solid #1976d2":"none"}} >
      <div className={classes.container}>
        <div className={classes.question}>
          <TextField
            fullWidth
            variant="filled"
            multiline
          
   
            placeholder="Question"
            value={question.question}
            onChange={(e) => handleChangeQuestion(e, question.id)}
            InputProps={{ style: { padding: "0 0.5rem 0.5rem 0.5rem", minHeight:"3.5rem" } }}
          />
        </div>
        <div className={classes.questionType}>
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
        </div>
      </div>
      <div>
        {question.type !== Question_Type.SHORT_ANSWER ? (
          <>
            {question.options?.map((option: Choice, j: number) => {
              return (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className={classes.iconText}>
                    {question.type === Question_Type.MCQ ? (
                      <RadioButtonUncheckedIcon />
                    ) : question.type === Question_Type.CHECK_BOX ? (
                      <CheckBoxOutlineBlankIcon />
                    ) : null}
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder={`option${j + 1}`}
                      value={option.value}
                      onChange={(e) =>
                        handleChangeOption(e, question.id, option.id)
                      }
                    />
                  </div>
                  <IconButton
                    onClick={(e) =>
                      handleDeleteOption(e, question.id, option.id)
                    }
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              );
            })}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#00f",
                cursor: "pointer",
                marginTop: "0.5rem",
                width:"fit-content",
              }}
              onClick={(e) => handleAddOption(e, question.id)}
            >
              <AddCircleIcon style={{ marginRight: "0.5rem" }} />
              <Typography style={{ marginRight: "0.5rem" }}>
                Add option
              </Typography>
            </div>
          </>
        ) : (
          <TextField
            fullWidth
            variant="standard"
            value="Short-answer text"
            InputProps={{
              disableUnderline: true,
              style: { color: "#c9c9c9", borderBottom: "dotted" },
            }}
          />
        )}
      </div>
      <Divider />
      <div className={classes.footer}>
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
    </div>
  );
}
