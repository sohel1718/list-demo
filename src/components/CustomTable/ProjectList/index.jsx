import { ReactComponent as FilterIcon } from '../../../assets/images/filter.svg';
import ListItem from './ListItem';

const ProjectList = () => {
  return (
    <div className='project-list'>
      <div className='project-list_filter'>
        <div className='project-list_filter_btn'>
          <FilterIcon />
          <span>Filter</span>
        </div>
      </div>
      <div className="project-list_filter_wrapper" >
        <ListItem />
        <ListItem />
        <ListItem /><ListItem /><ListItem />
      </div>
    </div>
  );
};

export default ProjectList;
