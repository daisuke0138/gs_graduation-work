import Link from "next/link";
import apiClient from "@/lib/apiClient";
import router from "next/router";
import { useAuth } from "@/context/auth";
import React, { useState } from "react";
import styles from "./style.module.scss";

const Logout = () => {
    const { logout } = useAuth();

    const handleLogout = async (e: any) => {
        e.preventDefault();

        try {
            await apiClient.post("auth/logout");
            logout(); // ログアウト処理を呼び出し
            alert("ログアウトが成功しました！");
            router.push("/login"); // ログインページにリダイレクト
        }
        catch (err) {
            console.log(err);
            alert("ログアウトが失敗しました！");
        }
    }
    return (
        <form className={styles.form} onSubmit={handleLogout}>
            <h3 className={styles.form__title}>ログアウト</h3>
            <button className={styles.form__btn}>ログアウト</button>
        </form>
    );
};


export default Logout;