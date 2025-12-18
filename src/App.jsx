import { useState } from 'react';
import NewProject from './components/NewProject';
import ProjectsSideBar from './components/ProjectsSideBar';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  // null is sign for adding new project, undefined is for no project selected and not adding any projects
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleCancelCreateNewProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function onCreateProject(title, description, dueDate) {
    console.log({ title, description, dueDate });
    if (!localStorage.getItem('projects')) {
      const projects = [];
      const project = {
        id: 1,
        title,
        description,
        dueDate,
      };
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    } else {
      const projects = JSON.parse(localStorage.getItem('projects'));
      let prevId = projects[projects.length - 1].id;
      const project = {
        id: prevId + 1,
        title,
        description,
        dueDate,
      };
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    }
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: JSON.parse(localStorage.getItem('projects')),
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === undefined)
    content = (
      <NoProjectSelected
        onCreateNewProject={handleStartAddProject}
      ></NoProjectSelected>
    );
  else if (projectsState.selectedProjectId === null)
    content = (
      <NewProject
        onCreateProject={onCreateProject}
        onCancelNewProject={handleCancelCreateNewProject}
      ></NewProject>
    );
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar
        onCreateNewProject={handleStartAddProject}
      ></ProjectsSideBar>

      {content}
    </main>
  );
}

export default App;
