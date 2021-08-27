import './App.css';

function App() {
  return (
    <div className="App">
      <h1>G'day</h1>
      <h3>Please enter article details below</h3>
      <label for="ArticleTitle">Article Title </label>
    <input type="text" name="ArticleTitle" />
    <br/>
    <label for="ArticleContent">Article Content </label>
    <input type="text" name="ArticleContent" />
    </div>
  );
}

export default App;
