# Financial Portfolio Web App

Assignment 5 final project for Financial Applications of Web Development.

This project contains a Flask backend and a React frontend for managing investment portfolios.

## Features

- AWS Cognito Hosted UI login and logout
- Automatic user creation after Cognito login/signup
- View portfolios
- Create portfolios
- Delete portfolios with confirmation
- Prevent deleting portfolios that still have holdings
- View holdings with ticker and quantity
- Buy and sell securities
- View transaction history with timestamp, ticker, action, shares, and amount


# Backend Setup

Install Python dependencies:

pip install -r requirements.txt

Create a .env file

COGNITO_REGION=your_region

COGNITO_POOL_ID=your_user_pool_id

COGNITO_CLIENT_ID=your_client_id

COGNITO_CLIENT_SECRET=your_client_secret

COGNITO_DOMAIN=https://your-cognito-domain.auth.your-region.amazoncognito.com

COGNITO_REDIRECT_URI=http://127.0.0.1:5000/users/callback

FRONTEND_URL=http://localhost:5173

ALPHAVANTAGE_API_KEY=your_alpha_vantage_key

Run backend:

python app/main.py

Backend runs on:

http://127.0.0.1:5000

# Frontend Setup

Open a second terminal and go into the frontend folder:

cd app

cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend runs on:

http://localhost:5173

<img width="2833" height="1694" alt="Screenshot 2026-05-12 at 9 46 04 PM" src="https://github.com/user-attachments/assets/16cc602d-0709-41cc-bc41-ec3713b546fc" />
<img width="2534" height="1383" alt="Screenshot 2026-05-12 at 10 00 24 PM" src="https://github.com/user-attachments/assets/180c2908-b841-4fc9-aa8d-db844a9fb236" />
<img width="2534" height="1378" alt="Screenshot 2026-05-12 at 9 59 56 PM" src="https://github.com/user-attachments/assets/b06b7079-450d-4fa1-b34d-6503e9aa38c7" />
<img width="2523" height="1372" alt="Screenshot 2026-05-12 at 9 59 40 PM" src="https://github.com/user-attachments/assets/0f4e828c-49af-4689-a143-429177cae914" />
<img width="2621" height="1410" alt="Screenshot 2026-05-12 at 9 55 45 PM" src="https://github.com/user-attachments/assets/9e4084c5-3ad6-45ac-ada2-e0a2ffc4326f" />
<img width="2622" height="1334" alt="Screenshot 2026-05-12 at 9 53 33 PM" src="https://github.com/user-attachments/assets/fd6ccefa-ed3d-4cd1-aa2d-e3ae66d263b9" />
<img width="2622" height="1379" alt="Screenshot 2026-05-12 at 9 53 26 PM" src="https://github.com/user-attachments/assets/b04687c6-4f54-4d9f-82ab-509a35fe0f4c" />
<img width="2626" height="1369" alt="Screenshot 2026-05-12 at 9 52 45 PM" src="https://github.com/user-attachments/assets/c66635d0-2246-4654-a9a9-43f980915533" />
<img width="2616" height="1518" alt="Screenshot 2026-05-12 at 9 52 09 PM" src="https://github.com/user-attachments/assets/96206214-c04c-4d06-b633-b806b40b9ec6" />


