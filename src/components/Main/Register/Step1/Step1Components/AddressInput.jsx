//import
import { cities } from "./Step1Data";
import FormInput from "./FormInput";

//export
export default function AddressInput() {
  return (
    <div className="col col-12">
      <div className="input-group input-w-lg-2 input-w-sm-full">
        <FormInput inputLabel={"縣市"}>
          <div className="select-container">
            <select required>
              {cities.map((city) => (
                <option value={city.value} key={city.value}>
                  {city.text}
                </option>
              ))}
            </select>
          </div>
        </FormInput>
      </div>
      <div className="input-group input-w-lg-4 input-w-sm-full">
        <FormInput inputLabel={"縣地址"}>
          <input type="text" placeholder="請輸入地址" />
        </FormInput>
      </div>
    </div>
  );
}
