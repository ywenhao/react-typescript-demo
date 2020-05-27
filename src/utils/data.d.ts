
export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Todo {
  id: string;
  readonly user: string;
  content: string;
  date: string;
  isCompleted: boolean;
}
