import { IWaiter } from "../../type";
import { Button, ButtonBase, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

export interface IWaiterProps {
    waiter: IWaiter
    onDelete: (id: number) => void;
}

export const WaiterItem = ( { waiter, onDelete } : IWaiterProps) => {

    function onDeleteBtnClick() {
        if (waiter.id) {
            onDelete(waiter.id)
        }
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
                            <Button size="small" onClick={onDeleteBtnClick}>Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
}