import { getVideos } from './services/videos';
import useSWR from 'swr';
import Spinner from './components/spinner';
import { Box } from '@mui/system';
import { Alert, AlertTitle, Container } from '@mui/material';
import Controls from './components/controls';
import Display from './components/display';

const App = () => {
  const { data, error } = useSWR('https://api.jsonbin.io/b/5ef409df2406353b2e0c4068/', getVideos);

  if (!data && !error) {
    return <Spinner />;
  } else if (!error) {
    return (
      <Container sx={{ padding: '12px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Display />
          <Controls categories={data} />
        </Box>
      </Container>
    );
  }
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Tuvimos un problema al intentar cargar los videos. Por favor, intenta más tarde.
    </Alert>
  );
};

export default App;
