import { Box, Button, Container, Input, Typography } from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import { useTheme } from "@emotion/react";
import "./Email.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import StarsIcon from "@mui/icons-material/Stars";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { workList } from "./workList";
import { Image } from "@mui/icons-material";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

function Work() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: "15px",
        bgcolor: "theme.palette.bg.secondary",
        mt: 3,
        p: "20px 0px",
      }}
    >
      <Box sx={{ display: "flex !important", alignItems: "center" }}>
        <BusinessCenterOutlinedIcon sx={{ color: "#555" }} />
        <Typography
          variant="h6"
          sx={{ ml: 2, width: "auto", fontSize: 17, fontWeight: 500 }}
        >
          Work
        </Typography>
      </Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        {workList.map((item) => {
          return (
            <>
              <Box>
                <ListItem
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.bg.icon,
                        border: theme.palette.border.main,
                        p: 1,
                      }}
                    >
                      <img src={item.icon} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.title} secondary={item.desc} />
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {item.date}
                  </Typography>
                </ListItem>
              </Box>
            </>
          );
        })}
      </List>
      <Button
        sx={{
          width: "100%",
          textAlign: "center",
          color: theme.palette.text.secondary,
        }}
      >
        Download CV <ArrowDownwardOutlinedIcon />
      </Button>
    </Container>
  );
}
export default Work;
