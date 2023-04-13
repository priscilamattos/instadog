import React from "react";

import { PHOTOS_GET } from "../../api";
import styles from "../../css/FeedPhotos.module.css";
import useFetch from "../../hooks/useFetch";
import Error from "./../Helper/Error";
import Loading from "./../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

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
            setInfinite={setInfinite}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
