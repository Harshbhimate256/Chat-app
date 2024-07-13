import React from "react";

const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className="flex gap-5">
      <div className="form-control">
        <label className={`label cursor-pointer ${selectedGender === 'male' ? "selected" : ''}`}>
          <span className="label-text mr-2">Male </span>
          <input type="checkbox" className="checkbox" checked={selectedGender === 'male'}
          onChange={()=> onCheckBoxChange('male')} />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer ${selectedGender === 'female' ? "selected" : ''}`}>
          <span className="label-text mr-2">Female </span>
          <input type="checkbox" className="checkbox" checked={selectedGender==='female'}
          onChange={()=> onCheckBoxChange('female')}/>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;


// const GenderCheckbox = () => {
//   return (
//     <div className="flex gap-5">
//       <div className="form-control">
//         <label className="label cursor-pointer">
//           <span className="label-text mr-2">Male </span>
//           <input type="checkbox" defaultChecked className="checkbox" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label cursor-pointer">
//           <span className="label-text mr-2">Female </span>
//           <input type="checkbox" defaultChecked className="checkbox" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
