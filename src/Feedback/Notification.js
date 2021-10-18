import PropTypes from 'prop-types'
import styles from './Feedback.module.css';

export default function FeedbackOptions({message}) {
    return (
        <p className={styles.message}>{message}</p>
    );
}

FeedbackOptions.propTypes = {
    message: PropTypes.string
}