type User = {
    id:number;
    name:string;
};

type Props = {
    user: User;
    onDelete: (id:number) => void;
};

export default function UserItem({user, onDelete}: Props){
    return (
        <li>
            {user.name}
            <button onClick={() => onDelete(user.id)}>
                Delete
            </button>
        </li>
    );
}
