# Supabase Authentication Setup

This project is configured with Supabase authentication supporting both email and Google OAuth.

## Supabase Dashboard Configuration

To complete the setup, you need to configure the following in your Supabase dashboard:

### 1. Authentication Settings

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Settings**
3. Configure the following:

#### Site URL
- Set **Site URL** to: `https://extlab.ai`

#### Redirect URLs
Add these redirect URLs:
- `https://extlab.ai/auth/callback`
- `http://localhost:3000/auth/callback` (for development)

### 2. Email Authentication

1. Go to **Authentication** > **Settings** > **Auth Providers**
2. Ensure **Email** provider is enabled
3. Configure email templates if needed

### 3. Google OAuth Setup

1. Go to **Authentication** > **Settings** > **Auth Providers**
2. Enable **Google** provider
3. You'll need to:
   - Create a Google OAuth app in Google Cloud Console
   - Add your domain to authorized origins
   - Configure the OAuth consent screen
   - Add the client ID and secret to Supabase

#### Google Cloud Console Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to **Credentials** > **Create Credentials** > **OAuth 2.0 Client IDs**
5. Set application type to **Web application**
6. Add authorized origins:
   - `https://extlab.ai`
   - `http://localhost:3000` (for development)
7. Add authorized redirect URIs:
   - `https://uqcpfmcdprtsvhdceoub.supabase.co/auth/v1/callback`
8. Copy the Client ID and Client Secret to Supabase

### 4. Database Setup

The authentication will automatically create the necessary tables in your Supabase database. No additional setup is required.

## Environment Variables

The following environment variables are already configured in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://uqcpfmcdprtsvhdceoub.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_APP_URL=https://extlab.ai
```

## Features

- ✅ Email sign up with confirmation
- ✅ Email sign in
- ✅ Google OAuth sign in
- ✅ Sign out functionality
- ✅ User session management
- ✅ Protected routes (via middleware)
- ✅ Real-time auth state updates

## Usage

The authentication component is already integrated into the main page. Users can:

1. **Sign up** with email and password
2. **Sign in** with email and password
3. **Sign in** with Google OAuth
4. **Sign out** when authenticated

The app will automatically show different UI based on authentication state.

## Development

To run the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

## Production Deployment

Make sure to update the redirect URLs in Supabase to match your production domain before deploying.
