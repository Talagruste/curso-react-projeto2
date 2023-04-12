import { useParams, useLocation, useHistory } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};
