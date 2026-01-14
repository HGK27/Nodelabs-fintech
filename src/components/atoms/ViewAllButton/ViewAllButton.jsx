import sytles from './ViewAllButton.module.scss';
import ChevronRightIcon from '../../icons/ChevronRightIcon.jsx';


export default function ViewAllButton() {
  return (
    <div className={sytles.ViewAllButton}>
      View All
      <ChevronRightIcon className={sytles.icon} />
    </div>
  )
}
