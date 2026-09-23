import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <div className="card text-center">
        <Header className="card-header" />
        <Main className="card-body" />
        <Footer className="card-footer" />
      </div>
    </>
  );
}

export default App;
