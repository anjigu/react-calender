import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import moment from 'moment';

function App() {
 const [date, setDate] = useState(new Date());

 return (
 <div className='app'>
   <h1>My Calendar</h1>
   <div>
   <Calendar onChange={setDate} value={date} selectRange={true}
   formatDay={(locale, date) => moment(date).format("DD")}
   />
   </div>
   {date.length > 0 ? (
   <div className='choose'>
     <span>선택 기간 :</span>{' '}{date[0].toDateString()}
     &nbsp; ~ &nbsp;
     {date[1].toDateString()}
   </div>
        ) : (
   <p>
     <div className='choose'>현재 선택한 날짜 :{' '}{date.toDateString()}</div>
   </p>
        )}
  
    <div className='footer'>made by fejigu</div>
 </div>
  );
}

export default App;