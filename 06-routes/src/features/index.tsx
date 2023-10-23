import { EditWaiter } from "./waiters/EditWaiter"
import { WaitersList } from "./waiters/WaitersList"
import {Routes, Route} from "react-router-dom";

export const WaitersApp = () => {
    return (
        <Routes>
            <Route path="/" element={<WaitersList />} />
            <Route path="/create" element={<EditWaiter />} />
            <Route path="/edit/:id" element={<EditWaiter />} />
        </Routes>
    )
}