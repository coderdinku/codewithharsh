import Comment from "../Layout/Comment";
export default function DiscussionPost({discussions}) {

  return (
    <>
      <div>
        <ul>
          {discussions.map((obj, key) => {       
            return (
              <Comment obj = {obj} key = {key}/>
            );
          })}
        </ul>
      </div>
    </>
  );
}
