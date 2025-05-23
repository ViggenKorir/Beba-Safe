# Beba-Safe
Beba Safe is a courier service enabling safe pick-up and delivery of goods and services mainly operating around Nairobi CBD

# Technologies Used:

Frontend: React for building a dynamic and responsive dashboard.
Tailwind CSS for styling.

Backend: Python (Django or Flask) - For building the API that handles authentication, database interactions, and payment processing. 
&&
Supabase to handle Database

<!-- Database: PostgreSQL or MongoDB are suitable database options. -->

# Features Implemented:

# 1 User Authentication

Registration: Users create an account with an email address and password.

Login: Users log in using their credentials.

Secure Sessions:  Uses Clark's (JSON Web Tocken - JWT) for Session management and tracking logged-in users.

Protected Routes:  Only authenticated users can access the dashboard and other sensitive pages.

Use of Clark's social logins to enable smooth & secure user Authentication

# 2. Dashboards:

## Admin Dashboard
Admin's and Super-Users have a separate dashboard with admin previlages which enebles them to perform complex and exclusive actions.

## User Dashboard 
The dashboard will be the central hub for users to manage their deliveries.  Here's a suggested structure:

## Goods Form:

#### Item Name

#### Description

#### Quantity

#### Weight

#### Dimensions (optional)

#### Photos (optional, multiple image uploads)

## Pickup Details Form:

#### Address (with Google Maps integration)

#### Contact Person

#### Phone Number

#### Special Instructions (e.g., "Leave at reception")

## Delivery Details Form:

#### Address (with Google Maps integration)

#### Contact Person

#### Phone Number

#### Special Instructions

## Payment Page:

#### Order Summary (including item details, pickup/delivery addresses, and total cost)

#### Payment Method Selection (M-Pesa integration is crucial)

#### Secure Payment Processing (using a reputable payment gateway like Stripe or a local Kenyan provider)

# 3. Google Maps Integration:
### (In Development)
API Key: You'll need a Google Maps API key.  This key allows your application to access Google Maps data.

Implementation:  Use a JavaScript library like the Google Maps JavaScript API to embed a map on the pickup and delivery address forms.  Users can:

#### Search for addresses.

#### Place markers on the map.

#### Get precise coordinates (latitude and longitude).

Optionally, add autocomplete functionality for faster address entry.

# 4. Security Best Practices:

Input Validation:  Validate user inputs to prevent vulnerabilities like SQL injection and cross-site scripting (XSS).

Data Encryption:  Encrypt sensitive data like passwords and payment information.

Regular Security Audits:  Regular security audits to identify and address potential vulnerabilities.

Next :

Implement the Google Maps API:  Integrate the map functionality into the address forms.

Develop the backend API:  Create the API endpoints to handle user authentication, data storage, and payment processing.

Connect the frontend and backend:  Integrate the frontend dashboard with the backend API.

Thorough Testing:  Test all features extensively to ensure functionality and security.

