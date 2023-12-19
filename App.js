import {createRoot} from "react-dom/client"
import Header from "./src/components/Header"
const App = () => {
    return (
        <div>
            <h1>Hello-World</h1>
            {Header()}
        </div>
    )
}


const root = createRoot(document.getElementById("root"))
root.render(<App/>)