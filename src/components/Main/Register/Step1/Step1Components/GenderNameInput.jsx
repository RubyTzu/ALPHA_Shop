//import
import { gender } from "./Step1Data";
import FormInput from "./FormInput";

//export
export default function GenderNameInput() {
  let genderTypes = gender;

  return (
    <div className="col col-12">
      <div className="input-group input-w-lg-2 input-w-sm-s1">
        <FormInput inputLabel={"稱謂"}>
          <div className="select-container">
            <select>
              {genderTypes.map((type) => (
                <option value={type.value}>{type.text}</option>
              ))}
            </select>
          </div>
        </FormInput>
      </div>
      <div className="input-group input-w-lg-4 input-w-sm-s2">
        <FormInput inputLabel={"姓名"}>
          <input type="text" placeholder="請輸入姓名" />
        </FormInput>
      </div>
    </div>
  );
}
