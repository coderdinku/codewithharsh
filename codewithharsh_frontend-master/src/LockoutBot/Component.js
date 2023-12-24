import style from "./lockoutstyle.module.css"
export default function Componen({ obj }) {
  //   const urlstring = "https://codeforces.com/problemset/problem/" + obj.contestId + "/" + obj.index;
  return (
   
        <tbody>
          <tr className={style.tablebody}>
            <td >{obj.rating}</td>
            <td>
              <a href={obj.url} className={style.url} target="_blank">{obj.name}</a>
            </td>
            <td>{obj.points}</td>
          </tr>
        </tbody>
   
  );
}
