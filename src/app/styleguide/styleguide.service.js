import Components from '../components';

class StyleguideService {
  getComponentTypes() {
    return [
      {
        name: 'Atoms',
      },
      {
        name: 'Molecules',
      },
      {
        name: 'Organisms',
      }
    ]
  }

  getComponents() {
    return [
      {
        name: 'Test 1',
      },
      {
        name: 'Test 2',
      },
      {
        name: 'Test 3',
      },
    ];
  }
}

export default StyleguideService;
