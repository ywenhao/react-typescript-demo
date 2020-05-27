import React from "react";
import { List, Avatar, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { getUserById } from "./utils/data";
import { Todo } from './utils/data.d';

const menu = (
  <Menu>
    <Menu.Item>完成</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
);

interface TodoListProps {
  todoList: Todo[];
}


function TodoList({ todoList }: TodoListProps) {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={todoList}
      renderItem={item => {
        const user = getUserById(item.user);
        return (
          <List.Item
            actions={[
              <Dropdown overlay={menu}>
                <span key="list-loadmore-more">
                  操作 <DownOutlined />
                </span>
              </Dropdown>
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src={user.avatar} />
              }
              title={<a href="https://ant.design">{user.name}</a>}
              description={item.date}
            />
            <div>{item.content}</div>
          </List.Item>
      )}}
    />
  );
}

export default TodoList;
