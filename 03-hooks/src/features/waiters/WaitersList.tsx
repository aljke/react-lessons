import { Grid } from "@mui/material";
import { IWaiter } from "../../type";
import { WaiterItem } from "./WaiterItem";

export interface IWaitersProps {
    waiters: IWaiter[]
    onDeleteWaiters: (id: number) => void
}

export const WaitersList = ( { waiters, onDeleteWaiters } : IWaitersProps ) => {

    return(
        <Grid container spacing={4}>
            {waiters.map((waiterData) => 
                (<WaiterItem waiter={waiterData} onDelete={onDeleteWaiters} key={waiterData.id} />)
            )}
        </Grid>
    )
}