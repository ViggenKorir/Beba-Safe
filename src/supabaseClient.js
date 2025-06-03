import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// This file initializes the Supabase client using environment variables for the URL and anon key.
// It exports the client for use in other parts of the application, such as authentication and database operations.
// This file is essential for connecting to the Supabase backend, allowing the application to interact with the database and authentication services.
// It is typically imported in pages or components where database queries or user authentication is needed.
// This file is crucial for the functionality of the application, as it provides the means to interact with the Supabase backend.
// It is usually placed in the `src` directory of a React application, often alongside other configuration files.
// The Supabase client is used throughout the application to perform operations like querying the database, managing user sessions, and handling real-time updates.
// It is important to ensure that the environment variables are correctly set in the `.env` file or in the deployment environment for the application to function properly.
// This file is typically imported in the main application file (e.g., `App.jsx`) or in specific pages/components that require database access or user authentication.
