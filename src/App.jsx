import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
function App() {
  const [value, setValue] = React.useState(2);

  return <Button variant="contained">Hello World</Button>;
}

export default App;
