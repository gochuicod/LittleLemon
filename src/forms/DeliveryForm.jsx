import { Alert, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton } from "@mui/material";
import { buttonStyle } from "../Homepage";
import { useState } from "react";
import { sleep } from "./ReservationForm";
import { XCircle } from "lucide-react";

const DeliveryForm = ({ image, name, price, close }) => {
  const [isConfirming, setConfirming] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleConfirmOrder = async () => {
    setConfirming(true)
    await sleep(3000)
    setConfirming(false)
    setAlertVisible(true)
    await sleep(20000)
    setAlertVisible(false)
  }

  return (
    <>
      <Card className="p-5">
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
            sx={{ mb: 4, mt: 1, borderRadius: "15px" }}
          >
            Order has been confirmed!
          </Alert>
        }
        <CardMedia
          sx={{ width: 300, height: 200, borderRadius: "15px", boxShadow: "-3px -3px 5px #ccc" }}
          image={image}
          title={name}
        />
        <CardContent>
          <div className="flex flex-row gap-x-5 items-center justify-center">
            <span className="font-semibold text-2xl">{name}</span>
            <span className="text-sm text-[#EE9972] font-semibold">{price}</span>
          </div>
        </CardContent>
        <CardActions className="flex flex-col">
          <div className="flex flex-row gap-x-5 mb-5">
            <Button
              sx={{ ...buttonStyle }}
              onClick={handleConfirmOrder}
            >
              { isConfirming ? <CircularProgress size={25} sx={{ color: "#495E57" }}/> : "Confirm Order" }
            </Button>
            <Button size="small" onClick={close}>Cancel</Button>
          </div>
          
        </CardActions>
      </Card>
    </>
  )
}

export default DeliveryForm;