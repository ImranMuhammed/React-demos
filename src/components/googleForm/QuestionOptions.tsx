import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IconButton, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Choice, FeedbackQuestion } from "../models/feedback";
import { Question_Type } from "./data";

const useStyles = makeStyles(() =>
  createStyles({
    iconText: {
      width: "100%",
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
  isActive: boolean;
  question: FeedbackQuestion;
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
}

export default function QuestionOptions({
  isActive,
  question,
  handleAddOption,
  handleChangeOption,
  handleDeleteOption,
}: Props) {
  const classes = useStyles();
  return (
    <>
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
                    multiline
                    variant="standard"
                    placeholder={`option${j + 1}`}
                    value={option.value}
                    onChange={(e) =>
                      handleChangeOption(e, question.id, option.id)
                    }
                    InputProps={{
                      disableUnderline: !isActive ? true : false,
                    }}
                  />
                </div>
                <IconButton
                  onClick={(e) => handleDeleteOption(e, question.id, option.id)}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            );
          })}

          <div
            style={{
              display: isActive ? "flex" : "none",
              alignItems: "center",
              color: "#00f",
              cursor: "pointer",
              marginTop: "0.5rem",
              width: "fit-content",
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
    </>
  );
}
