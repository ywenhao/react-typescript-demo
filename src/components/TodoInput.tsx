import React, { useState } from "react";
import { Input, Select, DatePicker } from "antd";
import { Moment } from "moment";

import { userList } from "../utils/data";

const { Option } = Select;

enum UserId {
  tuture = "666666666",
  mRcfps = "23410977",
  crxk = "25455350",
  pftom = "23410979",
  holy = "58352313"
}

export interface TodoValue {
  content?: string;
  user?: string;
  date?: string;
}

interface TodoInputProps {
  value?: TodoValue;
  onChange?: (Value: TodoValue) => void;
}

const TodoInput = ({ value = {}, onChange }: TodoInputProps) => {
  const [content, setContent] = useState<string>('');
  const [user, setUser] = useState<UserId>(UserId.tuture);
  const [date, setDate] = useState<string>('');

  const tringgerChange = (changedValue: TodoValue) => {
    if (onChange) {
      onChange({ content, user, date, ...value, ...changedValue });
    }
  };

  const onContentChange = (e: any) => {
    if (!('content' in value)) {
      setContent(e.target.value);
    }
    tringgerChange({ content: e.target.value });
  };

  const onUserChange = (selectValue: UserId) => {
    if (!('user' in value)) {
      setUser(selectValue);
    }
    tringgerChange({ user: selectValue });
  };

  const onDateOk = (date: Moment) => {
    if (!('date' in value)) {
      setDate(date.format('YYYY-MM-DD HH:mm'));
    }
    tringgerChange({ date: date.format('YYYY-MM-DD HH:mm')});
  }

  return (
    <div className="todoInput">
      <Input
        type="text"
        placeholder="输入待办事项内容"
        value={value.content || content}
        onChange={onContentChange}
      />
      <Select
        style={{ width: 80 }}
        size="small"
        defaultValue={UserId.tuture}
        value={user}
        onChange={onUserChange}
      >
        {userList.map(user => <Option value={user.id} key={user.id}>{user.name}</Option>)}
      </Select>
      <DatePicker
        showTime
        size="small"
        onOk={onDateOk}
        style={{ marginLeft: '16px', marginRight: '16px' }}
      />
    </div>
  );
}

export default TodoInput;
