import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import styles from './AdminConsole.module.css';

function AdminConsole() {
    const history = useHistory();
    const [prompts, setPrompts] = useState([]);
    const [customPrompt, setCustomPrompt] = useState([]);
    const [pendingStories, setPendingStories] = useState([]);
    const [deletedStories, setDeletedStories] = useState([]);

    useEffect(() => {

        (async function () {
            const allData = []
            const response = await allData.get();
            const penStories = [];
            const delStories = [];
            response.docs.forEach((doc) => {
                const data = doc.data();
                if (!data.approved && !data.deleted) {
                    penStories.push({ id: doc.id, ...data });
                }
                if (!data.approved && data.deleted) {
                    delStories.push({ id: doc.id, ...data });
                }
            });
            setPendingStories(penStories);
            setDeletedStories(delStories);
        })();

        (async function () {
            const allPrompts = []
            const response = await allPrompts.get();
            const newPrompts = [];
            response.docs.forEach((doc) => {
                const data = doc.data();
                newPrompts.push(data.text)
            });
            setPrompts(newPrompts);
        })();
    }, [history]);

    // const pendStory = (id) => {
    //     const delList = deletedStories.filter((item) => item.id !== id);
    //     const addToPen = deletedStories.filter((item) => item.id === id);
    //     let penList = pendingStories;
    //     penList = penList.concat(addToPen);
    //     setPendingStories(penList);
    //     setDeletedStories(delList);
    //     StoryService.update(id, { approved: false, deleted: false });
    // };

    const deleteStory = (id) => {
        const penList = pendingStories.filter((item) => item.id !== id);
        const addToDel = pendingStories.filter((item) => item.id === id);
        let delList = deletedStories;
        delList = delList.concat(addToDel);
        setPendingStories(penList);
        setDeletedStories(delList);
    };

    const approveStory = (id) => {
        const newList = pendingStories.filter((item) => item.id !== id);
        setPendingStories(newList);
    };

    const handleCustomPrompt = (event) => {
        setCustomPrompt(event.target.value);
    };

    const addCustomPrompt = (event) => {
        event.preventDefault();
        let newPrompts = prompts;
        newPrompts.push(customPrompt);
        setCustomPrompt("");
        setPrompts(newPrompts);
    };

    return (
        <>
            <h1 className={styles.title}>Admin <span className={styles.span}>DASHBOARD</span></h1>
            <section className={styles.container}>
                <h2 className={styles.subtitle_top}>Add Prompts</h2>
                <p>Change/Delete options coming soon.</p>
                <div>
                    <ul className={styles.promptSpace}>
                        {prompts?.map((text, index) => (
                            <li key={index}>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={addCustomPrompt}>
                        <input
                            className={styles.input}
                            id="customPrompt"
                            type="text"
                            placeholder="Enter new prompt here"
                            onChange={handleCustomPrompt}
                            value={customPrompt}
                            required
                        />
                        <button className={cn(styles.button, styles.prompt)} disabled={!customPrompt}>
                            Add Prompt
                        </button>
                    </form>
                </div>

                <h2 className={styles.subtitle}>Pending Stories</h2>
                {pendingStories?.map(({ id, name, email, prompt, story }) => (
                    <div key={id} className={styles.story}>
                        <p className={styles.text}>
                            <i>Name</i> : {name}
                        </p>
                        <p className={styles.text}>
                            <i>Email</i> : {email}
                        </p>
                        <p className={styles.text}>
                            <i>Prompt</i> : {prompt}
                        </p>
                        <p className={styles.text}>
                            <i>Story</i> : {story.text}
                        </p>
                        <button className={cn(styles.button, styles.approve)} onClick={() => approveStory(id)}>
                            Approve
                        </button>
                        <button className={cn(styles.button, styles.delete)} onClick={() => deleteStory(id)}>
                            Deny
                        </button>
                        <br></br>
                    </div>
                ))}

                <h2 className={styles.subtitle}>Denied Stories</h2>
                {deletedStories?.map(({ id, name, email, prompt, story }) => (
                    <div key={id} className={styles.story}>
                        <p className={styles.text}>
                            <i>Name</i> : {name}
                        </p>
                        <p className={styles.text}>
                            <i>Email</i> : {email}
                        </p>
                        <p className={styles.text}>
                            <i>Prompt</i> : {prompt}
                        </p>
                        <p className={styles.text}>
                            <i>Story</i> : {story.text}
                        </p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default AdminConsole;
