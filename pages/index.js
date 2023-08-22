import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import TodoList from "../components/getTodos";
import AddTodos from "../components/addTodos";
import Image from "next/image";

export default function Home() {
  const address = useAddress()
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.gradientText0}>
              Todo list
            </span>
          </h1>
          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
            <AddTodos />
          </div>
        </div>
        {address && (
          <TodoList></TodoList>
        )
        }
      </div>
    </main>
  );
}
