import { ContentfulResponse } from "@/types/contenful.types";
import { appConfig } from "@/utils/config";

const { accesToken, baseURL, environmentId, spaceId } = appConfig;

export const getEntryBySlug = async (
  slug: string,
): Promise<ContentfulResponse> => {
  //karena kita melakukan fetch data, maka dapat melakukan promise karena data tersebut bisa berhasil atau gagal
  const res = await fetch(
    baseURL +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accesToken}&content_type=blog&fields.slug=${slug}`,
    {
      next: { revalidate: 10 }, // memvalidasi setiap 10 detik untuk mengambil data baru
    },
  );

  return res.json();
};
