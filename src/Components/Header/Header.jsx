import { Box, Container, Stack, Typography } from "@mui/material";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useContext, useState } from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { HeaderLinks } from "./HeaderLinks";
import { Link } from "react-router-dom";

function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <section className="head">
        <Stack className="header" sx={{}}>
          <Box
            className="Links"
            // @ts-ignore
            sx={{
              boxShadow: `1px 3px ${theme.palette.shadow.main}`,
              bgcolor: theme.palette.bg.secondary,
            }}
          >
            {HeaderLinks.map((item) => {
              return (
                <>
                  <Link className="link" to={`/${item}`}>
                    <Typography
                      key={item}
                      sx={{
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "500",
                        ":hover": { color: "aqua" },
                        transition: "0.3s",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item}
                    </Typography>
                  </Link>
                </>
              );
            })}
          </Box>
          <div className="MenuLinks">
            <Button
              sx={{
                // @ts-ignore
                boxShadow: `1px 3px ${theme.palette.shadow.main}`,
                color: theme.palette.text.primary,
                borderRadius: "50px",
                bgcolor: theme.palette.bg.secondary,
                ":hover": {
                  bgcolor: theme.palette.bg.secondary,
                },
              }}
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Menu
              <MenuOutlinedIcon />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {HeaderLinks.map((item) => {
                return (
                  <>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to={`/${item}`}
                        sx={{
                          fontSize: 15,
                          fontWeight: "500",
                          ":hover": { color: "aqua" },
                          transition: "0.3s",
                        }}
                        className="link"
                      >
                        <a
                          className="linkCollapsed"
                          href=""
                          style={{
                            color: theme.palette.text.primary,
                            textDecoration: "none",
                          }}
                        >
                          {item}
                        </a>
                      </Link>
                    </MenuItem>
                  </>
                );
              })}
            </Menu>
          </div>

          <div className="mode">
            {theme.palette.mode === "light" ? (
              <IconButton
                className="icon"
                sx={{
                  boxShadow: " 1px 3px #f1ebeb",
                  position: "absolute",
                  top: 22,
                  right: 25,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                }}
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined
                  className="icon"
                  sx={{
                    fontSize: "26px",
                    color: "#888",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                sx={{
                  boxShadow: " 1px 3px #777",

                  position: "absolute",
                  top: 22,
                  right: 25,
                  borderRadius: "50%",
                }}
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined
                  sx={{
                    fontSize: "26px",
                    borderRadius: "50%",
                    color: "aqua",
                  }}
                />
              </IconButton>
            )}
          </div>
        </Stack>
        <IconButton
          sx={{
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            maxWidth: "100%",
            p: 0,
            mb: 5,
            top: 0,
          }}
        >
          <Link to={"/home"}>
            <img
              className="photo"
              src="https://res.cloudinary.com/dj841loep/image/upload/v1695300651/02_dojuur.jpg"
            />
          </Link>
        </IconButton>
      </section>
    </Container>
  );
}
export default Header;
