import { Suspense } from "react";
import "./App.scss";
// import Test from "./screens/test/test.screen";
import ModelView from './screens/modelview/modelView'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./common_components/hoc/main.hoc";
import store from "./store/store";
import { Provider } from "react-redux";
import KorkaiPage from "screens/KorkaiPage/KorkaiPage.screen";
import HomePage from "screens/HomePage/HomePage.screen";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
          <Route
              path="/"
              element={
                <Main>
                  <HomePage />
                </Main>
              }
            ></Route>
            <Route
              path="/model"
              element={
                <Main>
                  <ModelView />
                </Main>
              }
            ></Route>
            <Route
              path="/korkai"
              element={
                <Main>
                  <KorkaiPage />
                </Main>
              }
            ></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
