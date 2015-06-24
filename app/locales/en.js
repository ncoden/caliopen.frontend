import Locale from 'ember-intl/models/locale';
export default Locale.extend({
  locale: 'en',
  'header': {
    'menu': {
      'messages': 'Messages',
      'contacts': 'Contacts',
      'compose': 'Compose Message',
      'action_default': 'Action',
      'action_dropdown': 'Other Actions',
      'create_user': 'New Contact',
      'account': 'Account',
      'settings': 'Settings',
      'signin': 'Log In',
      'signout': 'Log Out'
    }
  },

  'application': {
    'footer': {
      'moto': 'CaliOpen, Be Good'
    }
  },

  'messages': {
    'index': {
      'title': 'Messages'
    },
    'show': {
      'back': 'Back'
    },
    'compose': {
      'title': 'Compose Message'
    }
  },

  'contacts': {
    'tags': {
        'all': 'All contacts',
        'none': 'No custom tags'
    },
    'index': {
      'title': 'Contacts'
    },
    'show': {
      'back': 'Back'
    },
    'new': {
      'title': 'Create Contact'
    }
  },

  'settings': {
    'account': {
      'title': 'About Me',
      'menu': {
        'profile': 'Profile',
        'privacy': 'Privacy',
        'security': 'Security'
      },
      'profile': {
        'default': 'This is the user profile for {username}'
      },
      'privacy': {
        'default': 'This is the privacy settings for {username}'
      },
      'security': {
        'default': 'This is the security settings for {username}'
      }
    },
    'app': {
      'title': 'Application Settings',
      'menu': {
        'none': 'No settings panel for now'
      }
    }
  },

  'login': {
    'form': {
      'errorlabel': 'Error',
      'title': 'Sign In',
      'username': 'Username',
      'password': 'Password',
      'submit': 'Go'
    }
  }
});
