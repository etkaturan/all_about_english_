import Section from "@/components/Section";
import LessonsClient from "@/components/LessonsClient";
import { getLessons } from "@/lib/data/lessons";

export default async function Lessons() {
  const lessons = await getLessons();

  return (
    <Section id="lessons">
      <LessonsClient lessons={lessons} />
    </Section>
  );
}