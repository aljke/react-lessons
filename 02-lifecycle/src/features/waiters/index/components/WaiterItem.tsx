import { Waiter } from "../../type";
import { ButtonBase, Card, CardContent, Grid, Typography } from "@mui/material";

export interface WaiterProps {
    waiter: Waiter
}

export const WaiterItem = ( { waiter } : WaiterProps) => {
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
                    </Card>
                </Grid>
            )
}