import React from "react";

type Props = {
  title: string;
};

const App = (props: Props) => {
  const { title } = props;
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
};

export default App;
