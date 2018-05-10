import ApiHelper from "../utils/ApiHelper";

// path
const PATH: string = "samples";

// model
export type Model = {
  id: number,
  title: string,
  description: string
};

// endpoints
export const getAll = (params: {}): Promise<Array<Sample>> => {
  return ApiHelper.get(PATH, params);
};

export const get = (
  id: $PropertyType<Sample, "id">
): Promise<Array<Sample>> => {
  return ApiHelper.get(`${PATH}/${id}`, params);
};

export const store = (sample: Sample): Promise<Sample> => {
  return ApiHelper.post(PATH, sample);
};

export const update = (
  id: $PropertyType<Sample, "id">,
  sample: Sample
): Promise<Sample> => {
  return ApiHelper.put(`${PATH}/${id}`, sample);
};

export const destroy = (
  id: $PropertyType<Sample, "id">,
  sample: Sample
): Promise<void> => {
  return ApiHelper.delete(`${PATH}/${id}`);
};
