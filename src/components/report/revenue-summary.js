import { Button, Card, CardHeader, Divider, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Sells as Sells } from "../../icons/sells";
import { Tax as Tax } from "../../icons/tax";

const RevenueSummary = (props) => (
  <Card sx={{ height: "100%", backgroundColor: "#F4EED9", mx: 2 }} {...props}>
    <Grid sx={{ p: 1 }} container alignItems="center">
      <Grid item md={2} textAlign="center">
        {props.badge === "Sales" ? (
          <Sells
            sx={{
              backgroundColor: "#F4EED9",
              color: "black",
              height: 40,
              width: 40,
            }}
          />
        ) : (
          <Tax
            sx={{
              backgroundColor: "#F4EED9",
              color: "black",
              height: 40,
              width: 40,
            }}
          />
        )}
      </Grid>
      <Grid item md={10}>
        <Grid
          sx={{ p: 1 }}
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Typography color="textSecondary" gutterBottom variant="body">
            {props.title}
          </Typography>
          <Typography color="goldenrod" variant="h5">
            {props.amount}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default RevenueSummary;
