import { useState } from "react";
import { IWaiter } from '../../type';

interface AddWaiterProps {
    onWaiterSubmit: (Waiter: IWaiter) => void;
  }
  
  export const AddWaiter = ({ onWaiterSubmit }: AddWaiterProps) => {
    const [firstName, setName] = useState('')
    const [phone, setPhone] = useState('')
  
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      onWaiterSubmit({
        firstName,
        phone,
      })
  
      setName('')
      setPhone('')
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