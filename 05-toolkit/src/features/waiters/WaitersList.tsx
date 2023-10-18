import { Alert, CircularProgress, Grid } from "@mui/material";
import { WaiterItem } from "./WaiterItem";
import { IWaiter } from "./type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWaitersSource } from "./store/thunk";
import { RootState } from "../../store";

export const WaitersList = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state: RootState) => state.waiters.sourceLoading || state.waiters.deleteWaiterLoading)
    const waitersSource = useSelector((state: RootState) => state.waiters.waitersSource)
    const loadingError = useSelector((state: RootState) => state.waiters.sourceLoadingError ?? state.waiters.deleteWaiterError)

    useEffect(() => {
        dispatch(getWaitersSource())
    }, [getWaitersSource])

    if (isLoading) {
        return <CircularProgress />
    }

    if (loadingError) {
        return <Alert severity="error">{loadingError.message}</Alert>
    }

    return(
        <Grid container spacing={4}>
            {waitersSource.map((waiterData: IWaiter) => 
                (<WaiterItem waiter={waiterData} key={waiterData.id} />)
            )}
        </Grid>
    )
}