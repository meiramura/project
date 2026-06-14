const API_URL = "http://localhost:3000";

export type User = {
    id: number;
    name: string;
};

export function getUsers() {
    return fetch(`${API_URL}/users`)
        .then(res => res.json());
}

export function createUser(name: string) {
    return fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name }),
    }).then(res => res.json());
}

export async function deleteUser(id:number){
    await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE",
    });
}