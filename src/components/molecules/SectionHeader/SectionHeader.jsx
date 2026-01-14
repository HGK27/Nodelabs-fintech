import styles from './SectionHeader.module.scss';
import ViewAllButton from '../../atoms/ViewAllButton/ViewAllButton';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

export default function SectionHeader({title}) {
  return (
    <div className={styles.sectionHeader}>
      <SectionTitle title={title} />
      <ViewAllButton />
    </div>
  );
}
