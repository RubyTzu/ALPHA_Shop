//import
import { ReactComponent as RightArrowIcon } from 'icons/right-arrow.svg'
import { ReactComponent as LeftArrowIcon } from 'icons/left-arrow.svg'


//export
export default function ProgressControl({  onChangePage }) {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {/* TODO:目前只有 data-phase="address" 會顯示*/}
      <section className="button-group col col-12" data-phase="address">
        <button
          value="next"
          className="next cursor-point"
          onClick={(e) => {
            onChangePage(e.target.value);
          }}
        >
          下一步
          <RightArrowIcon />
        </button>
      </section>

      {/* TODO:要控制 data-phase="shipping" 來顯示*/}
      <section className="button-group col col-12" data-phase="shipping">
        <button
          value="prev"
          className="prev cursor-point"
          onClick={(e) => {
            onChangePage(e.target.value);
          }}
        >
          <LeftArrowIcon />
          上一步
        </button>
        <button
          value="next"
          className="next cursor-point"
          onClick={(e) => {
            onChangePage(e.target.value);
          }}
        >
          下一步
          <RightArrowIcon />
        </button>
      </section>

      {/* TODO:要控制 data-phase="credit-card" 來顯示*/}
      <section className="button-group col col-12" data-phase="credit-card">
        <button
          value="prev"
          className="prev cursor-point"
          onClick={(e) => {
            onChangePage(e.target.value);
          }}
        >
          <LeftArrowIcon />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}