const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 7000;

app.use(cors())
app.use(express.static(__dirname))

//Dividends

const stock = {

'o':{
    'dividendYieldPercent': 4.4,
    'companyName': 'Realty Income Corporation',
    'exchange': 'NYSE',
    '52WeekHigh': 75.40
},
'glad':{
    'dividendYieldPercent': 7.16,
    'companyName': 'Gladstone Capital Corporation',
    'exchange': 'Nasdaq',
    '52WeekHigh': 12.78
},
'stwd':{
    'dividendYieldPercent': 8.16,
    'companyName': 'Starwood Property Trust,Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 27.01
    },
'ufo':{
    'dividendYieldPercent': 1.17,
    'companyName': 'Procure Space ETF',
    'exchange': 'Nasdaq',
    '52WeekHigh': 32.15
        },
'ltc':{
    'dividendYieldPercent': 5.98,
    'companyName': 'LTC Properties,Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 40.33
    },
'spy':{
    'dividendYieldPercent': 1.33,
    'companyName': 'SPDR S&P 500 ETF Trust',
    'exchange': 'NYSE',
    '52WeekHigh': 479.98
    },
'vti':{
    'dividendYieldPercent': 1.37,
    'companyName': 'Vanguard Total Stock Market Index Fund',
    'exchange': 'NYSE',
    '52WeekHigh': 244.06
    },
'nrz':{
    'dividendYieldPercent': 8.82,
    'companyName': 'New Residential Investment Corp.',
    'exchange': 'NYSE',
    '52WeekHigh': 11.81
    },
'gps':{
    'dividendYieldPercent': 5.5,
    'companyName': 'The Gap, Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 34.49
    },
'ivr':{
    'dividendYieldPercent': 20.57,
    'companyName': 'Invesco Mortgage Capital Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 17.69
    },
'tol':{
    'dividendYieldPercent': 1.42,
    'companyName': 'Toll Brothers, Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 75.61
    },
'rbgly':{
    'dividendYieldPercent': 2.98,
    'companyName': 'Reckitt Benckiser Group plc',
    'exchange': 'OTC',
    '52WeekHigh': 19.17
    },    
'nke':{
     'dividendYieldPercent': 1.01,
     'companyName': 'NIKE, Inc.',
     'exchange': 'NYSE',
     '52Weekhigh': 179.10
     },            
'fl':{
    'dividendYieldPercent': 4.91,
    'companyName': 'Foot Locker, Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 63.98
    },     
't':{
     'dividendYieldPercent': 5.31,
     'companyName': 'AT&T Inc.',
     'exchange': 'NYSE',
     '52WeekHigh': 22.17
     },  
'aapl':{
    'dividendYieldPercent': 0.63,
    'companyName': 'Apple Inc.',
    'exchange': 'Nasdaq',
    '52WeekHigh': 182.94
    },   
'ff':{
    'dividendYieldPercent': 3.22,
    'companyName': 'FutureFuel Corp.',
    'exchange': 'NYSE',
    '52WeekHigh': 10.63
    },    
'msft':{
     'dividendYieldPercent': 0.92,
     'companyName': 'Microsoft Corporation',
     'exchange': 'Nasdaq',
     '52WeekHigh': 349.67
     },   
'schw':{
    'dividendYieldPercent': 1.14,
    'companyName': 'The charles Schwab Corporation',
    'exchange': 'NYSE',
    '52WeekHigh': 96.24
    },   
'siri':{
    'dividendYieldPercent': 1.40,
    'companyName': 'Sirius XM Holdings Inc.',
    'exchange': 'Nasdaq',
    '52WeekHigh': 7.29
    },   
'rtx':{
    'dividendYieldPercent': 2.26,
    'companyName': 'Raytheon Technologies Corporation',
    'exchange': 'NYSE',
    '52WeekHigh': 106.02
    },   
'aci':{
    'dividendYieldPercent': 1.55,
    'companyName': 'Albertsons Companies, Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 37.99
    }, 
'cl':{
    'dividendYieldPercent': 2.38,
    'companyName': 'Colgate-Palmolive Company',
    'exchange': 'NYSE',
    '52WeekHigh': 85.61
    }, 
'ko':{
     'dividendYieldPercent': 2.79,
     'companyName': 'The Coca-Cola Company',
     'exchange': 'NYSE',
     '52WeekHigh': 67.20
     }, 
'qqq':{
    'dividendYieldPercent': 0.62,
    'companyName': 'Invesco QQQ Trust',
    'exchange': 'Nasdaq',
    '52WeekHigh': 408.71
    }, 
'bac':{
     'dividendYieldPercent': 2.32,
     'companyName': 'Bank of America Corporation',
     'exchange': 'NYSE',
     '52WeekHigh': 50.11
     }, 
'pep':{
     'dividendYieldPercent': 2.78,
     'companyName': 'PepsiCo, Inc.',
     'exchange': 'Nasdaq',
     '52WeekHigh': 177.62
     }, 
'schd':{
    'dividendYieldPercent': 3.21,
    'companyName': 'Schwab U.S. Dividend Equity ETF',
    'exchange': 'NYSE',
    '52WeekHigh': 82.48
    },
'pfe':{
     'dividendYieldPercent': 3.00,
     'companyName': 'Pfizer Inc.',
     'exchange': 'NYSE',
     '52WeekHigh': 61.71
     }, 
'vwo':{
    'dividendYieldPercent': 2.74,
    'companyName': 'Vanguard Emerging Markets Stock Index Fund',
    'exchange': 'NYSE',
    '52WeekHigh': 55.00
    }, 
'lumn':{
    'dividendYieldPercent': 8.53,
    'companyName': 'Lumen Technologies, Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 15.45
    }, 
'xom':{
     'dividendYieldPercent': 3.56,
     'companyName': 'Exxon Mobil Corporation ',
     'exchange': 'NYSE',
     '52WeekHigh': 102.19
     }, 
'tgt':{
    'dividendYieldPercent': 2.24,
    'companyName': 'Target Corporation',
    'exchange': 'NYSE',
    '52WeekHigh': 268.98
    }, 
'ge':{
    'dividendYieldPercent': 0.41,
    'companyName': 'General Electric Company',
    'exchange': 'NYSE',
    '52WeekHigh': 116.17
    }, 
'sjm':{
     'dividendYieldPercent': 3.23,
     'companyName': 'The J. M. Smucker Company',
     'exchange': 'NYSE',
     '52WeekHigh': 146.74
     }, 
'wmt':{
    'dividendYieldPercent': 1.79,
    'companyName': 'Walmart Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 160.77
    }, 
'kyn':{
     'dividendYieldPercent': 8.31,
     'companyName': 'Kayne Anderson Energy Infrastructure Fund, Inc.',
     'exchange': 'NYSE',
     '52WeekHigh': 9.76
     }, 
'kmb':{
    'dividendYieldPercent': 3.53,
    'companyName': 'Kimberly-Clark Corporation',
    'exchange': 'NYSE',
    '52WeekHigh': 145.79
    }, 
'spg':{
     'dividendYieldPercent': 6.18,
     'companyName': 'Simon Property Group, Inc.',
     'exchange': 'NYSE',
     '52WeekHigh': 171.12
     }, 
'stag':{
    'dividendYieldPercent': 4.41,
    'companyName': 'STAG Industrial, Inc.',
    'exchange': 'NYSE',
    '52WeekHigh': 48.27
     }, 
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:stock', (request, response) => {
    const stockName = request.params.stock.toLowerCase()
    if(stock[stockName]){
        response.json(stock[stockName])
    } else{
        response.json(stock['unknown'])
    }
    //response.json(stock)
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}! you better go catch it!`)
})
