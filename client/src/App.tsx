import AppBar from "./components/AppBar";
import ServiceTable from "./components/ServiceTable";

function App() {
  return (
    <div className="App bg-slate-900 h-screen">
      <AppBar />
      <div className='w-9/12 my-16 mx-auto'>
        <ServiceTable />
      </div>
    </div>
  );
}

export default App;
