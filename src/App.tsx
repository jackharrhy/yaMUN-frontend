import { useCourses } from "./api";

export const App = () => {
  const { data: courses } = useCourses({ year: 2022, term: 1, level: 1 });

  if (courses === undefined) {
    return <p>loading...</p>;
  }

  return (
    <>
      {courses.map((course) => (
        <div>
          <p>{course.name}</p>
        </div>
      ))}
    </>
  );
};
