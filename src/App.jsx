import { useState } from 'react';
import NewProject from './components/NewProject';
import ProjectsSideBar from './components/ProjectsSideBar';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

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

  function handleCancelAddProject() {
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

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: projectId };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => projectsState.selectedProjectId === project.id
  );

  let content = <SelectedProject project={selectedProject}></SelectedProject>;

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
        onCancel={handleCancelAddProject}
      ></NewProject>
    );
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar
        projects={projectsState.projects}
        onCreateNewProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      ></ProjectsSideBar>

      {content}
    </main>
  );
}

export default App;
