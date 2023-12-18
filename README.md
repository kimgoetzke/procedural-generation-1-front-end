# Procedural Generation 1 Frontend

This repository contains the frontend for
the [Procedural Generation 1](https://github.com/kimgoetzke/procedural-generation-1) project. It is a Next.js
application that uses Typescript, Shadcn, Lucide React, Tailwind CSS, and Zustand. The purpose of this project was to
improve my frontend development skills.

## How to run

First, start up the backend server. In development, the frontend expects the backend to be running on `localhost:8080`.
Instructions can be found here: [Procedural Generation 1](https://github.com/kimgoetzke/procedural-generation-1).

Then, run the development server:

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to develop

If you want to run the frontend without spinning up the backend, all you can do at this point is:

1. Navigate to `/src/app/api/play/route.ts`
2. Return the provided `testBody` instead of making API calls
3. Run the development server

This will always return the same response, regardless of the backend call made. This way, you can work on any
particular `ViewType` which you can change by editing the `viewType` (`DEFAULT`, `ENCOUNTER_SUMMARY`, `DIALOGUE`)
field of `testBody`.

## Limitations

This project is a work in progress. It has a large number of known limitations which will have to be implemented in the
future. Some of them are:

1. Playing the game requires the player to be new or to have a `webPlayer` cookie (dropped after first login). If this
   cookie is deleted, the player can no longer play the game.
2. Not authentication has been implemented. Currently, the game uses hardcoded credentials for `player1`.
3. The frontend does not handle player deaths (mostly because the backend does not handle them either).
4. When entering a dialogue with no associated actions, the player will be stuck as the backend won't return any
   actions, leaving the player with no way to continue to game. This is a backend bug.