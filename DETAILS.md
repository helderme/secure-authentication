# Django REST Framework + JWT Authentication

Este projeto utiliza o Django REST Framework com autenticação JWT e configurações adicionais para facilitar a integração e o desenvolvimento.

## Configuração do Ambiente

1. **Crie um ambiente virtual (venv):**

   ```bash
   pip install django
   pip install djangorestframework
   pip install django-cors-headers
   pip install djangorestframework-simplejwt
   ```

2. **Crie o projeto e o aplicativo:**

   ```bash
   django-admin startproject backend
   python3 manage.py startapp base
   ```

## Configuração do Projeto

1. **Atualize o arquivo `\backend\backend\settings.py`:**
   - Em `INSTALLED_APPS`, adicione:
     ```python
     'corsheaders',  # https://pypi.org/project/django-cors-headers/
     'rest_framework',
     'rest_framework_simplejwt',  # https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#usage
     'base',
     ```
   - Crie a variável:
     ```python
     REST_FRAMEWORK = {}
     ```
   - Dentro dela, adicione:
     ```python
     'DEFAULT_AUTHENTICATION_CLASSES': (
         'rest_framework_simplejwt.authentication.JWTAuthentication',
     )
     ```

2. **Realize as migrações e crie um superusuário:**

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

3. **Crie o arquivo `urls.py` dentro do aplicativo `base`:**
   - Inclua instruções explicando como ele foi criado.
   - Dos paths copiados da documentação, remova a parte `api/`.

4. **Atualize o arquivo `backend/urls.py`:**
   - Ajuste os imports, adicionando `include` além de `path`.
   - Adicione um novo path:
     ```python
     path('api/', include('base.urls')),
     ```

## Testando a Autenticação com Postman

1. **Endpoint para obter o token:**
   ```
   POST - http://127.0.0.1:8000/api/token/
   ```
   - Body (raw):
     ```json
     {"username": "", "password": ""}
     ```

## Executando o Servidor

Inicie o servidor local:

```bash
python manage.py runserver
```

## Models e serializer
Alterado o arquivo models.py
criado o arquivo serializer.py
Alterado o arquivo views.py (method, decorator, serializer)

backend/settings = permissions de https://www.django-rest-framework.org/api-guide/permissions/


no arquivo urls.py insere o novo path que chama a funcao criada em views.

python .\manage.py makemigrations
python manage.py migrate

nova request postman para fazer o get note colocando o token que fizemos na primeira chamada

agora é possivel entrar no painel admin
http://127.0.0.1:8000/admin/
adicionar uma nova nota e verificar se funciona bem pelo get do postman


## frontend
npm install axios
npm install react-router-dom
npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion