# Description Side Bar

This Git repo contains an esty-like description side bar that lists all pertinent information about a listing on Etsy. All of the information is currently generated at random and therefore is non-correlational.

## How To Get Started With This Repo

1. Run 'npm install' in your console.
2. Once that's finished, you're free to run 'npm run build'.
3. Next, run 'npm run db-seed'.

- Note: at this point, your repo should be completely set up. The previous directions will generally only need to be run after a fresh clone of this repo.

4. Ensure Mongo is running on your computer.
  - You can verify it's running by typing 'service mongod status' in your console.
  - If it's not running, use 'service mongod start'. You might be asked to input your password.
5. Once Mongo is running, in your terminal, use 'npm start'.

You can now open 'localhost:3000' in your browser to see the description side bar live. Refresh the page to generate a new, random listing.