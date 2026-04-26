import { Box, Container, Typography } from "@mui/material";
import { observer } from "mobx-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation, Trans } from "react-i18next";
import { Issue } from "../../types/issue";

const Home = () => {
  const { t } = useTranslation("app");
  const issues: Issue[] = [
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      icon: "🐞",
      title:
        'Console error: Warning: Each child in a list should have a unique "key" prop.',
      description:
        "Hope you are able to find what is causing this error, as it is annoying.",
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      icon: "🐞",
      title:
        'The word "known" should be displayed bold in the introduction text.',
      description:
        "When implementing a solution, please ensure to not change the i18n text.",
    },
    {
      id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      icon: "🐞",
      title:
        "User avatar in app bar is missing, although user should be fetched on app start correctly.",
      description:
        "On app start we load the current user object via a MobX store, but for any reason the user avatar is not displayed in the top right of the app bar. Attention: When solving this issue, you might will be confronted with a second bug.",
    },
    {
      id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
      icon: "🐞",
      title: "Optional: Countdown is broken sometimes (hard to reproduce).",
      description:
        "Some developers mentioned that the countdown in the app header behaves strange sometimes, but unfortunately they were not able to reproduce this glitch reliably, maybe you find the root cause.",
    },
    {
      id: "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
      icon: "⭐️",
      title: "Optional: It would be great to be able to switch the language.",
      description:
        "Please add a language select control in the app bar to swicth the UI language between english and german.",
    },
  ];

  return (
    <Box p={2} maxHeight="calc(100vh - 64px)" overflow={["auto", "auto"]}>
      <Container>
        <Typography variant="h1" textAlign="center">
          {t("home.welcome")}
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          <Trans i18nKey="home.intro" components={{ b: <strong /> }} />
        </Typography>
        <Typography variant="body2" textAlign="center" color="textSecondary">
          {t("home.sidenote")}
        </Typography>
        <List>
          {issues.map((issue: Issue) => (
            <ListItem key={issue.id}>
              <Typography variant="h5" sx={{ p: 2 }}>
                {issue.icon}
              </Typography>
              <ListItemText
                primary={issue.title}
                secondary={issue.description}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default observer(Home);
