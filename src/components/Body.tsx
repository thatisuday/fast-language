import { FC } from 'react';
import { useFetch } from '../hooks/useFetch';
import useLocalStorage from 'react-use-localstorage';
import { Language } from '../types/enums';
import { LS_KEY_SELECTED_LANGUAGE } from '../types/constants';
import { Translation } from './Translation';
import { RandomWordResponse } from '../types/interfaces';

/**
 * @description Component that manages application body.
 * @returns
 */
export const Body: FC = () => {
  // get selected language from local-storage
  const [selectedLanguage] = useLocalStorage(LS_KEY_SELECTED_LANGUAGE, Language.GERMAN);

  // fetch random word
  const { data, error } = useFetch<RandomWordResponse>(['words/random', selectedLanguage]);

  /*---------------------*/

  // error view
  if (error || !data) {
    return (
      <div className='flex-none flex flex-col justify-center items-center'>
        <p className='text-red-200 text-3xl uppercase font-medium'>Something went wrong!</p>
        <p className='text-gray-200 text-sm uppercase mt-3'>Please refresh the page to try again.</p>
      </div>
    );
  }

  /*---------------------*/

  // data view
  return (
    <div className='flex-auto flex flex-col justify-center items-center'>
      <Translation word={data.word} />
    </div>
  );
};
