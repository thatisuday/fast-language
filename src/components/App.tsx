import { FC, Suspense } from 'react';
import { Body } from './Body';
import { Header } from './Header';

/**
 * @description Suspense fallback component.
 * @returns
 */
const AppBodyFallback: FC = () => {
  return (
    <div className='w-screen h-screen px-8 flex flex-col justify-center items-center'>
      <img src='/spinners/loading.svg' alt='Loading spinner' className='w-32' />
      <p className='text-gray-500 text-xs uppercase'>Please wait while I am loading a word for you.</p>
    </div>
  );
};

/**
 * @description Application entrypoint component.
 * To understand how `Suspense` works, follow this tutorial guide:
 * https://medium.com/jspoint/introduction-to-react-v18-suspense-and-render-as-you-fetch-approach-1b259551a4c0
 * @returns
 */
export const App: FC = () => {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <Header />

      <Suspense fallback={<AppBodyFallback />}>
        <Body />
      </Suspense>
    </div>
  );
};
