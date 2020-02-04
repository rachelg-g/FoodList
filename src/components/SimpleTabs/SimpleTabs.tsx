import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box, Grid } from "@material-ui/core";
import { Food, FoodType } from "../../context";
import FoodCard from "./FoodCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  card: {
    margin: 0
  }
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

interface SimpleTabsProps {
  foods: Food[]
  foodtype?: FoodType
}

const SimpleTabs: FC<SimpleTabsProps> = ({ foods}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const koreanFood = foods && foods.filter(item => item.category === "한식");
  const chineseFood = foods && foods.filter(item => item.category === "중식");
  const japaneseFood = foods && foods.filter(item => item.category === "일식");
  const westernFood = foods && foods.filter(item => item.category === "양식");
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="한식" {...a11yProps(0)} />
          <Tab label="중식" {...a11yProps(1)} />
          <Tab label="일식" {...a11yProps(2)} />
          <Tab label="양식" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <Grid container spacing={2}>
          {koreanFood && koreanFood.map((item, index) => (
            <FoodCard item={item} index={index} />
          ))}
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <Grid container spacing={2}>
          {chineseFood && chineseFood.map((item, index) => (
            <FoodCard item={item} index={index} />
          ))}
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <Grid container spacing={2}>
          {japaneseFood && japaneseFood.map((item, index) => (
            <FoodCard item={item} index={index} />
          ))}
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value}  index={3}>
        <div>
          <Grid container spacing={2}>
          {westernFood && westernFood.map((item, index) => (
            <FoodCard item={item} index={index} />
          ))}
          </Grid>
        </div>
      </TabPanel>
    </div>
  );
};

export default SimpleTabs;
