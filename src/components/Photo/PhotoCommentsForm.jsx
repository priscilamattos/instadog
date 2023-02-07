import React from "react";

import { COMMENT_POST } from "../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error";
import { ReactComponent as Send } from "./../../assets/enviar.svg";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    console.log(json);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comments"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
