import React from "react";
import { Typography, Paper, Box, Tabs, Tab } from "@mui/material";

import GeometricShapesChart from "../components/FormsBar";
import SuccessHitsBarChart from "../components/SuccessHitsBar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const App = () => {
  const [value, setValue] = React.useState(0);

  //@ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", p: 2, backgroundColor: "#f4f6f8" }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 3, width: "100%", maxWidth: "1200px" }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          fontWeight="bold"
        >
          Dashboard de Gráficos
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="dashboard tabs"
            centered
          >
            <Tab
              label="Formas Geométricas"
              id="simple-tab-0"
              aria-controls="simple-tabpanel-0"
            />
            <Tab
              label="Acertos Mensais"
              id="simple-tab-1"
              aria-controls="simple-tabpanel-1"
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <GeometricShapesChart />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SuccessHitsBarChart />
        </CustomTabPanel>
      </Paper>
    </Box>
  );
};

export default App;
