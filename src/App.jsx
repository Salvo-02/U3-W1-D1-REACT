import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
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
        <p>
          <span>Ford Mustang Fastback 1969 – Muscoli, Eleganza e Anima da Corsa</span>
          <hr /> La Ford Mustang Fastback del 1969 è una delle versioni più iconiche e desiderate della muscle car americana per eccellenza. Con il suo profilo
          slanciato e aggressivo, la Fastback incarna perfettamente la fusione tra potenza bruta e design senza tempo. Questo modello si distingue per la sua
          carrozzeria dal taglio sportivo, con la caratteristica coda spiovente che conferisce all’auto un’impronta da coupé da corsa. Il muso allungato, le
          doppie prese d’aria sul cofano e i fari anteriori sdoppiati ne esaltano l’estetica decisa, mentre le linee fluide raccontano di un’epoca in cui ogni
          curva era disegnata per evocare emozione. Sotto il cofano, la Fastback poteva essere equipaggiata con una vasta gamma di motori, dai brillanti V8 302
          fino ai leggendari 351 Windsor o 428 Cobra Jet, capaci di erogare potenze che fanno battere il cuore a ogni accelerata. Il sound profondo del motore e
          la risposta pronta al pedale dell’acceleratore completano l’esperienza di guida pura e coinvolgente. All’interno, l’abitacolo è un mix perfetto di
          sportività e comfort vintage: cruscotto analogico in stile retrò, volante in legno, sedili avvolgenti e dettagli cromati che richiamano
          l’artigianalità dell’epoca. Questa Mustang Fastback 1969 non è solo un'auto: è un’icona culturale, una leggenda su ruote che continua a far sognare
          generazioni di appassionati.
        </p>
        <ButtonComponent name="Scopri di più" />
      </div>
    </>
  );
}

export default App;
