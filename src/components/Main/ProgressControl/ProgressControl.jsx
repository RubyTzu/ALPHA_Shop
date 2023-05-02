//import
import { ReactComponent as RightArrowIcon } from 'icons/right-arrow.svg'

//export
export default function ProgressControl() {
    return (
         <section className="progress-control-container col col-lg-6 col-sm-12">
          <section className="button-group col col-12" data-phase="address">
            <button className="next cursor-point">
              下一步   
              <RightArrowIcon/>
              
            </button>
          </section>
          {/* <section className="button-group col col-12" data-phase="shipping">
            <button className="prev">
              <svg className="cursor-point">
                <use xlinkHref="#svg-icon-left-arrow"></use>
              </svg>
              上一步
            </button>
            <button className="next">
              下一步
              <svg className="cursor-point">
                <use xlinkHref="#svg-icon-right-arrow"></use>
              </svg>
            </button>
          </section> */}
          {/* <section className="button-group col col-12" data-phase="credit-card">
            <button className="prev">
              <svg className="cursor-point">
                <use xlinkHref="#svg-icon-left-arrow"></use>
              </svg>
              上一步
            </button>
            <button className="next">
              確認下單
            </button>
          </section> */}
        </section>
    )
}