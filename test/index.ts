import * as c from 'chai';
import m from 'mocha';

import RPSMoment from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Moment', () => {

  m.it('should display date correctly', async function () {
    let m = new RPSMoment;

    let now = await m.moment(new RpsContext,{});

    console.log(now);

    let past = await m.moment(new RpsContext,{},"2018-07-03T12:26:27.020");
    
    console.log(past);

    let back = await m.moment(new RpsContext,{},"12-25-1995", "MM-DD-YYYY");
    
    console.log(back);

  }).timeout(0);

})
