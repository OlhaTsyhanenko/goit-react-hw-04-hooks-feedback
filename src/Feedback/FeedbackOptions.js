import styles from './Feedback.module.css';
import PropTypes from 'prop-types'
import shortid from 'shortid';

export default function FeedbackOptions({options,onLeaveFeedback}) {
    return (
        <div>
            {options.map(option => (
                <button className={styles.btn}
                    key={shortid.generate()}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >{option}
                </button>
            ))}
           
        </div>        
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}
