import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../consts/contractAddress.js"
import { Web3Button } from "@thirdweb-dev/react";

export default function todoList() {
    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: Todos,
        isLoading: isLoadingTodos
    } = useContractRead(
        contract,
        "getTodos"
    );
    console.log(Todos);
    if (!isLoadingTodos) {
        Todos.map((ele) => {
            console.log(ele);

        })
    }

    return (
        <div className={styles.todoListContainer}>
            {!isLoadingTodos ? (
                Todos.map((ele, index) => {
                    return (
                        <div key={index} className={styles.contactCardContainer}>
                            <div className={styles.contactCardInfo}>
                                <h2>{ele}</h2>
                            </div>
                            <Web3Button
                                className={styles.xbutton}
                                contractAddress={CONTRACT_ADDRESS}
                                action={(contract) => contract.call(
                                    "deleteTodo",
                                    [
                                        index
                                    ]
                                )}
                                onSuccess={() => {
                                    console.log("success")
                                }}
                            >Done</Web3Button>
                        </div>
                    )
                })
            ) : (
                <div>Still loading</div>
            )

            }
        </div>
    )

}