import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FC, useCallback, useState } from "react";

type GameAction = "paper" | "scissors" | "rock";
const actions: GameAction[] = ["paper", "scissors", "rock"];
enum GameResult {
  Win = "You win!",
  Lose = "You lose!",
  Draw = "Draw!",
}
export const GamePage: FC = () => {
  const [gameActions, setGameActions] = useState<GameAction[]>([]);
  const [playerAction = null, computerAction = null] = gameActions;

  const getGameResult = useCallback(() => {
    if (playerAction === null) {
      return null;
    }
    if (playerAction === computerAction) {
      return GameResult.Draw;
    }
    if (
      (playerAction === "paper" && computerAction === "rock") ||
      (playerAction === "scissors" && computerAction === "paper") ||
      (playerAction === "rock" && computerAction === "scissors")
    ) {
      return GameResult.Win;
    }
    return GameResult.Lose;
  }, [playerAction, computerAction]);
  return (
    <Container maxWidth="md" sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center">
        {getGameResult() === null
          ? "Click a button to start the game"
          : getGameResult()}
      </Typography>

      <Box display="flex-inline" justifyContent="center" mt={2} height={200}>
        {playerAction && (
          <Typography textAlign="center">You: {playerAction}</Typography>
        )}
        {computerAction && (
          <Typography textAlign="center">Computer: {computerAction}</Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {actions.map((action: GameAction) => (
          <Button
            variant="contained"
            key={action}
            onClick={() => {
              setGameActions([
                action,
                actions[Math.floor(Math.random() * actions.length)],
              ]);
            }}
          >
            {action}
          </Button>
        ))}
      </Box>
    </Container>
  );
};
