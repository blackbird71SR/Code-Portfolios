import { useState, useEffect } from "react";

const usePage = (type) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const dbprojects = [];
  const dbskills = [];
  let url;
  if (type === "projects") {
    url = process.env.REACT_APP_PROJECT_URL;
  } else {
    url = process.env.REACT_APP_SKILLS_URL;
  }
  const fetchData = async () => {
    setIsLoading(true);

    const response = await fetch(url);

    const data = await response.json();
    if (data == null) {
      throw new Error("Sorry for your inconvenience");
    }
    setIsLoading(false);
    if (type === "projects") {
      for (const key in data) {
        const project = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          image: data[key].image,
          backend: data[key].technology.Backend,
          frontend: data[key].technology.Frontend,
          github: data[key].github,
        };

        dbprojects.push(project);
      }
      setProjects(dbprojects);
    } else {
      for (const key in data) {
        const skill = {
          id: key,
          name: data[key].name,
          percent: data[key].level,
        };

        dbskills.push(skill);
      }
      setSkills(dbskills);
    }
  };

  useEffect(() => {
    fetchData().catch((err) => {
      console.log(err.message);
    });
  }, []);

  return { projects, skills, isLoading };
};

export default usePage;
