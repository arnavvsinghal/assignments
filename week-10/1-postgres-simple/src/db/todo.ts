import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const _ = await client.query('INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3)', [userId, title, description]);
    const result = await client.query('SELECT id FROM todos WHERE user_id = $1', [userId]);
    return {
        title,
        description,
        done : false,
        id : result.rows[0].id
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const _ = await client.query('UPDATE todos SET done = true WHERE id = $1', [todoId]);
    const result = await client.query('SELECT title,description,done,id FROM todos WHERE id = $1', [todoId]);
    return {
        title : result.rows[0].title,
        description : result.rows[0].description,
        done : result.rows[0].done,
        id : result.rows[0].id,
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const result = await client.query('SELECT title, description, done, id, user_id FROM todos WHERE user_id = $1', [userId]);
    console.log(result.rows);
    return result.rows;
}