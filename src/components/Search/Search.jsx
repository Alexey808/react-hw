import Button from '../../shared/components/Button/Button';
import Header from '../../shared/components/Header/Header';
import Hint from '../../shared/components/Hint/Hint';


function Search() {
  const hint = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
  return (
    <>
      <Header title={'Поиск'}/>
      <Hint text={hint}/>
      <Button label={'Искать'}/>
    </>
  )
}

export default Search;