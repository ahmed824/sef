import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './components/Courses/courses';
import CourseDetails from './components/CourseDetails/courseDetails';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courseDetails/:courseId" element={<CourseDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
