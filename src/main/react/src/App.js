import ResponseSchema from "./Components/Response/ResponseSchema";
import CreateForm from "./Components/Form/CreateForm";

function App() {
  /**
   * TODO:
   * 1. add routing /view, /edit, /create, /viewresponse
   * 2. add options for select, long/short response
   * 3.
   */
  return (
    <div>
      <CreateForm />
      {/* <ResponseSchema /> */}
    </div>
  );
}

export default App;
