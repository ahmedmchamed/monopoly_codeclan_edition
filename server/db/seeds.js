use monopoly;
db.dropDatabase()

db.properties.insertMany([
    {
        "name": "Ahmed Station",
        "colour": "red",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Nourhan Station",
        "colour": "red",
        "value": 60,
        "rent_value": 6
    },
    {
        "name": "Ronan Station",
        "colour": "red",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Fady Station",
        "colour": "red",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Ollie Street",
        "colour": "yellow",
        "value": 50,
        "rent_value": 10
    },
    {
        "name": "Keith Street",
        "colour": "yellow",
        "value": 50,
        "rent_value": 10
    },    
    {
        "name": "Sara Street",
        "colour": "yellow",
        "value": 50,
        "rent_value": 10
    },    
    {
        "name": "Ed Street",
        "colour": "green",
        "value": 50,
        "rent_value": 10
    },
    {
        "name": "Alex Chance Cards",
        "colour": "green",
        "value": 0,
        "rent_value": 0
    },
    {
        "name": "Adam Street",
        "colour": "green",
        "value": 50,
        "rent_value": 10
    },
    {
        "name": "Rumen Street",
        "colour": "blue",
        "value": 50,
        "rent_value": 10
    },
    {
        "name": "Craig Street",
        "colour": "blue",
        "value": 50,
        "rent_value": 10
    },
    {
        "name": "Johns Nice Street",
        "colour": "blue",
        "value": 50,
        "rent value": 5
    },
    {
        "name": "Louise Believes In You",
        "colour": "purple",
        "value": 50,
        "rent_value": 0
    },
    {
        "name": "Harrison Folks Street",
        "colour": "purple",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Mari Street",
        "colour": "purple",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Janey Street",
        "colour": "orange",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Eugene Street",
        "colour": "orange",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Maria Street",
        "colour": "orange",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Morag Street",
        "colour": "pink",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Castle Terrace",
        "colour": "pink",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Princes Street",
        "colour": "pink",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "The Royal Mile",
        "colour": "black",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Leith",
        "colour": "black",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Granton",
        "colour": "black",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Waverley",
        "colour": "grey",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Haymarket",
        "colour": "grey",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "The Meadows",
        "colour": "grey",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Arthurs Seat",
        "colour": "navy",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Calton Hill",
        "colour": "navy",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Corstorphine Hill",
        "colour": "navy",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "Vue Lane",
        "colour": "brown",
        "value": 50,
        "rent_value": 5
    },
    {
        "name": "JavaScript Hill",
        "colour": "brown",
        "value": 50,
        "rent_value": 5
    }
]);

db.createCollection("players");

use changeCards;
db.dropDatabase()

db.chanceCards.insertMany([
    {
        "quote": "I can be pretty badass about the recap... I'll be like: not covering that, do your homework."
    },
    {
        "quote": "you can't call the .beer() method on your barman if he's in tesco"
    },
    {
        "quote": "we can't stick a string within a bear"
    },
    {
        "quote": "everything can be what it is... or null"
    },
    {
        "quote": "tenerife is basically disney land for baby boomers"
    },
    {
        "quote": "encapsulation is: can i have a hamburger please?"
    },
    {
        "quote": "it's the difference between a paint by numbers... and a work of art"
    },
    {
        "quote": "the french person converts french to german, the spanish person converts german to spanish... this is a bit weird because they both speak object"
    },
    {
        "quote": "you probably don't need a million rows at any one time"
    },
    {
        "quote": "as soon as you know the name of the person, everything makes sense"
    },
    {
        "quote": "you can't force it. it'll come when it comes"
    },
    {
        "quote": "it's hard, it's hard, it's hard; forever"
    },
    {
        "quote": "we care about all the data in the forms intimately"
    },
    {
        "quote": "you can't ride your horse until you mount it"
    },
    {
        "quote": "sometimes convention is better than perfection"
    }
]);
