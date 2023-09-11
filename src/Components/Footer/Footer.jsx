import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { HeaderLinks } from "../Header/HeaderLinks";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        // @ts-ignore
        sx={{ borderTop: `1px solid ${theme.palette.bg.main}` }}
        className="footer"
      >
        <Box sx={{ textAlign: "left", my: 5 }} className="LinksHolder">
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
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          © 2023 Spencer Sharp. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}
export default Footer;
