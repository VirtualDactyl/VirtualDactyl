# VirtualDactyl
VirtualDactyl is a pterodactyl client panel where users can make their own servers.

## Features
### Global
- Billing system
- Open Source
- :)

### Users
- Users can register accounts
- Users can create servers
- Users can manage their server directly in VirtualDactyl ( filemanager, databases and more! )
- Users can create support tickets

### Resellers
- Can create users
- Can create servers for users
- Resellers still need to pay for the servers
- API Access (only endpoints for resellers)

### Staff
- Can send request to get (temporarily) access to a user's server
- Can answer to tickets

### Moderators
- Can add / edit / remove staff members
- Can edit / delete support tickets
- Can suspend users and servers

### Admins
- Can add / edit / remove moderators and staff members
- Can suspend users and servers
- Can send a user/server delete request
- API access

### Owner
- Can add / edit / remove admins, moderators staff members
- Can edit / remove registered users
- Can accept a user/server delete request (sent by admins)
- API access

## Payment methods
- PayPal

## Themes
- Default ( AdminLTE )

## Todo / WIP Features
- Plugin / Mod installer
- Version changer

## Requirements
- NodeJS

## Installation
### Step 1
Clone the repository
```bash
git clone https://github.com/VirtualDactyl/VirtualDactyl.git
```

### Step 2
Install nodejs modules
```bash
npm install
```

### Step 3
Rename the `config.example.json` file to `config.json` and fill in all information!

### Step 4
Install all the tables
```bash
npm run installdatabase
```

### Step 5
Install knex globally
```bash
npm install knex -g
```

### Step 6
Create default user
```bash
knex seed:run --specific=default.js
```

## Upgrading
### Step 1
Install knex globally
```bash
npm install knex -g
```

### Step 2
Make a backup of everyting. ( database, files ect )

### Step 3
Pull the repo. ( git pull )

### Step 4
Migrate database.
```bash
knex migrate:up
```
This will update all the tables to work with the new update.

## Runing
```bash
npm run start
```
