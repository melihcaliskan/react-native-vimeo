import { IVimeoResponse } from './interfaces/IVimeoResponse.interface';

export const VimeoService = {
  /**
   *
   * @param id Vimeo video id
   * @returns Video detail
   */
  GetDetail: async (
    id: number | string,
  ): Promise<IVimeoResponse.IResponseBody> => {
    const result = await fetch(
      `https://player.vimeo.com/video/${id}/config`,
    ).then((res) => res.json());

    return result;
  },
};
