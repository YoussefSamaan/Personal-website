//
//
// export function MovieCard(props: any) {
//
//   const transaltionValue = -1*33*props.numberOfMovies - props.numberOfMovies/3 * 2
//
//   return (
//     <div
//         className={"group relative rounded-[10px] overflow-hidden h-[33vh] w-[22vh] my-[5px]"}
//         style={{
//           "animation": `${props.animationDirection} ${props.animationTime}s linear infinite`,
//           "--translation": `${transaltionValue}vh`,
//         }}
//     >
//       <img
//         className="h-full w-full object-cover"
//         src={props.image}
//         alt={props.name}
//       />
//
//       <div className="h-full w-full absolute top-0 left-0 bg-[rgba(60,60,60,0.764)] flex content-center hidden group-hover:flex">
//         <div
//           className="m-auto text-white">
//           <h1 className="text-center">
//             {props.name}
//           </h1>
//           {/*<p className="text-center">*/}
//           {/*  Finished:*/}
//           {/*</p>*/}
//           {/*<p className="text-center">*/}
//           {/*  {props.finished}*/}
//           {/*</p>*/}
//         </div>
//       </div>
//     </div>
//   );
// }


export function MovieCard(props: any) {
  return (
      <div
          className={`group relative rounded-[10px] overflow-hidden h-[33vh] w-[22vh] my-[5px] ${props.animationDirection}`}
          style={{
            "--animation-time": `${props.animationTime}s`,
            "--movie-cards-count": props.numberOfMovies, // Pass the movie count as a CSS variable
          } as React.CSSProperties}
      >
        <img className="h-full w-full object-cover" src={props.image} alt={props.name} />

        <div className="h-full w-full absolute top-0 left-0 bg-[rgba(60,60,60,0.764)] flex content-center hidden group-hover:flex">
          <div className="m-auto text-white">
            <h1 className="text-center">{props.name}</h1>
          </div>
        </div>
      </div>
  );
}
