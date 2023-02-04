import React from "react";
import Error from "../Helper/Error";
import styles from "./../../css/FeedModal.module.css";
import Loading from "../Helper/Loading";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "./../../api";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
