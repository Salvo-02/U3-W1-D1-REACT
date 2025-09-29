import "./App.css";
import Article from "./Components/Article";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav
        href="https://it.wikipedia.org/wiki/Ford_Mustang"
        imgLogo="https://t4.ftcdn.net/jpg/05/52/03/35/360_F_552033565_9QSaE6XAeuUhaeTt8iOUCfvSQyrvLwZK.jpg"
        title="Logo"
      />
      <div className="App">
        <ImageComponent
          src="https://images.unsplash.com/photo-1606942790567-5783bab8d944?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="carImage"
        />
        <div className="divArticle">
          <Article
            span="Ford Mustang 1969 – L’Icona Americana per Eccellenza"
            description="La Ford Mustang 1969 rappresenta uno dei massimi esempi di muscle car americane, un perfetto equilibrio tra potenza, stile e libertà su quattro ruote. Questo modello, appartenente alla prima generazione della Mustang, è celebre per il suo design aggressivo e le prestazioni coinvolgenti, che ne hanno fatto un’icona senza tempo.
Con le sue linee muscolose, il frontale imponente e il profilo filante, la Mustang del ’69 segna un'evoluzione rispetto ai modelli precedenti, introducendo un look più deciso e sportivo. All'interno, l'abitacolo riflette l’anima dell’epoca: essenziale, ma con carattere, pensato per chi vive la strada come un’estensione della propria personalità.
Sotto il cofano, questa versione è equipaggiata con un motore V8 capace di erogare una potenza travolgente, supportata da un sound inconfondibile che ha fatto battere il cuore a intere generazioni di appassionati.
Restaurata con cura e mantenuta in condizioni eccellenti, questa Ford Mustang 1969 è molto più di un’auto d’epoca: è un simbolo culturale, un tributo alla libertà e alla passione per la guida."
          />
        </div>
        <div className="divBtn">
          <ButtonComponent href="https://it.wikipedia.org/wiki/Ford_Mustang" name="Scopri di più" />
        </div>
      </div>
    </>
  );
}

export default App;
