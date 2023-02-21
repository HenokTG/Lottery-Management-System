import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Sells as Sells } from "../../icons/sells";

export const TotalSales = (props) => (
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
      title="Total Sales"
      titleTypographyProps={{ color: "textPrimary", variant: "h6" }}
      sx={{ p: 2 }}
    />
    <Divider variant="middle" sx={{ borderBlockColor: "black" }} />
    <Grid sx={{ p: 1 }} container direction="column" alignItems="center" justifyContent="center">
      <Sells
        sx={{
          backgroundColor: "#F4EED9",
          color: "black",
          height: 40,
          width: 40,
        }}
      />
      <Typography color="textSecondary" gutterBottom variant="caption">
        Total Sales
      </Typography>
      <Typography color="goldenrod" variant="h5">
        $ 432,236
      </Typography>
    </Grid>
  </Card>
);
