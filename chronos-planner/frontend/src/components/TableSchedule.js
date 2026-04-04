import '../style/Schedul.css';
import forwardArrow from '/src/assets/forward arrow.png'

export default () => {
	return `
	  <div class='pagination'>
		  <p>Расписание</p> 
			 <a href='/tracker' class='pagination-link'>
          <img src=${forwardArrow} alt='Вперед'/>
       </a>
		</div>
	  <div class="table-schedule">
    </div>
	`
}