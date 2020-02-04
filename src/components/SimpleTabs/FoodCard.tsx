import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Card, CardActionArea, CardHeader, IconButton, CardContent, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Food } from "../../context";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  card: {
    margin: 0
  }
}));

interface FoodCardProps {
  index: number
  item: Food
}

const FoodCard: FC<FoodCardProps> = ({ index, item }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} key={index}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardHeader 
            action={
              <IconButton aria-label="close">
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="p"
            >
              {item.category}
            </Typography>
            <Typography
              variant="subtitle1"
              component="h5"
            >
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default FoodCard;