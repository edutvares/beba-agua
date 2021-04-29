import Layout from "./components/Layout";
import GlobalStyle from "./GlobalStyle";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ConfigPage from "./pages/ConfigPage";
import IndexPage from "./pages/IndexPage";
import AddWaterPage from "./pages/AddWaterPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/config" component={ConfigPage} />
              <Route path="/addwater" component={AddWaterPage} />
              <Route path="/" component={IndexPage} />
            </Switch>
          </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
