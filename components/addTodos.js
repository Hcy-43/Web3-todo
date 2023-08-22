import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../consts/contractAddress.js"

export default function AddTodos() {

    const [addTodo, setAddTodo] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    function resetForm() {
        setName("");
    }
    return (
        <div>
            {!addTodo ? (
                <button
                    className={styles.addTodo}
                    onClick={() => setAddTodo(true)}
                >Add Todo</button>
            ) : (
                <div className={styles.addContactContainer}>
                    <div className={styles.addContactCard}>
                        <div>
                            <h3>Add Todo:</h3>
                            <button
                                className={styles.closeButton}
                                onClick={() => setAddTodo(false)}
                            >Close</button>
                        </div>

                        <div className={styles.addContactForm}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <Web3Button
                            contractAddress={CONTRACT_ADDRESS}
                            action={(contract) => contract.call(
                                "addTodos",
                                [
                                    name
                                ]
                            )}
                            onSuccess={() => {
                                resetForm();
                                setAddTodo(false);
                            }}
                        >Add Todo</Web3Button>
                    </div>


                </div>
            )}
        </div>
    )
}