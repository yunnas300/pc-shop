Встановлення проєкту
Клонувати репозиторій:


git clone https://github.com/твій-логін/computer-store.git
cd computer-store

Встановити залежності:


npm install

Налаштувати змінні середовища .env:


PORT=3000
MONGO_URI=mongodb://localhost:27017/computer_store


Запуск проєкту:
npm run dev      # запуск сервера в режимі розробки
npm start        # запуск у production


Основні Git-команди
git pull              # отримати останні зміни
git add .             # додати всі зміни
git commit -m "..."   # комміт з описом
git push              # відправити зміни на GitHub


3. Документація DevOps
   Розгортання у production (docs/deployment.md)
   Вимоги до середовища
   ОС: Ubuntu Server / Windows Server


Системні вимоги: 2 CPU, 4GB RAM, 10GB SSD


Програмне забезпечення: Node.js 18+, MongoDB, Docker (опціонально)



Процес розгортання
Зібрати застосунок (фронт + бекенд):


npm run build

Передати на сервер:


scp -r ./dist user@server:/var/www/computer-store

Запустити:


ssh user@server
cd /var/www/computer-store
npm install --production
npm start


Оновлення застосунку (docs/update.md)
Зробити резервну копію:


cp -r /var/www/computer-store /var/backups/computer-store-$(date +%F)

Зупинити поточну версію:


pkill -f node

Залити нову версію, оновити залежності:


git pull
npm install
npm start


Резервне копіювання (docs/backup.md)
Код:
git clone --mirror https://github.com/твій-логін/computer-store.git

База даних:
mongodump --db computer_store --out ./backup/mongo_$(date +%F)

Автоматичний скрипт (backup.sh):
#!/bin/bash
tar -czvf code_backup_$(date +%F).tar.gz /var/www/computer-store
mongodump --db computer_store --out ./db_backup_$(date +%F)


Скрипт автодеплою (deploy.sh):
#!/bin/bash
scp -r ./dist user@server:/var/www/computer-store
ssh user@server <<EOF
pkill -f node
cd /var/www/computer-store
npm install --production
npm start &
EOF