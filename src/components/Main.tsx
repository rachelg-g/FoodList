import React, { FC, useState, createContext, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FoodContext } from "../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 10
    },
    formControl: {
      margin: theme.spacing(1),
      width: 200
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    textField: {
      margin: 8,
      width: "calc(100% - 358px)"
    },
    button: {
      width: 110,
      margin: theme.spacing(1),
      padding: 14,
      fontSize: "inherit"
    },
    input: {
      display: "none"
    },
    root: {
      flexGrow: 1
    },
    card: {
      margin: 0
    },
    media: {
      height: 140
    }
  })
);

interface CardProps {
  title?: string;
  category?: string;
}

const Main: FC<CardProps> = () => {
  const classes = useStyles();

  const context = useContext(FoodContext);

  console.log(context);

  const [foodName, setFoodName] = useState("");

  const onChangeInput = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFoodName(event.target.value as string);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("전송?");
  };

  // const [category, setCategory] = useState("");

  // const inputLabel = React.useRef<HTMLLabelElement>(null);
  // const [labelWidth, setLabelWidth] = useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current!.offsetWidth);
  // }, []);

  // const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setCategory(event.target.value as string);
  // };

  return (
    <div className={classes.container}>
      {/* <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            카테고리
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={handleSelectChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>선택해주세요</em>
            </MenuItem>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>4</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="음식 이름"
          variant="outlined"
          fullWidth
          value={foodName}
          onChange={onChangeInput}
        />
        <Button variant="contained" className={classes.button} type="submit">
          입력
        </Button>
      </form> */}

      <div className={classes.root}>
        <Grid container spacing={3}>
          {context.food.map(item => (
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="p">
                      {item.category}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="h2"
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Main;
