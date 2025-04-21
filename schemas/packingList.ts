const packingList = {
    name: 'packingList',
    title: 'Packing List',
    type: 'document',
    fields: [
      {
        name: 'tripDuration', // <- NEW field name (no more "duation" or "duration")
        title: 'Trip Duration',
        type: 'string',
        options: {
          list: ['Weekend', '1 week', '2+ weeks'],
        },
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', type: 'string', title: 'Item' },
              { name: 'essential', type: 'boolean', title: 'Essential' },
            ],
          },
        ],
      },
    ],
  }
  
  export default packingList
  