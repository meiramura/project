import {users} from "../data/users";

export class UserService {
    private users: any[] = []
    public getAll() {
        return users;
    }

    public getById(id: number){
        return users.find(u=>u.id === id);
    }

    public create(user: any){
        const newUser = {
            id: Date.now(),
            ...user
        }

        users.push(newUser);

        return newUser;
    }

    public delete(id:number){
        const index = users.findIndex(u => u.id === id);

        if(index === -1){
            throw new Error("User not found!")
        }

        users.splice(index,1);

        return this.users;
    }
}