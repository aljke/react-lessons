import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { saveWaiter } from "./store/thunk";
  
export const EditWaiter = () => {
  const dispatch = useDispatch()
  const editedWaiterBuffer = useSelector((state: any) => state.waiters.editedWaiterBuffer)

  const [firstName, setName] = useState(editedWaiterBuffer.firstName)
  const [phone, setPhone] = useState(editedWaiterBuffer.phone)

  useEffect(() => {
    setName(editedWaiterBuffer.firstName)
    setPhone(editedWaiterBuffer.phone)
  }, [editedWaiterBuffer])

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
