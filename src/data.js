export const users = [
  {
    id: 01,
    first_name: 'Daisy',
    last_name: 'Lee',
    city: 'Denver',
    state: 'CO',
    intentions: 'To impress all of the neighbors'
  },
  {
    id: 02,
    first_name: 'Rose',
    last_name: 'ODanald',
    city: 'Tampa',
    state: 'FL',
    intentions: 'To eat fresh vegatables'
  },
  {
    id: 03,
    first_name: 'Charles',
    last_name: 'Tomato',
    city: 'Portland',
    state: 'OR',
    intentions: 'To share with food rescue NGOs'
  }
]

export const seeds = [
  {
    id: 01,
    name: 'Blue Cornflower',
    planting_depth: '2',
    days_to_germinate: '5-10',
    time_to_harvest:'70',
    date_planted:'05/23/2022',
    sun_exposure:'full',
    expected_plant_height:'4ft',
    notes:'Planted them in the under the window',
    user_id: 01
  },
  {
    id: 02,
    name: 'Green Beans',
    planting_depth: '2',
    days_to_germinate: '10-15',
    time_to_harvest:'75',
    date_planted:'05/30/2022',
    sun_exposure:'full',
    expected_plant_height:'1ft',
    notes:'Planted next to tomatoes for nitrogen',
    user_id: 02
  },
  {
    id: 03,
    name: 'Patty Pan Squash',
    planting_depth: '.25',
    days_to_germinate: '5-10',
    time_to_harvest:'30',
    date_planted:'05/23/2022',
    sun_exposure:'full',
    expected_plant_height:'1ft',
    notes:'I planted the yellow ones!',
    user_id: 03
  },
  {
    id: 04,
    name: 'Kale',
    planting_depth: '.25',
    days_to_germinate: '7/10',
    time_to_harvest:'20',
    date_planted:'04/30/2022',
    sun_exposure:'partial',
    expected_plant_height:'1ft',
    notes:'I hope the rabbits don\'t get them this year',
    user_id: 02
  }
]

export const journalEntries = [
    {
      id: 01,
      date: '10/17/2021',
      description: 'I love possums so much, and today is national possum day. I planted my garden to share with all the possums :) ',
      user_id: 03
    },
    {
      id: 02,
      date: '10/22/2021',
      description: 'Today was the first freeze of winter. Good bye garden see you in the Spring. RIP',
      user_id: 01
    },
    {
      id: 03,
      date: '04/22/2022',
      description: 'Happy Earth day! Excited to be planting my new apple tree :)',
      user_id: 03
    }
]
