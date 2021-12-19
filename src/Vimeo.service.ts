export const VimeoService = {
  /**
   *
   * @param id Vimeo video id
   * @returns Video detail
   */
  GetDetail: async (id: number | string): Promise<any> => {
    const result = await fetch(
      `https://player.vimeo.com/video/${id}/config`,
    ).then((res) => res.json());
    return result;
  },
};
