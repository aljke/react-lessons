import { Grid } from "@mui/material";
import { Waiter } from "../../type";
import { WaiterItem } from "./WaiterItem";

export interface WaitersProps {
    waiters: Waiter[]
}

export const WaitersList = ( { waiters } : WaitersProps ) => {
    return(
        <Grid container spacing={4}>
            {waiters.map((waiterData) => 
                (<WaiterItem waiter={waiterData} key={waiterData.id} />)
            )}
        </Grid>
    )
}