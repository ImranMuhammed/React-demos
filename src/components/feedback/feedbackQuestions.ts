import { FeedbackQuestion } from "../models/feedback";
import { Question_Type } from "../googleForm/data";

export const feedbackQuestions: FeedbackQuestion[] = [
  {
    id: "1111111111",
    question: "The objectives of the session were clearly defined.",
    type: Question_Type.MCQ,
    options: [
      { id: "11111", value: "Strongly Agree" },
      { id: "11112", value: "Neutral" },
      { id: "11113", value: "Disagree" },
    ],
    answer: "",
    required: true,
  },
  {
    id: "1111111112",
    question: "The time allotted for the training was sufficient.",
    type: Question_Type.MCQ,
    options: [
      { id: "11121", value: "Strongly Agree" },
      { id: "11122", value: "Neutral" },
      { id: "11123", value: "Disagree" },
    ],
    answer: "",
    required: false,
  },
  {
    id: "1111111113",
    question: "Social medias you are active on?",
    type: Question_Type.CHECK_BOX,
    options: [
      { id: "11131", value: "Facebook" },
      { id: "11132", value: "Twitter" },
      { id: "11133", value: "Instagram" },
    ],
    answer: [""],
    required: true,
  },
  {
    id: "1111111114",
    question: "Awareness about the course?",
    type: Question_Type.CHECK_BOX,
    options: [
      { id: "11141", value: "Facebook" },
      { id: "11142", value: "Twitter" },
      { id: "11143", value: "Instagram" },
    ],
    answer: [""],
    required: false,
  },
  {
    id: "1111111115",
    question: "Any Features that you want us to add",
    type: Question_Type.SHORT_ANSWER,
    answer: "",
    required: true,
  },
  {
    id: "1111111116",
    question: "Give some feedback regarding the session",
    type: Question_Type.SHORT_ANSWER,
    answer: "",
    required: false,
  },
];
