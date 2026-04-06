import '../style/Pagination.css';
import arrowNextImg from '../assets/forward arrow.png';
import arrowPrewImg from '../assets/arrowPrew.png';

export default (p, color, pathPrev, pathNext, arrowPrev = true, arrowNext = true) => {
  const nextImg = `<img src="${arrowNextImg}" alt='Вперед'/>`
  const prevImg = `<img src="${arrowPrewImg}" alt='Назад'/>`
  return `
    <div class='pagination' style='background-color: ${color};'>
      ${arrowPrev ? `<a href='${pathPrev}' class='pagination-link arrowPrev'>${prevImg}</a>` : ''}
      <p>${p}</p>
      ${arrowNext ? `<a href='${pathNext}' class='pagination-link arrowNext'>${nextImg}</a>` : ''}
    </div>
    <div class="table-schedule"></div>
  `
}