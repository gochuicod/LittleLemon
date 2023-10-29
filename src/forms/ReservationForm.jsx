import {
  FormControl,
  TextField,
  Button,
  CircularProgress,
  Alert,
  IconButton
} from "@mui/material";
import { Form, Formik } from "formik";
import { object, string, number, date } from "yup";
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { buttonStyle } from "../Homepage";
import { XCircle } from "lucide-react";
import { useState } from "react";
import dayjs from "dayjs";

const validationsForm = object({
  date: date().required("Required"),
  time: date().required("Required"),
  guests: number().moreThan(0, "Guests must be more than 0").required("Required"),
  occasion: string().max(20, "Maximum of 20 characters is allowed")
});

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ReservationForm = ({ handleCloseReservation }) => {
  const [isAlertVisible, setAlertVisible] = useState(false)

  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldValue }) => {
    console.log(values);
    await sleep(3000)
    setAlertVisible(true)
    setSubmitting(false)
    resetForm()
    setFieldValue('date', null)
    setFieldValue('time', null)
    await sleep(20000)
    setAlertVisible(false)
  }

  return (
    <Formik
      initialValues={{
        date: dayjs(new Date()),
        time: dayjs(new Date()),
        guests: "",
        occasion: ""
      }}
      validationSchema={validationsForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, handleBlur, values, errors, touched, setFieldValue }) => (
        <Form className="flex flex-col">
          {
            isAlertVisible &&
            <Alert
              action={
                <IconButton
                  size="small"
                  onClick={() => setAlertVisible(false)}
                >
                  <XCircle />
                </IconButton>
              }
              sx={{ mb: 5, borderRadius: "15px" }}
            >
              Reservation created!
            </Alert>
          }
          <FormControl className="gap-y-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex flex-col gap-y-5">
                <DatePicker
                  id="date"
                  label="Pick a Date"
                  value={values.date}
                  onChange={date => setFieldValue('date',date)}
                  />
                <TimePicker
                  id="time"
                  label="Pick a time"
                  value={values.time}
                  onChange={time => setFieldValue('time',time)}
                />
              </div>
            </LocalizationProvider>
            <TextField
              id="guests"
              label="Number of Guests"
              placeholder="Number of Guests"
              type="number"
              value={values.guests}
              onChange={handleChange("guests")}
              onBlur={handleBlur("guests")}
              helperText={touched.guests ? errors.guests : ""}
              error={touched.guests && Boolean(errors.guests)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="occasion"
              label="Type of Occasion"
              placeholder="Type of Occasion"
              value={values.occasion}
              onChange={handleChange("occasion")}
              onBlur={handleBlur("occasion")}
              helperText={touched.occasion ? errors.occasion : ""}
              error={touched.occasion && Boolean(errors.occasion)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <Button type="submit" disabled={isSubmitting} sx={{ ...buttonStyle, ...{ marginTop: "5%" } }}>
              { isSubmitting ? <CircularProgress size={25} sx={{ color: "#495E57" }}/> : "Make Reservation" }
            </Button>
            <Button onClick={handleCloseReservation}>Cancel</Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  )
};

export default ReservationForm;
