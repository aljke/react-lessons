import React, { useEffect } from "react"
import { Waiter } from "./type"
import { WaiterApi } from "./api/WaiterApi"
import { WaitersList } from "./index/components/WaitersList"
import { AddWaiter } from "./index/components/AddWaiter"

export const WaitersApp = () => 
{
    const [waitersSource, setWaiters] = React.useState<Waiter[]>([])

    useEffect(() => {
        WaiterApi.getWaiters().then(waitersResponse => {
            setWaiters(waitersResponse)
        })
    }, [])

    const onWaiterSubmit = (waiter: Waiter) => {
        WaiterApi.postWaiter(waiter).then((postedWaiter) => {
            setWaiters([...waitersSource, postedWaiter])
        })
      }

    return (
        <div>
            <AddWaiter onWaiterSubmit={onWaiterSubmit} />
            <WaitersList waiters={waitersSource} />
        </div>
    )
}