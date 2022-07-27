[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

# Next.js Soccer News

A next.js app to view recent football news, and player details.
Used **getServerSideProps()** for generating dynamic news pages with [SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering).
Used **getStaticProps()** and **getStaticPaths()** with _fallback_ to initiate [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) for the players database.

## API Used

Dillinger uses a number of open source projects to work properly:

- [NewsApi](https://newsapi.org) - For latest football news.
- [TheSportsDB](https://www.thesportsdb.com/) - For footballer details.

## Usage
1) Clone the project.
    ```
    git clone https://github.com/SD170/nextjs-soccer-news
    ```
2)  Install the dependencies.

    ```
    npm install
    ```
3)  Add a ".env" file to the project root directory.
    
    for `PLAYER_LIST_URL` you can create your own list at thesportsdb.com, or use mine from here ([here](https://www.thesportsdb.com/api/v1/json/2/searchloves.php?u=lolef91988@5k2u.com))
    ```
    touch .env.local
    echo NEWS_API_KEY=<you newsapi.org key> >> .env.local
    echo PLAYER_LIST_URL=<player list url> >> .env.local
    ```

4)  Build project.

    ```
    npm run build
    ```

5)  run project.

    ```
    npm start
    ```



## Tech-stack

- [Next.Js](https://nextjs.org/) - For development
- [Vercel](https://vercel.com/) - For deployment


### Thanks for checking out
