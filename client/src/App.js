//App.js is landing component, all components will  land here
import './App.css';
import Header from './components/Header'; // use ./ to navigate inside same folder
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Footer from './components/Footer'; 
function App() {
  return (<>
    <div className="App">
    <Header/>
    <TodoForm/>
    <Todos/>
    <div style={{marginTop:200}}>
    <Footer />
    </div>
    </div>
    </> 
    );
}

export default App;

//todo>npx create-react-app client
//code of execution starts from index.js file
//create a folder server
//server>npm init : to generate empty package.json
//server>npm i express
//server>npm i nodemon : listen to changes and automatically restarts server
// "start": "nodemon index.js", starting server with the help of nodemom:npm start
//server > npm i mongoose
//server>npm i dotenv
//client>npm i redux
//client>npm i redux-devtools-extensions
//client>npm i redux-redux
//client>npm i axios
//server>npm i cors
//server>npm i body-parser

