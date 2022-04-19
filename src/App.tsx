import React, { FC, ReactNode, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { CSSTransition } from "react-transition-group";

import { Test } from "./Pages/Test/Text";
import { LoaderPage } from "./Pages/LoaderPage/LoaderPage";

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="wrapper">
      <div>
        <Link to={"/"}>Loader</Link>
        <Link to={"/registration"}>Loader</Link>
      </div>
      <Routes>
        <Route path="/" element={<LoaderPage />} />
        <Route path="/registration" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;

{
  /*<button onClick={() => setIsLoading((prev) => !prev)}>*/
}
{
  /*  {isLoading ? "show" : "hide"}*/
}
{
  /*</button>*/
}

{
  /*  <CSSTransition*/
}
{
  /*    in={isLoading}*/
}
{
  /*    timeout={2000}*/
}
{
  /*    classNames="alert"*/
}
{
  /*    unmountOnExit*/
}
{
  /*  >*/
}
{
  /*    {isLoading ? <h1>Hello world</h1> : <LoaderPage />}*/
}
{
  /*  </CSSTransition>*/
}
