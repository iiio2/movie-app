import { useState } from 'react';

const Like = () => {
  const unLikeUrl =
    'https://www.flaticon.com/svg/vstatic/svg/535/535285.svg?token=exp=1611834333~hmac=bd274843afaa321419e24b459b0488f1';

  const likeUrl =
    'https://www.flaticon.com/svg/vstatic/svg/535/535234.svg?token=exp=1611834368~hmac=9a35e625063c2ad1597c475b9bc0456e';

  const [like, setLike] = useState(unLikeUrl);

  return (
    <img
      onClick={() => setLike((prevState) => !prevState)}
      className='img-fluid'
      style={{ width: 20, height: 20 }}
      src={like ? unLikeUrl : likeUrl}
      alt=''
    />
  );
};

export default Like;
