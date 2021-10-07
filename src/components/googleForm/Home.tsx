import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { Choice, FeedbackQuestion } from "../models/feedback";
import { Question_Type } from "./data";
import Questions from "./Questions";

const useStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      width: "100%",
      minHeight: "100vh",
      background: "#ECECEC",
    },
    root: {
      boxSizing: "border-box",
      width: "60%",
      margin: "auto",
      padding: "1rem",
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
      "&.MuiTextField-root": {
        marginBottom: "2rem",
      },
    },
    questionContainer: {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
    },
    add: {
      position:"fixed",
      bottom:"5rem",
      right:"5rem",
      boxSizing: "border-box",
      width: "fit-content",
      background: "#fff",
      borderRadius: "5px",
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [questions, setQuestions] = useState<FeedbackQuestion[]>([
    {
      question: "",
      type: Question_Type.MCQ,
      options: [{ id: (Date.now() + 1).toString(), value: "" }],
      answer: "",
      required: false,
      id: Date.now().toString(),
    },
  ]);

  const handleAddQuestion = (event: any) => {
    event.preventDefault();
    let questionList = [...questions];
    questionList.push({
      question: "",
      type: Question_Type.MCQ,
      options: [{ id: (Date.now() + 1).toString(), value: "" }],
      answer: "",
      required: false,
      id: Date.now().toString(),
    });
    setQuestions(questionList);
  };

  const handleChangeQuestion = (event: any, questionId: string) => {
    event.preventDefault();
    let questionList = [...questions];
    questionList.forEach((question) => {
      if (question.id === questionId) {
        question.question = event.target.value;
      }
    });
    setQuestions(questionList);
  };

  const handleChangeQuestionType = (event: any, questionId: string) => {
    event.preventDefault();
    const value = event.target.value;
    let questionList = [...questions];
    questionList.forEach((question) => {
      if (question.id === questionId) {
        question.type = value;
        if (value === Question_Type.SHORT_ANSWER) {
          question.options = [{} as Choice];
        }
      }
    });
    setQuestions(questionList);
  };

  const handleChangeQuestionRequired = (event: any, questionId: string) => {
    event.preventDefault();
    let questionList = [...questions];
    questionList.forEach((question) => {
      if (question.id === questionId) {
        question.required = !question.required;
      }
    });
    setQuestions(questionList);
  };

  const handleDeleteQuestion = (event: any, questionId: string) => {
    event.preventDefault();
    let questionsList = questions.filter(
      (question) => question.id !== questionId
    );
    setQuestions(questionsList);
  };

  const handleAddOption = (event: any, questionId: string) => {
    event.preventDefault();
    let questionList = [...questions];
    questionList.forEach((question) => {
      if (question.id === questionId) {
        question.options?.push({ id: Date.now().toString(), value: "" });
      }
    });
    setQuestions(questionList);
  };

  const handleChangeOption = (
    event: any,
    questionId: string,
    optionId: string
  ) => {
    event.preventDefault();
    let questionList = [...questions];
    questionList.forEach((question) => {
      if (question.id === questionId) {
        question.options?.forEach((option) => {
          option.id === optionId
            ? (option.value = event.target.value)
            : (option.value = option.value);
        });
      }
    });
    setQuestions(questionList);
  };

  const handleDeleteOption = (
    event: any,
    questionId: string,
    optionId: string
  ) => {
    event.preventDefault();
    let questionList = [...questions];
    questionList = questionList.map((question) => {
      if (question.id === questionId) {
        question.options = question.options?.filter(
          (option) => option.id !== optionId
        );
      }
      return question;
    });
    setQuestions(questionList);
  };

  const handleSubmit=(event:any)=>{
    event.preventDefault();
    console.log("title",title);
    console.log("Description",description);
    console.log("Feedback questions",questions);
  } 

  return (
    <div className={classes.mainContainer}>
      <form className={classes.root} onSubmit={handleSubmit} >
        <div className={classes.header}>
          <TextField
            variant="standard"
            placeholder="Feedback Title "
            fullWidth
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: "36px",
                borderBottom: "1px solid #d9d9d9",
                marginBottom: "0.5rem",
              },
            }}
          />
          <TextField
            variant="standard"
            placeholder="Feedback description "
            fullWidth
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "15px", borderBottom: "1px solid #d9d9d9" },
            }}
          />
        </div>
        <div>
          {questions.map((question, index) => {
            return (
              <Questions
                key={index}
                question={question}
                handleChangeQuestion={handleChangeQuestion}
                handleAddQuestion={handleAddQuestion}
                handleDeleteQuestion={handleDeleteQuestion}
                handleAddOption={handleAddOption}
                handleChangeOption={handleChangeOption}
                handleDeleteOption={handleDeleteOption}
                handleChangeQuestionType={handleChangeQuestionType}
                handleChangeQuestionRequired={handleChangeQuestionRequired}
              />
            );
          })}
        </div>
        <div className={classes.add}>
            <IconButton onClick={handleAddQuestion}>
              <AddCircleIcon />
            </IconButton>
        </div>
        <div style={{width:"100%", textAlign:"left"}} >
            <Button variant="contained" color="primary" type="submit" >Submit</Button>
        </div>
      </form>
    </div>
  );
}
