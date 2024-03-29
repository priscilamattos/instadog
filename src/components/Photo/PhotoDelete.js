import React from "react";

import { PHOTO_DELETE } from "../../api";
import useFetch from "../../hooks/useFetch";
import styles from "./../../css/PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
