import { FC, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import styles from './likeButton.module.scss';
import LocalStorage from '@/utils/localStorage';

type LikeButtonProps = {
  bookId: string;
};

const LikeButton: FC<LikeButtonProps> = ({ bookId }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    LocalStorage.setItem(`liked_${bookId}`, newLikedState);
  };

  useEffect(() => {
    const storedLiked = LocalStorage.getItem<boolean>(`liked_${bookId}`);
    if (storedLiked !== null) {
      setIsLiked(storedLiked);
    }
  }, [bookId]);

  return (
    <button className={`${styles.bookLoveButton} ${isLiked ? styles.liked : ''}`} onClick={handleLikeClick} >
      <Icon icon="iconamoon:heart-duotone" fontSize={24} />
    </button>
  )
};

export default LikeButton;
