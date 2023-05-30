import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"


function App() {

    function reproduzVideo(){
        alert("Esse vídeo está sendo reproduzido")
    }
    
  return (
    <>
    <Header/>
    <body>
    <div class="tela-inteira">
        <Home reproduz={reproduzVideo}/>
    </div>
    </body>
<Footer/>
    </>
  );
}

export default App;
