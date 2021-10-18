import PropTypes from 'prop-types'
import styles from './Feedback.module.css';

export default function Section ({title,children}) {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
        
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}