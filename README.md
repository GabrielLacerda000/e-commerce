# Nuxt.js E-commerce Project
This is a simple e-commerce project built with Nuxt.js on the front-end and AdonisJS on the back-end. It consumes a product API and displays products in a grid, with create, edit, and delete functionalities.

## Technologies
- Nuxt.js (front-end)
- Vue 3 e TypeScript
- AdonisJS (back-end)
- Tailwind

  ## Prerequisites
  Before starting, make sure you have Node.js (v14 or higher) and npm installed.

 ## Project Setup

1) clone the repository, Navigate to the project directory: and istall dependecies
```bash
git clone https://github.com/GabrielLacerda000/e-commerce.git

cd e-commerce

npm install
```
 ## ENV

Create a `.env` file in the root of the project and configure the necessary variables. Example:
```bash
API_BASE_URL=https://your-api-url.com
```
Make sure that `API_BASE_URL` points to the correct API endpoint.

## Commands to Run the Project
```bash
npm run dev
```

## How to Use
1. List Products
On the home page, products are displayed in a grid. Each product shows its name, description, price, and stock.

2. Create Product
Click the "Add Product" button to open the create form. Fill in the fields and save to create a new product.

3. Edit Product
On each product’s detail page, there is an "Edit" button. Clicking it will take you to the edit page, where you can modify the product’s details.

4. Delete Product
On the details page, next to the "Edit" button, there is a "Delete" button. Click to delete the product.
