import { EditWaiter } from "./waiters/EditWaiter"
import { WaitersList } from "./waiters/WaitersList"

export const WaitersApp = () => {
    return (
        <div>
            <EditWaiter />
            <br />
            <br />
            <WaitersList />
        </div>
    )
}