import { Result } from 'models/models';
import { baseApi } from './constants';

export async function getCharacters(searchInput: string): Promise<Result[]> {
  const res = await fetch(`${baseApi}?name=${searchInput}`);
  const data = await res.json();
  return data.results;
}
