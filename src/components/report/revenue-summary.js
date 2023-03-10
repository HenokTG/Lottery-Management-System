import { Typography, Grid, Card } from "@mui/material";

import { Sells as Sells } from "../../icons/sells";
import { Tax as Tax } from "../../icons/tax";

const RevenueSummary = (props) => (
  <Card sx={{ mx: 2 }} {...props}>
    <Grid sx={{ p: 1 }} container alignItems="center">
      <Grid item md={2} textAlign="center">
        {props.badge === "Sales" ? (
          <Sells
            sx={{
              color: "goldenrod",
              height: 56,
              width: 56,
            }}
          />
        ) : (
          <Tax
            sx={{
              color: "goldenrod",
              height: 56,
              width: 56,
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
