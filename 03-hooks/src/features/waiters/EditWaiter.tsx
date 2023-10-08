import { useState, useEffect } from "react";
import { IWaiter } from '../../type';

interface IEditWaiterProps {
  editedWaiter: IWaiter
  onWaiterSubmit: (Waiter: IWaiter) => void;
}
  
export const EditWaiter = ({ editedWaiter, onWaiterSubmit }: IEditWaiterProps) => {
  let [firstName, setName] = useState(editedWaiter.firstName)
  const [phone, setPhone] = useState(editedWaiter.phone)

  useEffect(() => {
    setName(editedWaiter.firstName)
    setPhone(editedWaiter.phone)
  }, [editedWaiter])

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onWaiterSubmit({
      ...editedWaiter,
      firstName,
      phone,
    })
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
