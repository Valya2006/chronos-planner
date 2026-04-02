import AuthPanel from './components/AuthPanel.js';
import Schedule from './pages/Schedule.js'
import Tracker from './pages/Tracker.js'
import Analytics from './pages/Analytics.js'
import ErrorPage from './pages/Errors/Errors.js';

const routes = [
	{ 'path': '/schedule', 'component': Schedule },
	{ 'path': '/tracker', 'component': Tracker },
	{ 'path': '/analytics', 'component': Analytics },
	{ 'path': '/login', 'component': AuthPanel },
	{ 'path': '/public', 'component': '' },
	
]

const navigate = (pathname) => {
  for (const route of routes) {
    const pattern = route.path.replace(/:[^/]+/g, '([^/]+)') + '/?$'
    const regex = new RegExp('^' + pattern)

    if (regex.test(pathname)) {
      return route.component
    }
  }
  return ErrorPage
}

function updateActiveLink() {
  const currentPage = window.location.pathname;
  const links = document.querySelectorAll('.navigation a');
  
  links.forEach((link) => {
    link.classList.remove('active');
    const { pathname } = new URL(link.href, window.location.origin);
    if (currentPage === pathname) {
      link.classList.add('active');
    }
  });
}

const handleLinkClick = (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  
  const href = link.getAttribute('href');
	console.log('🟢 DOM загружен, текущая страница:', href);
  if (href && (href.startsWith('/') && !href.startsWith('//'))) {
    e.preventDefault();
    window.history.pushState({}, '', href);
    mountRoute();
    updateActiveLink();
  }
};
export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '')
  if (window.location.href.at(-1) === '/') history.replaceState({}, '', href)
  const { pathname } = new URL(href)

  const element = navigate(pathname)
  const app = document.querySelector('#app')
	app.innerHTML = ''
	const el = await element()
  app.appendChild(el)

	updateActiveLink()
}

document.addEventListener('click', handleLinkClick);

window.addEventListener('popstate', () => {
  mountRoute();
  updateActiveLink();
});

document.addEventListener('DOMContentLoaded', () => {
  mountRoute();
});