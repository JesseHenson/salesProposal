import React, { useState } from "react"
import {
  Typography,
  Button,
  Card,
  Box,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
} from "@material-ui/core"
import { lunchList, peopleList } from "../data/LunchList"

const LunchGenerator = () => {
  const [lunchItem, setLunchItem] = useState(
    lunchList[Math.floor(Math.random() * lunchList.length)].name
  )

  const [personItem, setPersonItem] = useState("")
  const [showList, setShowList] = useState(true)

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

  const handleShowList = () => {
    setShowList(!showList)
  }

  return (
    <Box m={6}>
      <Grid container direction="column" spacing={6}>
        <Grid item>
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
              <Button
                onClick={handlePNPChange}
                color="primary"
                variant="contained"
              >
                Pick and Pick
              </Button>
              <Button
                onClick={handleShowList}
                color="primary"
                variant="contained"
              >
                Show Lunch List
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card hidden={showList}>
            {lunchList.map(rest => (
              <Typography paragraph>{rest.name}</Typography>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LunchGenerator
