import "./App.css";
import * as React from "react";
import { ChakraProvider, Button, Spinner, Input } from "@chakra-ui/react";
import DisplayJohn, { JohnProfile } from "./DisplayJohn.js";

function App() {
  return (
    <ChakraProvider>
      <div className="button-group">
        <Button colorScheme="teal" size="sm" variant="solid">
          Button
        </Button>
        <Button colorScheme="red" size="md" variant="outline">
          Button
        </Button>
        <Button colorScheme="green" size="lg" variant="ghost">
          Button
        </Button>
      </div>
      <div className="spinner-group">
        <Spinner />
        <Spinner color="red.500" />
        <Spinner size="xl" />
      </div>
      <div className="input-group">
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </div>
      <DisplayJohn />
      <JohnProfile />
    </ChakraProvider>
  );
}

export default App;
