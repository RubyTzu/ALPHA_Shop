//import
import { ReactComponent as RightArrowIcon } from 'icons/right-arrow.svg'
import { ReactComponent as LeftArrowIcon } from 'icons/left-arrow.svg'


//onPrevStep={onPrevPage} onNextStep={onNextPage}


//export
export default function ProgressControl({ onPrevStep, onNextStep }) {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {/* TODO:目前只有 data-phase="address" 會顯示*/}
      <section className="button-group col col-12" data-phase="address">
        <button className="next cursor-point" onClick={onNextStep}>
          下一步
          <RightArrowIcon />
        </button>
      </section>

      {/* TODO:要控制 data-phase="shipping" 來顯示*/}
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev cursor-point" onClick={onPrevStep}>
          <LeftArrowIcon />
          上一步
        </button>
        <button className="next cursor-point" onClick={onNextStep}>
          下一步
          <RightArrowIcon />
        </button>
      </section>

      {/* TODO:要控制 data-phase="credit-card" 來顯示*/}
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev cursor-point" onClick={onPrevStep}>
          <LeftArrowIcon />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}