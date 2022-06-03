import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const AnimatedHeadline = styled("div")({
  "@keyframes pulsate": {
    "0%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "50%": {
      opacity: 0.8,
      transform: "scale(1.1)",
    },
    "100%": {
      opacity: 0,
      transform: "scale(4)",
    },
  },
  animation: "pulsate 1s infinite ease",
  padding: "10rem",
});
const AnimatedButton = styled(Button)({
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-4px, 0, 0)",
    },
    "20%, 80%": {
      transform: "translate3d(8px, 0, 0)",
    },
    "30%, 50%, 70% ": {
      transform: "translate3d(-16px, 0, 0)",
    },
    "40%, 60%": {
      transform: "translate3d(16px, 0, 0)",
    },
  },
  "&:hover": {
    animation: "shake 2s cubic-bezier(.17,.67,.9,.58) both",
  },
});

function NoMatch() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <AnimatedHeadline>404 Not Found</AnimatedHeadline>
      <Link to="/game">
        <AnimatedButton variant="contained">Back to Game</AnimatedButton>
      </Link>
    </Box>
  );
}

export default NoMatch;
