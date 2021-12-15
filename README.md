# [React-STT](https://www.npmjs.com/package/react-stt)

> ### _This package lets you convert speech to text in a react app._

<br>

## Instalation

<br>

```bash
 npm i react-stt
```

<br>

## Props

| <div align ="center">Name </div> | <div align = "center">Description</div> |
| -------------------------------- | --------------------------------------- |
| `exportText`                     | Returns the converted text.             |
| `startMessage`                   | Start Message. Start by default         |
| `stopMessage`                    | Stop Message. Stop by default           |

<br>

## Example

> ### _Given below is a simple unstyled example that converts the speech and fills the input field._

<br>

```javascript
import { useEffect, useState } from "react";
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

<br>

## Find the npm package [here.](https://www.npmjs.com/package/react-stt)
