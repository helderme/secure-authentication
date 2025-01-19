# README BACKEND

## English

### Setup Instructions

Follow these steps to set up the backend environment:

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies from `requirements.txt`:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Create a Django project:**
   ```bash
   django-admin startproject backend
   ```

6. **Start a new Django app:**
   ```bash
   python manage.py startapp base
   ```

7. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

8. **Create a superuser:**
   ```bash
   python manage.py createsuperuser
   ```

9. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

10. **Postman Collection:**
    The `backend` folder contains a Postman collection with all the requests.

11. **You're all set!** You can now run the project.

---

## Português

### Instruções de Configuração

Siga estes passos para configurar o ambiente do backend:

1. **Acesse a pasta do backend:**
   ```bash
   cd backend
   ```

2. **Crie um ambiente virtual:**
   ```bash
   python -m venv venv
   ```

3. **Ative o ambiente virtual:**
   - No Windows:
     ```bash
     venv\Scripts\activate
     ```
   - No macOS e Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Instale as dependências do `requirements.txt`:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Crie um projeto Django:**
   ```bash
   django-admin startproject backend
   ```

6. **Inicie um novo aplicativo Django:**
   ```bash
   python manage.py startapp base
   ```

7. **Aplique as migrações:**
   ```bash
   python manage.py migrate
   ```

8. **Crie um superusuário:**
   ```bash
   python manage.py createsuperuser
   ```

9. **Execute o servidor de desenvolvimento:**
   ```bash
   python manage.py runserver
   ```

10. **Coleção do Postman:**
    A pasta `backend` contém uma coleção do Postman com todas as requisições.

11. **Tudo pronto!** Agora você pode executar o projeto.

# README FRONTEND

## English

### Frontend Setup Instructions

Follow these steps to set up and run the frontend project:

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **You're all set!** The project should now be running.

---

## Português

### Instruções de Configuração do Frontend

Siga estes passos para configurar e executar o projeto frontend:

1. **Acesse a pasta do frontend:**
   ```bash
   cd frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Tudo pronto!** O projeto deve estar rodando agora.

