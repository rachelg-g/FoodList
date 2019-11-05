import React, { FC, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FoodContext } from "../../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    card: {
      margin: 0
    }
  })
);

interface CardProps {
  title: string;
  category: string;
}

const Cards: FC<CardProps> = ({ title, category }) => {
  const classes = useStyles();
  const context = useContext(FoodContext);
  // console.log(context);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {context.food.map((item, i) => (
          <Grid item xs={4} key={i}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="p">
                    {item.category}
                  </Typography>
                  <Typography variant="h5" color="textSecondary" component="h2">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
