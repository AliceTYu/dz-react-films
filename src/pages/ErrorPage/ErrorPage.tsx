import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import TextBlock from '../../components/TextBlock/TextBlock';
import styles from './ErrorPage.module.css';
import { ErrorPageProps } from './ErrorPage.props';

function ErrorPage({}:ErrorPageProps) {
  return (
    <>
      <div className={styles.errorBlock}>
        <Heading>Упс... Ничего не найдено</Heading>
        <TextBlock>Попробуйте изменить запрос или ввести более точное название фильма.</TextBlock>
      </div>

    </>
  )
}

export default ErrorPage;