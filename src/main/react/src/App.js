import ResponseSchema from "./Components/Response/ResponseSchema";
import CreateForm from "./Components/Form/CreateForm";

function App() {
  /**
   * TODO:
   * 1. add /view, /edit, /create, /viewresponse
   * 2. add options for select, long/short response
   */
  return (
    <div>
      <CreateForm />
      <ResponseSchema />
    </div>
  );
}

export default App;
