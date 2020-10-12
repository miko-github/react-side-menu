import Home from '../Pages/Home';
import Users from '../Pages/Users';
import Settings from '../Pages/Settings';
import NotFound from '../Pages/NotFound';

const Items = [
	{
		path: '/',
		comp: Home,
		// comp: './../Pages/Home.js',
		name: 'Home',
		text: 'Home',
		title: 'Home',
		icon: 'home',
	},
	{
		path: '/users',
		comp: Users,
		// comp: './../Pages/Settings.js',
		name: 'Users',
		text: 'Users',
		title: 'Users',
		icon: 'account',
	},
	{
		path: '/settings',
		comp: Settings,
		// comp: './../Pages/Settings.js',
		name: 'Settings',
		text: 'Settings',
		title: 'Settings',
		icon: 'cog',
	},
	{
		path: '',
		comp: NotFound,
		// comp: './../Pages/NotFound.js',
		name: 'NotFound',
		text: 'NotFound',
		title: 'NotFound',
		icon: 'home',
		nulled: true,
	},
];

export default Items;
