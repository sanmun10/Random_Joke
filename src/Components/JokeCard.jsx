import React, { useEffect, useState } from "react";
import "../style/JokeCard.css"


function JokeCard() {

    const [joke, setJoke] = useState({ setup: "", punchline: "" });
    const fetchJoke = async () => {



        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();
        setJoke(data);
    };

    useEffect(() => {
        fetchJoke();
    }, []);
    return (
        <div>
            <h2>Random Joke Generator</h2>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={fetchJoke}>Get Another Joke</button>
        </div>

    );
}

export default JokeCard;
