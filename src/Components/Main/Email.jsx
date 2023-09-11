import { Box, Button, Container, Input, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTheme } from "@emotion/react";
import "./Email.css";
function Email() {
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
        <EmailOutlinedIcon sx={{ color: "#555" }} />
        <Typography
          variant="h6"
          sx={{ ml: 2, width: "auto", fontSize: 17, fontWeight: 500 }}
        >
          Stay up to date
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          textAlign: "left",
          color: theme.palette.text.secondary,
          m: "10px 0px",
        }}
      >
        Get notified when I publish something new, and unsubscribe at any time.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center !important",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ width: "80%", height: "45px", bg: theme.palette.bg.primary }}
        >
          <Input className="email" type="email" placeholder="Email Adress" />
        </Box>
        <Button
          sx={{
            p: "4px 2px",
            color: "#fff",
            bgcolor: theme.palette.bg.tertiary,
            ":hover": { bgcolor: theme.palette.bg.hover },
            mt: 2,
            fontSize: "12px",
          }}
        >
          Join
        </Button>
      </Box>
    </Container>
  );
}
export default Email;
