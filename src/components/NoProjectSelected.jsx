import noProjectsImg from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected({ onCreateNewProject }) {
  return (
    <>
      <div className='mt-24 text-center w-2/3'>
        <img
          className='w-16 h-16 object-contain mx-auto'
          src={noProjectsImg}
          alt='a pen writing on paper on cardboard'
        />
        <h2 className='text-xl font-bold text-stone-500 my-4'>
          No Project Selected
        </h2>
        <p className='text-stone-400 mb-4'>
          Select a project or get started with a new one
        </p>
        <p>
          <Button onClick={onCreateNewProject}>Create new project</Button>
        </p>
      </div>
    </>
  );
}
