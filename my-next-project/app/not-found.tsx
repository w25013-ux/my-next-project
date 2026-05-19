import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ぺージが見つかりませんでした</dt>
                <dd className={styles.text}>
                    あなたがアクセスしようとしたページは、存在しません。
                    <br/>
                    URLを再度確認ください。
                    </dd>
            </dl>
        </div>
    );
}