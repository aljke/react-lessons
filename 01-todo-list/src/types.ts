export interface TodoItem {
    id: number,
    state: TodoStateEnum,
    description: string,
    deadline?: string
}

export enum TodoStateEnum {
    Created,
    InProgress,
    Completed
}

export const TodoStateLabel = new Map<TodoStateEnum, string>([
    [TodoStateEnum.Created, 'Created'],
    [TodoStateEnum.InProgress, 'In progress'],
    [TodoStateEnum.Completed, 'Completed']
])

export interface ITodoStateProps {
    state: TodoStateEnum
}

export interface ITodoListProps {
    items: TodoItem[]
}