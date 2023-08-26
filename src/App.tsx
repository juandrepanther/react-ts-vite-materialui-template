import { Box, Container, Typography } from '@mui/material'
import useAppStore from './store/store'

export default function App() {
  const { bears } = useAppStore()

  return (
    <Box>
      <Container className="container" maxWidth="lg">
        <Typography sx={{ color: '#000', fontSize: '2rem', fontWeight: 500 }}>
          Happy coding! With Zustand: {bears}
        </Typography>
      </Container>
    </Box>
  )
}
