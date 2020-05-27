import { User, Todo } from './data.d';

export function getUserById(userId: string) {
  return userList.filter(user => user.id === userId)[0];
}

export const userList: User[] = [
  {
    id: "23410977",
    name: "图雀社区",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=60&v=4"
  },
  {
    id: "23410976",
    name: "mRcfps",
    avatar: "https://avatars0.githubusercontent.com/u/23410976?s=96&v=4"
  },
  {
    id: "58352313",
    name: "crxk",
    avatar: "https://avatars1.githubusercontent.com/u/58352313?s=96&v=4"
  },
  {
    id: "25455350",
    name: "pftom",
    avatar: "https://avatars0.githubusercontent.com/u/25455350?s=96&v=4"
  },
  {
    id: "12345678",
    name: "holy",
    avatar: "https://avatars0.githubusercontent.com/u/12345678?s=96&v=4"
  }
];

export const todoListData: Todo[] = [
  {
    id: '1',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "23410977",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '2',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "23410976",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '3',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "58352313",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '4',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "25455350",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '5',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "12345678",
    date: "2020年3月2日 19:34",
    isCompleted: true
  }
];
