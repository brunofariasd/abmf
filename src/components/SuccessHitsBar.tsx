import { BarChart } from "@mui/x-charts/BarChart";
import {
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const formsData = [
  { form: "5 acertos", quantity: 8, color: "#000080" },
  { form: "4 acertos", quantity: 5, color: "#4169E1" },
  { form: "3 acertos", quantity: 3, color: "#4682B4" },
  { form: "2 acertos", quantity: 2, color: "#87CEEB" },
  { form: "1 acerto", quantity: 1, color: "#008080" },
];

const FormsBar = () => {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Distribuição de acertos
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <BarChart
            dataset={formsData}
            xAxis={[
              {
                scaleType: "band",
                dataKey: "form",
                colorMap: {
                  type: "ordinal",
                  colors: formsData.map((item) => item.color),
                },
              },
            ]}
            yAxis={[
              {
                label: "Quantidade",
              },
            ]}
            series={[{ dataKey: "quantity", label: "" }]}
            width={600}
            height={400}
            colors={["transparent"]}
            grid={{ horizontal: true, vertical: false }}
          />
          <Box>
            <Typography variant="h6" component="h2">
              Legenda
            </Typography>
            <List>
              {formsData.map((data) => (
                <ListItem key={data.form}>
                  <ListItemIcon>
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        backgroundColor: data.color,
                        border: "1px solid #ccc",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${data.form}: ${data.quantity} pessoa(s)`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormsBar;
