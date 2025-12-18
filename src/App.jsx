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

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

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
        onAdd={handleAddProject}
        onCancelNewProject={handleCancelCreateNewProject}
      ></NewProject>
    );
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar
        projects={projectsState.projects}
        onCreateNewProject={handleStartAddProject}
      ></ProjectsSideBar>

      {content}
    </main>
  );
}

export default App;
