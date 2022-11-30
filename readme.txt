- the project has 3 parts: 
    1) login/registration
    2) market - creates the ticket
    3) services - it sends the available technichians



Login:
    (authController)
    -uses phoneno. and password to identify and verify the user
    -sends JWT token

Registration:
    (authController)
    -parametes name, email, phone and hashed password.


Market:
    (marketController)
    - Create ticket:
        -takes creator id.
        -creates the tickets according the parameters
        
    - getMarketTicket
        -checks if ticket exists and sends all the tickets to the respective creator


services:
    (servicesController)

    -getServiceTickets: 
        - sends all the tickets to all the service devices


URLS:

    appName = 'Cosmica ltd.';
    apiUrl = '192.168.0.133:3000';
    
    loginAPI = '/api/authen/login';
    registerAPI = '/api/authen/register';
    connect = '/api';

  //market
    marketNewTicket = '/api/market/createTicket';
    marketGetTicket = '/api/market/getTicket';

  //service
    getServiceTicket = '/api/service/getTickets';

