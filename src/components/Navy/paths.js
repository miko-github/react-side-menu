// import Home from './../Pages/Home';
// import Settings from './../Pages/Settings';
// import NotFound from './../Pages/NotFound';

const Items = [
	{
		path: '/',
		// comp: { Home },
		comp: './../Pages/Home.js',
		name: 'Home',
		text: 'Home',
		title: 'Home',
		icon: 'home',
	},
	{
		path: '/settings',
		// comp: { Settings },
		comp: './../Pages/Settings.js',
		name: 'Settings',
		text: 'Settings',
		title: 'Settings',
		icon: 'gear',
	},
	{
		path: '',
		// comp: { NotFound },
		comp: './../Pages/NotFound.js',
		name: 'NotFound',
		text: 'NotFound',
		title: 'NotFound',
		icon: 'NotFound',
		nulled: true,
	},
];

export default Items;
