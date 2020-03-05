export default {
  items: [
    {
      title: true,
      name: 'Income/Expense',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: '!',
      },
    },
    {
      name: 'Income/Expenses',
      url: '/transactions',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Transactions',
          url: '/transactions',
          icon: 'icon-list',
        },
        {
          name: 'Add',
          url: '/transactions/add',
          icon: 'icon-pencil',
        },
      ],
    },
    {
      name: 'Categories',
      url: '/categories',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Categories',
          url: '/categories',
          icon: 'icon-cursor',
        },
        {
          name: 'Add new',
          url: '/categories/add',
          icon: 'icon-pencil',
        },
      ],
    },
  ],
};
