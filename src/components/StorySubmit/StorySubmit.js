import { useState, useEffect } from "react";
import cn from 'classnames';

import styles from './StorySubmit.module.css';

function StorySubmit({ latLong }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [prompt, setPrompt] = useState('');
    const [prompts, setPrompts] = useState([]);
    const [storyText, setStoryText] = useState('');
    const [submitted, setSubmitted] = useState('');


    useEffect(() => {
        (async function () {
            const allPrompts = []
            const response = await allPrompts.get();
            const newPrompts = [];
            response.docs.forEach((doc) => {
                const data = doc.data();
                newPrompts.push(data.text);
            });
            setPrompt(newPrompts[0]);
            setPrompts(newPrompts);
        })();
    }, []);

    const handleName = (event) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
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
                        <select className={styles.input} id="prompt" value={prompt} onChange={handlePrompt}>
                            {prompts.map((text, index) => (
                                <option key={index} value={text}>
                                    {text}
                                </option>
                            ))}
                        </select>
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
