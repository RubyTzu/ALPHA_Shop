//import
import FormInput from "./FormInput";

//export
export default function TelEmailInput() {
  return (
    <div className="col col-12">
      <div className="input-group input-w-lg-3 input-w-sm-full">
        <FormInput inputLabel={"電話"}>
          <input type="tel" placeholder="請輸入行動電話" />
        </FormInput>
      </div>
      <div className="input-group input-w-lg-3 input-w-sm-full">
        <FormInput inputLabel={"Email"}>
          <input type="email" placeholder="請輸入電子郵件" />
        </FormInput>
      </div>
    </div>
  );
}
