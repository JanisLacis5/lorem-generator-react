import {useState} from "react"
import Form from "./Form"
import text from "./data"

const App = () => {
    const [count, setCount] = useState(1)
    const [newText, setNewText] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setNewText(text.slice(0, count))
    }
    return (
        <section className="section-center">
            <h4>Better Lorem Ipsum generator</h4>
            <Form
                value={count}
                onChange={(e) => setCount(e.target.value)}
                onSubmit={(e) => handleSubmit(e)}
            />
            {newText.map((par) => {
                return <p className="lorem-text">{par}</p>
            })}
        </section>
    )
}
export default App
