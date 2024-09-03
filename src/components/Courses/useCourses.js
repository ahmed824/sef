import { useQuery } from "react-query";
import { getCourses } from "../../services/apiCourses";


export default function useCourses() {
    const {
        isLoading,
        data: { data: courses = [], count } = {},
        error,
    } = useQuery({
        queryKey: ["courses"],
        queryFn: () => getCourses(),
    })

    return { isLoading, error, courses, count };
}
