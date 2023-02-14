import { useQuery } from "@tanstack/react-query";
import type { ICourse, ISemester } from "yamun";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:4000"
  : "https://yamun-api.fly.dev"; // TODO change to prod url if it is different than this

export const useCourses = ({ year, term, level }: ISemester) =>
  useQuery(["courses", year, term, level], async () => {
    const response = await fetch(
      `${API_BASE}/courses/${year}/${term}/${level}`
    );
    return (await response.json()) as ICourse[];
  });
