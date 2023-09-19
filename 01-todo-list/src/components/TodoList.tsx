import { ButtonBase, Card, CardContent, Grid, Typography } from "@mui/material";
import { TodoItem, TodoStateEnum, TodoStateLabel } from "../types";
import { TodoState } from "./TodoState";

export const TodosList: React.FC = () => {

    const todos: TodoItem[] = [
        { id: 1, state: TodoStateEnum.Created, description: 'Feed the python', deadline: 'Today' },
        { id: 2, state: TodoStateEnum.Completed, description: 'Donate to the army', deadline: '19 Sep' },
        { id: 3, state: TodoStateEnum.InProgress, description: 'Complete react homework', deadline: '21 Sep' },
        { id: 4, state: TodoStateEnum.InProgress, description: 'Go to the gym', deadline: 'Tomorrow' },
        { id: 5, state: TodoStateEnum.Completed, description: 'Take a nap' }
      ];
      
    return (
        <Grid container spacing={4}>
            {todos.map((todo) => (
                <Grid item key={todo.id}>
                    <Card variant="outlined" sx={ { height: '100%'} }>
                        <ButtonBase>
                            <CardContent>
                                <Typography component="div">
                                    <Typography sx={{ fontWeight: 'bold' }}>{todo.description}</Typography>
                                    <TodoState state={todo.state}/>
                                    <Typography variant="body2" color="text.secondary">{todo.deadline}</Typography>
                                </Typography>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}