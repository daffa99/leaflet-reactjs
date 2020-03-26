import React from "react";

/**
 * Description Content as a Functional Component
 */
const DescriptionContent = props => {
  return (
    <div className={props.className} onAnimationEnd={props.handleEndAnimation}>
      <div className="place-pict">
        <img className="img-fluid" src={props.imageUrl} alt={props.placeName} />
      </div>
      <div className="place-title">
        <h6 className="py-2 px-4">{props.placeName}</h6>
      </div>
      <div className="place-description">
        <p className="short-description pt-1 px-4">{props.shortDescription}</p>
        <p className="long-description px-4">{props.longDescription}</p>
      </div>
      <div className="place-information px-4">
        <span>{props.address}</span>
        <br />
        <span>{props.website}</span>
      </div>
    </div>
  );
};
// class DescriptionContent extends Component {
//   render() {
//     return (
//       <div
//         className={this.props.className}
//         onAnimationEnd={this.props.handleEndAnimation}
//       >
//         <div className="place-pict">
//           <img
//             className="img-fluid"
//             src={this.props.imageUrl}
//             alt={this.props.placeName}
//           />
//         </div>
//         <div className="place-title">
//           <h6 className="py-2 px-4">{this.props.placeName}</h6>
//         </div>
//         <div className="place-description">
//           <p className="short-description pt-1 px-4">
//             {this.props.shortDescription}
//           </p>
//           <p className="long-description px-4">{this.props.longDescription}</p>
//         </div>
//         <div className="place-information px-4">
//           <span>{this.props.address}</span>
//           <br />
//           <span>{this.props.website}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default DescriptionContent;
