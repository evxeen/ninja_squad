import React, { FC } from "react";
import styles from "./LoaderPage.module.scss";

export const LoaderPage: FC = () => {
  return (
    <div className={styles.loaderPage}>
      <div className={styles["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>“Joke of the day”</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        deleniti deserunt error exercitationem hic molestiae quasi quidem
        quisquam reiciendis sunt.
      </p>
    </div>
  );
};
