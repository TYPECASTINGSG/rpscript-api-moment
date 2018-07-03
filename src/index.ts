/**
 * @module Moment
 */

import moment from 'moment';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';



@RpsModule("moment")
export default class RPSMoment {

  @rpsAction({verbName:'moment'})
  async moment (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<moment.Moment>{
    return moment.apply(this,params);
  }
}
