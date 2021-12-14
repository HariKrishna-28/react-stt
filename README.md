# react-stt

> ### This package lets you convert speech to text in a react app.

<br>

## Instalation

```bash
 npm i react-stt
```

<br>

## Example

### Given below is a simple example that converts the speech and fills the input field.

<br>

```javascript
import { useEffect, useState } from "react";
import "./App.css";
import SpeechTotext from "react-stt";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    //Scrolls to the bottom of the div tag.
    document.getElementById("message-box").value = message;
    const div = document.getElementById("message-box");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }, [message]);

  return (
    <>
      <SpeechTotext
        exportText={(note) => setMessage(note)}
        startMessage={"start"}
        stopMessage={"stop"}
      />

      <textarea id="message-box" cols="30" rows="10"></textarea>
    </>
  );
}

export default App;
```
