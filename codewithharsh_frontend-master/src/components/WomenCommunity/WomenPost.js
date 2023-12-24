import Comment from "../Layout/Comment";
export default function WomenPost({womenpost}) {
  return (
    <>
      <div>
        <ul>
          {womenpost.map((obj, key) => {
            return (
              <Comment key = {key} obj = {obj}/>        
            );
          })}
        </ul>
      </div>
    </>
  );
}
