export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  cover_landscape: string;
  cover: string;
  body: string;
  snippets: string;
  duration: number;
  created_at: string;
  page: string | number | null;
  count: string;
  author: string;
  // Add other relevant properties of Article
}

// Change the function signature to use the Article type
export default function getRandom(arr: Article[], n: number): Article[] {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
