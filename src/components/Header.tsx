import classnames from 'classnames';
import { FC } from 'react';
import { MdTranslate } from 'react-icons/md';
import { VscGithub } from 'react-icons/vsc';
import useLocalStorage from 'react-use-localstorage';
import { LS_KEY_SELECTED_LANGUAGE } from '../types/constants';
import { Language } from '../types/enums';

interface HeaderProps {
  className?: string;
}

/**
 * @description Component that manages application header.
 * @returns
 */
export const Header: FC<HeaderProps> = ({ className }) => {
  // get selected language from local-storage
  const [selectedLanguage] = useLocalStorage(LS_KEY_SELECTED_LANGUAGE, Language.GERMAN);

  const componentClassName = classnames('h-16 grid grid-cols-3 px-8 bg-gray-700 bg-opacity-10 shadow-md', className);

  return (
    <div className={componentClassName}>
      {/* left section */}
      <div className='col-span-1 flex items-center cursor-not-allowed'>
        <p className='text-xs font-medium uppercase flex-none text-gray-300'>Selected language</p>
        <img
          src={`/flags/${selectedLanguage}.svg`}
          alt='Language flag'
          className='w-5 ml-3 flex-none'
          title={selectedLanguage}
        />
      </div>

      {/* middle section */}
      <div className='col-span-1 flex justify-center items-center'>
        <p className='text-2xl font-black uppercase text-center header-text-animation transition-all duration-300 linear-wipe'>
          Fast Language
        </p>
      </div>

      {/* right section */}
      <div className='col-span-1 flex justify-end items-center'>
        <a href='https://github.com/thatisuday/fast-language' target='_blank' rel='noreferrer'>
          <div className='flex items-center mr-8'>
            <VscGithub className='text-xl mr-2 text-gray-300' />
            <p className='text-xs font-medium uppercase flex-none text-gray-300 hover:text-lime-300'>Github</p>
          </div>
        </a>

        <a href='https://github.com/thatisuday/fast-language-translations' target='_blank' rel='noreferrer'>
          <div className='flex items-center'>
            <MdTranslate className='text-xl mr-2 text-gray-300' />
            <p className='text-xs font-medium uppercase flex-none text-gray-300 hover:text-lime-300'>
              Add a translation
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
