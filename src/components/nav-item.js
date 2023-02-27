import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { useState } from "react";

import { Box, Button, ListItem, List, Collapse } from "@mui/material";

export const NavItem = (props) => {
  const { href, icon, title, subgroup, ...others } = props;
  const router = useRouter();
  const active = href
    ? router.pathname === href
    : subgroup
    ? router.pathname === subgroup.href
    : false;
  // active = subgroup ? router.pathname === subgroup.href : false;
  const childActive = subgroup ? router.pathname === subgroup.href : false;

  console.log(
    "Check link: ",
    router.pathname,
    "    =>    ",
    href,
    subgroup,
    "WHAT?",
    active,
    childActive
  );

  const [open, setOpen] = useState(childActive);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  if (subgroup) {
    return (
      <>
        <ListItem onClick={handleOpen}>
          <Button
            component="a"
            startIcon={icon}
            disableRipple
            sx={{
              backgroundColor: childActive && "rgba(255,255,255, 0.08)",
              borderRadius: 1,
              color: childActive ? "secondary.main" : "neutral.300",
              fontWeight: childActive && "fontWeightBold",
              justifyContent: "flex-start",
              px: 3,
              textAlign: "left",
              textTransform: "none",
              width: "100%",
              "& .MuiButton-startIcon": {
                color: childActive ? "secondary.main" : "neutral.400",
              },
              "&:hover": {
                backgroundColor: "rgba(255,255,255, 0.08)",
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>{title}</Box>
          </Button>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subgroup.map((item) => {
              const { title, href, icon } = item;

              return (
                <ListItem
                  key={title}
                  disableGutters
                  sx={{
                    display: "flex",
                    mb: 0.5,
                    ml: 2,
                    py: 0,
                    px: 2,
                  }}
                  {...others}
                >
                  <NextLink href={href} passHref>
                    <Button
                      component="a"
                      startIcon={icon}
                      disableRipple
                      sx={{
                        backgroundColor: active && "rgba(255,255,255, 0.08)",
                        borderRadius: 1,
                        color: active ? "secondary.main" : "neutral.300",
                        fontWeight: active && "fontWeightBold",
                        justifyContent: "flex-start",
                        px: 3,
                        textAlign: "left",
                        textTransform: "none",
                        width: "100%",
                        "& .MuiButton-startIcon": {
                          color: active ? "secondary.main" : "neutral.400",
                        },
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                        },
                      }}
                    >
                      <Box sx={{ flexGrow: 1 }}>{title}</Box>
                    </Button>
                  </NextLink>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <NextLink href={href} passHref>
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </NextLink>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  subgroup: PropTypes.array,
};
