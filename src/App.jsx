import { useState } from 'react';
import NewProject from './components/NewProject';
import ProjectsSideBar from './components/ProjectsSideBar';

function App() {
  const [showNewProject, setShowNewProject] = useState(false);
  function handleCreateNewProject() {
    setShowNewProject(true);
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar
        onCreateNewProject={handleCreateNewProject}
      ></ProjectsSideBar>
      {showNewProject && <NewProject></NewProject>}
    </main>
  );
}

export default App;
