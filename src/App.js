import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const data = fetch("http://localhost:3000/articles")
    setArticles(data)
  }, [])


  return (
    <div className="App">
      {articles}
    </div>
  );
}

export default App;
