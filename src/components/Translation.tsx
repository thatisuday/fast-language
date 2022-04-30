import { FC } from 'react';
import { useFetch } from '../hooks/useFetch';
import { env } from '../utils/env';
import { WordTranslationResponse } from '../types/interfaces';
import { Sound } from './Sound';
import { WordType } from '../types/enums';
import { sample, upperFirst } from 'lodash';

interface TranslationProps {
  word: string;
}

/**
 * @description Fetch and display translations of a word.
 */
export const Translation: FC<TranslationProps> = ({ word }) => {
  // fetch translation of the selected word
  const { data, error } = useFetch<WordTranslationResponse>(['translation/german', word]);

  // pick a random translation
  const translation = sample(data?.translations);

  //  pick a random example
  const example = sample(translation?.examples);

  /*---------------------*/

  // error view
  if (error || !data || !translation || !example) {
    return (
      <div className='flex flex-col items-center'>
        <p className='text-red-200 text-3xl uppercase font-medium'>Something went wrong!</p>
        <p className='text-gray-200 text-sm uppercase mt-3'>Please refresh the page to try again.</p>
      </div>
    );
  }

  /*---------------------*/

  // data view
  return (
    <div className='flex flex-col items-center'>
      {/* word */}
      <div className='inline-flex items-center relative'>
        <p className='text-9xl text-white font-bold text-shadow-lg'>{upperFirst(data.word)}</p>
        <Sound url={`${env.server.host}/audio/german/word/${data.id}`} size='md' className='absolute -right-12' />
      </div>

      {/* word info */}
      <div className='flex items-center mt-6'>
        {/* word type */}
        <div className='flex items-center text-sm uppercase mr-5'>
          <p className='text-gray-400'>Type:</p>
          <p className='text-lime-300 font-medium ml-1'>{translation.wordType}</p>
        </div>

        {/* gender info */}
        {translation.wordType === WordType.NOUN && (
          <>
            {/* gender */}
            {translation?.info?.gender && (
              <div className='flex items-center text-sm uppercase mr-5'>
                <p className='text-gray-400'>Gender:</p>
                <p className='text-lime-300 font-medium ml-1'>{translation.info.gender}</p>
              </div>
            )}

            {/* plural */}
            {translation?.info?.plural && (
              <div className='flex items-center text-sm uppercase'>
                <p className='text-gray-400'>Plural:</p>
                <p className='text-lime-300 font-medium ml-1'>{translation.info.plural}</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* meaning */}
      <div className='mt-10 flex flex-col items-center'>
        <p className='text-gray-300 uppercase text-xs'>Means</p>
        <p className='text-white text-7xl font-medium text-shadow-lg'>{upperFirst(translation.word)}</p>
      </div>

      {/* example */}
      <div className='mt-16 flex flex-col items-center'>
        {/* translated sentence */}
        <div className='inline-flex items-center relative'>
          <p className='text-white text-xl font-medium'>{example.translation}</p>

          <Sound
            url={`${env.server.host}/audio/german/example/${example.id}`}
            size='xs'
            className='absolute -right-8'
          />
        </div>

        {/* original sentence */}
        <p className='text-gray-300 text-lg mt-1'>{example.original}</p>

        {/* author */}
        <p className='text-gray-500 text-xs mt-5'>Provided by {example.author}</p>
      </div>
    </div>
  );
};
