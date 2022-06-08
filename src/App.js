import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [articles, setArticles] = useState("")


  useEffect(() => {
    
    const getData = async () => {
      try {
        const data = await fetch("http://localhost:5000/articles");
        console.log('data', data);
        const dataJson = await data.json();
        const articles = dataJson.response.results
        console.log('articles', articles);
        console.log(typeof articles);
        setArticles(articles)

        

      }catch(error) {
        console.error('error', error)

      }
    }
    getData()
  }, [])


  return (
    articles&& 
    <div className="App">
      Hello Kostis
      those my frient are the data:
      <div>{ articles.map(article => (
        <p>{ article.webTitle }</p>
      )) }</div>
    </div>
  );
}

export default App;
