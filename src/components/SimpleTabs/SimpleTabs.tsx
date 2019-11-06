import React, { FC, useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { FoodContext } from "../../context";

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
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};
interface CardProps {
  title: string;
  category: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  card: {
    margin: 0
  }
}));

const SimpleTabs: FC<CardProps> = ({ title, category }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const context = useContext(FoodContext);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const koreanFood = context.food.filter(item => item.category === "한식");
  const chineseFood = context.food.filter(item => item.category === "중식");
  const japaneseFood = context.food.filter(item => item.category === "일식");
  const westernFood = context.food.filter(item => item.category === "양식");

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
        <div className={classes.root}>
          <Grid container spacing={2}>
            {koreanFood.map((item, i) => (
              <Grid item xs={4} key={i}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="p"
                      >
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {chineseFood.map((item, i) => (
              <Grid item xs={4} key={i}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="p"
                      >
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
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {japaneseFood.map((item, i) => (
              <Grid item xs={4} key={i}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="p"
                      >
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
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {westernFood.map((item, i) => (
              <Grid item xs={4} key={i}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="p"
                      >
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
      </TabPanel>
    </div>
  );
};

export default SimpleTabs;
