import { Box, Container, Typography, useTheme } from "@mui/material";
import "./About.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function About() {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <img
          className="img"
          src="https://res.cloudinary.com/dj841loep/image/upload/v1695300644/about_nspbd4.webp"
        />
      </Box>{" "}
      <Typography sx={{ mt: 5, fontSize: 40, fontWeight: 800, mb: 2 }}>
        I'm Spencer Sharp. I live in New York City, where I design the future.
      </Typography>
      <Typography
        sx={{
          letterSpacing: 1.2,
          lineHeight: 1.6,
          mb: 3,
          color: theme.palette.text.secondary,
        }}
      >
        I've loved making things for as long as I can remember, and wrote my
        first program when I was 6 years old, just two weeks after my mom
        brought home the brand new Macintosh LC 550 that I taught myself to type
        on.
      </Typography>
      <Typography
        sx={{
          letterSpacing: 1.2,
          lineHeight: 1.6,
          mb: 3,
          color: theme.palette.text.secondary,
        }}
      >
        The only thing I loved more than computers as a kid was space. When I
        was 8, I climbed the 40-foot oak tree at the back of our yard while
        wearing my older sister's motorcycle helmet, counted down from three,
        and jumped — hoping the tree was tall enough that with just a bit of
        momentum I'd be able to get to orbit.
      </Typography>
      <Typography
        sx={{
          letterSpacing: 1.2,
          lineHeight: 1.6,
          mb: 3,
          color: theme.palette.text.secondary,
        }}
      >
        I spent the next few summers indoors working on a rocket design, while I
        recovered from the multiple surgeries it took to fix my badly broken
        legs. It took nine iterations, but when I was 15 I sent my dad's
        Blackberry into orbit and was able to transmit a photo back down to our
        family computer from space.
      </Typography>
      <Typography
        sx={{
          letterSpacing: 1.2,
          lineHeight: 1.6,
          mb: 3,
          color: theme.palette.text.secondary,
        }}
      >
        Today, I'm the founder of Planetaria, where we're working on civilian
        space suits and manned shuttle kits you can assemble at home so that the
        next generation of kids really can make it to orbit — from the comfort
        of their own backyards.
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem
              disablePadding
              sx={{
                ":hover .icon": { color: "aqua" },
                ":hover": { color: "aqua" },
                transition: "0.3s ease-in-out",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <TwitterIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="Follow on Twitter" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                ":hover .icon": { color: "aqua" },
                ":hover": { color: "aqua" },
                transition: "0.3s ease-in-out",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <InstagramIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="Follow on Instagram" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                ":hover .icon": { color: "aqua" },
                ":hover": { color: "aqua" },
                transition: "0.3s ease-in-out",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GitHubIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="Follow on GitHub" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                ":hover .icon": { color: "aqua" },
                ":hover": { color: "aqua" },
                transition: "0.3s ease-in-out",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <LinkedInIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="Follow on LinkedIn" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider sx={{ color: theme.palette.text.secondary }} />
        <ListItem
          disablePadding
          sx={{
            ":hover .icon": { color: "aqua" },
            ":hover": { color: "aqua" },
            transition: "0.3s ease-in-out",
            mt: 2,
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="spencer@planetaria.tech" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Container>
  );
}
export default About;
