import React from 'react';

export default function FunnelChart() {
  
  return (
    <div className='pureFunnelChart'>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>CULZEAN</div>
        <div className='pureFunnelChart_bar'>
          <span className='active' style={{ width: 230 }}>101</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>BUZZARD</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 69 }}>69</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>FRANKLIN</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 64 }}>64</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>CLAIR-RIDGE [PART OF CLAIR]</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 62 }}>62</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>SCHIEHALLION</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 55 }}>55</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>ELGIN</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 52 }}>52</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>TOLMOUNT</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 37 }}>37</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>RHUM</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 36 }}>36</span>
        </div>
      </div>
      <div className='pureFunnelChart_content'>
        <div className='pureFunnelChart_title'>CYGNUS</div>
        <div className='pureFunnelChart_bar'>
          <span style={{ width: 35 }}>35</span>
        </div>
      </div>
    </div>

  );
}
