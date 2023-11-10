import { Alert, Box, Button, CircularProgress, Grid } from "@mui/material";
import { WaiterItem } from "./WaiterItem";
import { IWaiter } from "./type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//import { getWaitersSource } from "./store/thunk";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import { getWaitersSourceActionLoading } from "./store/reducer";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const WaitersList = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector((state: RootState) => state.waiters.sourceLoading || state.waiters.deleteWaiterLoading)
    const waitersSource = useSelector((state: RootState) => state.waiters.waitersSource)
    const loadingSourceError = useSelector((state: RootState) => state.waiters.sourceLoadingError)
    const waiterDeletionError = useSelector((state: RootState) => state.waiters.deleteWaiterError)

    useEffect(() => {
        dispatch(getWaitersSourceActionLoading())
    }, [dispatch, getWaitersSourceActionLoading])

    if (isLoading) {
        return <CircularProgress />
    }

    if (loadingSourceError) {
        return <Alert severity="error"> Couldn't load waiters: {loadingSourceError.message}</Alert>
    }

    if (waiterDeletionError) {
        return <Alert severity="error">Couldn't delete a waiter: {waiterDeletionError.message}</Alert>
    }

    return(
            <div>
                <Box>
                    <Link to="/waiters/create">
                        <Button size="small" variant="outlined">Create</Button>
                    </Link>
                </Box>

                <br />
                <br />

                <Grid container spacing={4}>
                {waitersSource.map((waiterData: IWaiter) => 
                    (<WaiterItem waiter={waiterData} key={waiterData.id} />)
                )}
            </Grid>
            </div>
    )
}