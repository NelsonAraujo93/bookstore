import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/catogoriesSlice';
import styles from '../styles/Categories.module.css';

function Categories() {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.h2}>Welcome to our main page!</h2>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      <p className={styles.p}>
        {status}
      </p>
    </div>
  );
}

export default Categories;
