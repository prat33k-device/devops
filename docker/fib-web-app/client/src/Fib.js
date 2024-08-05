import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Fib() {
    const [data, setData] = useState({
        seenIndexes: [],
        values: {},
        index: ""
    });

    useEffect (() => {
        async function fetchValues() {
            const res = await axios.get("/api/values/current");
            setData((prev)=> {
                return{ ...prev, values: res.data};
            });
        }
        async function fetchIndex() {
            const res = await axios.get("/api/values/all");
            setData((prev) => {
                prev.seenIndexes = res.data;
                return { ...prev, seenIndexes: res.data };
            });
        }
        fetchValues();
        fetchIndex();
    }, []);
    
    async function handleSubmit(e) {
        e.preventDefault();

        await axios.post("/api/values", {
            index: data.index
        });

        setData((prev) => {
            return { ...prev, index: ""};
        });
        console.log(data);
    }

    function handleValue(e) {
        setData((prev) => {
            return { ...prev, index: e.target.value };
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Enter your index:</label>
                <input value={data.index} onChange={handleValue}/>
                <button>Submit</button>
            </form>
            <h3>Indexes I have seen:</h3>
            <div>{data.seenIndexes.map((x) => x.number + ",")}</div>
            <h3>Calculated Values:</h3>
            {Object.keys(data.values).map((key, idx) => {
                return <div key={idx}>For index {key} I calculated {data.values[key]}</div>
            })}
        </div>
    );
}

export default Fib;