import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { buttons } from "../Main/Buttons";

function Articles() {
  const theme = useTheme();
  return (
    <Container sx={{}}>
      <Typography sx={{ mt: 5, fontSize: 40, fontWeight: 800, mb: 2 }}>
        Writing on software design, company building, and the aerospace
        industry.
      </Typography>
      <Typography variant="p" sx={{ color: theme.palette.text.secondary }}>
        All of my long-form thoughts on programming, leadership, product design,
        and more, collected in chronological order.
      </Typography>
      {buttons.map((item) => {
        return (
          <>
            <Button
              key={item}
              sx={{
                mt: 2,
                ":hover": { bgcolor: theme.palette.bg.main },
                pt: 5,
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
    </Container>
  );
}
export default Articles;
