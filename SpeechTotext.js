import React, { useState, useEffect } from 'react'


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
mic.continuous = true
mic.interimResults = true
mic.lang = "en-UK"


const SpeechTotext = ({ exportText, startMessage = "Start", stopMessage = "Stop" }) => {

    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    // eslint-disable-next-line
    const [saveNotes, setSaveNotes] = useState([])

    useEffect(() => {
        handleListen()
        // if (!isListening) {
        //     handleSaveNote()
        // }
        // eslint-disable-next-line 
    }, [isListening])

    useEffect(() => {
        handleSaveNote()
        exportText(note)
        // eslint-disable-next-line
    }, [note])

    function handleSaveNote() {
        setSaveNotes(note)
        // document.getElementById("message-box").value = saveNotes
        // const div = document.getElementById("message-box")
        // div.scrollTop = div.scrollHeight - div.clientHeight;
    }

    function handleListen() {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                // console.log("continue")
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                // console.log("Stopped mic")
            }
        }

        mic.onstart = () => {
            // console.log("Mic's on")
        }

        mic.onresult = (e) => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("")

            // console.log(transcript)
            setNote(transcript)
            mic.onerror = (e) => {
                console.log(e.error)
            }
        }
    }


    return (
        <>

            <button onClick={() => setIsListening(!isListening)}>
                {isListening ? stopMessage : startMessage}
            </button>

        </>
    )
}

export default SpeechTotext
