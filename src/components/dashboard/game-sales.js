import { Bar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  SvgIcon,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const SalesByGames = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: "#3F51B5",
        barPercentage: 0.5,
        barThickness: 30,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [1800, 555, 1119, 2700, 290, 1590, 2000, 1230, 720],
        label: "Sales Total by Game Category",
        maxBarThickness: 50,
      },
    ],
    labels: [
      "Scrach Cards",
      "Hotel Premise Casino",
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
    legend: { display: false },
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
    <Card>
      <CardHeader
        title="Sales Total by Game Category"
        titleTypographyProps={{
          color: "textPrimary",
          variant: "h6",
          sx: {
            display: "inline-block",
            py: 1,
            px: 2,
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
      <Divider />
      <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Button
          endIcon={<ArrowDropDownIcon fontSize="small" />}
          size="small"
          variant="outlined"
          color="info"
        >
          Last 7 days
        </Button>
        <Button
          color="success"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightAltIcon />
            </SvgIcon>
          }
          size="small"
        >
          View All
        </Button>
      </CardActions>
    </Card>
  );
};
