create database cleanpeakslabs;

use cleanpeakslabs;

CREATE TABLE users(
   ID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   First_Last VARCHAR(30) NOT NULL,
   User_Name VARCHAR(30) NOT NULL,
   Company VARCHAR(30) NOT NULL,
   Address VARCHAR(30) NOT NULL,
   City VARCHAR(30) NOT NULL,
   State CHAR(2) NOT NULL,
   Zip_Code MEDIUMINT UNSIGNED NOT NULL,
   Email VARCHAR(30) NOT NULL,
   Phone_Number VARCHAR(20) NOT NULL,
   Date TIMESTAMP,
   Services_Requested MEDIUMINT NOT NULL,
   Samples_Deposited MEDIUMINT NOT NULL);


CREATE TABLE Test_Results(
    ID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Company VARCHAR(30) NOT NULL,
    Service_Provided VARCHAR(30) NOT NULL,
    Sample_Type VARCHAR(30) NOT NULL,
    Sample_Name VARCHAR(30) NOT NULL,
    d9_THC FLOAT NOT NULL,
    CBD FLOAT NOT NULL,
    CBN_ FLOAT NOT NULL,
	  a_Pinene FLOAT NOT NULL,
    b_Pinene FLOAT NOT NULL,
    Limonene FLOAT NOT NULL,
    Linalool FLOAT NOT NULL,
    b_Caryophyllene FLOAT NOT NULL,
    Butane_ppm FLOAT NOT NULL,
    Methanol_ppm FLOAT NOT NULL,
    Ethanol_ppm FLOAT NOT NULL,
    Acetone_ppm FLOAT NOT NULL);

CREATE TABLE Cost(
   ID INT UNSIGNED NOT NULL AUTO_INCREMENT,
   Company VARCHAR(30) NOT NULL,
   Service_Provided VARCHAR(30) NOT NULL,
   Numer_of_Samples FLOAT NOT NULL,
   Cost_per_Sample FLOAT NOT NULL,
   Total_Cost FLOAT NOT NULL,
   PRIMARY KEY(ID)
   );