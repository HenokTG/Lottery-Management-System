import PropTypes from "prop-types";
// import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";

import { Avatar, Button, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const OverviewTotals = (props) => {
  const { value, title, icon, iconBg } = props;

  console.log("iconBg", iconBg);

  return (
    <Card>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={2}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: `${iconBg}.main`,
              height: 50,
              width: 50,
              padding: 0,
            }}
          >
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        </Stack>
        <Stack sx={{ mt: 3 }}>
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
            variant="outlined"
            color={iconBg}
            sx={{
              px: 2,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              "&:hover": {
                color: iconBg === "secondary" ? "blue" : "green",
              },
            }}
          >
            Last 7 days
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTotals.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object,
};
