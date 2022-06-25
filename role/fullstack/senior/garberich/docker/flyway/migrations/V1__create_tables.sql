CREATE TABLE Location (
    Id INT AUTO_INCREMENT,
    Country VARCHAR(50),
    ProvinceOrState VARCHAR(5),
    Longitude VARCHAR(10),
    Latitude VARCHAR(10),
    PRIMARY KEY (Id)
);

CREATE TABLE AirportOperator (
    Id INT AUTO_INCREMENT,
    Name VARCHAR(100),
    PRIMARY KEY (Id)
);

CREATE TABLE Airport (
    Id INT AUTO_INCREMENT,
    Name VARCHAR(100),
    AirportOperatorId INT,
    AirportCode VARCHAR(10),
    LocationId INT,
    PriorityOrder INT,
    PRIMARY KEY (Id),
    FOREIGN KEY (AirportOperatorId) REFERENCES AirportOperator(Id),
    FOREIGN KEY (LocationId) REFERENCES Location(Id)
)
