import { Alert, CircularProgress, Grid } from "@mui/material";
import { WaiterItem } from "./WaiterItem";
import { IWaiter } from "./type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWaitersSource } from "./store/thunk";

export const WaitersList = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state: any) => state.waiters.sourceLoading)
    const waitersSource = useSelector((state: any) => state.waiters.waitersSource)
    const waitersLoadedError = useSelector((state: any) => state.waiters.sourceLoadingError)

    useEffect(() => {
        dispatch(getWaitersSource())
    }, [getWaitersSource])

    if (isLoading) {
        return <CircularProgress />
    }

    if (waitersLoadedError) {
        return <Alert severity="error">{waitersLoadedError.message}</Alert>
    }

    return(
        <Grid container spacing={4}>
            {waitersSource.map((waiterData: IWaiter) => 
                (<WaiterItem waiter={waiterData} key={waiterData.id} />)
            )}
        </Grid>
    )
}