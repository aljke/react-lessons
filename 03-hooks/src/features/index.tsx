import { EditWaiter } from "./waiters/EditWaiter"
import { WaitersList } from "./waiters/WaitersList"
import { useWaiter } from "./waiters/hooks/useWaiter"

export const WaitersApp = () => {

    const { onWaiterSubmit, editedWaiterBuffer, waitersSource, deleteWaiter, editWaiter } = useWaiter();

    return (
        <div>
            <EditWaiter onWaiterSubmit={onWaiterSubmit} editedWaiter={editedWaiterBuffer}/>
            <br />
            <br />
            <WaitersList waiters={waitersSource} onDeleteWaiters={deleteWaiter} onEditWaiters={editWaiter} />
        </div>
    )
}