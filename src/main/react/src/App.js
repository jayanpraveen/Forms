import ResponseSchema from "./Components/Response/ResponseSchema";
import FormSchema from "./Components/Form/FormSchema";
import CreateModal from "./Components/Layout/CreateModal";
import "./Components/Form/css/SiteHeader.css";

function App() {
  /**
   * TODO:
   * 1. add routing /view, /edit, /create, /viewresponse
   * 2. add options for select, long/short response
   * 3.
   */
  let formId = "612bb595ba652b7464b6eac4";
  return (
    <>
      <div>
        <CreateModal />
        <FormSchema formId={formId} />
        <ResponseSchema formId={formId} />
      </div>
    </>
  );
}

export default App;
