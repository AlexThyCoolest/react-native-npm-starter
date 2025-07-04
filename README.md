# 🚀 SUPABASE REACT NATIVE STARTER KIT 🎉

### 1. Introduction 📖  
Welcome to the **Supabase React Native Starter Kit**, your ultimate toolkit for building apps with speed and ease! 🛠️ Built on the powerful [Expo](https://expo.io/) platform, this starter kit combines modern tools and technologies to help you kickstart your [React Native](https://reactnative.dev/) project with [Supabase](https://supabase.io/). 💡  

**Tech Stack includes:**  
- ⚛️ [React Native](https://reactnative.dev/)  
- 🌟 [Expo](https://expo.io/)  
- 🔥 [Supabase](https://supabase.io/)  
- 🧭 [React Navigation](https://reactnavigation.org/)  
- ✉️ [Resend](https://resend.com)  

---

### 2. Features 🧩  
Here’s what you get out of the box with this starter kit:  
- **🔑 Authentication**: Fully integrated sign-up/sign-in using [Supabase](https://supabase.io/).  
- **🛤️ Navigation**: Pre-configured and smooth navigation with [React Navigation](https://reactnavigation.org/).  
- **📧 Email Verification**: Ensure users validate their emails with [Resend](https://resend.com).  
- **👤 Profile**: A sleek profile screen for updating and viewing user information.  

---

### 3. Installation ⚡  
Ready to dive in? Follow these steps to get started:  
1️⃣ **Install gh cli** *(if you haven't already)*
```bash
brew install gh
```

2️⃣ **Create a private repo**:  
```bash
gh repo create [YOUR APP NAME] --template AlexThyCoolest/react-native-npm-starter --private --clone
```  

3️⃣ **Install dependencies**:  
```bash
npm i
```  

4️⃣ **Set up Supabase**:  
- 🌐 Head to [Supabase](https://supabase.io/) and create an account.  
- 🔑 Create a new project and grab the URL + API keys.  
- 🔐 Create a new table called `users` with the following columns:  
  - `user_uuid` (UUID)  
  - `user_email` (TEXT)  
  - `created_at` (TIMESTAMP)

    - or use the SQL Editor:
    
    ```sql
    CREATE TABLE user (
      user_uuid UUID PRIMARY KEY,
      user_email TEXT,
      created_at TIMESTAMP
      -- add more if needed
    );

    ```

5️⃣ **Configure Supabase**:  
Add these variables to a `.env` file in your project’s root:  
```bash
EXPO_PUBLIC_SUPABASE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SECRET_KEY
EXPO_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_SERVICE_URL
JWT_SECRET=YOUR_JWT_SECRET
```  

6️⃣ **Set up Resend**:  
- ✉️ Create an account at [Resend](https://resend.com).  
- 🔑 Grab your API key and add it to the `.env` file:  
```bash
EXPO_PUBLIC_RESEND_API_KEY=YOUR_RESEND_API_KEY
```  

7️⃣ **Run the app**:  
```bash
npm run ios
```
or
```bash
npm run android
```

🎉 Boom! Your app is live!  

---

### 4. Usage 📱  
Here’s how to use the app:  

1️⃣ **Sign up**:  
- Click the `Sign Up` button.  
- Enter your email and password.  
- Check your inbox 📩, and click the verification link.  

2️⃣ **Sign in**:  
- Click the `Sign In` button.  
- Enter your email and password to log in. ✅  

---

### 5. License 📜  
This starter kit is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it however you like! 🌈  

---

### 6. Contributing 🤝  
We ❤️ contributions! Follow these steps to get involved:  

1️⃣ Fork the repository 🍴  
2️⃣ Create a new branch 🌿  
3️⃣ Create an issue in the [Project](https://github.com/users/Jaseyacey/projects/4), then use the issue name as the 🌿 name  
4️⃣ Make your changes ✍️  
5️⃣ Commit your changes 📦  
6️⃣ Push your branch 🚢  
7️⃣ Open a pull request 🚀  
8️⃣ Wait for review and merge! 🎉  

---

### 7. Acknowledgements 🙌  
Big shoutout to these awesome tools that make this starter kit possible:  
- ⚛️ [React Native](https://reactnative.dev/)  
- 🌟 [Expo](https://expo.io/)  
- 🔥 [Supabase](https://supabase.io/)  
- 🧭 [React Navigation](https://reactnavigation.org/)  
- ✉️ [Resend](https://resend.com)  

---

### Contact with original cerator 📬  
Got questions or feedback? Let’s chat! 💬  
📧 **Email**: [Jason Beedle](mailto:jbeedle@gmail.com)  

### Contact with me
📧 **Email**: [Alex Agboola](mailto:alexagboolacodes@gmail.com)  

--- 
