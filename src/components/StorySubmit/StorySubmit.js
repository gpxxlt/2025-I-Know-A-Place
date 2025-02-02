// import { useState, useEffect } from "react";
import { useState } from "react";
import cn from 'classnames';

import styles from './StorySubmit.module.css';
import {Button} from "@material-ui/core";

function StorySubmit({ latLong }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [prompt, setPrompt] = useState('');
    // const [prompts, setPrompts] = useState([]);
    const [storyText, setStoryText] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     (async function () {
    //         const allPrompts = []
    //         const response = await allPrompts.get();
    //         const newPrompts = [];
    //         response.docs.forEach((doc) => {
    //             const data = doc.data();
    //             newPrompts.push(data.text);
    //         });
    //         setPrompt(newPrompts[0]);
    //         setPrompts(newPrompts);
    //     })();
    // }, []);

    const handleName = (event) => {
        console.log('Handling name');
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePrompt = (event) => {
        setPrompt(event.target.value);
    };

    const handleStoryText = (event) => {
        setStoryText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Handling submit');
        // Send the data to db
        try {
            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, prompt, storyText })
            }
            const response = await fetch('api/SubmitStory', request);

            if (response.ok) {
                // Data is sent to db, log something for now
                console.log('Data transferred to db\n');
                setSubmitted(true);
            }
            else {
                const resp_err = await response.json();
                setError(resp_err.error);
            }
        }
        catch (error) {
            setError('Failed to submit data');
        }
    };

    return (
        <section>
            {!submitted && (
                <>
                    <h1 className={styles.title}>Share Your Story:</h1>
                    <form onSubmit={handleSubmit}>
                        <label className={styles.label}>
                            Start your story at your selected location: {latLong.lat.toFixed(4)}, {latLong.lng.toFixed(4)}
                        </label>
                        <label className={styles.label} htmlFor="name">Name (optional)</label>
                        <input
                            className={styles.input}
                            id="name"
                            type="text"
                            onChange={handleName}
                            value={name}
                        />
                        <label className={styles.label} htmlFor="email">Email (only used for email confirmation purposes)</label>
                        <input
                            className={styles.input}
                            id="email"
                            type="text"
                            onChange={handleEmail}
                            value={email}
                            required
                        />
                        <label className={styles.label} htmlFor="prompt">Choose a prompt:</label>
                        {/*<select className={styles.input} id="prompt" value={prompt} onChange={handlePrompt}>*/}
                        {/*    {prompts.map((text, index) => (*/}
                        {/*        <option key={index} value={text}>*/}
                        {/*            {text}*/}
                        {/*        </option>*/}
                        {/*    ))}*/}
                        {/*</select>*/}
                        {/*Cannot use useEffect for now so just hardcode some stuff*/}
                        <input
                            className={styles.input}
                            id="prompt"
                            onChange={handlePrompt}
                            value={prompt}
                            required
                        />
                        <label className={styles.label} htmlFor="story">Your Story</label>
                        <textarea
                            className={styles.input}
                            id="story"
                            rows="10"
                            cols="30"
                            value={storyText}
                            onChange={handleStoryText}
                            required
                        />
                        <button
                            className={cn(styles.submit, { [styles.disabled]: !(storyText && email) })}
                            type="submit"
                            disabled={!(storyText && email)}
                        >
                            Submit
                        </button>
                        {/*<Button onClick={handleSubmit}>*/}
                        {/*    Submit*/}
                        {/*</Button>*/}
                    </form>
                </>
            )}
            {submitted && (
                <p className={styles.success}>Submitted successfully! You will recieve an email when our team reviews and publishes your story. Thank you!</p>
            )}
        </section>
    );
}

export default StorySubmit;
