INSERT INTO Location(Country, ProvinceOrState, Longitude, Latitude) VALUES
('COL', 'ANT', '-75.567', '6.217'),
('COL', 'BOG', '4.60971', '-74.08175'),
('ARG', 'BA', '-34.61315', '-58.37723'),
('EUA', 'NYC', '-74.00597', '40.71427'),
('ECU', 'GYE', '-78.52495', '-0.22985'),
('BOL', 'VVI', '23.9458', '9.38934'),
('ESP', 'MAD', '-93.8174', '-98.2389'),
('FRA', 'ORY', '12.6348', '6.83458'),
('MEX', 'MEX', '-84.2378', '-8.3734'),
('AUS', 'SYD', '91.2840', '19.8347');

INSERT INTO AirportOperator(Name) VALUES
('Operator 1'),
('Operator 2'),
('Operator 3'),
('Operator 4'),
('Operator 5'),
('Operator 6'),
('Operator 7'),
('Operator 8'),
('Operator 9'),
('Operator 10');

INSERT INTO Airport(Name, AirportOperatorId, AirportCode, LocationId, PriorityOrder) VALUES
('El Dorado', 1, 'COL01', 2, 1),
('Jose Maria Cordova', 1, 'COL02', 1, 2),
('Ezeiza', 2, 'ARG01', 3, 3),
('John F. Kennedy', 3, 'USA01', 4, 4),
('Jose Joaquin de Olmedo', 4, 'ECU01', 5, 5),
('Internacional Viru Viru', 5, 'BOL01', 2, 6),
('Adolfo Suarez Madrid-Barajas', 6, 'ESP01', 2, 7),
('Paris-Orly', 7, 'FRA01', 2, 8),
('Internacional de la Ciudad de Mexico', 8, 'MEX01', 2, 9),
('Kingsford Smith', 9, 'AUS01', 2, 10);