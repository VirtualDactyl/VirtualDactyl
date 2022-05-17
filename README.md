# VirtualDactyl
> **⚠️ VirtualDactyl is still Work In Progress! There can still be bugs! ⚠️**
> VirtualDactyl is a pterodactyl client panel where users can make their own servers.

## Features
- User registration
- Users can make their own servers
- Store
- Billing system
- Managing servers ( console, filemanager, databases, backups and more! )

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
npm run idb
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