import ResponseSchema from "./Components/Response/ResponseSchema";
import FormSchema from "./Components/Form/FormSchema";
import CreateModal from "./Components/Layout/CreateModal";
import SiteHeader from "./Components/Form/Utils/SiteHeader.js";
import "./Components/Form/css/SiteHeader.css";
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  /**
   * TODO:
   * 1. add routing /view, /edit, /create, /viewresponse
   * 2. add options for select, long/short response
   * 3.
   */
  return (
    <div>
      {/* <CreateModal /> */}
      {/* <FormSchema /> */}
      <ResponseSchema />
    </div>
  );
}

export default App;
