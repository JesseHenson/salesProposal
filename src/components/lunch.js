import React, { useState } from "react"
import {
  Typography,
  Button,
  Card,
  Box,
  CardContent,
  CardActions,
  CardHeader,
} from "@material-ui/core"
import { lunchList, peopleList } from "../data/LunchList"

const LunchGenerator = () => {
  const [lunchItem, setLunchItem] = useState(
    lunchList[Math.floor(Math.random() * lunchList.length)].name
  )

  const [personItem, setPersonItem] = useState("")

  const handleLunchChange = () => {
    setLunchItem(lunchList[Math.floor(Math.random() * lunchList.length)].name)
    setPersonItem("")
  }

  const handlePNPChange = () => {
    setPersonItem(
      peopleList[Math.floor(Math.random() * peopleList.length)].name
    )
    setLunchItem(lunchList[Math.floor(Math.random() * lunchList.length)].name)
  }

  return (
    <Box m={6}>
      <Card>
        <CardHeader title={lunchItem} subheader={personItem}></CardHeader>
        <CardActions>
          <Button
            onClick={handleLunchChange}
            color="primary"
            variant="contained"
          >
            Change Lunch Item
          </Button>
          <Button onClick={handlePNPChange} color="primary" variant="contained">
            Pick and Pick
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default LunchGenerator
