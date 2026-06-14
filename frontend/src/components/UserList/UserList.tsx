import UserItem from "../UserItem/UserItem";

type User = {
    id: number;
    name: string;
};

type Props = {
    users: User[];
    onDelete: (id:number) => void;
};

export default function UserList({ users, onDelete} : Props){
    return (
        <ul>
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    onDelete={onDelete}/>
            ))}
        </ul>
    );
}