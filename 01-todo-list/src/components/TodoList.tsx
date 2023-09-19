import { ButtonBase, Card, CardContent, Grid, Typography } from "@mui/material";
import { ITodoListProps, TodoItem, TodoStateEnum, TodoStateLabel } from "../types";
import { TodoState } from "./TodoState";

export const TodosList: React.FC<ITodoListProps> = (props: ITodoListProps) => {
    return (
        <Grid container spacing={4}>
            {props.items.map((todo) => (
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