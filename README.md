# Financial Portfolio Web App — Assignment 4

**Course:** Financial Applications of Web Development  
**Assignment:** Authentication, Authorization, Advanced Web Application Features

---

## What this project implements

This repository implements Assignment 4 requirements:

- Transactional routing pattern (routes commit, services do not).
- Pydantic request validation for incoming JSON payloads.
- Dedicated trade service and routes (`/trades/buy`, `/trades/sell`).
- Live security data via Alpha Vantage (client with caching).
- Flask-Caching to reduce external API calls.
- Authentication using OIDC/JWT (AWS Cognito compatible) with middleware.
- Portfolio-level authorization (viewer / manager roles) and access management endpoints.
- Tests covering auth/authz, trade flows, AlphaVantage client, and service functions. Tests mock external requests.

---

## Quick start (development)



1. Clone the repo:


git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
Create and activate a virtual environment:

python -m venv .venv

source .venv/bin/activate


Install dependencies:

pip install -r requirements.txt

Create a .env file in the project root (do not commit this file) and add the required env vars:

FLASK_ENV=development
DATABASE_URL=sqlite:///dev.db   # or your DB URI
ALPHAVANTAGE_API_KEY=your_alpha_vantage_key
COGNITO_REGION=us-east-1
COGNITO_POOL_ID=us-east-1_XXXXX
COGNITO_CLIENT_ID=YOUR_COGNITO_APP_CLIENT_ID

Important: Do not commit .env. .gitignore contains .env by default.

Run database migrations / create tables (tests use in-memory DB; for manual dev you can create the DB):

python -c "from app import create_app; app = create_app(); from app.db import db; with app.app_context(): db.create_all(); print('OK')"

Run the app:

export FLASK_APP=app.main
flask run

Open http://127.0.0.1:5000/.

Running tests and coverage

All tests were written with pytest and have 81% coverage.

Run full test suite:

pytest --cov=app tests/

Generate an HTML coverage report:

pytest --cov=app --cov-report=html tests/
<img width="1737" height="1342" alt="Screenshot 2026-03-07 at 11 22 54 PM" src="https://github.com/user-attachments/assets/456b2b22-4a12-499b-8079-3c76b4826a85" />
<img width="1760" height="1239" alt="Screenshot 2026-03-07 at 11 22 09 PM" src="https://github.com/user-attachments/assets/3c7e9729-de61-4542-95bd-ffc8ca42fa32" />
<img width="1772" height="1291" alt="Screenshot 2026-03-07 at 11 13 41 PM" src="https://github.com/user-attachments/assets/7a14efae-a385-468b-bc76-9d1ae19d78d8" />
<img width="1758" height="1294" alt="Screenshot 2026-03-08 at 12 26 44 AM" src="https://github.com/user-attachments/assets/826a8e2f-5573-44ec-b888-cba25d2dad09" />
<img width="1718" height="1386" alt="Screenshot 2026-03-08 at 12 23 48 AM" src="https://github.com/user-attachments/assets/896cc58d-a14b-4e8d-901f-2729ab29b859" />
<img width="1745" height="1461" alt="Screenshot 2026-03-08 at 12 18 48 AM" src="https://github.com/user-attachments/assets/1b260834-1575-4bef-8028-76fa426902c0" />
<img width="1737" height="1404" alt="Screenshot 2026-03-08 at 12 17 40 AM" src="https://github.com/user-attachments/assets/352fac6f-8453-42b6-9064-dc5c35b32eb1" />
<img width="1749" height="1261" alt="Screenshot 2026-03-08 at 12 16 15 AM" src="https://github.com/user-attachments/assets/6473b1b4-17b0-4476-b2bb-c584d9ab9205" />
ndex.html<img width="2880" height="1800" alt="Screenshot 2026-03-08 at 10 33 39 PM" src="https://github.com/user-attachments/assets/1e1cc95f-9a4a-42d0-bb62-8220cf7b59a3" />
<img width="2880" height="1800" alt="Screenshot 2026-03-08 at 10 33 32 PM" src="https://github.com/user-attachments/assets/f5a57d74-122d-4ad6-9b3a-8ab06f662edf" />


