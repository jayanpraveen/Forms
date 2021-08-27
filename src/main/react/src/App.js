import ResponseSchema from "./Components/Response/ResponseSchema";
import FormSchema from "./Components/Form/FormSchema";

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
      {/* <ResponseSchema /> */}
    </div>
  );
}

export default App;
