import axios from 'axios';

const API_KEY = '13148921-0323c4cb1958202307573e40e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetch(query, page) {
  try {
    const {
      data: { hits, totalHits },
    } = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const pictures = hits.map(hit => {
      const { id, webformatURL, largeImageURL } = hit;
      return {
        id,
        small: webformatURL,
        large: largeImageURL,
      };
    });

    const pages = Math.ceil(totalHits / 12);

    const response = {
      pictures,
      pages,
    };

    return response;
  } catch (error) {
    console.error(error);
  }
}
