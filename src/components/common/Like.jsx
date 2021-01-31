import { useState } from 'react';

const Like = () => {
  const unLikeUrl = 'fa fa-heart-o';

  const likeUrl = 'fa fa-heart';

  const [like, setLike] = useState(unLikeUrl);

  return (
    <i
      onClick={() => setLike((prevState) => !prevState)}
      className={like ? unLikeUrl : likeUrl}
      //style={{ width: 20, height: 20 }}
      // src={like ? unLikeUrl : likeUrl}
      // alt=''
    />
  );
};

export default Like;
