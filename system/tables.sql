create database thriftypropane;

use thriftypropane;

grant select,update,insert on thriftypropane.* to propanemaster@localhost identified by 'propanemaster125!';
grant select,update,insert on thriftypropane.* to propanemaster@'%' identified by 'propanemaster125!';

create table users (
	userid int(11) not null auto_increment,
	username varchar(50) not null default '',
	password varchar(50) not null default '',
	firstname varchar(50) not null default '',
	lastname varchar(50) not null default '',
	usertype int(11) not null default 0,
	teamid int(11) not null default 0,
	datecreated datetime not null default '0000-00-00 00:00:00',
	lastlogin datetime not null default '0000-00-00 00:00:00',
	pwexpires date not null default '0000-00-00',
	active boolean not null default 1,
	primary key (userid)
) ENGINE=InnoDB AUTO_INCREMENT=101;

create table usertypes (
	usertype int(11) not null auto_increment,
	usertypedesc varchar(50) not null default '',
	primary key (usertype)
) ENGINE=InnoDB AUTO_INCREMENT=1;

insert into usertypes (usertype,usertypedesc) values (1,'CSR');
insert into usertypes (usertype,usertypedesc) values (2,'Delivery Administrator');
insert into usertypes (usertype,usertypedesc) values (3,'Driver');
insert into usertypes (usertype,usertypedesc) values (4,'Sales Administrator');
insert into usertypes (usertype,usertypedesc) values (9,'Global Administrator');

insert into users (userid,username,password,firstname,lastname,usertype,datecreated)
	values (1,'csr','1aZyZ8h16O2TU','Customer Service','Representative',1,now()),
	(2,'delivery','1aZyZ8h16O2TU','Delivery','Admin',2,now()),
	(3,'driver','1aZyZ8h16O2TU','Mr','Driver',3,now()),
	(4,'sales','1aZyZ8h16O2TU','Sales','Admin',4,now()),
	(5,'admin','1aZyZ8h16O2TU','Global','Admin',9,now())	
	;

create table teams (
	teamid int(11) not null auto_increment,
	teamname varchar(50) not null default '',
	primary key (teamid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

create table userlogs (
	logid int(11) not null auto_increment,
	userid int(11) not null default 0,
	ipaddress varchar(20) not null default '',
	logdate datetime not null default '0000-00-00 00:00:00',
	action varchar(100) not null default '',
	actiondetails text not null default '',
	primary key (logid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

create table dispositions (
	dispoid int(11) not null auto_increment,
	disposition varchar(50) not null default '',
	dispocode varchar(20) not null default '',
	livecall boolean not null default 0,
	sale boolean not null default 0,
	callback boolean not null default 0,
	fresh boolean not null default 0,
	selectable boolean not null default 0,
	usertype int(11) not null default 0,
	primary key (dispoid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

insert into dispositions (dispoid,disposition,dispocode,livecall,sale,callback,fresh,selectable,usertype)
	values
	(1,'New Customer','New Customer',0,0,0,1,0,0),
	(2,'Delivery Placed','Delivery Placed',0,0,0,1,0,0),
	(3,'Order Placed','Order Placed',0,0,0,1,0,0),
	(4,'For Delivery','For Delivery',0,0,0,1,0,0)
	;

create table masterfile (
	leadid int(11) not null auto_increment,
	completename varchar(150) not null default '',
	concatname varchar(300) not null default '',
	phone varchar(100) not null default '',
	remarks text not null default '',
	disposition varchar(50) not null default '',
	agent int(11) not null default 0,
	opener int(11) not null default 0,
	verifier int(11) not null default 0,
	confirmer int(11) not null default 0,
	tagdate datetime not null default '0000-00-00 00:00:00',
	dateverified datetime not null default '0000-00-00 00:00:00',
	dateconfirmed datetime not null default '0000-00-00 00:00:00',
	dateuploaded datetime not null default '0000-00-00 00:00:00',
	dateexpires date not null default '0000-00-00',
	referencecode varchar(20) not null default '',
	listid int(11) not null default 0,
	primary key (leadid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

alter table masterfile add index (completename);
alter table masterfile add index (concatname);
alter table masterfile add index (disposition);
alter table masterfile add index (agent);
alter table masterfile add index (tagdate);
alter table masterfile add index (dateverified);
alter table masterfile add index (dateconfirmed);
alter table masterfile add index (dateexpires);
alter table masterfile add index (listid);

create table clientinfo (
	recordid int(11) not null auto_increment,
	leadid int(11) not null default 0,
	clfirstname varchar(100) not null default '',
	clmiddlename varchar(100) not null default '',
	cllastname varchar(100) not null default '',
	mobilephone varchar(50) not null default '',
	homephone varchar(50) not null default '',
	permhomephone varchar(50) not null default '',
	homeaddress1 varchar(100) not null default '',
	homeaddress2 varchar(100) not null default '',
	homeaddress3 varchar(100) not null default '',
	homeaddress4 varchar(100) not null default '',
	homezipcode varchar(50) not null default '',
	cardissuer varchar(50) not null default '',
	cardnumber varchar(50) not null default '',
	cardlimit varchar(50) not null default '',
	membersince varchar(50) not null default '',
	primary key (recordid),
	unique key leadid (leadid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

alter table clientinfo add index (leadid);

create table clienthistory (
	historyid int(11) not null auto_increment,
	leadid int(11) not null default 0,
	remarks text not null default '',
	disposition varchar(50) not null default '',
	agent int(11) not null default 0,
	tagdate datetime not null default '0000-00-00 00:00:00',
	primary key (historyid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

alter table clienthistory add index (leadid);

create table searchfields (
	searchid int(11) not null auto_increment,
	leadid int(11) not null default 0,
	concatname varchar(300) not null default '',
	email varchar(50) not null default '',
	tin varchar(20) not null default '',
	mobilephone varchar(20) not null default '',
	primary key (searchid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

ALTER TABLE searchfields ADD UNIQUE(leadid);

alter table searchfields add index (concatname);
alter table searchfields add index (email);
alter table searchfields add index (tin);
alter table searchfields add index (mobilephone);

create table verifications (
	verificationid int(11) not null auto_increment,
	leadid int(11) not null default 0,
	agent int(11) not null default 0,
	disposition varchar(50) not null default '',
	tagdate date not null default '0000-00-00',
	primary key (verificationid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

create table turnins (
	turninid int(11) not null auto_increment,
	leadid int(11) not null default 0,
	agent int(11) not null default 0,
	disposition varchar(50) not null default '',
	tagdate date not null default '0000-00-00',
	primary key (turninid)
) ENGINE=InnoDB AUTO_INCREMENT=1;

create table appcandec (
	acdid int(11) not null auto_increment,
	leadid int(11) not null default 0,
	agent int(11) not null default 0,
	disposition varchar(50) not null default '',
	tagdate date not null default '0000-00-00',
	primary key (acdid)
) ENGINE=InnoDB AUTO_INCREMENT=1;