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
              { name: 'label', title: 'Item', type: 'string' },
              { name: 'number', title: 'Amount', type: 'number'},
              { name: 'essential', title: 'Essential', type: 'boolean' },
              { name: 'category', title: 'Category', type: 'string',
                options: {
                  list: [
                    {title: 'Clothing', value: 'Clothing'},
                    {title: 'Toiletries', value: 'Toiletries'},
                    {title: 'Tech', value: 'Tech'},
                    {title: 'Medicine', value: 'Medicine'},
                    {title: 'Important', value: 'Important'},
                    {title: 'Others', value: 'Others'},
                  ]
                }
               }
            ],
          },
        ],
      },
    ],
  }
  
  export default packingList
  