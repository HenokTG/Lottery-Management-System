import { Button, Card, CardHeader, Divider, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Tax as Tax } from "../../icons/tax";

export const TotalTax = (props) => (
  <Card sx={{ height: "100%", backgroundColor: "#F4EED9", mb: 0 }} {...props}>
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
      title="Total GCM/Tax"
      titleTypographyProps={{ color: "textPrimary", variant: "h6" }}
      sx={{ p: 2 }}
    />
    <Divider variant="middle" sx={{ borderBlockColor: "black" }} />
    <Grid sx={{ p: 1 }} container direction="column" alignItems="center" justifyContent="center">
      <Tax
        sx={{
          backgroundColor: "#F4EED9",
          color: "black",
          height: 40,
          width: 40,
        }}
      />
      <Typography color="textSecondary" gutterBottom variant="caption">
        Total GCM/Tax
      </Typography>
      <Typography color="goldenrod" variant="h5">
        $ 67,236
      </Typography>
    </Grid>
  </Card>
);
