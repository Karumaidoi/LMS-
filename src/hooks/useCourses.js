import { useQuery } from "react-query";
import { getCourses } from "../services/apiCourses";

export function useCourses() {
  const {
    data: courses,
    isLoading: fetchingCourses,
    error,
  } = useQuery({
    queryFn: getCourses,
    queryKey: ["courses"],
  });

  return { courses, fetchingCourses, error };
}
