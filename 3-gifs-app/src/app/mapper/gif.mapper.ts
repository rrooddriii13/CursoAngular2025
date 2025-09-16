import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from './../interfaces/giphy.interfaces';

export class GifMapper {

    // Convierte un solo objeto GiphyItem en un Gif

    static mapGiphyItemToGif(item: GiphyItem): Gif {
      return {
        id: item.id,
        title: item.title,
        url: item.images.original.url,
      };
    }
    // Convierte un array de GiphyItem en un array de Gif
    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
      return items.map(this.mapGiphyItemToGif);
    }
}
