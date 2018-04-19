export class User {
  name: {
    first: string;
    last: string;
  };
  picture: { large: string };
  likes: number;
  comments: number;
  timeAgo: number;
  constructor() {
    this.name = {
      first: "",
      last: ""
    };
    this.picture = { large: "" };

    this.likes = Math.floor(Math.random() * 100);
    this.comments = Math.floor(Math.random() * 20);
    this.timeAgo = Math.floor(Math.random() * 7);
  }
}
