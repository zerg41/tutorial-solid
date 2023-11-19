import type { IBook } from './types';

interface IResultItem {
  title: string;
  author_name: string[];
}

export async function searchBooks(query: string): Promise<IBook[]> {
  if (query.trim() === '') return [];

  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURI(query)}`);
  const results = await response.json();
  const documents = results.docs as IResultItem[];

  console.log(documents);

  return documents.slice(0, 10).map(({ title, author_name }) => ({
    title,
    author: author_name?.join(', '),
  }));
}
