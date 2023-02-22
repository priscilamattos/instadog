import React from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../UserContext";
import Image from "../Helper/Image";
import styles from "./../../css/PhotoContent.module.css";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";

// import views from ".assets/visualizacao-black.svg";

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
            )}
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title"></h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} years</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
