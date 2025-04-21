const flightInfo = {
    name: 'flightInfo',
    title: 'Flight Info',
    type: 'document',
    fields: [
        {
            name: 'airline',
            type: 'string',
            title: 'Airline',
        },
        {
            name: 'flightNumber',
            type: 'string',
            title: 'Flight Number',
        },
        {
            name: 'departureTime',
            type: 'datetime',
            title: 'Departure Time',
        },
        {
            name: 'arrivalTime',
            type: 'datetime',
            title: 'Arrival Time',
        },
        {
            name: 'departureAirport',
            type: 'string',
            title: 'Departure Airport',
        },
        {
            name: 'arrivalAirport',
            type: 'string',
            title: 'Arrival Airport',
        },
        {
            name: 'gate',
            type: 'string',
            title: 'Gate (optional)',
        },
        {
            name: 'checkInNeeded',
            type: 'boolean',
            title: 'Self Check-In Needed',
        },
    ],
}

export default flightInfo