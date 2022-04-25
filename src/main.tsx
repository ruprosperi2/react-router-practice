import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css'
import App from './App'
import Expenses from "./components/Expenses";
import Invoices from "./components/Invoices";
import Invoice from "./components/Invoice";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="expenses" element={<Expenses/>}/>
                    <Route path="invoices" element={<Invoices/>}>
                        <Route
                            index
                            element={
                                <main style={{padding: "1rem"}}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":number" element={<Invoice/>}/>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
