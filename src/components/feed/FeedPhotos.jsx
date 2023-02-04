import React from "react";

import { PHOTOS_GET } from "../../api";
import styles from "../../css/FeedPhotos.module.css";
import useFetch from "../../hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "./../Helper/Error";
import Loading from "./../Helper/Loading";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
    async function fetchPhotos() {
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;