export interface TodoItem {
    label: string;
    completed: boolean;
}

export interface TodoListInterface {
    [id: string]: TodoItem;
}