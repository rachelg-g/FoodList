import React, { FC, useState, useReducer, createContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SimpleTabs from "./SimpleTabs";

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
    }
  })
);

const initialState = {
  foods: [],
  dispatch: () => {}
};

export const HyungContext = createContext(initialState);

const ADD = "ADD";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD:
      return { foods: [...state.foods, action.payload] };
    default:
      return state;
  }
};

const Main: FC = porps => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [foodName, setFoodName] = useState("");
  const [foodCategory, setFoodCategory] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFoodCategory(event.target.value as string);
  };

  const onChangeInput = (event: React.ChangeEvent<{ value: string }>) => {
    setFoodName(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!foodCategory || !foodName) {
      alert("카테고리 및 음식 이름을 채워주세요");
    } else {
      setFoodCategory("");
      setFoodName("");
    }

    dispatch({
      type: ADD,
      payload: { title: foodName, category: foodCategory }
    });
  };

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            카테고리
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={foodCategory}
            onChange={handleSelectChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>선택해주세요</em>
            </MenuItem>
            <MenuItem value="한식">한식</MenuItem>
            <MenuItem value="중식">중식</MenuItem>
            <MenuItem value="일식">일식</MenuItem>
            <MenuItem value="양식">양식</MenuItem>
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
      </form>
      <SimpleTabs foods={state && state.foods} />
    </div>
  );
};

export default Main;
