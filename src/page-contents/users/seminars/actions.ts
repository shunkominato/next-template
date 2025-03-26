'use server';

export async function searchSeminars(prevState: { title: string }[], formData: FormData) {
  console.log(prevState);
  console.log(formData.getAll('categories[]'));
  await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  return [{ title: 'aaaaaaaa' }, { title: 'ccc' }];
}
