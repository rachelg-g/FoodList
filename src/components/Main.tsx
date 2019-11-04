import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
    card: {
      maxWidth: 345,
      margin: 8
    },
    media: {
      height: 140
    }
  })
);

const Main = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            카테고리
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={handleChange}
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
        />
        <Button variant="contained" className={classes.button}>
          입력
        </Button>
      </form>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="p">
              음식 카테고리
            </Typography>
            <Typography variant="h4" color="textSecondary" component="h2">
              음식 이름
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Main;
