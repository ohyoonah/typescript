import { useState } from "react";

interface IUser {
  name: string;
  age: number;
}
interface iList {
  name: string;
  age: number;
}

const User = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    age: 0,
  });
  const [list, setList] = useState<iList>({
    name: "",
    age: 0,
  });

  const onChange = (e: any): void => {
    const { name, value } = e.currentTarget;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClick = () => {
    const userList = {
      name: user.name,
      age: user.age,
    };
    setList(userList);
    setUser({ name: "", age: 0 });
  };

  return (
    <div>
      <input name="name" value={user.name} onChange={onChange} />
      <input name="age" value={user.age} onChange={onChange} />
      <button onClick={onClick}>저장</button>
      <div>
        {list.name} {list.age}
      </div>
    </div>
  );
};

export default User;
