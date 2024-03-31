export declare module IComments {
  export interface Props {
    comments: Comment[];
  }

  interface Comment {
    text: string;
    user: string;
    userTitle: string;
  }
}
