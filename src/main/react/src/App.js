import FromList from "./Components/Form/FromList";
import FormCardHeader from "./Components/Form/Utils/FormCardHeader";

function App() {
  /**
   * TODO:
   * 1. add /view, /edit, /create, /viewresponse
   * 2. add options for select, long/short response
   */
  return (
    <div style={{ fontFamily: "Nunito Sans" }}>
      <FromList />
    </div>
  );
}

export default App;
