import Star from "./Star";
import {nanoid} from 'nanoid';

function Stars(props){
  if (!(props.count < 1 || props.count > 5)) {
    const stars = [];
    for (let i = 0; i < props.count; i +=1){
      stars.push(
        {
          id: nanoid(),
        }
      );
    }

    return (
      <ul className="Stars">
        {
          stars.map((star) => {
            return <Star key={star.id}/>
            }
          )
        }
      </ul>
    );
  }
  return null;
}

Stars.defaultProps = {
  count: 0,
}

export default Stars;