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
  { form: "Cubo", quantity: 15, color: "#5D3A6B" },
  { form: "Paralelepípedo", quantity: 8, color: "#8F00FF" },
  { form: "Esfera", quantity: 7, color: "#9966CC" },
  { form: "Pirâmide", quantity: 5, color: "#4B0082" },
  { form: "Cone", quantity: 3, color: "#D000D0" },
];

const FormsBar = () => {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Formas Geometricas
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
                  <ListItemText primary={`${data.form}: ${data.quantity}`} />
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
