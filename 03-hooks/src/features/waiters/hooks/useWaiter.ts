import React, { useEffect } from "react"
import { IWaiter } from "../../../type"
import { MockApiClient } from "../api/mockApiClient"

export const DEFAULT_WAITER: IWaiter = {
    firstName: '',
    phone: ''
}

export function useWaiter() {
    const [waitersSource, setWaiters] = React.useState<IWaiter[]>([])
    const [editedWaiterBuffer, setEditedWaiterBuffer] = React.useState<IWaiter>(DEFAULT_WAITER)

    useEffect(() => {
        MockApiClient.getItems<IWaiter>().then(waitersResponse => {
            setWaiters(waitersResponse)
        })
    }, [])

    const onWaiterSubmit = (waiter: IWaiter) => {
        if (waiter.id) {
            MockApiClient.update<IWaiter>(waiter.id, waiter).then((updatedWaiter) => {
                setWaiters(waitersSource.map((waiter) => waiter.id === updatedWaiter.id ? updatedWaiter : waiter))
            })
        }
        else {
            MockApiClient.create(waiter).then((postedWaiter) => {
                setWaiters([...waitersSource, postedWaiter])
            })
        }
        setEditedWaiterBuffer({...DEFAULT_WAITER})
    }

    const deleteWaiter = (id: number) => {
        MockApiClient.delete(id).then(() => {
            setWaiters(waitersSource.filter((x) => x.id !== id))
        })
    }

    const editWaiter = (waiter: IWaiter) => {
        setEditedWaiterBuffer(waiter);
    }

    return {
        onWaiterSubmit,
        editedWaiterBuffer,
        waitersSource,
        deleteWaiter,
        editWaiter
    }
}