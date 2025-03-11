import { Category } from "@/types/category";
import axios from "axios";

const getBlogsWithCategory = async (slug: string) => {
  const { data } = await axios.get<Category[]>(
    `https://mediateoatmeal-us.backendless.app/api/data/category?where=%60slug%60%20%3D%20'${slug}'&loadRelations=blogs`
  );
  return data[0];
};

export default getBlogsWithCategory;
