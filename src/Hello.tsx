import {ChangeEvent, useState} from "react";


export default function Hello() {

    const [counter, setCounter] = useState(0)
    const [inputText, setInputText] = useState("")

    const text: string = "Hallo"

    const onButtonClick = () => {
        setCounter(counter + 1)
    }

    const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    if (counter > 3) {
        return <p>
            Fehler
        </p>
    }

    return (
        <div>
            <p>{text}</p>

            <p>{counter === 1 ? text : counter}</p>
            {counter && <p>ABC</p>}

            <button onClick={onButtonClick} className={"meine-css.class"}>Press</button>
            <input value={inputText} onChange={handleUserInput}/>
        </div>
    )
}
