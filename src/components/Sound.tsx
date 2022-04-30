import { FC, useCallback } from 'react';
import { IoVolumeHighOutline } from 'react-icons/io5';
import { AccessibleButton } from './AccessibleButton';
import classnames from 'classnames';

interface SoundProps {
  url: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Sound: FC<SoundProps> = ({ url, className, size = 'xs' }) => {
  const componentClassName = classnames(className);
  const iconClassName = classnames('text-gray-100 hover:text-lime-300', {
    'w-5 h-5': size === 'xs',
    'w-7 h-7': size === 'sm',
    'w-9 h-9': size === 'md',
    'w-12 h-12': size === 'lg',
  });

  // play sound using `Audio` Web API
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
  const playSound = useCallback(() => {
    new Audio(url).play();
  }, [url]);

  return (
    <AccessibleButton>
      <div className={componentClassName} onClick={() => playSound()}>
        <IoVolumeHighOutline className={iconClassName} />
      </div>
    </AccessibleButton>
  );
};
