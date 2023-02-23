import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Selector as SelectorIcon } from "../icons/selector";
import { PlayFolder as Games } from "../icons/play-folder";
import { User as UserIcon } from "../icons/user";
import { Users as UsersIcon } from "../icons/users";
import { Report as Report } from "../icons/report";
import { ActivityLog as Log } from "../icons/activity-log";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/dashboard",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/operators",
    icon: <UsersIcon fontSize="small" />,
    title: "Operators",
  },
  {
    href: "/games",
    icon: <Games fontSize="small" />,
    title: "Games",
  },
  {
    href: "/management",
    icon: <UserIcon fontSize="small" />,
    title: "Management",
    children: [
      {
        href: "/management/user-management",
        icon: <UserIcon fontSize="small" />,
        title: "User Management",
      },
      {
        href: "/management/role-management",
        icon: <UserIcon fontSize="small" />,
        title: "Role Management",
      },
    ],
  },
  {
    href: "/report",
    icon: <Report fontSize="small" />,
    title: "Report",
    children: [
      { href: "/report/revenue", icon: <Report fontSize="small" />, title: "Revenue" },
      {
        href: "/report/payment-distribution",
        icon: <Report fontSize="small" />,
        title: "Payment Distribution",
      },
      { href: "/report/ticket-info", icon: <Report fontSize="small" />, title: "Ticket Info" },
      {
        href: "/report/winning-ticket",
        icon: <Report fontSize="small" />,
        title: "Winning Ticket",
      },
      {
        href: "/report/operator-wallet",
        icon: <Report fontSize="small" />,
        title: "Operator Wallet",
      },
    ],
  },
  {
    href: "/app-configurations",
    icon: <CogIcon fontSize="small" />,
    title: "App Configurations",
  },
  {
    href: "/activity-logs",
    icon: <Log fontSize="small" />,
    title: "Activity Logs",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  John Doe
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier : Admin
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              subgroup={item.children}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
