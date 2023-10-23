import { Button, ButtonBase, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { IWaiter } from "./type";
import { useDispatch } from "react-redux";
import { removeWaiter } from "./store/thunk";
import { useNavigate } from "react-router-dom";

export interface IWaiterProps {
    waiter: IWaiter
}

export const WaiterItem = ( { waiter } : IWaiterProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    function onDeleteBtnClick() {
        if (waiter.id) {
            dispatch(removeWaiter(waiter.id))
        }
    }

    function onEditButtonClick() {
        navigate(`/waiters/edit/${waiter.id}`)
    }

    return (
            <Grid item>
                <Card variant="outlined" sx={ { height: '100%'} }>
                    <ButtonBase>
                        <CardContent>
                            <Typography component="div">
                                <Typography sx={{ fontWeight: 'bold' }}>{waiter.firstName}</Typography>
                                <Typography variant="body2" color="text.secondary">{waiter.phone}</Typography>
                            </Typography>
                        </CardContent>
                    </ButtonBase>
                    <CardActions>
                        <Button size="small" onClick={onDeleteBtnClick}>Delete</Button>
                        <Button size="small" onClick={onEditButtonClick}>Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
            )
}

