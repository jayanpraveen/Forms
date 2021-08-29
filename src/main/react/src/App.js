import ResponseSchema from "./Components/Response/ResponseSchema";
import FormSchema from "./Components/Form/FormSchema";
import CreateModal from "./Components/Layout/CreateModal";

function App() {
  /**
   * TODO:
   * 1. add routing /view, /edit, /create, /viewresponse
   * 2. add options for select, long/short response
   * 3.
   */
  return (
    <div>
      <FormSchema />
      {/* <CreateModal /> */}
      {/* <ResponseSchema /> */}
    </div>
  );
}

export default App;
