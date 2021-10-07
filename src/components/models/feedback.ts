export interface FeedbackResponse{
    created:Date;
    updated:Date;
    docId:string;
    feedbackId:string;
    responses:FeedbackQuestion[],
    user:{
        uid:string;
        displayName:string;
        photoUrl:string;
        email:string;
    }
}

export interface Feedback{
    created:Date;
    updated:Date;
    docId:string;
    title:string;
    description:string;
    feedback:FeedbackQuestion[];
}

export interface FeedbackQuestion{
    id:string;
    question:string;
    type:string;
    options?:Choice[]
    answer:string | number | string[] | number[];
    required:boolean;
}

export interface Choice{
    id:string;
    value:string | number
}
