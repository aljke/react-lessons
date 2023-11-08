import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getWaiterById, saveWaiter } from "./store/thunk";
import { RootState } from "../../store";
import { CircularProgress, Alert, Button, TextField, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_WAITER, setEditedWaiterBufferAction } from "./store/reducer";
  
export const EditWaiter = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const editedWaiterBuffer = useSelector((state: RootState) => state.waiters.editedWaiterBuffer)
  const navigate = useNavigate()

  const [firstName, setName] = useState(editedWaiterBuffer.firstName)
  const [phone, setPhone] = useState(editedWaiterBuffer.phone)

  const isLoading = useSelector((state: RootState) => state.waiters.saveWaiterLoading || state.waiters.getWaiterLoading)
  const saveWaiterError = useSelector((state: RootState) => state.waiters.saveWaiterLoadingError)

  useEffect(() => {
    if (id) {
      dispatch(getWaiterById(Number(id)))
    } else {
      dispatch(setEditedWaiterBufferAction(DEFAULT_WAITER))
    }
  }, [id]);

  useEffect(() => {
    setName(editedWaiterBuffer.firstName)
    setPhone(editedWaiterBuffer.phone)
  }, [editedWaiterBuffer])

  if (isLoading) {
    return <CircularProgress />
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedWaiter = {
      ...editedWaiterBuffer,
      firstName,
      phone
    }

    dispatch(saveWaiter(updatedWaiter, () => { navigate("/waiters")} ))
  }

  return (
      <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            onSubmit={onFormSubmit}
          >
          <TextField
            label="Name"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>

        { saveWaiterError && <Alert severity="error"> Couldn't save the waiter: {saveWaiterError?.message}</Alert> }
      </Stack>
  )
}
