import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createUpdateCourse } from "../../services/apiCourses";

export function useUpdateCourse() {
    const queryClient = useQueryClient();

    const { mutate: updateCourse, isLoading: isUpdating } = useMutation({
        mutationFn: createUpdateCourse,
        onSuccess: ({ course }) => {
            toast.success("Course successfully enrolled");
            queryClient.setQueryData(["course"], course);
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateCourse, isUpdating };
}
