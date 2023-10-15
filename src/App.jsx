import { useEffect } from 'react';
import { getPosts } from '../src/api';
import { Home } from './pages';
Home;
function App() {
  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPosts();
      console.log('response', response);
    };

    fetchPost();
  }, []);

  return (
    <>
      <h1>Chai or react | Santosh</h1>
      <Home />
    </>
  );
}

export default App;
