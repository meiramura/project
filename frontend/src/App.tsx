import { useEffect, useState} from "react";
import { getUsers, createUser, deleteUser, type User} from "./api/users.ts";

import Button from "./components/Button/Button.tsx";
import Input from "./components/Input/Input.tsx";
import UserList from "./components/UserList/UserList.tsx";

export default function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState("");
    async function loadUsers(){
        const data = await getUsers();
        setUsers(data);
    }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleAdd() {
    if (!name) return;
    await createUser(name);
    setName("");
    loadUsers();
  }

  async function handleDelete(id:number){
    await deleteUser(id);
    loadUsers();
  }

  return (
      <div>
        <h1>Users</h1>
        <Input
          value = {name}
          onChange={setName}
          placeholder="Enter name"
        />
        
        <Button onClick={handleAdd}>
          Add
        </Button>
        
        <UserList users={users} onDelete={handleDelete} />
      </div>
  );
}