import React, { useEffect } from "react"
import { IWaiter } from "../type"
import { AddWaiter } from "./waiters/AddWaiter"
import { WaitersList } from "./waiters/WaitersList"
import { MockApiClient } from "./waiters/api/mockApiClient"

export const WaitersApp = () => 
{
    const [waitersSource, setWaiters] = React.useState<IWaiter[]>([])

    useEffect(() => {
        MockApiClient.getItems<IWaiter>().then(waitersResponse => {
            setWaiters(waitersResponse)
        })
    }, [])

    const onWaiterSubmit = (waiter: IWaiter) => {
        MockApiClient.create(waiter).then((postedWaiter) => {
            setWaiters([...waitersSource, postedWaiter])
        })
      }

      const deleteWaiter = (id: number) => {
        MockApiClient.delete(id).then(() => {
            setWaiters(waitersSource.filter((x) => x.id !== id))
        })
      }

    return (
        <div>
            <AddWaiter onWaiterSubmit={onWaiterSubmit} />
            <br />
            <br />
            <WaitersList waiters={waitersSource} onDeleteWaiters={deleteWaiter} />
        </div>
    )
}