# VirtualDactyl
VirtualDactyl is a pterodactyl client panel where users can make their own servers.

## Features
- User registration
- Users can make their own servers
- Store
- Billing system
- Managing servers ( console, filemanager, databases, backups and more! )

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
Create a MySQL Database

### Step 4
Rename the `config.example.json` file to `config.json` and fill in all information!

### Step 5
Create MySQL tables
```bash
npm run installdatabase
```

## Runing
```bash
npm run start
```