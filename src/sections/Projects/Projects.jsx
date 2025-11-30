import styles from './ProjectsStyles.module.css';
import tickit from '../../assets/tickit.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tickit}
          link="https://play.google.com/store/apps/details?id=com.jamesling.tickit&hl=en_GB"
          h3="TickIt"
          p="Habit Tracking App"
        />
      </div>
    </section>
  );
}

export default Projects;
