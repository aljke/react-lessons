import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { saveWaiter } from "./store/thunk";
import { RootState } from "../../store";
import { CircularProgress, Alert } from "@mui/material";
  
export const EditWaiter = () => {
  const dispatch = useDispatch()
  const editedWaiterBuffer = useSelector((state: RootState) => state.waiters.editedWaiterBuffer)

  const [firstName, setName] = useState(editedWaiterBuffer.firstName)
  const [phone, setPhone] = useState(editedWaiterBuffer.phone)

  const isLoading = useSelector((state: RootState) => state.waiters.saveWaiterLoading)
  const saveWaiterError = useSelector((state: RootState) => state.waiters.saveWaiterLoadingError)

  useEffect(() => {
    setName(editedWaiterBuffer.firstName)
    setPhone(editedWaiterBuffer.phone)
  }, [editedWaiterBuffer])

  if (isLoading) {
    return <CircularProgress />
  }

  if (saveWaiterError) {
      return <Alert severity="error"> Couldn't save the waiter: {saveWaiterError.message}</Alert>
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedWaiter = {
      ...editedWaiterBuffer,
      firstName,
      phone
    }

    dispatch(saveWaiter(updatedWaiter))
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input value={firstName} onChange={e => setName(e.target.value)} type="text" id="name" />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
