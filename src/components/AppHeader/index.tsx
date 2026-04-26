import { Grow, Box, Theme, Toolbar, Typography, Select, MenuItem } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { User } from "../../api/services/User/store";
import { useCountdown } from "../../hooks/useCountDown";
import AvatarMenu from "../AvatarMenu";

interface AppBarProps extends MuiAppBarProps {
  theme?: Theme;
}

interface AppHeaderProps {
  user: User | null;
  pageTitle: string;
}

const typoStyle = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  lineHeight: 1
};

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  height: theme.tokens.header.height
}));

const AppHeader = React.forwardRef((props: AppHeaderProps, ref) => {
  const { user, pageTitle } = props;
  const { t, i18n } = useTranslation("app");
  const theme = useTheme();
  const { minutes, seconds } = useCountdown(1);

  return (
    <AppBar ref={ref} position="fixed" sx={{ width: "100vw" }}>
      <Toolbar sx={{ background: "#08140C 0% 0% no-repeat padding-box" }}>
        <Box sx={{ width: "100%", flexDirection: "row", display: "flex" }}>
          <Box>
            <Typography variant="h6" component="div" color="primary">
              {minutes}:{seconds}
            </Typography>
          </Box>
          <Box sx={{ width: 20, height: 20, flex: 1 }} />
          <Box sx={{ flex: 2 }}>
            <Typography
              sx={{
                ...typoStyle,
                color: theme.palette.primary.main,
                mb: theme.spacing(0.5)
              }}
              variant="h6"
              component="div"
            >
              {t("appTitle").toLocaleUpperCase()}
            </Typography>
            <Typography
              sx={{ ...typoStyle }}
              variant="overline"
              component="div"
              noWrap
            >
              {pageTitle.toLocaleUpperCase()}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              size="small"
              sx={{
                color: theme.palette.common.white,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                },
                "& .MuiSvgIcon-root": { color: theme.palette.common.white },
              }}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="de">DE</MenuItem>
            </Select>
          </Box>
          <Box sx={{ flex: 1, justifyContent: "flex-end", display: "flex" }}>
            {user?.eMail && (
              <Grow in={Boolean(user?.eMail)}>
                <div>{user && <AvatarMenu user={user} />}</div>
              </Grow>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default AppHeader;
