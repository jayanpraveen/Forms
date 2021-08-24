import FormSchema from "./Component/FormSchema";
import ResponseSchema from "./Component/ResponseSchema";

function App() {
  return (
    <div>
      <h1>From</h1>
      <FormSchema formId="" />
      <h1>Reponse</h1>
      <ResponseSchema formId="" />
    </div>
  );
}

export default App;
