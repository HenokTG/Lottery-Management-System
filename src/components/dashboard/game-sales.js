import { Bar } from "react-chartjs-2";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const SalesByGames = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: "#000",
        barPercentage: 0.5,
        barThickness: 30,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [1800, 555, 1119, 2700, 290, 1590, 2000, 1230, 720],
        label: "Sales total by Game Category",
        maxBarThickness: 50,
      },
    ],
    labels: [
      "Scrach Cards",
      "Hotel Premise Casini",
      "Other Games",
      "Public Online Lottery (POL)",
      "Stand Alone Casino",
      "Online Sport Betting (OSB)",
      "Gaming Machine",
      "Fixed Odd Pool Betting",
      "Online Casino",
    ],
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: true },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider,
        },
      },
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card sx={{ height: "100%", backgroundColor: "#F4EED9" }} {...props}>
      <CardHeader
        action={
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
            variant="contained"
            sx={{ background: "black" }}
          >
            Last 7 days
          </Button>
        }
        title="Game Catagory"
        titleTypographyProps={{
          color: "textPrimary",
          variant: "subtitle1",
          sx: {
            backgroundColor: "white",
            border: "solid 1px black",
            display: "inline-block",
            py: 1,
            px: 2,
            borderRadius: 4,
            fontWeight: "bold",
          },
        }}
        sx={{ p: 2 }}
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};
