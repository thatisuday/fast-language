import { WordType } from './enums';

/**
 * @description Response returned by `/words/random/<language>/` API endpoint.
 */
export interface RandomWordResponse {
  word: string;
}

/**
 * @description Response returned by `/translation/<language>/<word>/` API endpoint.
 */
export interface WordTranslationResponse {
  id: string;
  word: string;
  translations: {
    word: string;
    wordType: WordType;
    info: {
      gender: string | null;
      plural: string | null;
    } | null;
    examples: {
      id: string;
      original: string;
      translation: string;
      author: string;
    }[];
  }[];
}
