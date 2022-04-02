import { Fragment } from "react";
import Section from "../components/Section";
import { getAllPages, getPageById } from "../helpers/api-service";

export default function Home(props) {
  const { sections } = props;
  return (
    <Fragment>
      {sections.map((section, index) => {
        return (
          <Section
            type={section.type}
            key={index}
            text={section.text}
            author={section.author}
            image={section.img}
          />
        );
      })}
    </Fragment>
  );
}

export async function getStaticProps() {
  const pages = await getAllPages();
  let id = null;

  pages.map((page) => {
    if (page.url === "/") id = page.id;
  });
  const sections = await getPageById(id);

  return {
    props: sections,
    revalidate: 600,
  };
}
