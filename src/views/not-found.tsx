import { Box, Typography } from "@mui/material"

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        variant="h1"
        style={{ color: "white" }}
      >
        404
      </Typography>
    </Box>
  )
}
export default NotFound
