import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import "./Main.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./../MainImgs";
import { buttons } from "./Buttons";
import Email from "./Email";
import Work from "./Work";
function Main() {
  const theme = useTheme();
  return (
    <Container sx={{ textAlign: "left" }}>
      <Stack sx={{ mt: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: theme.palette.text.primary }}
        >
          Software designer, founder, and amateur astronaut.
        </Typography>
        <Typography
          // @ts-ignore
          variant="p"
          sx={{ color: theme.palette.text.secondary, mt: 2 }}
        >
          I'm Spencer, a software designer and entrepreneur based in New York
          City. I'm the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Stack>

      <ImageList
        sx={{ width: "100%", height: 450, mb: 0 }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {buttons.map((item) => {
        return (
          <>
            <Button
              key={item}
              sx={{
                mt: 0,
                ":hover": { bgcolor: theme.palette.bg.main },
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  color: theme.palette.text.secondary,
                  mb: 7,
                }}
              >
                <Typography className="dash" variant="body2">
                  {item.date}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: 22,
                    mt: 2,
                  }}
                  variant="h4"
                >
                  {item.head}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ m: "10px 0px", lineHeight: 1.5, fontSize: 12 }}
                >
                  {item.desc}
                </Typography>
                <Link href="https://www.google.com/" sx={{ fontSize: 12 }}>
                  Read Article {">"}
                </Link>
              </Box>
            </Button>
          </>
        );
      })}
      <Email />
      <Work />
    </Container>
  );
}
export default Main;
