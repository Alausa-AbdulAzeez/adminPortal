import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import React from 'react'

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
]

const ConfirmationDialogRaw = (props) => {
  const { onClose, value: valueProp, open, ...other } = props
  const [value, setValue] = React.useState(valueProp)
  const radioGroupRef = React.useRef(null)

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(value)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: 900, maxHeight: 435 } }}
      //   maxWidth='xs'
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Update Claim</DialogTitle>
      <DialogContent dividers>
        <div style={{ marginBottom: '50px' }}>
          <TextField
            id='outlined-read-only-input'
            label='Submitted Bill'
            defaultValue='100000'
            type='number'
            InputProps={{
              readOnly: true,
            }}
            sx={{ marginRight: '30px' }}
          />
          <TextField
            id='outlined-read-only-input2'
            label='Submitted Quantity'
            defaultValue='1'
            type='number'
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <TextField
          id='outlined-read-only-input3'
          label='Updated Bill'
          defaultValue='100000'
          type='number'
          sx={{ marginRight: '30px' }}
        />
        <TextField
          id='outlined-helperText'
          label='Updated Quantity'
          defaultValue='1'
          type='number'
          InputProps={{ inputProps: { min: 0 } }}
        />
        {/* <RadioGroup
          ref={radioGroupRef}
          aria-label='ringtone'
          name='ringtone'
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup> */}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialogRaw
