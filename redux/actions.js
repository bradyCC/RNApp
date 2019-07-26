/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 13:40:47
 * @Description:
 */
import { INCREASE, DECREASE, RESET } from "./actionsTypes";

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const reset = () => ({ type: RESET });

export {
  increase,
  decrease,
  reset
}
