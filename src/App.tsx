import { Box, Container, Typography } from '@mui/material'

export default function App() {
  return (
    <Box>
      <Container className="container" maxWidth="lg">
        <Typography sx={{ color: '#000', fontSize: '2rem', fontWeight: 500 }}>
          Happy coding!
        </Typography>
      </Container>
    </Box>
  )
}
